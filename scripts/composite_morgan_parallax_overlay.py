#!/usr/bin/env python3
"""
Bake Morgan_Stanley_idp6Ew8XZC_1.png onto the center of paralax_1_3.avif.

Supports 2D placement plus full 3D rotation (Euler angles) via perspective warp.

Requires: pip install pillow pillow-avif-plugin numpy

Tweak the constants below, then run from repo root:
  python scripts/composite_morgan_parallax_overlay.py
"""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image

# Register AVIF open/save (must be before opening .avif files)
from pillow_avif import AvifImagePlugin

Image.register_open(AvifImagePlugin.AvifImageFile.format, AvifImagePlugin.AvifImageFile)

# Absolute paths (edit if your checkout lives elsewhere).
BASE_PATH = Path(r"c:\Users\hjcon\website\hayden_cv\static\morgan_stanley\paralax_1_3.avif")
OVERLAY_PATH = Path(r"c:\Users\hjcon\website\hayden_cv\static\morgan_stanley\Morgan_Stanley_idp6Ew8XZC_1.png")
OUT_PATH = Path(r"c:\Users\hjcon\website\hayden_cv\static\morgan_stanley\paralax_1_3_ms.avif")

# --- adjust placement / look ---
# Euler angles in degrees (intrinsic Tait–Bryan ZYX on the overlay plane):
#   1) ROT_X_DEG — pitch around image X (axis through the center, left→right)
#   2) ROT_Y_DEG — yaw around image Y (axis through the center, top→bottom)
#   3) ROT_Z_DEG — roll around image Z (axis through the center, out of the image)
# Positive angles follow the right-hand rule on each axis (X right, Y down, Z into the screen).
ROT_X_DEG = 0.0
ROT_Y_DEG = -45.0
ROT_Z_DEG = +1.0

# Optional extra in-plane rotation (degrees) applied after the 3D warp via PIL.
# Kept for backward compatibility with older runs that only used ROTATION_DEG.
POST_WARP_ROTATION_DEG = 0.0

# Pixels added to the geometric center (negative moves left/up).
OFFSET_X = 210
OFFSET_Y = 0
# 1.0 = native overlay size; lower shrinks before 3D warp / post-rotate.
OVERLAY_SCALE = 0.41
# AVIF output quality (0–100).
AVIF_QUALITY = 95

# --- 3D perspective (pinhole) ---
# Focal length in pixels (larger → less foreshortening).
PERSPECTIVE_FOCAL = 1200.0
# Positive offset added to depth before division so corners stay in front of the camera.
PERSPECTIVE_DEPTH_OFFSET = 2000.0


def _rad(deg: float) -> float:
	return deg * (math.pi / 180.0)


def _rot_x(a: float) -> np.ndarray:
	c, s = math.cos(a), math.sin(a)
	return np.array([[1.0, 0.0, 0.0], [0.0, c, s], [0.0, -s, c]], dtype=np.float64)


def _rot_y(a: float) -> np.ndarray:
	c, s = math.cos(a), math.sin(a)
	return np.array([[c, 0.0, -s], [0.0, 1.0, 0.0], [s, 0.0, c]], dtype=np.float64)


def _rot_z(a: float) -> np.ndarray:
	c, s = math.cos(a), math.sin(a)
	return np.array([[c, s, 0.0], [-s, c, 0.0], [0.0, 0.0, 1.0]], dtype=np.float64)


def euler_zyx_matrix(rx_deg: float, ry_deg: float, rz_deg: float) -> np.ndarray:
	"""R = Rz(rz) @ Ry(ry) @ Rx(rx), matching ZYX intrinsic order."""
	rx, ry, rz = _rad(rx_deg), _rad(ry_deg), _rad(rz_deg)
	return _rot_z(rz) @ _rot_y(ry) @ _rot_x(rx)


def overlay_corners_xy(w: int, h: int) -> np.ndarray:
	"""Four corners in PIL order: TL, TR, BR, BL; z = 0; centered at origin."""
	hw, hh = w / 2.0, h / 2.0
	return np.array(
		[
			[-hw, -hh, 0.0],
			[hw, -hh, 0.0],
			[hw, hh, 0.0],
			[-hw, hh, 0.0],
		],
		dtype=np.float64,
	)


def project_to_plane(
	points_xyz: np.ndarray,
	focal: float,
	depth_offset: float,
) -> np.ndarray:
	"""Perspective: (x,y) = f * (X, Y) / (Z + depth_offset). Returns shape (N, 2)."""
	x, y, z = points_xyz[:, 0], points_xyz[:, 1], points_xyz[:, 2]
	denom = z + depth_offset
	denom = np.where(np.abs(denom) < 1e-6, 1e-6, denom)
	return np.stack((focal * x / denom, focal * y / denom), axis=1)


