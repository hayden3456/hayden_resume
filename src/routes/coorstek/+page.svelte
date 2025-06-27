<script>
    import { onMount } from 'svelte';

    let linesvg;
    let motionSVG;
    let tractor;
    let motionPath;

    onMount(() => {
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
      gsapScript.onload = () => {
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.js';
        scrollTriggerScript.onload = () => {
          const motionPathScript = document.createElement('script');
          motionPathScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/MotionPathPlugin.js';
          motionPathScript.onload = () => {
            const gsap = window.gsap;
            gsap.registerPlugin(window.ScrollTrigger, window.MotionPathPlugin);

            // Initial setup
            gsap.set(linesvg, { opacity: 1 });
            gsap.set(motionSVG, { scale: 0.7, autoAlpha: 1 });
            gsap.set(tractor, { transformOrigin: "50% 50%" });

            let rotateTo = gsap.quickTo(tractor, "rotation");
            let prevDirection = 0;

            // Main animation with controlled speed
            gsap.to(motionSVG, {
              scrollTrigger: {
                trigger: motionPath,
                start: "top center",
                end: () => "+=" + motionPath.getBoundingClientRect().height,
                scrub: 1.5, // Increased scrub value for slower movement
                markers: true,
                onUpdate: self => {
                  if (prevDirection !== self.direction) {
                    rotateTo(self.direction === 1 ? 0 : -180);
                    prevDirection = self.direction;
                  }
                }
              },
              ease: "none", // Use linear easing for consistent speed
              immediateRender: true,
              motionPath: {
                path: motionPath,
                align: motionPath,
                alignOrigin: [0.5, 0.5],
                autoRotate: 90,
                useRadians: false,
              }
            });

            // Progress bar animation
            gsap.to('progress', {
              value: 100,
              ease: 'none',
              scrollTrigger: { scrub: 0.3 }
            });
          };
          document.body.appendChild(motionPathScript);
        };
        document.body.appendChild(scrollTriggerScript);
      };
      document.body.appendChild(gsapScript);
    });
  </script>
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
  
    progress {
      position: fixed;
      top: 0;
      left: 0;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 15px;
      border: none;
      background: transparent;
      z-index: 1000;
    }
  
    progress::-webkit-progress-bar {
      background: transparent;
    }
  
    progress::-webkit-progress-value {
      background: linear-gradient(to right, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #f1f5f9);
      background-attachment: fixed;
    }
  
    progress::-moz-progress-bar {
      background: linear-gradient(to right, #475569, #64748b, #94a3b8, #cbd5e1, #e2e8f0, #f1f5f9);
      background-attachment: fixed;
    }
  
    body {
      background: linear-gradient(to bottom, #fcedd1, #fae4c9, #f8d8c1, #f7c6b1, #1e293b, #334155);
    }
  
    .container {
      background: linear-gradient(to bottom, #fcedd1, #fae4c9, #f8d8c1, #f7c6b1, #1e293b, #334155);
      position: relative;
    }
  
    section {
      min-height: 100vh;
      padding: 10vw 5vh;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
  
    p {
      margin: 0;
      font-size: 24px;
      font-size: max(18px, min(90px, 10vw));
      font-family: "Permanent Marker", cursive;
      line-height: 1.2;
      color: #334155;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    /* Darker text for sections with light backgrounds */
    section:nth-child(1) p,
    section:nth-child(2) p,
    section:nth-child(3) p {
      color: #475569;
    }
  
    /* Lighter text for sections with dark backgrounds */
    section:nth-child(4) p {
      color: #e2e8f0;
    }

    /* SVG positioning */
    svg {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: auto;
      max-width: 869px;
      z-index: 100;
      pointer-events: none;
    }

    /* Make the ball more visible */
    #tractor circle {
      filter: drop-shadow(0 0 10px rgba(71, 85, 105, 0.8));
    }
  </style>
  
  <progress max="100" value="0"></progress>
  
  <div class="container">
    <section>
      <p>Scroll to add some color to your life!🎨</p>
    </section>
    <section>
      <p>You're doing great, keep going😘</p>
    </section>
    <section>
      <p>Keep scrolling just a little more 🏃‍♀️</p>
    </section>
    <section>
      <p>Here you go!<br>Did you like it?🌈</p>
    </section>
  </div>
  
  <svg 
    bind:this={linesvg}
    id="linesvg" 
    opacity="0" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" 
    y="0px" 
    viewBox="0 0 869 3002" 
    xml:space="preserve"
  >
    <defs>
      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#475569;stop-opacity:1" />
        <stop offset="20%" style="stop-color:#64748b;stop-opacity:1" />
        <stop offset="40%" style="stop-color:#94a3b8;stop-opacity:1" />
        <stop offset="60%" style="stop-color:#cbd5e1;stop-opacity:1" />
        <stop offset="80%" style="stop-color:#e2e8f0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#f1f5f9;stop-opacity:1" />
      </linearGradient>
    </defs>
    <style type="text/css">
      .st0{fill:none;stroke:url(#pathGradient);stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    </style>
    <path 
      bind:this={motionPath}
      id="motionPath" 
      class="st0" 
      d="M10,383.31 L835,383.31 L835,640.548 L10,640.548 L10,924.268 L835,924.268 L835,1206.204 L10,1206.204 L10,1500 L835,1500 L835,1800 L10,1800 L10,2100 L835,2100 L835,2400 L10,2400 L10,2700 L835,2700 L835,3000 L10,3000" 
    />
    <g bind:this={motionSVG} id="motionSVG">
      <g bind:this={tractor} id="tractor">
        <circle cx="25" cy="25" r="20" fill="url(#pathGradient)" />
      </g>
    </g>
  </svg>
  