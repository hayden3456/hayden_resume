<script>
    import { onMount } from 'svelte';
    import PlaneAnimation from '$lib/plane-animation.svelte';

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
    /* Set Inter as the default font for all text */
    body,
    .container,
    section,
    .text-content,
    .image-placeholder,
    .job-card,
    .job-header,
    .job-title,
    .job-overview,
    .job-section,
    .job-section h3,
    .job-section ul,
    .job-section li,
    .job-section p,
    .personal-text,
    h1, h2, h3, h4, h5, h6 {
      font-family: "Inter", sans-serif !important;
    }

    /* Keep the robotic look for these: */
    .hero-description,
    code, pre {
      font-family: "Courier New", monospace !important;
    }

    /* Remove or override previous font-family settings */
    h1, h2, h3, h4, h5, h6 {
      font-family: "Inter", sans-serif !important;
    }
    .job-title,
    .job-overview p,
    .job-section li,
    .job-section p {
      font-family: "Inter", sans-serif !important;
    }
    .personal-text {
      font-family: "Inter", sans-serif !important;
    }

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
      font-family: "Permanent Marker", cursive;
      line-height: 1.1;
      color: #334155;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    h2 {
      font-size: max(16px, min(60px, 6vw));
      font-family: "Permanent Marker", cursive;
      line-height: 1.2;
      color: #334155;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 1.5rem;
    }
  
    p {
      margin: 0;
      font-size: max(8px, min(20px, 2vw));
      font-family: "Courier New", monospace;
      line-height: 1.4;
      color: #334155;
      text-shadow: none;
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    .hero-description {
      font-size: max(6px, min(16px, 1.5vw));
      max-width: 800px;
      margin: 0 auto;
      font-family: "Courier New", monospace;
      text-shadow: none;
      font-weight: 300;
      letter-spacing: 0.5px;
    }

    .personal-text {
      font-family: "Permanent Marker", cursive;
      font-size: max(9px, min(26px, 2.5vw));
      line-height: 1.2;
      color: #334155;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin-top: 1rem;
    }

    .qualification-badge {
      display: inline-block;
      background: #8b4513;
      color: #fff;
      font-size: 0.85rem;
      font-weight: bold;
      border-radius: 6px;
      padding: 0.2em 0.7em;
      margin-bottom: 0.5em;
      margin-right: 0.5em;
      letter-spacing: 0.5px;
      vertical-align: middle;
      box-shadow: 1px 1px 4px rgba(139, 69, 19, 0.15);
    }
  
    /* Darker text for sections with light backgrounds */
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
    section:nth-child(10) p,
    section:nth-child(11) h2,
    section:nth-child(11) p,
    section:nth-child(12) h2,
    section:nth-child(12) p,
    section:nth-child(13) h2,
    section:nth-child(13) p {
      color: #475569;
    }
  
    /* Lighter text for sections with dark backgrounds */
    section:nth-child(14) h2,
    section:nth-child(14) p {
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
    #ball circle {
      filter: drop-shadow(0 0 10px rgba(71, 85, 105, 0.8));
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
        line-height: 1.5;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      .hero-description {
        font-size: 1rem !important;
        line-height: 1.5;
        padding: 0 1rem;
      }

      .personal-text {
        font-size: 1.1rem !important;
        line-height: 1.4;
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

      .job-header h2 {
        font-size: 2rem;
      }

      .job-title {
        font-size: 1.4rem;
        letter-spacing: 1px;
        word-wrap: break-word;
      }

      .job-overview p {
        font-size: 1rem;
        line-height: 1.5;
      }

      .job-section h3 {
        font-size: 1.3rem;
        line-height: 1.3;
      }

      .job-section li {
        font-size: 0.95rem;
        padding: 0.4rem 0 0.4rem 1.2rem;
        line-height: 1.4;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      .job-section p {
        font-size: 0.95rem;
        line-height: 1.4;
      }

      .job-note {
        font-size: 0.85rem !important;
        line-height: 1.4;
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

      .job-header h2 {
        font-size: 1.7rem;
      }

      .job-title {
        font-size: 1.2rem;
      }
    }

    #board {
    position: relative;
    width: 100%;
    height: 100vh;
    background-image: url('/images/board.png'), url('/images/board_design.png');
    background-repeat: no-repeat, no-repeat; /* Ensure both images don't repeat */
    background-position: 50% 50%, 50% 50%; /* Center both images */
    background-size: 80% auto, cover; /* Make panda1 smaller and panda2 fill the container */
    transform: scale(0.7);
  }
  

    .job-description-section {
      padding: 2rem 5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: auto;
    }

    .job-card {
      background: linear-gradient(135deg, #f5f5dc 0%, #f0e68c 50%, #daa520 100%);
      border: 2px solid #8b4513;
      border-radius: 15px;
      padding: 2.5rem;
      max-width: 900px;
      width: 100%;
      box-shadow: 
        0 10px 30px rgba(139, 69, 19, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.4),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
      position: relative;
      font-family: "Times New Roman", serif;
      color: #2f2f2f;
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
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%);
      pointer-events: none;
      border-radius: 13px;
    }

    .job-header {
      text-align: center;
      margin-bottom: 2rem;
      border-bottom: 2px solid #8b4513;
      padding-bottom: 1rem;
    }

    .job-header h2 {
      font-family: "Permanent Marker", cursive;
      font-size: 2.5rem;
      color: #8b4513;
      margin: 0 0 0.5rem 0;
      text-shadow: 2px 2px 4px rgba(139, 69, 19, 0.2);
    }

    .job-title {
      font-family: "Times New Roman", serif;
      font-size: 1.8rem;
      font-weight: bold;
      color: #2f2f2f;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .job-overview {
      margin-bottom: 2rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 8px;
      border-left: 4px solid #8b4513;
    }

    .job-overview p {
      font-size: 1.1rem;
      margin: 0;
      font-family: "Times New Roman", serif;
      color: #2f2f2f;
    }

    .job-section {
      margin-bottom: 2rem;
    }

    .job-section h3 {
      font-family: "Permanent Marker", cursive;
      font-size: 1.5rem;
      color: #8b4513;
      margin: 0 0 1rem 0;
      text-shadow: 1px 1px 2px rgba(139, 69, 19, 0.2);
      border-bottom: 1px solid #daa520;
      padding-bottom: 0.5rem;
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
      font-family: "Times New Roman", serif;
      color: #2f2f2f;
    }

    .job-section li::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #8b4513;
      font-weight: bold;
      font-size: 1.2rem;
    }

    .job-section p {
      font-size: 1rem;
      margin: 0.5rem 0;
      font-family: "Times New Roman", serif;
      color: #2f2f2f;
    }

    .job-note {
      font-size: 0.9rem !important;
      font-style: italic;
      color: #666 !important;
      margin-top: 1rem !important;
      padding: 0.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }

    .personal-text {
      font-family: "Permanent Marker", cursive;
      font-size: max(9px, min(26px, 2.5vw));
      line-height: 1.2;
      color: #334155;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      margin-top: 1rem;
    }
  </style>
  
<progress max="100" value="0"></progress>

<div class="min-h-screen bg-gradient-to-b from-[#fcedd1] via-[#fae4c9] via-[#f8d8c1] via-[#f7c6b1] to-slate-800">
  <!-- Hero Section -->
  <section class="hero-section">
    <h1>Aviation Systems Test Engineer 1</h1>
    <p class="hero-description">
      Welcome! This page highlights how my background and skills align with the Aviation Systems Test Engineer 1 position (Req #16238) in Olathe, KS. Scroll down to see how I meet and exceed the requirements for this exciting role in aviation systems testing.
    </p>
  </section>

  <!-- Job Description Card -->
  <section class="job-description-section">
    <div class="job-card">
      <div class="job-header">
        <h2>Job Description</h2>
        <div class="job-title">Aviation Systems Test Engineer 1</div>
      </div>
      <div class="job-overview">
        <p>We are seeking a full-time Systems Test Engineer 1 in our Olathe, KS location. In this role, you will be responsible for supporting successful conception, development, and/or application of sophisticated avionics systems by providing system testing support for basic aviation OEM programs with mature requirements.</p>
      </div>
      <div class="job-section">
        <h3>Essential Functions</h3>
        <ul>
          <li>Provides system testing support for one or more OEM programs according to system test processes</li>
          <li>Performs system regression testing for software loads according to system test processes</li>
          <li>Provides clear documentation of testing completed, including observations of issues observed during testing</li>
          <li>Troubleshoots basic integration bench setup issues and issues reported by simulation companies and clearly documents required fixes</li>
          <li>Coordinates issues reported by simulation companies and provides updates to customers</li>
          <li>Learns how to use and apply engineering tools</li>
          <li>May support creation of data packages for simulator companies</li>
        </ul>
      </div>
      <div class="job-section">
        <h3>Basic Qualifications</h3>
        <ul>
          <li>Bachelor’s Degree in Computer Science, Electrical Engineering, Computer Engineering, Mechanical Engineering, Aerospace Engineering, Math, Physics or related field OR an equivalent combination of education and experience</li>
          <li>Excellent academics (cumulative GPA greater than or equal to 3.0 as a general rule)</li>
          <li>Demonstrates working knowledge of avionics integrated functions and tools used for system testing</li>
          <li>Demonstrates the capability to perform basic troubleshooting & debugging</li>
        </ul>
      </div>
      <div class="job-section">
        <h3>Desired Qualifications</h3>
        <ul>
          <li>Outstanding academics (cumulative GPA greater than or equal to 3.5)</li>
          <li>Previous work or internship experience working on consumer or aviation products</li>
          <li>Pilot’s license</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- System Testing Support -->
  <section class="qualification-section">
    <div class="text-content">
      <span class="qualification-badge">Basic Qualification</span>
      <h2>Avionics & Integrated Functions</h2>
      <p>"Demonstrates working knowledge of avionics integrated functions and tools used for system testing."</p>
      <p class="personal-text">I've been building and flying drones since middle school. Projects from an autonomous deployable glider to Part 107 commercial shoots have given me a solid understanding of integrating into systems in the aviation world.</p>
    </div>
    <div>
      <video 
        src="/video/glider.mp4" 
        class="rounded-2xl w-full h-full object-cover"
        autoplay 
        muted 
        loop
        playsinline
        style="width: 100%; height: 500px;"
      ></video>
    </div>
  </section>

  <section class="qualification-section-reverse">
    <div class="text-content">
      <span class="qualification-badge">Basic Qualification</span>
      <h2>Academic Excellence</h2>
      <p>"Excellent academics (GPA ≥ 3.0)"</p>
      <p class="personal-text">I'm proud to have the ability to learn any hard skill. I self-studied classes to graduate in 3 years, taught myself full stack development, and learned how to run a business during college. Here I am running an entrepreneurship workshop at Mines.</p>
    </div>
    <div>
      <img src="/images/me.gif" alt="Learning & Growth" style="width: 100%; height: 80%; object-fit: cover; border-radius: 8px;" />
    </div>
  </section>

  <section class="qualification-section">
    <div class="text-content">
      <span class="qualification-badge">Basic Qualification</span>
      <h2>Troubleshooting & Debugging</h2>
      <p>"Demonstrates the capability to perform basic troubleshooting & debugging."</p>
      <p class="personal-text">My work in the physical world has taught me how to think when there aren't error codes. I've learned to be creative, which pays dividends in challenging integration issues. I've also worked with agile teams setting up a CI/CD pipeline during my software development internship, giving me a deep understanding of troubleshooting.</p>
    </div>
    <div class="image-placeholder">
      <img src="/images/circuits.jpg" alt="Troubleshooting" class="w-full h-full object-cover rounded-lg" />
    </div>
  </section>

  <section class="qualification-section-reverse">
    <div class="text-content">
      <span class="qualification-badge">Desired Qualification</span>
      <h2>Aviation & Product Experience</h2>
      <p>"Previous work or internship experience working on consumer or aviation products."</p>
      <p class="personal-text">I have created the opportunity to get in front of many consumer-facing products in an engineering firm I founded. From MRI technician tools to diaper monitors, we were working late one night.</p>
    </div>
    <div class="">
        <img src="/images/pg_working.jpg" alt="Learning & Growth" class="w-full h-full object-cover rounded-lg" />
    </div>
  </section>

  <!-- Conclusion -->
  <section class="hero-section">
    <h2 >Ready to Support Garmin!</h2>
    <p class="hero-description">
      I am eager to bring my engineering skills, passion for aviation, and commitment to quality to the Systems Test Engineer team.
    </p>
    <div style="margin-top: 2rem; text-align: center;">
      <a href="/" class="back-button" style="
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #6b7280;
        text-decoration: none;
        color: white;
        border-radius: 8px;
        font-weight: 500;
        transition: background-color 0.2s ease;">
        ← Back to Main Page
      </a>
    </div>
  </section>

  <section class="hero-section">
    <h2 >One More Project To Highlight</h2>
  </section>
  <PlaneAnimation/>
</div> 