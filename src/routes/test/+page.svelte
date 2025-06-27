<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let linesvg;
  let motionSVG;
  let tractor;
  let motionPath;

  onMount(async () => {
    // Import GSAP plugins dynamically
    const { MotionPathPlugin } = await import('gsap/MotionPathPlugin');
    const { ScrollTrigger } = await import('gsap/ScrollTrigger');
    
    // Register GSAP plugins
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    // Helper function for path easing
    function pathEase(path, config = {}) {
      let axis = config.axis || "y";
      let precision = config.precision || 1;
      let rawPath = MotionPathPlugin.cacheRawPathMeasurements(
        MotionPathPlugin.getRawPath(gsap.utils.toArray(path)[0]), 
        Math.round(precision * 12)
      );
      let useX = axis === "x";
      let start = rawPath[0][useX ? 0 : 1];
      let end = rawPath[rawPath.length - 1][rawPath[rawPath.length-1].length - (useX ? 2 : 1)];
      let range = end - start;
      let l = Math.round(precision * 200);
      let inc = 1 / l;
      let positions = [0];
      let a = [0];
      let minIndex = 0;
      let smooth = [0];
      let minChange = (1 / l) * 0.6;
      let smoothRange = config.smooth === true ? 7 : Math.round(config.smooth) || 0;
      let fullSmoothRange = smoothRange * 2;

      let getClosest = p => {
        while (positions[minIndex] <= p && minIndex++ < l) { }
        a.push((p - positions[minIndex-1]) / (positions[minIndex] - positions[minIndex - 1]) * inc + minIndex * inc);
        smoothRange && a.length > smoothRange && (a[a.length - 1] - a[a.length - 2] < minChange) && smooth.push(a.length - smoothRange);
      };

      let i = 1;
      for (; i < l; i++) {
        positions[i] = (MotionPathPlugin.getPositionOnPath(rawPath, i / l)[axis] - start) / range;
      }
      positions[l] = 1;
      for (i = 0; i < l; i++) {
        getClosest(i / l);
      }
      a.push(1);

      if (smoothRange) {
        smooth.push(l-fullSmoothRange+1);
        smooth.forEach(i => {
          let start = a[i];
          let j = Math.min(i + fullSmoothRange, l);
          let inc = (a[j] - start) / (j - i);
          let c = 1;
          i++;
          for (; i < j; i++) {
            a[i] = start + inc * c++;
          }
        });
      }
      l = a.length-1;
      return p => {
        let i = p * l;
        let s = a[i | 0];
        return i ? s + (a[Math.ceil(i)] - s) * (i % 1) : 0;
      };
    }

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
  });
</script>

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
  <style type="text/css">
    .st0{fill:none;stroke:red;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
  </style>
  <path 
    bind:this={motionPath}
    id="motionPath" 
    class="st0" 
    d="M10,383.31 L835,383.31 L835,640.548 L10,640.548 L10,924.268 L835,924.268 L835,1206.204 L10,1206.204 L10,1500 L835,1500 L835,1800 L10,1800 L10,2100 L835,2100 L835,2400 L10,2400 L10,2700 L835,2700 L835,3000 L10,3000" 
  />
  <g bind:this={motionSVG} id="motionSVG">
    <g bind:this={tractor} id="tractor">
      <circle cx="25" cy="25" r="20" fill="red" />
    </g>
  </g>
</svg>

<style>
  svg {
    width: 100%;
    height: auto;
    max-width: 869px;
  }
</style>
