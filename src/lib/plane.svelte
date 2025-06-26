<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvasContainer;
	let scene;
	let renderer;
	let camera;
	let plane;
	let isLoaded = false;
	
	// Rotation values for real-time adjustment
	let rotationX = -0.4;
	let rotationY = 0.5;
	let rotationZ = -0.6;

	onMount(async () => {
		if (!browser) return;
		await loadDependencies();
		initScene();
		loadModel();
	});

	async function loadDependencies() {
		// Load Three.js
		if (!window.THREE) {
			await loadScript('https://unpkg.com/three@0.117.1/build/three.min.js');
		}
		
		// Load Three.js OBJ Loader
		if (!window.THREE?.OBJLoader) {
			await loadScript('https://unpkg.com/three@0.117.1/examples/js/loaders/OBJLoader.js');
		}
	}

	function loadScript(src) {
		return new Promise((resolve, reject) => {
			const script = document.createElement('script');
			script.src = src;
			script.onload = resolve;
			script.onerror = reject;
			document.head.appendChild(script);
		});
	}

	function initScene() {
		// Create renderer
		renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		canvasContainer.appendChild(renderer.domElement);

		// Create scene
		scene = new window.THREE.Scene();

		// Create camera
		camera = new window.THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 2000);
		camera.position.set(0, 0, 180);
		camera.lookAt(0, 5, 0);

		// Add lights
		const light = new window.THREE.PointLight(0xffffff, 0.75);
		light.position.set(70, -20, 150);
		scene.add(light);

		const ambientLight = new window.THREE.AmbientLight(0xffffff, 1.5);
		scene.add(ambientLight);

		// Handle resize
		window.addEventListener('resize', onResize);
	}

	function onResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function loadModel() {
		const loader = new window.THREE.OBJLoader();
		loader.load('/aiaa/pretty_render_no_glider.obj', (object) => {
			// Apply material to all meshes
			object.traverse((child) => {
				if (child.isMesh) {
					child.material = new window.THREE.MeshPhongMaterial({ 
						color: 0x171511, 
						specular: 0xD0CBC7, 
						shininess: 5, 
						flatShading: true 
					});
				}
			});

			// Create plane group
			plane = new window.THREE.Group();
			plane.add(object);
			plane.scale.set(30, 30, 30);
			plane.position.set(-80, -32, 20);
			scene.add(plane);

			isLoaded = true;
			animate();
		});
	}

	function animate() {
		requestAnimationFrame(animate);
		if (renderer && scene && camera) {
			renderer.render(scene, camera);
		}
	}

	// Update rotation when values change
	$: if (plane) {
		plane.rotation.x = rotationX;
		plane.rotation.y = rotationY;
		plane.rotation.z = rotationZ;
	}

	function copyValues() {
		const values = `x: ${rotationX.toFixed(3)}, y: ${rotationY.toFixed(3)}, z: ${rotationZ.toFixed(3)}`;
		navigator.clipboard.writeText(values);
		alert('Rotation values copied to clipboard!');
	}

	function resetRotation() {
		rotationX = 0;
		rotationY = 0;
		rotationZ = 0;
	}
</script>

<div class="test-container">
	<div class="canvas-container" bind:this={canvasContainer}></div>
	
	<div class="controls">
		<h2>Plane Rotation Test</h2>
		<p>Adjust the sliders to find the perfect rotation values</p>
		
		<div class="control-group">
			<label for="rotationX">Rotation X: {rotationX.toFixed(3)}</label>
			<input 
				type="range" 
				id="rotationX" 
				bind:value={rotationX} 
				min="-3.14" 
				max="3.14" 
				step="0.01"
			/>
		</div>
		
		<div class="control-group">
			<label for="rotationY">Rotation Y: {rotationY.toFixed(3)}</label>
			<input 
				type="range" 
				id="rotationY" 
				bind:value={rotationY} 
				min="-3.14" 
				max="3.14" 
				step="0.01"
			/>
		</div>
		
		<div class="control-group">
			<label for="rotationZ">Rotation Z: {rotationZ.toFixed(3)}</label>
			<input 
				type="range" 
				id="rotationZ" 
				bind:value={rotationZ} 
				min="-3.14" 
				max="3.14" 
				step="0.01"
			/>
		</div>
		
		<div class="buttons">
			<button on:click={copyValues}>Copy Values</button>
			<button on:click={resetRotation}>Reset</button>
		</div>
		
		<div class="current-values">
			<h3>Current Values:</h3>
			<code>
				x: {rotationX.toFixed(3)}, y: {rotationY.toFixed(3)}, z: {rotationZ.toFixed(3)}
			</code>
		</div>
	</div>
</div>

<style>
	.test-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #D0CBC7;
	}

	.canvas-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.canvas-container :global(canvas) {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.controls {
		position: absolute;
		top: 20px;
		right: 20px;
		background: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 20px;
		border-radius: 10px;
		min-width: 300px;
		z-index: 1000;
	}

	.controls h2 {
		margin: 0 0 10px 0;
		font-size: 18px;
	}

	.controls p {
		margin: 0 0 20px 0;
		font-size: 14px;
		opacity: 0.8;
	}

	.control-group {
		margin-bottom: 15px;
	}

	.control-group label {
		display: block;
		margin-bottom: 5px;
		font-size: 14px;
		font-weight: bold;
	}

	.control-group input[type="range"] {
		width: 100%;
		height: 6px;
		border-radius: 3px;
		background: #333;
		outline: none;
		-webkit-appearance: none;
	}

	.control-group input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #ff0000;
		cursor: pointer;
	}

	.control-group input[type="range"]::-moz-range-thumb {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #ff0000;
		cursor: pointer;
		border: none;
	}

	.buttons {
		display: flex;
		gap: 10px;
		margin-bottom: 15px;
	}

	.buttons button {
		padding: 8px 16px;
		background: #ff0000;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 14px;
	}

	.buttons button:hover {
		background: #cc0000;
	}

	.current-values {
		border-top: 1px solid #444;
		padding-top: 15px;
	}

	.current-values h3 {
		margin: 0 0 10px 0;
		font-size: 14px;
	}

	.current-values code {
		display: block;
		background: #333;
		padding: 10px;
		border-radius: 5px;
		font-family: monospace;
		font-size: 12px;
		word-break: break-all;
	}
</style> 