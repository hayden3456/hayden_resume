<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvasContainer;
	let scene;
	let isLoaded = false;
	let aircraftModel;

	// Function to detect mobile devices
	function isMobile() {
		if (!browser) return false;
		return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}

	onMount(async () => {
		if (!browser) return;

		// Load external dependencies
		await loadDependencies();
		
		// Initialize the viewer
		loadModel();
	});

	async function loadDependencies() {
		// Load Three.js
		if (!window.THREE) {
			await loadScript('https://unpkg.com/three@0.117.1/build/three.min.js');
		}
		
		// Load Three.js GLTF Loader
		if (!window.THREE?.GLTFLoader) {
			await loadScript('https://unpkg.com/three@0.117.1/examples/js/loaders/GLTFLoader.js');
		}
		
		// Load OrbitControls
		if (!window.THREE?.OrbitControls) {
			await loadScript('https://unpkg.com/three@0.117.1/examples/js/controls/OrbitControls.js');
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

	class AircraftViewer {
		constructor() {
			this.renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setSize(600, 600);
			this.renderer.shadowMap.enabled = true;
			this.renderer.shadowMap.type = window.THREE.PCFSoftShadowMap;
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setClearColor(0x000000, 0);
			
			canvasContainer.appendChild(this.renderer.domElement);

			// Scene
			this.scene = new window.THREE.Scene();

			// Camera - adjusted for better view
			this.camera = new window.THREE.PerspectiveCamera(45, 1, 0.1, 1000);
			this.camera.position.set(5, 2, 5);
			this.camera.lookAt(0, 0, 0);

			// Lights
			this.light = new window.THREE.PointLight(0xffffff, 0.75);
			this.light.position.set(5, 5, 5);
			this.scene.add(this.light);

			this.softLight = new window.THREE.AmbientLight(0xffffff, 1.5);
			this.scene.add(this.softLight);

			// Controls
			this.controls = new window.THREE.OrbitControls(this.camera, this.renderer.domElement);
			this.controls.enableDamping = true;
			this.controls.dampingFactor = 0.05;
			this.controls.autoRotate = true;
			this.controls.autoRotateSpeed = 1.0;
			this.controls.enableZoom = false;
			this.controls.enablePan = false;
			this.controls.autoRotateAxis = 'Z'; // Only rotate around Z axis

			// Animation loop
			this.animate();
		}

		animate = () => {
			requestAnimationFrame(this.animate);
			this.controls.update();
			this.renderer.render(this.scene, this.camera);
		}

		addModel(model) {
			// Scale and position the model
			model.scale.set(0.0003, 0.0003, 0.0003);
			model.position.set(0, 0, 0);
			model.rotation.set(55, 0, 80); // Set initial rotation to zero
			
			
			// Apply material to all meshes
			model.traverse((child) => {
				if (child.isMesh) {
					child.material = new window.THREE.MeshPhongMaterial({ 
						color: 0x171511, 
						specular: 0xD0CBC7, 
						shininess: 5, 
						flatShading: true 
					});
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});

			this.scene.add(model);
			aircraftModel = model;
		}

		onResize = () => {
			const width = 600;
			const height = 600;
			
			this.camera.aspect = width / height;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(width, height);
		}
	}

	function loadModel() {
		var manager = new window.THREE.LoadingManager(() => {
			console.log('Model loaded successfully');
			isLoaded = true;
		});
		
		manager.onProgress = (item, loaded, total) => console.log(item, loaded, total);

		var loader = new window.THREE.GLTFLoader(manager);
		loader.load('/plane/1_nomad_2_full_assy-SOLID_01 v1.glb', function (gltf) {
			scene = new AircraftViewer();
			scene.addModel(gltf.scene);
		}, undefined, function (error) {
			console.error('Error loading model:', error);
		});
	}
</script>

<div class="aircraft-viewer">
	<div class="canvas-container" bind:this={canvasContainer}></div>
	{#if !isLoaded}
		<div class="loading">Loading...</div>
	{/if}
</div>

<style>
	.aircraft-viewer {
		position: relative;
		width: 600px;
		height: 600px;
		border-radius: 8px;
		overflow: hidden;
	}

	.canvas-container {
		width: 100%;
		height: 100%;
	}

	.canvas-container :global(canvas) {
		width: 100% !important;
		height: 100% !important;
		border-radius: 8px;
	}

	.loading {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 16px;
		z-index: 10;
	}

	@media (max-width: 1024px) {
		.aircraft-viewer {
			width: 500px;
			height: 500px;
		}
	}

	@media (max-width: 768px) {
		.aircraft-viewer {
			width: 400px;
			height: 400px;
		}
	}

	@media (max-width: 640px) {
		.aircraft-viewer {
			width: 300px;
			height: 300px;
		}
	}
</style> 