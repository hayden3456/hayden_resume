<script lang="ts">

  import {
    fly,
  } from 'svelte/transition';
  import Carousel from "$lib/Carousel.svelte"
  
    import { onMount } from 'svelte';
    import { activateOnScroll } from '$lib/util';
    let ModelViewerComponent;
  
  
    onMount(async () => {
      if (typeof window !== 'undefined') {
        await import('@google/model-viewer');
        ModelViewerComponent = true;
      }
    });
  
    onMount(() => {
    // Function to handle parallax effect for an element
    function applyParallax(e, elem) {
      const _w = window.innerWidth / 2;
      const _h = window.innerHeight / 2;
      const _mouseX = e.clientX;
      const _mouseY = e.clientY;
      const _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
      const _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
      const _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
      const x = `${_depth3}, ${_depth2}, ${_depth1}`;
      elem.style.backgroundPosition = x;
    }
  
    // Get both parallax elements
    const parallaxElem1 = document.querySelector("#parallax");
    const parallaxElem2 = document.querySelector("#panda");
    const parallaxElem3 = document.querySelector("#pipe");
  
    // Add event listener for mousemove
    function handleParallax(e) {
      if (parallaxElem1) {
        applyParallax(e, parallaxElem1);
      }
      if (parallaxElem2) {
        applyParallax(e, parallaxElem2);
      }
      if (parallaxElem3) {
        applyParallax(e, parallaxElem3);
      }
    }
  
    document.addEventListener("mousemove", handleParallax);
  
    return () => {
      document.removeEventListener("mousemove", handleParallax);
    };
  });
  
  
  </script>
  
  <div
    class="left-0 -mt-2 w-full overflow-hidden border-t-8 border-slate-700 bg-slate-800 pb-12 pt-24 md:py-24"
  >
    <div class="relative mx-auto max-w-7xl px-4 md:px-6">
      <div
        class="parallax absolute
        -top-24 right-48 z-0 -mx-96 h-full w-full bg-[url('/images/keyboard.webp')] bg-contain bg-no-repeat opacity-50 bg-blend-normal drop-shadow [--parallax-speed:5] sm:right-24 sm:bg-auto md:-right-[10vw] lg:opacity-100"
      ></div>
      <div>
      <a id="projects">
          <h2
          class="relative z-10 mx-auto font-['Roboto_Mono'] text-xl leading-none tracking-wide text-[#fce4b8]"
        >
          <span class="text-white/50"></span>Projects
          <span class="cursor -ml-2 mb-20 font-['Roboto_Mono'] text-lg text-white/50">
            &#x2590;
          </span>
        </h2>
      </a>
    </div>
      <p
        class="relative z-20 mb-24 text-pretty pr-24 text-2xl font-medium leading-tight tracking-tight text-slate-300 drop-shadow-lg md:text-3xl lg:w-1/2"
      >
        The projects I've built with more information on request. 
      </p>
      <div
        class="relative mx-auto space-y-12 overflow-hidden via-90% pb-4 sm:pt-8 sm:before:absolute sm:before:inset-0 sm:before:left-[1px] sm:before:h-full sm:before:w-[1px] sm:before:-translate-x-px sm:before:bg-gradient-to-b sm:before:from-white/25 sm:before:via-white/25 sm:before:to-transparent text-slate-300"
      >
      
      <div transition:fly="{{ x: 400, delay: 5, duration: 1000 }}" class="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
        <div id="parallax" class = "text-center"></div>
        <div>
            <h2 class="text-5xl font-bold mb-4">Gut Health Monitor</h2>
            <p>Started a company that gave dietary feedback from the on toilet sensor. <br> <br>
              From user feedback, we changed the form factor several times
              with the shown version being an early design. 
              <br><br>
              I had to wear many hats on the project. From the computer to the pitch deck I did consumer outreach, 
              pitching, science validation, full stack development, and ML. 
              </p>
        </div>
    </div>
  
    
  
  
  <div transition:fly="{{ x: -400, delay: 5, duration: 1000 }}" class="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
    <div>
      <h2 class="text-5xl font-bold mb-4">Broking Aircraft Sales</h2>
      <p>Brokored for an old VTFF (Vertical Takeoff, Forward Flight) 
        aircraft design to be sold to OEM aircraft manufacturers. 
        Got the deal down the line as far as getting in front of the DoD Innovation Unit. 
        <br><br>
        Had to prepare the old files and gather the designs in a cohesive story told to potential buyers. 
        For more information visit: 
      </p>
      <a class = "text-blue-300" href="https://www.youtube.com/watch?v=TN_yvkcoihA">https://www.youtube.com/watch?v=TN_yvkcoihA</a>
    </div>
    {#if ModelViewerComponent}
    <model-viewer
      class="model"
      id="reveal"
      loading="eager"
      camera-controls
      touch-action="pan-y"
      auto-rotate
      poster="plane/poster.webp"
      tone-mapping="aces"
      src="plane/1_nomad_2_full_assy-SOLID_01 v1.glb"
      shadow-intensity="1"
      alt="A 3D model of a shishkebab"
      camera-target="-100.9m -1e-11m -1446m" 
      camera-orbit="326.4deg 165.5deg 33100m" 
      field-of-view="30deg">
    </model-viewer>
  {/if}
  
  </div>

  <div transition:fly="{{ x: 400, delay: 5, duration: 1000 }}" class="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
    <div id="pipe" class = "text-center"></div>
    <div>
        <h2 class="text-5xl font-bold mb-4">Pipline Integrity Device</h2>
        <p>Lead design iteration and testing of an MVP device to retrieve integrity monitoring equipment.<br> <br>
          With my co-owner we got the device in the field with Chevron which led to securing $200k in seed funding.</p>
    </div>
</div>

  <div transition:fly="{{ x: 400, delay: 5, duration: 1000 }}" class="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
    <div>
        <h2 class="text-5xl font-bold mb-4">Baby Monitor</h2>
        <p>Me and our team created a device that detected when a baby's diaper needed changeing and would notify the parents. The IoT device strapped to the side of a crib.<br><br>
        While never making out of the protype phase it was my first crash cource into combing disiplines from biology to web dev to hardware.</p>
    </div>
    <div id="panda" class = "text-center"></div>
</div>

<div transition:fly="{{ x: 400, delay: 5, duration: 1000 }}" class="flex flex-col sm:flex-row items-center sm:space-x-8 space-y-4 sm:space-y-0">
  <div>
      <h2 class="text-5xl font-bold mb-4">Custom Shirts</h2>
      <p>In the effort to get my engineering firm off the ground, we created custom shirts to become cashflow positive. 
        <br><br>
        While nothing techinical, I learned what building a brand ment to people. </p>
  </div>
<div class = "carousel">
  <Carousel/>
</div>
</div>

  </div>
  </div>
  </div>
  
  <style lang="postcss">
    @media screen(lg) {
      :global(.milestone.active) {
        transform: translateX(50px);
        transition:
          transform 0.2s ease-out,
          filter 0.2s ease-in,
          opacity 0.2s ease-in;
        opacity: 1;
      }
  
      :global(.milestone:not(.active)) {
        transform: translateX(0);
        transition:
          transform 0.5s ease-out,
          filter 0.5s ease-in,
          opacity 0.5s ease-in;
        filter: saturate(0%);
        opacity: 0.35;
      }
    }
  
  .cursor {
    margin-left: 0.5rem;
    animation: blink 1s step-end infinite;
  }
    @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  /* .carousel{
    height: 700px;
  } */
  
  #parallax {
    position: relative;
    width: 100%;
    height: 100vh;
    /* background-color: white;  */
    background-image: url('/images/temp.png'), url('/images/logo.svg');
    background-repeat: no-repeat;
    background-position: top;
    background-position: 50% 50%;
    
  }
  
  #panda {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('/images/panda1.png'), url('/images/panda2.png');
    background-repeat: no-repeat, no-repeat; /* Ensure both images don't repeat */
    background-position: 50% 50%, 50% 50%; /* Center both images */
    background-size: 50% auto, cover; /* Make panda1 smaller and panda2 fill the container */
    transform: scale(0.8);
  }
  
  #pipe {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('/images/pipeline.png'), url('/images/pig_pat.png');
    background-repeat: no-repeat, no-repeat; /* Ensure both images don't repeat */
    background-position: 50% 50%, 50% 50%; /* Center both images */
    background-size: 50% auto, cover; /* Make panda1 smaller and panda2 fill the container */
    transform: scale(0.7);
  }
  
  
  .model {
    width: 100%; /* Use full width of container */
    max-width: 800px; /* Maximum width to prevent overflow */
    height: 600px; /* Adjust height for proportion */
    margin: auto; /* Center the model */
    display: block; /* Ensure proper layout */
  }
  
  </style>
          
  
                  