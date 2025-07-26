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