def homography_from_point_pairs(src: np.ndarray, dst: np.ndarray) -> np.ndarray:
	"""
	Least-squares homography H (3x3) with h33 = 1 such that dst ~ H @ src (homogeneous 2D).
	src, dst: (4, 2) float
	"""
	A = []
	for (xs, ys), (xd, yd) in zip(src, dst):
		A.append([-xs, -ys, -1, 0, 0, 0, xd * xs, xd * ys, xd])
		A.append([0, 0, 0, -xs, -ys, -1, yd * xs, yd * ys, yd])
	A = np.asarray(A, dtype=np.float64)
	_, _, vt = np.linalg.svd(A)
	h = vt[-1, :]
	H = h.reshape(3, 3)
	if abs(H[2, 2]) > 1e-12:
		H = H / H[2, 2]
	return H


def pillow_perspective_coeffs_from_inverse(inv_h: np.ndarray) -> tuple[float, ...]:
	"""
	PIL output→input: X = (a*x + b*y + c) / (g*x + h*y + 1), same for Y with d,e,f.
	So the 3x3 inverse homography (output homog → input homog) must be scaled to bottom-right 1.
	"""
	M = inv_h.astype(np.float64)
	k = M[2, 2]
	if abs(k) < 1e-12:
		k = 1e-12
	M = M / k
	a, b, c = float(M[0, 0]), float(M[0, 1]), float(M[0, 2])
	d, e, f = float(M[1, 0]), float(M[1, 1]), float(M[1, 2])
	g, h = float(M[2, 0]), float(M[2, 1])
	return (a, b, c, d, e, f, g, h)


def warp_overlay_perspective(
	overlay_rgba: Image.Image,
	rx_deg: float,
	ry_deg: float,
	rz_deg: float,
	focal: float,
	depth_offset: float,
) -> Image.Image:
	"""Apply 3D Euler rotation + perspective; returns RGBA with tight bounds and transparency."""
	w, h = overlay_rgba.size
	src_corners = np.array([[0.0, 0.0], [w, 0.0], [w, h], [0.0, h]], dtype=np.float64)
	centered = overlay_corners_xy(w, h)
	R = euler_zyx_matrix(rx_deg, ry_deg, rz_deg)
	rot = (R @ centered.T).T
	dst_flat = project_to_plane(rot, focal, depth_offset)

	# Integer canvas containing the warped quad
	xmin, ymin = np.floor(dst_flat.min(axis=0)).astype(int)
	xmax, ymax = np.ceil(dst_flat.max(axis=0)).astype(int)
	pad = 2
	xmin -= pad
	ymin -= pad
	xmax += pad
	ymax += pad
	cw = max(1, xmax - xmin)
	ch = max(1, ymax - ymin)
	dst_corners = dst_flat - np.array([xmin, ymin], dtype=np.float64)

	H = homography_from_point_pairs(src_corners, dst_corners)
	H_inv = np.linalg.inv(H)
	coeffs = pillow_perspective_coeffs_from_inverse(H_inv)

	out = overlay_rgba.transform(
		(cw, ch),
		Image.Transform.PERSPECTIVE,
		coeffs,
		Image.Resampling.BICUBIC,
		fillcolor=(0, 0, 0, 0),
	)
	return out


def main() -> None:
	base = Image.open(BASE_PATH).convert("RGBA")
	overlay = Image.open(OVERLAY_PATH).convert("RGBA")

	if OVERLAY_SCALE != 1.0:
		w = max(1, int(overlay.width * OVERLAY_SCALE))
		h = max(1, int(overlay.height * OVERLAY_SCALE))
		overlay = overlay.resize((w, h), Image.Resampling.LANCZOS)

	three_d_active = (
		abs(ROT_X_DEG) > 1e-9
		or abs(ROT_Y_DEG) > 1e-9
		or abs(ROT_Z_DEG) > 1e-9
	)

	if three_d_active:
		overlay_warped = warp_overlay_perspective(
			overlay,
			ROT_X_DEG,
			ROT_Y_DEG,
			ROT_Z_DEG,
			PERSPECTIVE_FOCAL,
			PERSPECTIVE_DEPTH_OFFSET,
		)
	else:
		overlay_warped = overlay

	if abs(POST_WARP_ROTATION_DEG) > 1e-9:
		overlay_warped = overlay_warped.rotate(
			POST_WARP_ROTATION_DEG,
			resample=Image.Resampling.BICUBIC,
			expand=True,
			fillcolor=(0, 0, 0, 0),
		)

	bw, bh = base.size
	ow, oh = overlay_warped.size
	left = (bw - ow) // 2 + OFFSET_X
	top = (bh - oh) // 2 + OFFSET_Y

	out = base.copy()
	out.alpha_composite(overlay_warped, dest=(left, top))
	out.save(OUT_PATH, quality=AVIF_QUALITY)
	print(f"Wrote {OUT_PATH} ({out.size[0]}x{out.size[1]})")


if __name__ == "__main__":
	main()
