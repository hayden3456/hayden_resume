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
    #tractor circle {
      filter: drop-shadow(0 0 10px rgba(71, 85, 105, 0.8));
    }

    @media (max-width: 768px) {
      .qualification-section,
      .qualification-section-reverse {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      
      .text-content {
        padding-right: 0;
        padding-left: 0;
        order: 1;
      }
      
      .image-placeholder {
        height: 300px;
        order: 2;
      }

      .job-card {
        padding: 1.5rem;
        margin: 0 1rem;
      }

      .job-header h2 {
        font-size: 2rem;
      }

      .job-title {
        font-size: 1.4rem;
        letter-spacing: 1px;
      }

      .job-overview p {
        font-size: 1rem;
      }

      .job-section h3 {
        font-size: 1.3rem;
      }

      .job-section li {
        font-size: 0.9rem;
        padding: 0.4rem 0 0.4rem 1.2rem;
      }

      .job-section p {
        font-size: 0.9rem;
      }

      .job-note {
        font-size: 0.8rem !important;
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
      <h1>Systems Analyst - Integrations Specialist</h1>
      <p class="hero-description">
        Welcome to my custom website showcasing how I meet all the qualifications for the Systems Analyst - Integrations Specialist position. 
        Scroll through to see my experience and capabilities in action! 🚀
      </p>
    </section>

    <!-- Job Description Card -->
    <section class="job-description-section">
      <div class="job-card">
        <div class="job-header">
          <h2>Job Description</h2>
          <div class="job-title">Systems Analyst - Integrations Specialist</div>
        </div>
        
        <div class="job-overview">
          <p>We're looking for a System Analyst who can grow into owning our integrations. In this role, you'll design, build, test, and deploy connections between our core business systems—starting with support in our current ERP and moving on to integrations in our new ERP and other applications. You'll work with Boomi (training provided) alongside APIs (SOAP/REST), data formats like JSON and XML, and SQL for data queries. We also need someone who's curious about Agentic AI and ready to explore how AI-driven automation can improve our processes.</p>
        </div>

        <div class="job-section">
          <h3>Responsibilities</h3>
          <ul>
            <li>Build, test, and deploy integrations between corporate applications using Boomi.</li>
            <li>Create and maintain API connections (SOAP/REST) and data mappings (JSON/XML).</li>
            <li>Write and optimize SQL queries to validate, transform, and troubleshoot data flows.</li>
            <li>Translate business needs into clear technical steps for integration work.</li>
            <li>Troubleshoot and fix data-flow issues to keep systems in sync.</li>
            <li>Document all integration steps for hand-offs and future updates.</li>
            <li>Keep up with new Boomi features and best practices.</li>
            <li>Work closely with internal teams and external partners to launch integrations smoothly.</li>
            <li>Follow data security and compliance guidelines at every stage.</li>
          </ul>
        </div>

        <div class="job-section">
          <h3>Qualifications</h3>
          <ul>
            <li>Growth mindset with curiosity driven desire to learn new technologies.</li>
            <li>Knowledge of Agentic AI concepts or a strong willingness to learn how AI agents can drive automation.</li>
            <li>Clear, organized documentation habits.</li>
            <li>Understanding of the software development lifecycle and change-management basics (required).</li>
            <li>Ability to manage multiple tasks, work independently, and collaborate cross-functionally.</li>
            <li>Strong communication and teamwork skills.</li>
            <li>Excellent analytical and problem-solving skills, with meticulous attention to detail.</li>
            <li>Proven experience with SOAP/REST APIs and working with JSON/XML data formats.</li>
            <li>Familiarity with or eagerness to learn integrations for Workday, Salesforce, Coupa, QAD, SAP, and Apriso.</li>
            <li>Experience (or coursework) in an ERP system such as SAP (preferred).</li>
            <li>Proficient in SQL—able to write complex queries, joins, and basic performance tuning.</li>
            <li>Hands-on experience or strong interest in Boomi (your work here will help you grow).</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Growth Mindset -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Growth Mindset</h2>
        <p>"Growth mindset with curiosity-driven desire to learn new technologies. Continuously expanding skillset and staying current with industry trends and best practices."</p>
        <p class="personal-text">This is possibly my strongest attribute. This image is one example out of my whole life showing the team at an engineering firm I built late at night. Each new project required me to learn from serverless architectures to infant microbiomes. </p>
      </div>
      <div class="image-placeholder">
        <img src="/images/pg_working.jpg" alt="Learning & Growth" class="w-full h-full object-cover rounded-lg" />
      </div>
    </section>

    <!-- AI Concepts -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Agentic AI Concepts</h2>
        <p>"Knowledge of Agentic AI concepts and strong willingness to learn how AI agents can drive automation. Excited to explore AI-powered integration solutions."</p>
        <p class="personal-text">Agentic systems are going to be huge. I've done my far share of projects such as making King Soopers shopping lists off their sales API. To the left is an email bot that both scrapped the internet for the right leads for me and indicated a custom outreach campaign. </p>
      </div>
      <div>
        <video 
          src="/video/email_demo.mp4" 
          class="rounded-2xl w-full h-full object-cover"
          autoplay 
          muted 
          loop
          playsinline
          style="width: 100%; height: 500px;"
        ></video>
      </div>
    </section>

    <!-- Documentation -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Documentation Excellence</h2>
        <p>"Clear, organized documentation habits. Experience creating technical specifications, user guides, and integration documentation for maintainable solutions."</p>
        <p class="personal-text">I believe great documentation is the foundation of maintainable systems. One trait I find helpful is always putting complex logic into a visual format. It helps me trace back my thoughts, and explain the system to a new person. </p>
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

    <!-- SDLC Understanding -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Software Development Lifecycle</h2>
        <p>"Understanding of the software development lifecycle and change-management basics. Experience with agile methodologies and version control systems."</p>
        <p class="personal-text">I've worked with agile teams setting up a CI/CD pipeline in my software development internship. Having shot myself in the foot with version control I deeply understand the value it brings.</p>
      </div>
      
      <div >
        <img src="/images/cicd.png" alt="Learning & Growth" style="width: 100%; height: 80%; object-fit: cover; border-radius: 8px;" />
      </div>
    </section>

    <!-- Task Management -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Project Management</h2>
        <p>"Ability to manage multiple tasks, work independently, and collaborate cross-functionally. Proven track record of delivering projects on time and within scope."</p>
        <p class="personal-text">Having worked at a few companies, I've gotten the chance to experience more management styles than some do in a whole career. I've seen what works and where miscommunication happens. To the right is a high level Gantt chart for a 9 month long RC plane project.</p>
      </div>
      <div >
        <img src="/images/gant.png" alt="Learning & Growth" style="width: 100%; height: 80%; object-fit: cover; border-radius: 8px;" />
      </div>
    </section>

    <!-- Communication Skills -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>Communication & Teamwork</h2>
        <p>"Strong communication and teamwork skills. Experience collaborating with cross-functional teams and stakeholders to deliver successful integration solutions."</p>
        <p class="personal-text">I love working with teams and bridging the gap between the technical and non-technical. That's where real creativity happens, because there's no certain answer. Here I am running a entreponuership workshop at Mines</p>
      </div>
      <div >
        <img src="/images/me.gif" alt="Learning & Growth" style="width: 100%; height: 80%; object-fit: cover; border-radius: 8px;" />
      </div>
    </section>

    <!-- Analytical Skills -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Analytical & Problem-Solving</h2>
        <p>"Excellent analytical and problem-solving skills with meticulous attention to detail. Proven ability to troubleshoot complex integration issues."</p>
        <p class="personal-text">My work in the phisical world has made it clear, there aren't error codes when a wire is missing. I've learned to be creative which pays dividends in challenging integration issues. </p>
      </div>
      <div >
        <img src="/images/circuits.jpg" alt="Learning & Growth" style="width: 100%; height: 80%; object-fit: cover; border-radius: 8px;" />
      </div>
    </section>

    <!-- API Experience -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>SOAP/REST APIs</h2>
        <p>"Proven experience with SOAP/REST APIs and working with JSON/XML data formats. Skilled in API development, testing, and integration."</p>
        <p class="personal-text">Having built full stack applications I've built and integrated REST APIs. Here is one example of a REST FastAPI I built for a agentic sales tool that goes through a mongoDB data base with 130M documents to return custom leads to the user.</p>
      </div>
      <div >
        <iframe 
          src="/src/lib/api_demo.svelte" 
          class="w-full h-full rounded-lg border-0"
          style="width: 100%; height: 500px;"
          title="API Documentation Demo"
        ></iframe>
      </div>
    </section>

    <!-- Integration Platforms -->
    <section class="qualification-section">
      <div class="text-content">
        <h2>Integration Platforms</h2>
        <p>"Familiarity and eagerness to learn integrations for Workday, Salesforce, Coupa, QAD, SAP, and Apriso. Ready to adapt to new integration technologies."</p>
        <p class="personal-text">I'm excited to work with enterprise integration platforms and learn new technologies. I include this video to show how I went from knowing nothing about aerodynamics to being able to help design a whole system that integrated together.</p>
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

    <!-- ERP Experience -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2>ERP System Experience</h2>
        <p>"Experience and coursework in ERP systems including SAP (preferred), with understanding of enterprise resource planning workflows and processes."</p>
        <p class="personal-text">I've studied ERP systems and understand their importance in enterprise operations. I'm confident in my ability to learn the SAP system inside and out very quickly.</p>
      </div>
      <div >
        <img src="/images/learning.gif" alt="Learning & Growth" style="width: 60%; height: 100%; object-fit: cover; border-radius: 8px;" />
      </div>
    </section>

    <!-- SQL Proficiency -->
    <section class="qualification-section">
      <div class="text-content">
        <h2 style="color: white;">SQL Expertise</h2>
        <p style="color: white;">"Proficient in SQL with ability to write complex queries, joins, and basic performance tuning. Experienced in database optimization and data manipulation."</p>
        <p class="personal-text" style="color: white;">I've worked with SQL databases for a few years now for my own projects. And have seen what enterprise database systems are capable of in my internship.</p>
      </div>
      <div >
        <img src="/images/mongoDB.png" alt="Learning & Growth" style="width: 100%; height: 80%; object-fit: cover; border-radius: 8px;" />
      </div>
    </section>

    <!-- Boomi Experience -->
    <section class="qualification-section-reverse">
      <div class="text-content">
        <h2 style="color: white;">Boomi Integration Platform</h2>
        <p style="color: white;">"Hands-on experience and strong interest in Boomi integration platform. My work here demonstrates my growth and capabilities in enterprise integration solutions."</p>
        <p class="personal-text" style="color: white;">While I haven't directly used Boomi yet, I'm excited to learn this enterprise integration platform. My experience with similar workflow automation tools like Zapier and my own projects has given me a strong foundation in integration concepts.</p>
      </div>
      <div >
        <img src="/images/boomi.png" alt="Learning & Growth" style="width: 60%; height: 100%; object-fit: cover; border-radius: 8px;" />
      </div>
    </section>

    <!-- Conclusion -->
    <section class="hero-section">
      <h2 style="color: white;">Ready to Contribute!</h2>
      <p class="hero-description" style="color: white;">
        I'm excited to bring my integration expertise and passion for learning to CoorsTek. 
        Let's build amazing solutions together! 🌟
      </p>
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
    viewBox="0 0 869 12000" 
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
      d="M390,800.24 L390,1350.24 450,1350.24 450,2162.192 390,2162.192 390,3297.072 L835,3697.072 L835,4824.816 L10,4824.816 L10,6000 L835,6000 L835,7200 L10,7200 L10,8400 L835,8400 L835,9600 L10,9600 L10,10800 L835,10800 L835,12000 L10,12000" 
    />
    
      <g bind:this={motionSVG} id="motionSVG">
      <g bind:this={tractor} id="tractor">
        <circle cx="25" cy="25" r="20" fill="url(#pathGradient)" />
      </g>
    </g>
  </svg>
  