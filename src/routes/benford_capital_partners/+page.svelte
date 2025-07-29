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

          // Fade in animations for sections
          gsap.fromTo('.fade-in', {
            opacity: 0,
            y: 50
          }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: '.fade-in',
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          });
        };
        document.body.appendChild(scrollTriggerScript);
      };
      document.body.appendChild(gsapScript);
    });
  </script>
  
  <svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hayden Constas - Benford Capital Partners Internship</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  </svelte:head>
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      color: #475569;
      background: linear-gradient(135deg, #fcedd1 0%, #fae4c9 50%, #f8d8c1 100%);
    }

    progress {
      position: fixed;
      top: 0;
      left: 0;
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      border: none;
      background: transparent;
      z-index: 1000;
    }
  
    progress::-webkit-progress-bar {
      background: rgba(255, 255, 255, 0.1);
    }
  
    progress::-webkit-progress-value {
      background: linear-gradient(90deg, #475569, #64748b);
    }
  
    progress::-moz-progress-bar {
      background: linear-gradient(90deg, #475569, #64748b);
    }

    .container {
      background: linear-gradient(135deg, #fcedd1 0%, #fae4c9 50%, #f8d8c1 100%);
      min-height: 100vh;
    }

    /* Header */
    .header {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 1rem 0;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .nav {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }

    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: #475569;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }

    .nav-links a {
      text-decoration: none;
      color: #4b5563;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-links a:hover {
      color: #334155;
    }

    /* Hero Section */
    .hero {
      padding: 6rem 2rem;
      text-align: center;
      background: linear-gradient(135deg, #f7c6b1 0%, #64748b 30%);
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
      opacity: 0.1;
    }

    .hero-content {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      font-weight: 300;
    }

    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.3);
      color: white;
      text-decoration: none;
      border-radius: 50px;
      font-weight: 600;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .cta-button:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
    }

    /* Main Sections */
    .section {
      padding: 5rem 0;
      position: relative;
    }

    .section-alt {
      background: rgba(255, 255, 255, 0.5);
    }

    .section-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 600;
      color: #475569;
      margin-bottom: 1rem;
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Value Proposition Grid */
    .value-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .value-card {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
      padding: 2.5rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .value-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .value-icon {
      width: 375px;
      height: 375px;
      max-width: 100%;
      background: linear-gradient(135deg, #475569, #64748b);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: #475569;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      position: relative;
    }

    .value-icon img {
      height: 350px;
      max-width: 350px;
      width: 100%;
      object-fit: cover;
      border-radius: 15px;
      background: transparent;
      position: relative;
      z-index: 1;
    }

    .value-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: #475569;
      margin-bottom: 1rem;
    }

    .value-card p {
      color: #4b5563;
      line-height: 1.6;
    }

    /* Experience Timeline */
    .timeline {
      position: relative;
      margin: 4rem 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: linear-gradient(180deg, #475569, #64748b);
      transform: translateX(-50%);
    }

    .timeline-item {
      display: flex;
      margin-bottom: 4rem;
      position: relative;
    }

    .timeline-item:nth-child(even) {
      flex-direction: row-reverse;
    }

    .timeline-content {
      flex: 1;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
      padding: 2rem;
      margin: 0 2rem;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .timeline-dot {
      position: absolute;
      left: 50%;
      top: 2rem;
      width: 20px;
      height: 20px;
      background: #64748b;
      border-radius: 50%;
      transform: translateX(-50%);
      border: 4px solid rgba(255, 255, 255, 0.9);
      z-index: 2;
    }

    .timeline-date {
      font-weight: 600;
      color: #64748b;
      margin-bottom: 0.5rem;
    }

    .timeline-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: #475569;
      margin-bottom: 0.5rem;
    }

    .timeline-company {
      color: #6b7280;
      font-weight: 500;
      margin-bottom: 1rem;
    }

    .timeline-description {
      color: #4b5563;
      line-height: 1.6;
    }

    /* Skills Tags */
    .skills-container {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .skill-tag {
      background: linear-gradient(135deg, #475569, #64748b);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
    }

    /* Projects Showcase */
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .project-card {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-image {
      height: 200px;
      background: linear-gradient(135deg, #f7c6b1 0%, #64748b 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.1rem;
      font-weight: 500;
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: #475569;
      margin-bottom: 0.5rem;
    }

    .project-description {
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    /* Contact Section */
    .contact-section {
      background: linear-gradient(135deg, #64748b 0%, #475569 100%);
      color: white;
      text-align: center;
    }

    .contact-info {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-wrap: wrap;
      margin-top: 2rem;
    }

    .contact-info .contact-item:last-child {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      background: transparent;
      padding: 0;
      backdrop-filter: none;
      border-radius: 0;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50px;
      backdrop-filter: blur(10px);
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
      .value-grid {
        gap: 1.5rem;
      }
      
      .value-card {
        padding: 2rem;
      }

      .value-icon {
        width: 300px;
        height: 300px;
      }

      .value-icon img {
        height: 280px;
        max-width: 280px;
      }
    }

    @media (max-width: 768px) {
      .nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }

      .hero {
        padding: 4rem 1rem;
      }

      .section {
        padding: 3rem 0;
      }

      .section-content {
        padding: 0 1rem;
      }

      .value-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }

      .value-card {
        padding: 1.5rem;
        margin: 0;
      }

      .value-icon {
        width: 250px;
        height: 250px;
        margin: 0 auto 1.5rem;
      }

      .value-icon img {
        height: 230px;
        max-width: 230px;
      }

      .timeline {
        margin: 2rem 0;
      }

      .timeline::before {
        display: none;
      }

      .timeline-item {
        flex-direction: column !important;
        margin-left: 0;
        margin-bottom: 2rem;
      }

      .timeline-content {
        margin: 0;
        padding: 1.5rem;
      }

      .timeline-dot {
        display: none;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .contact-info {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

      .contact-item {
        padding: 0.8rem 1.2rem;
        font-size: 0.9rem;
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding: 3rem 0.5rem;
      }

      .section-content {
        padding: 0 0.5rem;
      }

      .value-card {
        padding: 1rem;
      }

      .value-icon {
        width: 200px;
        height: 200px;
      }

      .value-icon img {
        height: 180px;
        max-width: 180px;
      }

      .timeline-item {
        margin-left: 1.5rem;
      }

      .timeline::before {
        display: none;
      }

      .timeline-dot {
        display: none;
      }

      .timeline-content {
        padding: 1rem;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .hero-subtitle {
        font-size: 1rem;
      }

      .section-title {
        font-size: 1.8rem;
      }

      .section-subtitle {
        font-size: 1rem;
      }
    }

    .fade-in {
      opacity: 0;
    }

    /* Custom styles for embedded content */
    .media-container {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 20px;
      padding: 1rem;
      margin: 2rem 0;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    }

    .media-container video,
    .media-container iframe,
    .media-container img {
      width: 100%;
      border-radius: 15px;
    }
  </style>
  
  <progress max="100" value="0"></progress>
  
  <div class="container">
    <!-- Header -->
    <!-- <header class="header">
      <nav class="nav">
        <div class="logo">Hayden Constas</div>
        <ul class="nav-links">
          <li><a href="/#work">Work</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header> -->

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content fade-in" style="margin-top: 8rem;">
        <h1>My Case for Benford Capital Partners</h1>
        <p class="hero-subtitle">
          Hello Benjamin, in transparency, I'm reaching out to propose a fall/winter internship with 
          Benford Capital Partners. I'm coming as a recent grad with an electrical
          engineering degree, CS background, and experience in the entrepreneurial world. 
          Thank you for taking the time to read the page!
        </p>
        <a href="#value" class="cta-button">Explore My Value Proposition</a>
      </div>
    </section>

    <!-- Value Proposition -->
    <section id="value" class="section">
      <div class="section-content">
        <div class="section-header fade-in">
          <h2 class="section-title">Why I'm Perfect for Benford Capital Partners</h2>
          <p class="section-subtitle">
            I enjoy the execution step where tech is implemented in the world. Having built my share of things no one wanted, I've learned a lot. These are areas these lessons can help BCP.
          </p>
        </div>
<!-- 🚀 🔧 📊 🤝 💡 -->
        <div class="value-grid">
          <div class="value-card fade-in">
            <div class="value-icon">
                <img src="/images/smiling_with_board.jpg" alt="Technical Deal Support" />
            </div>
            <h3>Technical Due Diligence</h3>
            <p>
              As an electrical engineer with hands-on experience in automation, PCB design, 
              and manufacturing processes, I have a natural intuition about the technical world.
            </p>
          </div>

          <div class="value-card fade-in">
            <div class="value-icon">
              <img src="/images/pg_working.jpg" alt="Entrepreneurial Operations" />
            </div>
            <h3>Entrepreneurial Operations</h3>
            <p>
              Having founded multiple companies, I've felt the operational challenges 
              that founder-led businesses face. Feeling empathy in 
              your target market.
            </p>
          </div>

          <div class="value-card fade-in">
            <div class="value-icon">
              <img src="/images/gant.png" alt="Cross-Functional Bridge" />
            </div>
            <h3>Cross-Functional</h3>
            <p>
              My experience spans engineering, business development, and operations. Allowing me to 
              translate technical concepts for financial stakeholders and vice versa. 
              I love getting to be that bridge.
            </p>
          </div>

          <div class="value-card fade-in">
            <div class="value-icon">
            <div class="media-container">
              <video 
                src="/video/glider.mp4" 
                autoplay 
                muted 
                loop 
                playsinline
                style="height: 200px; object-fit: cover;"
              ></video>
              </div>
            </div>
            <h3>Systems Thinking</h3>
            <p>
             I love getting to sit and understand the big picture, from learning what goes into this autonomous glider system I made, to understanding supply chains. I love a new challenge, and I'm willing to bet you've got a few of those.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- What I Offer During Internship -->
    <section class="section section-alt">
      <div class="section-content">
        <div class="section-header fade-in">
          <h2 class="section-title">Immediate Value During Internship</h2>
          <p class="section-subtitle">
            What I can contribute from day one          
        </p>
        </div>

        <div class="value-grid">
          <div class="value-card fade-in">
            <div class="value-icon">
              <img src="/images/circuits.jpg" alt="Technical Due Diligence" />
            </div>
            <h3>Technical Deal Support</h3>
            <p>
              Conduct technical due diligence reports on industrial technologies, evaluate manufacturing 
              processes, assess automation opportunities.
            </p>
          </div>

          <div class="value-card fade-in">
            <div class="value-icon">
              <img src="/images/automation.gif" alt="Portfolio Company Analysis" />
            </div>
            <h3>Automate Busy Work</h3>
            <p>
              When starting an engineering firm I automated processes from form creation to email triggers. I can do the same here and let you focus where you want. 
            </p>
          </div>

          <div class="value-card fade-in">
            <div class="value-icon">
              <img src="/images/me_crop.gif" alt="Management Team Interface" />
            </div>
            <h3>Management Team Interface</h3>
            <p>
              I can interact with the boots on the ground.
              Doing the time consuming work of relaying problems up and down the ladder. 
              Here I am running an entrepreneurial club meeting with engineering and business students. 
            </p>
          </div>

          <div class="value-card fade-in">
            <div class="value-icon" style="overflow: hidden;">
              <video 
                src="/video/email_demo.mp4" 
                class="rounded-2xl h-full object-cover"
                autoplay 
                muted 
                loop
                playsinline
                style="object-position: 30% center; width: 100%; height: 100%;"
              ></video>
            </div>
            <h3>Broad Data Alerts</h3>
            <p>
              I can set scraping and data alerts for new companies that fall into your focus sectors. I've made tools that allow LLMs to parse 130 million contacts for targeted email leads. I know the problems of broad scale scraping. 
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section id="experience" class="section">
      <div class="section-content">
        <div class="section-header fade-in">
          <h2 class="section-title">Relevant Experience</h2>
          <p class="section-subtitle">
            Where I've been to prove where I can go
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-item fade-in">
            <div class="timeline-content" style="text-align: center;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 2rem; margin: 1.5rem 0;">
                <img src="/images/bcp.png" alt="Benford Capital Partners" style="height: 60px; width: auto; max-width: 200px; object-fit: contain;" />
                <span style="font-size: 3rem; color: #299686; font-weight: 300;">?</span>
              </div>
            </div>
            <div class="timeline-dot"></div>
          </div>

          <div class="timeline-item fade-in">
            <div class="timeline-content">
              <div class="timeline-date">May 2024 - June 2024</div>
              <div class="timeline-title">Software Development Intern</div>
              <div class="timeline-company">CACI - Defense Contractor</div>
              <div class="timeline-description">
                Worked on the SAFFIRE satellite geographic information system (GIS) platform for DoD partners. Gained experience in 
                high-stakes technical projects and collaboration in a defense 
                contracting environment.
              </div>
              <div class="skills-container">
                <span class="skill-tag">GIS Systems</span>
                <span class="skill-tag">DoD Contracts</span>
                <span class="skill-tag">Satellite Tech</span>
                <span class="skill-tag">AWS</span>
              </div>
            </div>
            <div class="timeline-dot"></div>
          </div>

          <div class="timeline-item fade-in">
            <div class="timeline-content">
              <div class="timeline-date">June 2023 - Jan 2024</div>
              <div class="timeline-title">Founder</div>
              <div class="timeline-company">Protogenesis Engineering</div>
              <div class="timeline-description">
                Co-founded engineering firm developing MVPs for small businesses. Led operations, 
                business development, and technical delivery. Managed team of engineering students 
                and delivered automation solutions across multiple industries.
              </div>
              <div class="skills-container">
                <span class="skill-tag">Entrepreneurship</span>
                <span class="skill-tag">Team Leadership</span>
                <span class="skill-tag">Business Development</span>
                <span class="skill-tag">Operations</span>
              </div>
            </div>
            <div class="timeline-dot"></div>
          </div>

          <div class="timeline-item fade-in">
            <div class="timeline-content">
              <div class="timeline-date">Oct 2022 - July 2023</div>
              <div class="timeline-title">Co-Proprietor</div>
              <div class="timeline-company">Upstream Vee - Pipeline Monitoring</div>
              <div class="timeline-description">
                Developed processes for IoT tools in oil & gas pipeline monitoring. Collaborated directly with 
                Chevron, leading to $200k in seed funding. Managed product development and prototype manufacturing  
                to the point of field testing.
              </div>
              <div class="skills-container">
                <span class="skill-tag">Industrial IoT</span>
                <span class="skill-tag">Fundraising</span>
                <span class="skill-tag">Product Development</span>
                <span class="skill-tag">Energy Sector</span>
              </div>
            </div>
            <div class="timeline-dot"></div>
          </div>

        </div>
      </div>
    </section>

    <!-- Long-term Value -->
    <section class="section section-alt">
      <div class="section-content">
        <div class="section-header fade-in">
          <h2 class="section-title">Long-Term Value Proposition</h2>
          <p class="section-subtitle">
            How I could grow with Benford Capital becoming a key technical asset past my internship
          </p>
        </div>

        <div class="value-grid">
          <div class="value-card fade-in">
            <div class="value-icon">
                <img src="/images/board.png" alt="Innovation Catalyst" />
            </div>
            <h3>Instituting Smart Processes</h3>
            <p>
              As I learn more about your processes, I can help institute more in depth analitics to muliply efforts. This will come in hand with my learning more about the finacial world.
            </p>
          </div>

          <div class="value-card fade-in">
            <div class="value-icon">
                <img src="/images/learning.gif" alt="Market Research & Analysis" />
            </div>
            <h3>Technical Opportunities</h3>
            <p>
              I'm always keeping an ear to the ground to what's happening in the tech world.
              I will be able to use that to sort through the noise and find new opportunities as the worlds changes.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section section">
      <div class="section-content">
        <div class="section-header fade-in">
          <h2 class="section-title" style="color: white;">Contact Info</h2>
          <p class="section-subtitle" style="color: rgba(255,255,255,0.9);">
    I would like to think of this internship as a mini MBA for me, and would love the chance to work with your lean team. 
    Please reach out if you are open to talking more about how I can help at Benford Capital Partners. 
          </p>
        </div>

        <div class="contact-info fade-in">
          <div class="contact-item">
            <span>📧</span>
            <span>hjconstas@gmail.com</span>
          </div>
          <div class="contact-item">
            <span>📱</span>
            <span>(708)-830-0299</span>
          </div>
          <div class="contact-item">
            <span>💼</span>
            <a href="https://www.linkedin.com/in/hayden-constas-39a129228/" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none;">LinkedIn</a>
          </div>
          <div class="contact-item">
            <a 
              href="/"
              style="
                color: white; 
                text-decoration: none; 
                display: inline-block; 
                background: #475569; 
                padding: 1rem 2.5rem; 
                border-radius: 2rem; 
                font-size: 1.25rem; 
                font-weight: 600; 
                margin-left: 0.5rem;
                box-shadow: 0 4px 16px rgba(71,87,105,0.15);
                transition: background 0.2s, transform 0.2s;
              "
              on:mouseover={() => { 
                event.currentTarget.style.background = '#64748b'; 
                event.currentTarget.style.transform = 'scale(1.05)';
              }}
              on:focus={() => { 
                event.currentTarget.style.background = '#64748b'; 
                event.currentTarget.style.transform = 'scale(1.05)';
              }}
              on:mouseout={() => { 
                event.currentTarget.style.background = '#475569'; 
                event.currentTarget.style.transform = 'scale(1)';
              }}
              on:blur={() => { 
                event.currentTarget.style.background = '#475569'; 
                event.currentTarget.style.transform = 'scale(1)';
              }}
              tabindex="0"
              role="button"
              aria-label="View Full Portfolio"
            >
            <span>🌐</span>
              View Full Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  