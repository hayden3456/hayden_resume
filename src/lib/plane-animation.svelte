<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let canvasContainer;
	let scene;
	let isLoaded = false;
	let gliderPart; // Variable to store the specific glider part
	let sparPart1; // Variable to store the 3-4_spar_-_48-2 part
	let sparPart2; // Variable to store the 3-4_spar_-_48-1 part
	let sparPart3; // Variable to store the 3-4_spar-5 part
	let sparPart4; // Variable to store the 3-4_spar-4 part
	let sparWireframe1; // Variable to store the wireframe line for spar part 1
	let sparWireframe2; // Variable to store the wireframe line for spar part 2
	let sparWireframe3; // Variable to store the wireframe line for spar part 3
	let sparWireframe4; // Variable to store the wireframe line for spar part 4
	let smartBottle3; // Variable to store the smart_bottle-3 part
	let smartBottle4; // Variable to store the smart_bottle-4 part
	let smartBottle3Wireframe; // Variable to store the wireframe line for smart bottle 3
	let smartBottle4Wireframe; // Variable to store the wireframe line for smart bottle 4

	// Function to detect mobile devices
	function isMobile() {
		if (!browser) return false;
		return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}

	// Function to get z-offset for mobile devices
	function getZOffset(baseZ) {
		if (isMobile()) {
			// For mobile, bring objects closer to camera (higher z values)
			return baseZ + 10;
		}
		return baseZ;
	}

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
			await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js');
		}
		
		// Load ScrollTrigger
		if (!window.ScrollTrigger) {
			await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js');
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
					
					// Store references to wireframe lines for spar parts
					if (child.name === "Root|V2_Assem_(Glider)|3-4_spar_-_48-2|3-4_spar_-_48-2_-_Part") {
						sparWireframe1 = line;
					}
					if (child.name === "Root|V2_Assem_(Glider)|3-4_spar_-_48-1|3-4_spar_-_48-1_-_Part") {
						sparWireframe2 = line;
					}
					if (child.name === "Root|V2_Assem_(Glider)|3-4_spar-5|3-4_spar-5_-_Part") {
						sparWireframe3 = line;
					}
					if (child.name === "Root|V2_Assem_(Glider)|3-4_spar-4|3-4_spar-4_-_Part") {
						sparWireframe4 = line;
					}
					// Store references to wireframe lines for smart bottle parts
					if (child.name === "Root|V2_Assem_(Glider)|smart_bottle-3|smart_bottle-3_-_Part") {
						smartBottle3Wireframe = line;
					}
					if (child.name === "Root|V2_Assem_(Glider)|MirrorComponent1|smart_bottle-4|smart_bottle-4_-_Part") {
						smartBottle4Wireframe = line;
					}
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

		var object;

		function onModelLoaded() {
			object.traverse(function (child) {
				let mat = new window.THREE.MeshPhongMaterial({ color: 0x171511, specular: 0xD0CBC7, shininess: 5, flatShading: true });
				child.material = mat;
				
				// Find the specific glider part by name
				if (child.name === "Root|V2_Assem_(Glider)|Glider_V6-1|Loft7|Loft7_-_Part") {
					gliderPart = child;
					console.log("Found glider part:", child.name);
				}
				
				// Find the spar parts by name
				if (child.name === "Root|V2_Assem_(Glider)|3-4_spar_-_48-2|3-4_spar_-_48-2_-_Part") {
					sparPart1 = child;
					console.log("Found spar part 1:", child.name);
				}
				if (child.name === "Root|V2_Assem_(Glider)|3-4_spar_-_48-1|3-4_spar_-_48-1_-_Part") {
					sparPart2 = child;
					console.log("Found spar part 2:", child.name);
				}
				if (child.name === "Root|V2_Assem_(Glider)|3-4_spar-5|3-4_spar-5_-_Part") {
					sparPart3 = child;
					console.log("Found spar part 3:", child.name);
				}
				if (child.name === "Root|V2_Assem_(Glider)|3-4_spar-4|3-4_spar-4_-_Part") {
					sparPart4 = child;
					console.log("Found spar part 4:", child.name);
				}
				
				// Hide the Surface-Knit1 part completely
				if (child.name === "Root|V2_Assem_(Glider)|Glider_V6-1|Surface-Knit1|Surface-Knit1_-_Part") {
					child.visible = false;
					console.log("Hidden Surface-Knit1 part:", child.name);
				}
				
				// Find the smart bottle parts by name
				if (child.name === "Root|V2_Assem_(Glider)|smart_bottle-3|smart_bottle-3_-_Part") {
					smartBottle3 = child;
					console.log("Found smart bottle 3:", child.name);
				}
				if (child.name === "Root|V2_Assem_(Glider)|MirrorComponent1|smart_bottle-4|smart_bottle-4_-_Part") {
					smartBottle4 = child;
					console.log("Found smart bottle 4:", child.name);
				}
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

		window.gsap.set(plane.rotation, { x: 0.440, y: 0.390, z: -0.180});
		window.gsap.set(plane.position, { x: 0, y: 200, z: getZOffset(150) }); // Start off-screen

		// Set initial position of glider part relative to plane
		if (gliderPart) {
			// Position the glider where it should be attached to the plane
			// Adjust these values to position the glider correctly on the plane
			gliderPart.position.set(0, 0.2, -0.15); // x: center, y: slightly above, z: behind center
			gliderPart.rotation.set(-0.3, 0, 0); // Reset rotation to align with plane
		}

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
			strokeDashoffset: 0,
			scrollTrigger: {
				trigger: ".length",
				scrub: true,
				start: "top bottom",
				end: "top top"
			}
		});

		window.gsap.to('#line-length', {
			opacity: 0,
			scrollTrigger: {
				trigger: ".length",
				scrub: true,
				start: "top top",
				end: "bottom top"
			}
		});

	


		let tl = new window.gsap.timeline({
			onUpdate: () => {
				scene.render();
			},
			scrollTrigger: {
				trigger: ".content",
				scrub: true,
				start: "top bottom",
				end: "bottom bottom"
			},
			defaults: { duration: sectionDuration, ease: 'power2.inOut' }
		});

		let delay = 0;

		// Entrance animation - plane flies in from off-screen
		tl.to(plane.position, { x: -60, y: -32, z: getZOffset(50), duration: 1.5, ease: 'power2.out' }, delay);
		tl.to(plane.rotation, { x: 0.370, y: 0.490, z: -0.530, duration: 1.5, ease: 'power2.out' }, delay);
		
		delay += 1.5; // Add extra delay for entrance

		tl.to('.scroll-cta', { duration: 0.25, opacity: 0 }, delay);
        tl.to(plane.rotation, { x: tau * .25, y: 0, z: tau * 0.03, ease: 'power1.inOut' }, delay);
		tl.to(plane.position, { x: -10, ease: 'power1.in', y: 0, z: getZOffset(0) }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * .25, y: 0, z: -tau * 0.1, ease: 'power1.inOut' }, delay);
		tl.to(plane.position, { x: -40, y: 0, z: getZOffset(-60) }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * .25, y: 0, z: tau * 0.05, ease: 'power3.inOut' }, delay);
		tl.to(plane.position, { x: 40, y: 0, z: getZOffset(-60) }, delay);

		// Add glider detachment animation
		if (gliderPart) {
			// Set glider to starting position first
			tl.to(gliderPart.position, { 
				x: 0, 
				y: 0.2, 
				z: -0.15,
				duration: 0.1,
				ease: 'power2.out'
			}, delay );
			tl.to(gliderPart.rotation, { 
				x: -0.3, 
				y: 0, 
				z: 0,
				duration: 0.1,
				ease: 'power2.out'
			}, delay );
			
			// Animate glider flying off to the right and up
			tl.to(gliderPart.position, { 
				x: -3, 
				y: -1.8, 
				z: 4.85, 
				ease: 'power2.in' 
			}, delay );
			
			// Add rotation to make it look like it's flying away
			tl.to(gliderPart.rotation, { 
				x: -0.6, 
				y: -0.2, 
				z: 0.0, 
				ease: 'power2.in' 
			}, delay );
		}

		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * .2, y: 0, z: -tau * 0.1, ease: 'power3.inOut' }, delay);
		tl.to(plane.position, { x: -40, y: 0, z: getZOffset(-30) }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { x: 0, z: 0, y: tau * .25 }, delay);
		tl.to(plane.position, { x: 5, y: -10, z: getZOffset(72) }, delay);

		// Reset glider back to starting position instantly
		if (gliderPart) {
			tl.to(gliderPart.position, { 
				x: 0, 
				y: 0.2, 
				z: -0.15,
				duration: 1,
				ease: 'power2.out'
			}, delay);
			tl.to(gliderPart.rotation, { 
				x: -0.3, 
				y: 0, 
				z: 0,
				duration: 1,
				ease: 'power2.out'
			}, delay);
		}

        		// Add glider detachment animation
		if (gliderPart) {
			// Animate glider flying off to the right and up
			tl.to(gliderPart.position, { 
				x: -0.25, 
				y: -0.3, 
				z: 0.35, 
				ease: 'power2.out' 
			}, delay );
			
			// Add rotation to make it look like it's flying away
			tl.to(gliderPart.rotation, { 
				x: -1.2, 
				y: -0.8, 
				z: -0.3, 
				ease: 'power2.out' 
			}, delay );
		}
        tl.killTweensOf(gliderPart.position, delay);
        tl.killTweensOf(gliderPart.rotation, delay);

		delay += sectionDuration;

        if (gliderPart) {
			// COMMENTED OUT: This animation conflicts with the reset
			// Animate glider flying off to the right and up
			// tl.to(gliderPart.position, { 
			// 	x: -2.25, 
			// 	y: -1.3, 
			// 	z: 0.35, 
			// 	ease: 'power1.out' 
			// }, delay);
			
			// Add rotation to make it look like it's flying away
			// tl.to(gliderPart.rotation, { 
			// 	x: -1.2, 
			// 	y: -0.8, 
			// 	z: -0.3, 
			// 	ease: 'power1.out' 
			// }, delay);

		}

        		// Reset spar parts to white color at the start
		if (sparWireframe1 && sparWireframe1.material) {
			tl.call(() => {
				sparWireframe1.material.color.setHex(0xffffff);
			}, null, null, delay);
		}
		if (sparWireframe2 && sparWireframe2.material) {
			tl.call(() => {
				sparWireframe2.material.color.setHex(0xffffff);
			}, null, null, delay);
		}
		if (sparWireframe3 && sparWireframe3.material) {
			tl.call(() => {
				sparWireframe3.material.color.setHex(0xffffff);
			}, null, null, delay);
		}
		if (sparWireframe4 && sparWireframe4.material) {
			tl.call(() => {
				sparWireframe4.material.color.setHex(0xffffff);
			}, null, null, delay); 
		}

        // Reset glider to original position
        if (gliderPart) {
			tl.to(gliderPart.position, { 
				x: 0, 
				y: 0.2, 
				z: -0.15,
				duration: 0.1,
				ease: 'power2.out'
			}, delay );
			tl.to(gliderPart.rotation, { 
				x: -0.3, 
				y: 0, 
				z: 0,
				duration: 0.1,
				ease: 'power2.out'
			}, delay );
		}

		tl.to(plane.rotation, { x: tau * 0.25, y: tau * .5, z: 0, ease: 'power4.inOut' }, delay);
		tl.to(plane.position, { z: getZOffset(60), y :10, ease: 'power4.inOut' }, delay);

		// Make spar parts turn red
		if (sparWireframe1 && sparWireframe1.material) {
			tl.call(() => {
				sparWireframe1.material.color.setHex(0xff0000);
			}, null, null, delay);
		}
		if (sparWireframe2 && sparWireframe2.material) {
			tl.call(() => {
				sparWireframe2.material.color.setHex(0xff0000);
			}, null, null, delay);
		}
		if (sparWireframe3 && sparWireframe3.material) {
			tl.call(() => {
				sparWireframe3.material.color.setHex(0xff0000);
			}, null, null, delay);
		}
		if (sparWireframe4 && sparWireframe4.material) {
			tl.call(() => {
				sparWireframe4.material.color.setHex(0xff0000);
			}, null, null, delay);
		}


		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * 0.25, y: tau * .5, z: 1.7, ease: 'power4.inOut' }, delay);
		tl.to(plane.position, { z: getZOffset(60), x: 30, ease: 'power4.inOut' }, delay);

        
		// Animate smart bottle parts moving
		if (smartBottle3) {
			tl.to(smartBottle3.position, { 
				x: smartBottle3.position.x + 0, 
				y: smartBottle3.position.y -0.6 , 
				z: smartBottle3.position.z + 0,
				duration: 0.5,
				ease: 'power2.out'
			}, delay);
		}
		if (smartBottle4) {
			tl.to(smartBottle4.position, { 
				x: smartBottle4.position.x + 0, 
				y: smartBottle4.position.y - 0.6, 
				z: smartBottle4.position.z + 0,
				duration: 0.5,
				ease: 'power2.out'
			}, delay);
		}

		// Return spar parts to normal color
		if (sparWireframe1 && sparWireframe1.material) {
			tl.call(() => {
				sparWireframe1.material.color.setHex(0xffffff);
			}, null, null, delay);
		}
		if (sparWireframe2 && sparWireframe2.material) {
			tl.call(() => {
				sparWireframe2.material.color.setHex(0xffffff);
			}, null, null, delay);
		}
		if (sparWireframe3 && sparWireframe3.material) {
			tl.call(() => {
				sparWireframe3.material.color.setHex(0xffffff);
			}, null, null, delay);
		}
		if (sparWireframe4 && sparWireframe4.material) {
			tl.call(() => {
				sparWireframe4.material.color.setHex(0xffffff);
			}, null, null, delay);
		}

	
		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * .35, y: tau * .75, z: tau * 0.6, ease: 'power4.inOut' }, delay);
		tl.to(plane.position, { z: getZOffset(100), x: 20, y: 0, ease: 'power4.inOut' }, delay);

	// Return smart bottle parts to original position
		if (smartBottle3) {
			tl.to(smartBottle3.position, { 
				x: smartBottle3.position.x + 0, 
				y: smartBottle3.position.y + 0, 
				z: smartBottle3.position.z + 0,
				duration: 0.5,
				ease: 'power2.in'
			}, delay);
		}
		if (smartBottle4) {
			tl.to(smartBottle4.position, { 
				x: smartBottle4.position.x - 0, 
				y: smartBottle4.position.y + 0, 
				z: smartBottle4.position.z - 0,
				duration: 0.5,
				ease: 'power2.in'
			}, delay);
		}


		delay += sectionDuration;

		tl.to(plane.rotation, { x: tau * 0.15, y: tau * .85, z: -tau * 0, ease: 'power1.in' }, delay);
		tl.to(plane.position, { z: getZOffset(-150), x: 0, y: 0, ease: 'power1.inOut' }, delay);

		delay += sectionDuration;

		tl.to(plane.rotation, { duration: sectionDuration, x: -tau * 0.05, y: tau, z: -tau * 0.1, ease: 'none' }, delay);
		tl.to(plane.position, { duration: sectionDuration, x: 0, y: 30, z: getZOffset(320), ease: 'power1.in' }, delay);
        if (gliderPart) {
			tl.to(gliderPart.position, { 
				x: gliderPart.position.x - 0.8, 
				y: gliderPart.position.y - 1.2, 
				z: gliderPart.position.z + 0.5,
				duration: 0.5,
				ease: 'power2.out'
			}, delay);
			
			// Add rotation to make it look like it's falling away
			tl.to(gliderPart.rotation, { 
				x: gliderPart.rotation.x - 0.4, 
				y: gliderPart.rotation.y - 0.2, 
				z: gliderPart.rotation.z + 0.1,
				duration: 0.5,
				ease: 'power2.out'
			}, delay);
		}

		tl.to(scene.light.position, { duration: sectionDuration, x: 0, y: 0, z: 0 }, delay);
	}
