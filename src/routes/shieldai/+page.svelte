<script>
    import RcViewer from '$lib/rc-viewer.svelte';
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
      <h1>Electrical Test & Rapid Prototype Engineer</h1>
      <p class="hero-description">
        Thank you for taking the time to visit my page showcasing how I meet the qualifications for the Electrical Test & Rapid Prototype Engineer position at Shield AI. 
        Please scroll through to see my experiences as they relate to the job! 🚀
      </p>
    </section>

    <!-- Job Description Card -->
    <section class="job-description-section">
      <div class="job-card">
        <div class="job-header">
          <h2>Job Description</h2>
          <div class="job-title">Electrical Test & Rapid Prototype Engineer</div>
        </div>
        
        <div class="job-overview">
          <p>As an Electrical Engineer on our Hardware Test team, you’ll have the opportunity to design and automate test systems that validate everything from power electronics to RF communications. You'll work hands-on with PCB design, Python scripting, and advanced environmental testing (HASS, ESS, HALT) to ensure the highest standards of reliability. If you're passionate about building rock-solid hardware and thrive in a fast-paced, multidisciplinary environment, this role is for you.</p>
        </div>

        <div class="job-section">
          <h3>What you'll do</h3>
          <ul>
            <li>Design and own test systems for critical UAV components and subsystems, from concept to validation.</li>
            <li>Work across multiple EE disciplines, including power electronics, RF, communications, and system integration.</li>
            <li>Develop PCBs to interface between test stands and the device-under-test (DUT).</li>
            <li>Build custom test fixtures integrating relays, PLCs, PCBAs, and harnessing for automated and high-fidelity testing.</li>
            <li>Automate test sequences using Python, ensuring repeatability, efficiency, and scalability.</li>
            <li>Collaborate in cross-functional design reviews, advocating for testability improvements that streamline hardware validation.</li>
            <li>Adapt and innovate in a fast-moving, high-stakes environment, where your work directly impacts mission success.</li>
          </ul>
        </div>

        <div class="job-section">
          <h3>Required Qualifications</h3>
          <ul>
            <li>B.S. in Electrical Engineering or equivalent hands-on experience OR you are an undergraduate, graduate or PhD student expected to graduate in 2025.</li>
            <li>Strong foundation in electrical, mechanical, and software engineering principles.</li>
            <li>Experience in multidisciplinary hardware projects—through internships, jobs, clubs, personal projects, or research.</li>
            <li>A track record of ownership, innovation, and delivering results in complex technical environments.</li>
            <li>A team-first mindset, holding yourself and others to high standards, while being adaptable and solution-oriented.</li>
            <li>A track record of working hard, being a trustworthy teammate, and being kind to others.</li>
          </ul>
        </div>

        <div class="job-section">
          <h3>Preferred Qualifications</h3>
          <ul>
            <li>Proficiency in Python or other scripting languages for automation.</li>
            <li>Experience with PCB design tools (Altium, KiCAD, Eagle, etc.).</li>
            <li>Familiarity with CAD tools (SolidWorks, NX, CATIA) for mechanical fixture design.</li>
            <li>Ability to problem-solve under pressure and pivot quickly in a dynamic, fast-paced engineering environment.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Electrical Engineering Foundation -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Electrical Engineering Foundation</h2>
        <p>"B.S. in Electrical Engineering" + "Strong foundation in electrical, mechanical, and software engineering principles."</p>
        <p class="personal-text">My EE degree from Colorado School of Mines along with my entrepreneurial projects have led to me creating across the engineering fields from SaaS websites to joysticks for CAT scan technicians. </p>
      </div>
      <div class="image-placeholder">
        <img src="/images/circuits.jpg" alt="PCB Design Project" class="w-full h-full object-cover rounded-lg" />
      </div>
    </section>

    <!-- Multidisciplinary Hardware Projects -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Multidisciplinary Hardware Projects</h2>
        <p>"Experience in multidisciplinary hardware projects—through internships, jobs, clubs, personal projects, or research."</p>
        <p class="personal-text">I include this video to show how I went from knowing nothing about aerodynamics to being able to help design a whole system that integrated together. It's exciting working with those who've mastered whole worlds you didn't know existed. </p>
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

    <!-- Innovation & Ownership -->
    <section class="qualification-section">
        <div class="text-content">
            <h2>Innovation & Ownership</h2>
            <p>"Track record of ownership, innovation, and delivering results in complex technical environments. Experience taking projects from concept through validation and deployment."</p>
            <p class="personal-text">Having started my fair share of projects and seen them through to completion, I've seen how cheap ideas are and how difficult execution is. This Gantt chart shows one tool I've used to manage projects ensuring they get done. </p>
        </div>
        <div class="">
            <img src="/images/gant.png" alt="Project Management" class="w-full h-full object-cover rounded-lg" />
        </div>
        </section>

    
    <!-- Team Collaboration -->
    <section class="qualification-section-reverse">
        <div class="text-content">
          <h2>Team-First Mindset</h2>
          <p>"Team-first mindset, holding yourself and others to high standards while being adaptable and solution-oriented. Experience working as a trustworthy teammate in high-stakes environments."</p>
          <p class="personal-text">My team at the engineering firm I co-founded would spend some late nights banging our heads on those endless engineering problems. We worked hard, started at the ceiling to dream, and grew together. I'd trust those people with my life.</p>
        </div>
        <div class="image-placeholder">
          <img src="/images/pg_working.jpg" alt="Team Collaboration" class="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

          <!-- Trustworthy Teammate -->
    <section class="qualification-section">
        <div class="text-content">
          <h2>Trustworthy Teammate</h2>
          <p>"A track record of working hard, being a trustworthy teammate, and being kind to others."</p>
          <p class="personal-text">All the good I've put out there I've gotten back ten fold. This picture is from an entrepreneurship club meeting I organized and that group has certainly given me back a lot of enjoyment and help in life. 
        </p>
        </div>
        <div class="image-placeholder">
          <img src="/images/me.gif" alt="Power Electronics Design" class="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      
    <!-- Python Automation -->
    <section class="qualification-section-reverse">
        <div class="text-content">
          <h2>Python Test Automation</h2>
          <p>"Proficiency in Python or other scripting languages for automation."</p>
          <p class="personal-text">I've used python from little scripts to visualize a big spreadsheet to advanced backend systems. Here is one example of a RESTful FastAPI I built for a full stack LLM agentic sales tool that searches through embedded data to find custom leads to the user.</p>
        </div>
        <div>
          <iframe 
            src="/api_demo.html" 
            class="w-full h-full rounded-lg border-0"
            style="width: 100%; height: 500px;"
            title="Python Automation Demo"
          ></iframe>
        </div>
      </section>

    <!-- PCB Design & Test Fixtures -->
    <section class="qualification-section">
      <div class="text-content" style="color: white;">
        <h2 style="color: white;">PCB Design</h2>
        <p style="color: white;">"Experience with PCB design tools (Altium, KiCAD, Eagle, etc.)."</p>
        <p class="personal-text" style="color: white;">I've designed and built custom PCBs mostly using Eagle. Here's one example of a power supply board I designed. </p>
      </div>
      <div class="min-h-[500px]">
        <div id="board" class = "text-center"></div>
      </div>
    </section>


        <!-- CAD & Mechanical Design -->
        <section class="qualification-section-reverse">
            <div class="text-content" style="color: white;">
              <h2 style="color: white;">CAD Tools & Fixture Design</h2>
              <p style="color: white;">"Familiarity with CAD tools (SolidWorks, NX, CATIA) for mechanical fixture design."</p>
              <p class="personal-text" style="color: white;">Having designed physical products from stool sensors to (rc) planes, I've gotten comfortable with CAD tools such as Solidworks and Fusion 360.</p>
            </div>
            <div class="">
                <RcViewer/>
            </div>
          </section>


    <!-- Problem-Solving Under Pressure -->
    <section class="qualification-section-reverse">
    <div class="text-content" style="color: white;">
        <h2 style="color: white;">Problem-Solving Under Pressure</h2>
        <p style="color: white;">"Ability to problem-solve under pressure and pivot quickly in a dynamic, fast-paced engineering environment."</p>
        <p class="personal-text"style="color: white;">Real-world hardware debugging doesn't come with the nice error codes I get in web development. I've learned to think creatively and systematically when troubleshooting complex electrical systems, especially when deadlines are tight and stakes are high.</p>
      </div>
      <div class="" style="transform: scale(0.8); transform-origin: center;">
        <img src="/images/smiling_with_board.jpg" alt="Fast Development Cycle" class="w-full h-full object-cover rounded-lg" />
      </div>
    </section>


    <!-- Conclusion -->
    <section class="hero-section">
      <h2 style="color: white;">Ready to Protect & Serve!</h2>
      <p class="hero-description" style="color: white;">
        I'm excited to bring my electrical engineering expertise and passion to Shield AI. 
      </p>
      <div style="margin-top: 2rem; text-align: center;">
        <a href="/" class="back-button" style="
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #6b7280;
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
  