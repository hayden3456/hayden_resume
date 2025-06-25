<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvasContainer;
	let scene;
	let isLoaded = false;

	onMount(async () => {
		if (!browser) return;

		// Load external dependencies
		await loadDependencies();
		
		// Initialize the animation
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
		
		// Load GSAP
		if (!window.gsap) {
			await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/gsap.min.js');
		}
		
		// Load ScrollTrigger
		if (!window.ScrollTrigger) {
			await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollTrigger.min.js');
		}
		
		// Load DrawSVG Plugin
		if (!window.DrawSVGPlugin) {
			await loadScript('https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js');
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

	class Scene {
		constructor(model) {
			this.views = [{ bottom: 0, height: 1 }, { bottom: 0, height: 0 }];
			this.renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			this.renderer.shadowMap.enabled = true;
			this.renderer.shadowMap.type = window.THREE.PCFSoftShadowMap;
			this.renderer.setPixelRatio(window.devicePixelRatio);
			
			canvasContainer.appendChild(this.renderer.domElement);

			// scene
			this.scene = new window.THREE.Scene();

			for (var ii = 0; ii < this.views.length; ++ii) {
				var view = this.views[ii];
				var camera = new window.THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 2000);
				camera.position.fromArray([0, 0, 180]);
				camera.layers.disableAll();
				camera.layers.enable(ii);
				view.camera = camera;
				camera.lookAt(new window.THREE.Vector3(0, 5, 0));
			}

			// light
			this.light = new window.THREE.PointLight(0xffffff, 0.75);
			this.light.position.z = 150;
			this.light.position.x = 70;
			this.light.position.y = -20;
			this.scene.add(this.light);

			this.softLight = new window.THREE.AmbientLight(0xffffff, 1.5);
			this.scene.add(this.softLight);

			// group
			this.onResize();
			window.addEventListener('resize', this.onResize, false);

			this.modelGroup = new window.THREE.Group();
			model.layers.set(0);
			model.traverse(function(child) {
				if (child.isMesh) {
					var edges = new window.THREE.EdgesGeometry(child.geometry);
					let line = new window.THREE.LineSegments(edges);
					line.material.depthTest = false;
					line.material.opacity = 0.8;
					line.material.transparent = true;
					line.material.color.setHex(0xffffff);
					line.layers.set(1);
					child.add(line);
				}
			});
			this.modelGroup.add(model);
			this.modelGroup.scale.set(30, 30, 30);
			this.scene.add(this.modelGroup);
		}

		render = () => {
			for (var ii = 0; ii < this.views.length; ++ii) {
				var view = this.views[ii];
				var camera = view.camera;

				var bottom = Math.floor(this.h * view.bottom);
				var height = Math.floor(this.h * view.height);

				this.renderer.setViewport(0, 0, this.w, this.h);
				this.renderer.setScissor(0, bottom, this.w, height);
				this.renderer.setScissorTest(true);

				camera.aspect = this.w / this.h;
				this.renderer.render(this.scene, camera);
			}
		}

		onResize = () => {
			this.w = window.innerWidth;
			this.h = window.innerHeight;

			for (var ii = 0; ii < this.views.length; ++ii) {
				var view = this.views[ii];
				var camera = view.camera;
				camera.aspect = this.w / this.h;
				let camZ = (screen.width - this.w * 1) / 3;
				camera.position.z = camZ < 130 ? 130 : camZ;
				camera.updateProjectionMatrix();
			}

			this.renderer.setSize(this.w, this.h);
			this.render();
		}
	}

	function loadModel() {
		window.gsap.registerPlugin(window.ScrollTrigger);
		window.gsap.registerPlugin(window.DrawSVGPlugin);
		window.gsap.set('#line-length', { drawSVG: 0 });
		window.gsap.set('#line-wingspan', { drawSVG: 0 });
		window.gsap.set('#circle-phalange', { drawSVG: 0 });

		var object;

		function onModelLoaded() {
			object.traverse(function (child) {
				let mat = new window.THREE.MeshPhongMaterial({ color: 0x171511, specular: 0xD0CBC7, shininess: 5, flatShading: true });
				child.material = mat;
			});

			setupAnimation(object);
			isLoaded = true;
		}

		var manager = new window.THREE.LoadingManager(onModelLoaded);
		manager.onProgress = (item, loaded, total) => console.log(item, loaded, total);

		var loader = new window.THREE.OBJLoader(manager);
		loader.load('/aiaa/pretty_render_no_glider.obj', function (obj) {
			object = obj;
		});
	}

	function setupAnimation(model) {
		scene = new Scene(model);
		let plane = scene.modelGroup;

		window.gsap.fromTo('canvas', { x: "50%", autoAlpha: 0 }, { duration: 1, x: "0%", autoAlpha: 1 });
		window.gsap.to('.loading', { autoAlpha: 0 });
		window.gsap.to('.scroll-cta', { opacity: 1 });
		window.gsap.set('svg', { autoAlpha: 1 });

		let tau = Math.PI * 2;

		window.gsap.set(plane.rotation, { y: tau * -.25 });
		window.gsap.set(plane.position, { x: 80, y: -32, z: 20 });

		scene.render();

		var sectionDuration = 1;
		window.gsap.fromTo(scene.views[1],
			{ height: 1, bottom: 0 },
			{
				height: 0, bottom: 1,
				ease: 'none',
				scrollTrigger: {
					trigger: ".blueprint",
					scrub: true,
					start: "bottom bottom",
					end: "bottom top"
				}
			}
		);

		window.gsap.fromTo(scene.views[1],
			{ height: 0, bottom: 0 },
			{
				height: 1, bottom: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: ".blueprint",
					scrub: true,
					start: "top bottom",
					end: "top top"
				}
			}
		);

		window.gsap.to('.ground', {
			y: "30%",
			scrollTrigger: {
				trigger: ".ground-container",
				scrub: true,
				start: "top bottom",
				end: "bottom top"
			}
		});

		window.gsap.from('.clouds', {
			y: "25%",
			scrollTrigger: {
				trigger: ".ground-container",
				scrub: true,
				start: "top bottom",
				end: "bottom top"
			}
		});

		window.gsap.to('#line-length', {
			drawSVG: 100,
			scrollTrigger: {
				trigger: ".length",
				scrub: true,
				start: "top bottom",
				end: "top top"
			}
		});

		window.gsap.to('#line-wingspan', {
			drawSVG: 100,
			scrollTrigger: {
				trigger: ".wingspan",
				scrub: true,
				start: "top 25%",
				end: "bottom 50%"
			}
		});

		window.gsap.to('#circle-phalange', {
			drawSVG: 100,
			scrollTrigger: {
				trigger: ".phalange",
				scrub: true,
				start: "top 50%",
				end: "bottom 100%"
			}
		});

		window.gsap.to('#line-length', {
			opacity: 0,
			drawSVG: 0,
			scrollTrigger: {
				trigger: ".length",
				scrub: true,
				start: "top top",
				end: "bottom top"
			}
		});

		window.gsap.to('#line-wingspan', {
			opacity: 0,
			drawSVG: 0,
			scrollTrigger: {
				trigger: ".wingspan",
				scrub: true,
				start: "top top",
				end: "bottom top"
			}
		});

		window.gsap.to('#circle-phalange', {
			opacity: 0,
			drawSVG: 0,
			scrollTrigger: {
				trigger: ".phalange",
				scrub: true,
				start: "top top",
				end: "bottom top"
			}
		});

		let tl = new window.gsap.timeline({
			onUpdate: scene.render,
			scrollTrigger: {
				trigger: ".content",
				scrub: true,
				start: "top top",
				end: "bottom bottom"
			},
			defaults: { duration: sectionDuration, ease: 'power2.inOut' }
		});

		let delay = 0;

		tl.to('.scroll-cta', { duration: 0.25, opacity: 0 }, delay);
		tl.to(plane.position, { x: -10, ease: 'power1.in' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * .25, y: 0, z: -tau * 0.05, ease: 'power1.inOut' }, delay);
		tl.to(plane.position, { x: -40, y: 0, z: -60, ease: 'power1.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * .25, y: 0, z: tau * 0.05, ease: 'power3.inOut' }, delay);
		tl.to(plane.position, { x: 40, y: 0, z: -60, ease: 'power2.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * .2, y: 0, z: -tau * 0.1, ease: 'power3.inOut' }, delay);
		tl.to(plane.position, { x: -40, y: 0, z: -30, ease: 'power2.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: 0, z: 0, y: tau * .25 }, delay);
		tl.to(plane.position, { x: 0, y: -10, z: 50 }, delay);

		delay += sectionDuration;
		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * 0.25, y: tau * .5, z: 0, ease: 'power4.inOut' }, delay);
		tl.to(plane.position, { z: 30, ease: 'power4.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * 0.25, y: tau * .5, z: 0, ease: 'power4.inOut' }, delay);
		tl.to(plane.position, { z: 60, x: 30, ease: 'power4.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * 0.35, y: tau * .75, z: tau * 0.6, ease: 'power4.inOut' }, delay);
		tl.to(plane.position, { z: 100, x: 20, y: 0, ease: 'power4.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * 0.15, y: tau * .85, z: -tau * 0, ease: 'power1.in' }, delay);
		tl.to(plane.position, { z: -150, x: 0, y: 0, ease: 'power1.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { duration: sectionDuration, x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: 'none' }, delay);
		tl.to(plane.position, { duration: sectionDuration, x: 0, y: 30, z: 320, ease: 'power1.in' }, delay);

		tl.to(scene.light.position, { duration: sectionDuration, x: 0, y: 0, z: 0 }, delay);
	}
</script>

<div class="plane-animation">
	<div class="canvas-container" bind:this={canvasContainer}></div>
	
	<div class="content">
		<div class="loading" class:hidden={isLoaded}>Loading</div>
		<div class="trigger"></div>
		<div class="section">
			<h1>Airplanes.</h1>
			<h3>The beginners guide.</h3>
			<p>You've probably forgotten what these are.</p>
			<div class="scroll-cta">Scroll</div>
		</div>
		
		<div class="section right">
			<h2>They're kinda like buses...</h2>
		</div>
		
		<div class="ground-container">
			<div class="parallax ground"></div>
			<div class="section right">
				<h2>..except they leave the ground.</h2>
				<p>Saaay what!?.</p>
			</div>

			<div class="section">
				<h2>They fly through the sky.</h2>
				<p>For realsies!</p>
			</div>
			
			<div class="section right">
				<h2>Defying all known physical laws.</h2>
				<p>It's actual magic!</p>
			</div>
			<div class="parallax clouds"></div>
		</div>
		
		<div class="blueprint">
			<svg width="100%" height="100%" viewBox="0 0 100 100">
				<line id="line-length" x1="10" y1="80" x2="90" y2="80" stroke-width="0.5"></line>
				<path id="line-wingspan" d="M10 50, L40 35, M60 35 L90 50" stroke-width="0.5"></path>
				<circle id="circle-phalange" cx="60" cy="60" r="15" fill="transparent" stroke-width="0.5"></circle>
			</svg>
			<div class="section dark">
				<h2>The facts and figures.</h2>
				<p>Lets get into the nitty gritty...</p>
			</div>
			<div class="section dark length">
				<h2>Length.</h2>
				<p>Long.</p>
			</div>
			<div class="section dark wingspan">
				<h2>Wing Span.</h2>
				<p>I dunno, longer than a cat probably.</p>
			</div>
			<div class="section dark phalange">
				<h2>Left Phalange</h2>
				<p>Missing</p>
			</div>
			<div class="section dark">
				<h2>Engines</h2>
				<p>Turbine funtime</p>
			</div>
		</div>
		<div class="sunset">
			<div class="section"></div>
			<div class="section end">
				<h2>Fin.</h2>
				<ul class="credits">
					<li>Plane model by <a href="https://poly.google.com/view/8ciDd9k8wha" target="_blank">Google</a></li>
					<li>Animated using <a href="https://greensock.com/scrolltrigger/" target="_blank">GSAP ScrollTrigger</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");
	
	.plane-animation {
		position: relative;
		width: 100%;
		height: 100%;
	}

	:global(.plane-animation svg) {
		z-index: 100;
	}

	:root {
		--padding: 10vmin;
		--color-background: #D0CBC7;
		--font-size-large: 8vw;
		--font-size-medium: 4vw;
		--font-size-normal: 2vw;
	}
	
	@media only screen and (min-width: 800px) {
		:root {
			--font-size-large: 64px;
			--font-size-medium: 32px;
			--font-size-normal: 16px;
		}
	}
	
	@media only screen and (max-width: 500px) {
		:root {
			--font-size-large: 40px;
			--font-size-medium: 20px;
			--font-size-normal: 14px;
		}
	}

	a {
		color: white;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	li {
		margin-top: 10px;
	}

	.plane-animation {
		margin: 0;
		min-height: 100%;
		min-width: 100%;
		font-family: "Libre Baskerville", serif;
		background-color: var(--color-background);
		font-weight: 400;
		font-size: var(--font-size-normal);
		overflow-x: hidden;
	}

	.canvas-container :global(canvas) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		z-index: 2;
		pointer-events: none;
		visibility: hidden;
		opacity: 0;
	}

	.solid {
		-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
		clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
	}

	.wireframe {
		-webkit-clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
		clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
	}

	.content {
		position: relative;
		z-index: 1;
	}
	
	.content .trigger {
		position: absolute;
		top: 0;
		height: 100%;
	}
	
	.content .section {
		position: relative;
		padding: var(--padding);
		--pad2: calc(var(--padding) * 2);
		width: calc(100vw - var(--pad2));
		height: calc(100vh - var(--pad2));
		margin: 0 auto;
		z-index: 2;
	}
	
	.content .section.dark {
		color: white;
		background-color: black;
	}
	
	.content .section.right {
		text-align: right;
	}
	
	.content .blueprint {
		position: relative;
		background-color: #131C2A;
		background-image: linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
		background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
		background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
		background-attachment: fixed;
	}
	
	.content .blueprint svg {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		stroke: white;
		pointer-events: none;
		visibility: hidden;
	}
	
	.content .blueprint .dark {
		background-color: transparent;
	}
	
	.content .ground-container {
		position: relative;
		overflow: hidden;
	}
	
	.content .ground-container .parallax {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: -100px;
		background-repeat: no-repeat;
		background-position: top center;
		background-size: cover;
		transform-origin: top center;
	}
	
	.content .ground-container .ground {
		z-index: -1;
		background-image: url("https://assets.codepen.io/557388/background-reduced.jpg");
	}
	
	.content .ground-container .clouds {
		z-index: 2;
		background-image: url("https://assets.codepen.io/557388/clouds.png");
	}
	
	.content .scroll-cta, .content .credits {
		position: absolute;
		bottom: var(--padding);
	}
	
	.content .scroll-cta {
		font-size: var(--font-size-medium);
		opacity: 0;
	}
	
	.content .sunset {
		background: url("https://assets.codepen.io/557388/sunset-reduced.jpg") no-repeat top center;
		background-size: cover;
		transform-origin: top center;
	}
	
	.content h1, .content h2 {
		font-size: var(--font-size-large);
		margin: 0vmin 0 2vmin 0;
		font-weight: 700;
		display: inline;
	}
	
	.content h3 {
		font-size: var(--font-size-medium);
		font-weight: 400;
		margin: 0;
	}
	
	.content .end h2 {
		margin-bottom: 50vh;
	}
	
	.content .loading {
		position: fixed;
		width: 100vw;
		height: 100vh;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--font-size-medium);
		transition: opacity 0.3s ease;
	}
	
	.loading.hidden {
		opacity: 0;
		pointer-events: none;
	}
</style>
