<script>
    import { onMount } from 'svelte';
    import RcViewer from '$lib/rc-viewer.svelte';

    onMount(() => {
      const gsapScript = document.createElement('script');
      gsapScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js';
      gsapScript.onload = () => {
        const scrollTriggerScript = document.createElement('script');
        scrollTriggerScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.js';
        scrollTriggerScript.onload = () => {
          const gsap = window.gsap;
          gsap.registerPlugin(window.ScrollTrigger);

          // Progress bar animation
          gsap.to('progress', {
            value: 100,
            ease: 'none',
            scrollTrigger: { scrub: 0.3 }
          });
        };
        document.body.appendChild(scrollTriggerScript);
      };
      document.body.appendChild(gsapScript);
    });
  </script>
  
  <svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </svelte:head>
  
  <style>
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
      background: linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd, #dbeafe, #eff6ff);
      background-attachment: fixed;
    }
  
    progress::-moz-progress-bar {
      background: linear-gradient(to right, #1e40af, #3b82f6, #60a5fa, #93c5fd, #dbeafe, #eff6ff);
      background-attachment: fixed;
    }
  
    body {
      background: linear-gradient(to bottom, #f0f9ff, #e0f2fe, #bae6fd, #7dd3fc, #1e293b, #0f172a);
    }
  
    .container {
      background: linear-gradient(to bottom, #f0f9ff, #e0f2fe, #bae6fd, #7dd3fc, #1e293b, #0f172a);
      position: relative;
    }
  
    section {
      min-height: 100vh;
      padding: 5vw;
      display: flex;
      align-items: center;
      box-sizing: border-box;
    }

    .hero-section {
      text-align: center;
      justify-content: center;
      flex-direction: column;
    }

    .qualification-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .qualification-section-reverse {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .qualification-section-reverse .text-content {
      order: 2;
      padding-left: 2rem;
      padding-right: 0;
    }

    .qualification-section-reverse .image-placeholder {
      order: 1;
    }

    .text-content {
      padding-right: 2rem;
    }

    .image-placeholder {
      background: rgba(255, 255, 255, 0.1);
      border: 2px dashed rgba(255, 255, 255, 0.3);
      border-radius: 12px;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.2rem;
      backdrop-filter: blur(10px);
    }
  
    h1 {
      font-size: max(20px, min(100px, 10vw));
      font-family: "JetBrains Mono", "Courier New", monospace;
      line-height: 1.1;
      color: #1e40af;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
      font-weight: 700;
    }

    h2 {
      font-size: max(16px, min(60px, 6vw));
      font-family: "JetBrains Mono", "Courier New", monospace;
      line-height: 1.2;
      color: #1e40af;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
  
    p {
      margin: 0;
      font-size: max(8px, min(20px, 2vw));
      font-family: "Inter", "Arial", sans-serif;
      line-height: 1.6;
      color: #1e293b;
      text-shadow: none;
      font-weight: 400;
      letter-spacing: 0.3px;
    }

    .hero-description {
      font-size: max(6px, min(16px, 1.5vw));
      max-width: 800px;
      margin: 0 auto;
      font-family: "Inter", "Arial", sans-serif;
      text-shadow: none;
      font-weight: 400;
      letter-spacing: 0.3px;
    }

    .personal-text {
      font-family: "Inter", "Arial", sans-serif;
      font-size: max(9px, min(22px, 2.2vw));
      line-height: 1.4;
      color: #1e40af;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
      margin-top: 1rem;
      font-weight: 500;
      font-style: italic;
    }
  
    /* Light sections text */
    section:nth-child(1) h1,
    section:nth-child(1) p,
    section:nth-child(2) h2,
    section:nth-child(2) p,
    section:nth-child(3) h2,
    section:nth-child(3) p,
    section:nth-child(4) h2,
    section:nth-child(4) p,
    section:nth-child(5) h2,
    section:nth-child(5) p,
    section:nth-child(6) h2,
    section:nth-child(6) p,
    section:nth-child(7) h2,
    section:nth-child(7) p,
    section:nth-child(8) h2,
    section:nth-child(8) p,
    section:nth-child(9) h2,
    section:nth-child(9) p,
    section:nth-child(10) h2,
    section:nth-child(10) p {
      color: #1e293b;
    }
  
    /* Dark sections text */
    section:nth-child(11) h2,
    section:nth-child(11) p,
    section:nth-child(12) h2,
    section:nth-child(12) p,
    section:nth-child(13) h2,
    section:nth-child(13) p {
      color: #f1f5f9;
    }

    @media (max-width: 768px) {
      section {
        padding: 2rem 1rem;
        min-height: auto;
      }

      .qualification-section,
      .qualification-section-reverse {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      .text-content {
        padding-right: 0;
        padding-left: 0;
        order: 1;
      }
      
      .image-placeholder {
        height: 250px;
        order: 2;
      }

      h1 {
        font-size: 2.5rem !important;
        line-height: 1.1;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 2rem !important;
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem !important;
        line-height: 1.6;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      .hero-description {
        font-size: 1rem !important;
        line-height: 1.6;
        padding: 0 1rem;
      }

      .personal-text {
        font-size: 1.1rem !important;
        line-height: 1.5;
        margin-top: 1rem;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      .job-description-section {
        padding: 1rem;
      }

      .job-card {
        padding: 1.5rem;
        margin: 0;
        border-radius: 10px;
      }

      /* Fix video and iframe responsiveness */
      video, iframe {
        width: 100% !important;
        height: auto !important;
        max-height: 300px;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      /* Progress bar mobile fix */
      progress {
        height: 10px;
      }
    }

    /* Additional mobile styles for very small screens */
    @media (max-width: 480px) {
      section {
        padding: 1.5rem 0.75rem;
      }

      h1 {
        font-size: 2rem !important;
      }

      h2 {
        font-size: 1.7rem !important;
      }

      .personal-text {
        font-size: 1rem !important;
      }

      .job-card {
        padding: 1rem;
      }
    }

    .job-description-section {
      padding: 2rem 5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: auto;
    }

    .job-card {
      background: linear-gradient(135deg, #dbeafe 0%, #93c5fd 30%, #3b82f6 70%, #1e40af 100%);
      border: 3px solid #1e40af;
      border-radius: 20px;
      padding: 2.5rem;
      max-width: 900px;
      width: 100%;
      box-shadow: 
        0 15px 35px rgba(30, 64, 175, 0.3),
        inset 0 2px 0 rgba(255, 255, 255, 0.3),
        inset 0 -2px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      font-family: "Inter", "Arial", sans-serif;
      color: #1e293b;
      line-height: 1.6;
    }

    .job-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
      pointer-events: none;
      border-radius: 17px;
    }

    .job-header {
      text-align: center;
      margin-bottom: 2rem;
      border-bottom: 3px solid #1e40af;
      padding-bottom: 1rem;
    }

    .job-header h2 {
      font-family: "JetBrains Mono", "Courier New", monospace;
      font-size: 2.5rem;
      color: #1e40af;
      margin: 0 0 0.5rem 0;
      text-shadow: 2px 2px 4px rgba(30, 64, 175, 0.2);
      font-weight: 700;
    }

    .job-title {
      font-family: "JetBrains Mono", "Courier New", monospace;
      font-size: 1.8rem;
      font-weight: 600;
      color: #1e293b;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .job-overview {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.4);
      border-radius: 12px;
      border-left: 5px solid #1e40af;
    }

    .job-overview p {
      font-size: 1.1rem;
      margin: 0;
      font-family: "Inter", "Arial", sans-serif;
      color: #1e293b;
      line-height: 1.6;
    }

    .job-section {
      margin-bottom: 2rem;
    }

    .job-section h3 {
      font-family: "JetBrains Mono", "Courier New", monospace;
      font-size: 1.5rem;
      color: #1e40af;
      margin: 0 0 1rem 0;
      text-shadow: 1px 1px 2px rgba(30, 64, 175, 0.2);
      border-bottom: 2px solid #3b82f6;
      padding-bottom: 0.5rem;
      font-weight: 600;
    }

    .job-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .job-section li {
      position: relative;
      padding: 0.5rem 0 0.5rem 1.5rem;
      font-size: 1rem;
      font-family: "Inter", "Arial", sans-serif;
      color: #1e293b;
      line-height: 1.6;
    }

    .job-section li::before {
      content: '▶';
      position: absolute;
      left: 0;
      color: #1e40af;
      font-weight: bold;
      font-size: 0.8rem;
    }

    .job-section p {
      font-size: 1rem;
      margin: 0.5rem 0;
      font-family: "Inter", "Arial", sans-serif;
      color: #1e293b;
      line-height: 1.6;
    }

    .job-note {
      font-size: 0.9rem !important;
      font-style: italic;
      color: #475569 !important;
      margin-top: 1rem !important;
      padding: 0.75rem;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      border-left: 3px solid #3b82f6;
    }
  </style>
  
  <progress max="100" value="0"></progress>
  
  <div class="min-h-screen bg-gradient-to-b from-sky-50 via-sky-100 via-sky-200 via-sky-300 to-slate-800">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1>Drone Software Engineer</h1>
      <p class="hero-description">
        Welcome to my resume showcasing how my experience fits with the Drone Software Engineer position. I'm excited to bring my FAA certification, embedded systems expertise, and passion for aerial technology to your innovative team!
      </p>
    </section>

    <!-- Job Description Card -->
    <section class="job-description-section">
      <div class="job-card">
        <div class="job-header">
          <h2>Job Description</h2>
          <div class="job-title">Drone Software Engineer</div>
        </div>
        
        <div class="job-overview">
          <p>We are looking for a Drone Software Engineer to join a small, innovative team focused on developing next-generation applications for advanced aerial systems. This position involves end-to-end ownership of software development for drone platforms, including system integration, sensor fusion, autonomy, and mission planning. You'll work in an agile environment where your ideas and contributions directly influence the success of the technology.</p>
        </div>

        <div class="job-section">
          <h3>Key Responsibilities</h3>
          <ul>
            <li>Develop and implement flight control, navigation, and autonomy software</li>
            <li>Design algorithms for multi-drone collaboration and localization</li>
            <li>Integrate sensors such as cameras and LiDAR into onboard systems</li>
            <li>Build user interfaces and tools for pilot and operator interaction</li>
            <li>Test, validate, and iterate on solutions in real-world scenarios</li>
          </ul>
        </div>

        <div class="job-section">
          <h3>Required Qualifications</h3>
          <ul>
            <li>U.S. citizenship or permanent residency</li>
            <li>Strong skills in C++ and Python</li>
            <li>Experience with robotics/drone frameworks (e.g., ROS2, MAVLink, PX4)</li>
            <li>Background in integrating sensors (cameras, LiDAR, etc.)</li>
            <li>Hands-on experience operating drones, either manually or through custom software</li>
          </ul>
        </div>

        <div class="job-section">
          <h3>Preferred Qualifications</h3>
          <ul>
            <li>FAA Part 107 certification</li>
            <li>Experience with image processing algorithms</li>
            <li>Familiarity with version control (Git)</li>
          </ul>
        </div>
      </div>
    </section>



    <!-- C++ and Python Skills -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Strong C++ & Python Skills</h2>
        <p>"Strong skills in C++ and Python are required for this position."</p>
        <p class="personal-text">I've built full stack IoT systems from scratch involving data ingress from onboard firmware, to containerized python scripts, to web frontends. What is shown here is a draft system layout of a IoT health monitor I made.</p>
      </div>
      <div class="image-placeholder">
        <iframe 
          width="768" 
          height="432" 
          src="https://miro.com/app/live-embed/uXjVKl9ynqA=/?embedMode=view_only_without_ui&moveToViewport=-6318,-3527,13565,6773&embedId=708113086286" 
          frameborder="0" 
          scrolling="no" 
          allow="fullscreen; clipboard-read; clipboard-write" 
          allowfullscreen
          title="Documentation and Process Flow Diagram"
        ></iframe>
      </div>
    </section>

    <!-- Robotics & Drone Frameworks -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Robotics & Drone Frameworks</h2>
        <p>"Experience with robotics/drone frameworks (e.g., ROS2, MAVLink, PX4) is required."</p>
        <p class="personal-text">The project shown here is an autonomous glider I built deployed using ArduPilot to autonomously pperform reform for a collegiate competition. The mothership is a 6 feet wingspan RC plane me and my team made from the ground up for the competition.</p>
      </div>
      <div>
        <video 
          src="/video/glider.mp4" 
          class="rounded-2xl w-full h-full object-cover"
          autoplay 
          muted 
          loop
          playsinline
          style="width: 100%; height: 400px;"
        ></video>
      </div>
    </section>

    <!-- Sensor Integration -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Sensor Integration Experience</h2>
        <p>"Background in integrating sensors (cameras, LiDAR, etc.) is required."</p>
        <p class="personal-text">Having started an small engineering firm I've made plenty of IoT projects that required sensor integration wiether it be computer vision, monitoring magnetic fields or recording gas readouts. Here is a picture of the team working in our space. </p>
      </div>
      <div class="image-placeholder">
        <img src="/images/pg_working.jpg" alt="Sensor Integration Work" class="w-full h-full object-cover rounded-lg" />
      </div>
    </section>

    <!-- Hands-on Drone Experience -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Hands-on Drone Operations</h2>
        <p>"Hands-on experience operating drones, either manually or through custom software is required."</p>
        <p class="personal-text">I've been building, crashing, and rebuilding drones since middle school. I've built drones for racing, delivery, and cinematography. I've got a deep understanding of the challenges they bring in real-world scenarios.</p>
      </div>
      <div class="">
        <RcViewer/>
    </div>
    </section>

    <!-- FAA Part 107 Certification -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>FAA Part 107 Certified</h2>
        <p>"FAA Part 107 certification is preferred for this role."</p>
        <p class="personal-text">I've been a licensed UAV pilot since high school, operating commercially for real estate and construction. This is a smaple video if you would like to watch :)
        </p>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_Bv3J1Hi4Hg?si=13LlolLr1PJK0lFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>

    <!-- Image Processing -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Image Processing & Computer Vision</h2>
        <p>"Experience with image processing algorithms is preferred."</p>
        <p class="personal-text">I've done image processing from human detection, to stool classification, to this robot for a class project. I've felt the problems with working in a world of imperfect data.</p>
      </div>
      <div class="">
        <img src="/images/turn.gif" alt="Technical Development" class="w-full object-cover rounded-lg" />
      </div>
    </section>

    <!-- Version Control & Development Practices -->
    <section class="qualification-section-reverse">
        <div class="text-content">
          <h2 style="color: white;">Version Control & Development Practices</h2>
          <p style="color: white;">"Familiarity with version control (Git) is preferred."</p>
          <p class="personal-text" style="color: white;">I'm proficient with Git. During my internship at CACI, I worked on CI/CD pipelines for satellite systems, understanding the importance of automated testing in mission-critical applications.</p>
        </div>
        <div class="">
          <img 
            src="/images/smiling_with_board.jpg" 
            alt="Development Work" 
            class="object-cover rounded-lg"
            style="height: 750px; width: 100%;"
          />
        </div>
      </section>
    <!-- Conclusion -->
    <section class="hero-section">
      <h2 style="color: white;">I would love to work on this tech for the rest of my life!</h2>
      <p class="hero-description" style="color: white;">
        Thank you for considering my application! I'm excited to bring everything I've learned to your drone software team. 
      </p>
      <div style="margin-top: 2rem; text-align: center;">
        <a href="/" class="back-button" style="
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #1e40af;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 500;
          transition: background-color 0.2s ease;">
          ← Back to Main Page
        </a>
      </div>
    </section>
  </div>