</script>

<div class="plane-animation">

	<div class="canvas-container" bind:this={canvasContainer}></div>
	
	<div class="content">
        <div class="custom-shape-divider-top-1750914341">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
            </svg>
        </div>
		<div class="loading" class:hidden={isLoaded} style="font-size: 2.2rem;">✈️ Loading plane...</div>
		<div class="trigger"></div>
		<div class="section" style="height: 50px; padding: 70px;">
			<div class="divider"></div>
		</div>
		<div class="section">
			<h3><b>American Association of Aeronautics and Astronautics RC Competition.</b></h3>
			<h3><b>Overview</b></h3>
			<p><b>We built a 6ft rc plane and glider from the ground up for the AIAA competion. It consisted of 3 main missions:</b></p>
		</div>
		
		<div class="section right">
			<h2>1- Flying laps under time pressure</h2>
		</div>
		
		<div class="ground-container">
			<div class="parallax ground"></div>
			<div class="section right optimize-section">
				<h2>2- Optimize Speed and Weight Capacity</h2>
				<p>Ability to carry extra payloads</p>
			</div>

			<div class="section">
				<h2>3- Deploy an Autonomous Glider</h2>
				<p>The glider must land at a specific target</p>
			</div>
			
			<div class="section right">
				<h2>Bonus 4- Passing all inspection tests </h2>
				<p></p>
			</div>
			<div class="parallax clouds"></div>
		</div>
		
		<div class="blueprint">
			<svg width="100%" height="100%" viewBox="0 0 100 100">
				<line id="line-length" x1="10" y1="95" x2="90" y2="95" stroke-width="0.5" class="drawing-line"></line>
			</svg>
			<div class="section dark">
				<h2>The facts and figures.</h2>
				<p>Lets get into the nitty gritty...</p>
			</div>
			<div class="section dark length">
				<h2>Glider.</h2>
				<p>Momentary switch triggered on release.</p>
                <p>GPS enabled, Ardupilot Autopilot, Sub 250 Grams</p>
			</div>
			<div class="section dark wingspan">
				<h2>Wings.</h2>
				<p>Carbon fiber spars and balsa ribs provide strength and lightness.</p>
			</div>
			<div class="section dark phalange">
				<h2>Removable Payload</h2>
				<p>To simulate removable fuel tanks.</p>
			</div>
			<div class="section dark">
				<h2>All Missions Accomplished</h2>
				<p>A lot of failing and learning along the way.</p>
			</div>
		</div>
		<div class="sunset">
			<div class="section"></div>
			<div class="section end">
				<h3>Please feel free to reach out with any questions you have with about the project.</h3>
				<!-- I'll keep the rest of the projects mentioned here brief, but please don't hesitate to reach out and ask. I love to talk about all my adventures. -->
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
		z-index: 30;
	}
    :global(.optimize-section) {
		z-index: 50 !important;
        position: relative
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
		font-family: "Inter", sans-serif;
		background-color: var(--color-background);
		font-weight: 400;
		font-size: var(--font-size-normal);
		overflow-x: hidden;
	}

	.canvas-container :global(canvas) {
		position: fixed;
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
	
	.content .section.optimize-section {
		z-index: 50 !important;
        position: relative
	}
	
	.content .section.optimize-section h2,
	.content .section.optimize-section p {
		z-index: 51 !important;
        position: relative
	}

    .content .custom-shape-divider-top-1750914341 {
    position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
        }

        .content .custom-shape-divider-top-1750914341 svg {
            position: relative;
            display: block;
            width: calc(125% + 1.3px);
            height: 135px;
        }

        .content .custom-shape-divider-top-1750914341 .shape-fill {
            fill: #1E293B;
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
		position: absolute;
		top: -20vh;
		left: 50%;
		transform: translateX(-50%);
		font-size: var(--font-size-normal);
		color: #666;
		z-index: 10;
		pointer-events: none;
		animation: planeLoadingPath 3s ease-out forwards;
	}
	
	.loading.hidden {
		opacity: 0;
		pointer-events: none;
		animation-play-state: paused;
	}

	.drawing-line {
		stroke-dasharray: 80;
		stroke-dashoffset: 80;
		transition: stroke-dashoffset 0.5s ease;
	}

	@keyframes planeLoadingPath {
		0% {
			top: -20vh;
			left: 45%;
			opacity: 0.7;
		}
		25% {
			top: 30vh;
			left: 35%;
			opacity: 1;
		}
		50% {
			top: 50vh;
			left: 30%;
			opacity: 1;
		}
		75% {
			top: 70vh;
			left: 35%;
			opacity: 1;
		}
		100% {
			top: 100vh;
			left: 45%;
			opacity: 0.7;
		}
	}
	
</style>
