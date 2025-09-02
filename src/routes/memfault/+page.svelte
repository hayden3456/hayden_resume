<script>
    import { onMount } from 'svelte';

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
      <h1>Embedded Linux Field Engineer</h1>
      <p class="hero-description">
        Welcome to my resume showcasing how my experience fits with Memfault's Embedded Linux Field Engineer position. Feel free to ask any questions you may have. :) 
      </p>
    </section>

    <!-- Job Description Card -->
    <section class="job-description-section">
      <div class="job-card">
        <div class="job-header">
          <h2>Job Description</h2>
          <div class="job-title">Embedded Linux Field Engineer</div>
        </div>
        
        <div class="job-overview">
          <p>Memfault is seeking an embedded software engineer to join as an Embedded Linux Field Engineer and develop our embedded Linux SDK written in Rust. You'll work with cutting-edge hardware companies as they integrate Memfault for the first time or add support for newly built features. This role combines deep technical expertise with customer-facing responsibilities.</p>
        </div>

        <div class="job-section">
          <h3>Your Role</h3>
          <ul>
            <li>Work with Memfault's sales and customer success teams to design solutions for prospects and customers to solve real-world business problems.</li>
            <li>Work with Memfault's customer success and product teams to improve our Linux SDK. The goal for the SDK is to get it to work on every major embedded Linux distribution across a wide variety of IoT devices.</li>
            <li>Engage directly with firmware engineers at cutting-edge hardware companies and work together to overcome issues integrating the Memfault platform.</li>
            <li>Build out and improve reference examples and SDK documentation.</li>
            <li>Contribute to the growing suite of unit, automated, and emulator tests to ensure that improvements work reliably and regressions don’t slip into production.</li>
            <li>Ship code early and often to customers. You’ll begin to constantly notice devices that are running your code out in the wild!</li>
            <li>Work on our deep technical stack: firmware, operating systems, web, distributed systems.</li>
            <li>Have a major impact on our product, our infrastructure, our culture and our business.</li>
          </ul>
        </div>

        <div class="job-section">
          <h3>Key Requirements</h3>
          <ul>
            <li>Experience with Rust/C/C++ code on embedded Linux devices (Arm CPUs)</li>
            <li>Well-versed in Yocto or buildroot</li>
            <li>Great communicator, both conversational and written</li>
            <li>Organized and efficient time/priority management</li>
            <li>Passionate about modern developer practices (automated testing, CI/CD)</li>
            <li>Love teaching and solving problems</li>
            <li>Experience with MCU firmware or Android development (preferred)</li>
            <li>Python and/or SQL experience (preferred)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Problem Solving & Teaching -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Love Teaching & Problem Solving</h2>
        <p>"You love teaching and solving problems, and want to have a major impact on our product, business, and our culture."</p>
        <p class="personal-text">I love communicating complex systems, because as you speak outward you beat inward a deeper form of understanding. Here I am leading an entrepreneurship workshop at Colorado School of Mines.</p>
      </div>
      <div class="image-placeholder">
        <img src="/images/me.gif" alt="Teaching Workshop" class="w-full h-full object-cover rounded-lg" />
      </div>
    </section>

    <!-- Embedded Systems Experience -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Embedded Systems & Hardware</h2>
        <p>"3+ years of experience with Rust/C/C++ code that runs on embedded Linux devices, typically on Arm CPUs."</p>
        <p class="personal-text">Having started a small engineering firm, I developed multiple embedded projects at the same time, getting fast exposure to different ways thinking rocks mess up. Here is my autonomous glider system deploying for a collegiate competition team.</p>
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

    <!-- Linux & Build Systems -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Linux Build Systems</h2>
        <p>"Well-versed in Yocto or buildroot for embedded Linux development and deployment."</p>
        <p class="personal-text">I've experienced building custom IoT devices as well as working in Linux ecosystems. While I haven't used Yocto or buildroot specifically, I have foundational knowledge and a love for obsessing over new skills.</p>
      </div>
      <div class="">
        <img src="/images/learning.gif" alt="Circuit Design" class="width: 60%; height: 100%; object-cover rounded-lg" />
      </div>
    </section>

    <!-- Communication Skills -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Technical Communication</h2>
        <p>"Great communicator, both conversational and in written form. Can demonstrate credibility to technical buyers and articulate value to business stakeholders."</p>
        <p class="personal-text">In my engineering firm, I switched from working with Devs to pitching non-technical stakeholders. My ability to bridge the technical with business value is something I pride myself in.</p>
      </div>
      <div class="image-placeholder">
        <img src="/images/pg_working.jpg" alt="Technical Presentation" class="w-full h-full object-cover rounded-lg" />
      </div>
    </section>

    <!-- Project Management -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Organization & Time Management</h2>
        <p>"Organized and efficiently manage your time and priorities across multiple complex projects."</p>
        <p class="personal-text">Having tried and failed in the startup arena while in school, setting priories is the only way to live. I've built teams with different management styles, been through numerus crunch time situations, but I'm most proud of the fact I've stayed positive when times get hard.</p>
      </div>
      <div class="">
        <img src="/images/gant.png" alt="Project Management" class="w-full  object-cover rounded-lg" />
      </div>
    </section>

    <!-- Modern Development Practices -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Modern Developer Practices</h2>
        <p>"Passionate about modern developer practices, such as automated software testing and CI/CD."</p>
        <p class="personal-text">During my internship at CACI, my project was working on the CI/CD pipelines for satellite system analysis. I understand continuous integration in embedded systems where failures have real-world consequences.</p>
      </div>
      <div class="">
        <img src="/images/cicd.png" alt="CI/CD Pipeline" class="w-full object-cover rounded-lg" />
      </div>
    </section>

    
    <!-- Team Collaboration -->
    <section class="qualification-section">
        <div class="text-content">
          <h2 style="color: white;">Caring & Kind Team Player</h2>
          <p style="color: white;">"You are caring and kind: other people do better when they work with you."</p>
          <p class="personal-text" style="color: white;">I believe the best technical work happens when people feel supported and empowered. Whether leading university teams or mentoring fellow entrepreneurs, I've always focused on creating environments where everyone can do their best work.</p>
        </div>
        <div class="">
          <img 
            src="/images/smiling_with_board.jpg" 
            alt="Team Collaboration" 
            class="object-cover rounded-lg"
            style="height: 750px; width: 100%;"
          />
        </div>
      </section>

    <!-- Firmware & MCU Experience -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2 style="color: white;">MCU & Firmware Development</h2>
        <p style="color: white;">"Experience with developing firmware on MCUs - understanding low-level hardware interactions and real-time systems."</p>
        <p class="personal-text" style="color: white;">Having built IoT systems such as a stool monitor that gave dietary feedback, I've learned the problems with hardware in a real time situation. Here is my initial flowchart for said stool monitor from on board, to containerized cloud deployment, to user frontend. 
        </p>
      </div>
      <div class="">
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

    <!-- Python & SQL -->
    <section class="qualification-section">
      <div class="text-content">
        <h2 style="color: white;">Python & SQL Expertise</h2>
        <p style="color: white;">"Experience with Python and/or SQL for data analysis, automation, and backend systems."</p>
        <p class="personal-text" style="color: white;">I've built full-stack applications using Python backends with SQL databases. One such project is an outreach automation tool to do vector searches among a list of email prospects to find the correct leads and send custom messages. </p>
      </div>
      <div>
        <video 
          src="/video/email_demo.mp4" 
          class="rounded-2xl w-full h-full object-cover"
          autoplay 
          muted 
          loop
          playsinline
          style="width: 100%; height: 400px;"
        ></video>
      </div>
    </section>

    <!-- Customer Success & Sales -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2 style="color: white;">Sales Acumen & Customer Success</h2>
        <p style="color: white;">"Excitement around up-leveling your sales acumen, which we believe to be one of life's most important skills."</p>
        <p class="personal-text" style="color: white;">Having built things that no one wanted has shown me technical excellence means nothing without the ability to solve real customer problems. I'm excited to have the opportunity to do both technical tasks and have customer-facing responsibilities for Memfault!</p>
      </div>
      <div class="image-placeholder">
        <img src="/images/automation.gif" alt="Customer Solutions" class="w-full h-full object-cover rounded-lg" />
      </div>
    </section>

    <!-- Conclusion -->
    <section class="hero-section">
      <h2 style="color: white;">Ready to Build the Future of IoT at Memfault!</h2>
      <p class="hero-description" style="color: white;">
        I'm excited to bring my embedded systems expertise and passion for customer success to Memfault. 
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
