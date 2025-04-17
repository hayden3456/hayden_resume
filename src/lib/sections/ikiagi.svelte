<script>
    import Scroller from '@sveltejs/svelte-scroller';

  
    let progress = 0;
    let missionText = "What the world needs"; // Default text

// Update the text based on the scroll progress
$: {
    if (progress > 0.56 && progress < 0.8) {
        missionText = "Quality of Life <br>Energy<br>Safety<br>Security";
    }
    else if (progress > 0.8) {
        missionText = " ";
    }
     else {
        missionText = "What the world needs";
    }
}

let passionText = "What you love"; // Default text

// Update the text based on the scroll progress
$: {
    if (progress > 0.5 && progress < 0.8) {
      passionText = "Going Out of The Box<br>Helping Others Grow<br>Learning From People<br>Hacking Together Solutions<br>Tacticle Empithy";
    }
    else if (progress > 0.8) {
        passionText = " ";
    }
    else {
      passionText = " What you love";
    }
}

let vocationText = "What you can be paid for"; // Default text

// Update the text based on the scroll progress
$: {
    if (progress > 0.61 && progress < 0.8) {
      vocationText = "Consulting<br>Automation Design<br>IoT Product Development<br>Full-stack Development<br>Project Management<br>Embedded Systems Design";
    }
    else if (progress > 0.8) {
        vocationText = " ";
    }
    else {
      vocationText = "What you can be paid for";
    }
}

let professionText = "What you are good at"; // Default text

// Update the text based on the scroll progress
$: {
    if (progress > 0.71 && progress < 0.8) {
      professionText = "Learning Quick<br>Understanding Incentives<br>Embedded Systems<br>Software Integration<br>Explaining Hard Things";
    }
    else if (progress > 0.8) {
      professionText = " ";
    }
    else {
        professionText = "What you are good at";
    }
}


  </script>
  
  <div class="demo">
    <!-- Scroller Component to track scroll progress -->
    <Scroller bind:progress top={0} bottom={0.5}>
      <div slot="background">
       
        <div class="final-text" id="ikiagi" style="opacity: {progress < 0.1 || progress > 0.9 ? 1 : 0}; transition: opacity 0.5s ease;">
            <div class="centered-text">Ikigai:</div>
            <div class="right-text">
              <span>the Japanese answer to a life of purpose</span>
              <span class="cursor">&#x2590;</span>
            </div>
          </div>

          <div class="final-text" style="opacity: { progress > 0.1 &&  progress < 0.8 ? 1 : 0}; transition: opacity 0.5s ease;">
          <div class="centered-text">Ikigai</div>
        </div>

        <div class="ikigai-container" style="opacity: {progress > 0.9 ? 0 : 1}; transition: opacity 0.5s ease;">
          <div class="circle passion" style="opacity: {progress > 0.1 ? 0.6 : 0}; transition: opacity 0.5s ease;">
            <span class="circle-text">{@html passionText}</span>
          </div>

          <div class="circle mission" style="opacity: {progress > 0.2 ? 0.6 : 0}; transition: opacity 0.5s ease;">
            <span class="circle-text">{@html missionText}</span>
          </div>

          <div class="circle vocation" style="opacity: {progress > 0.3 ? 0.6 : 0}; transition: opacity 0.5s ease;">
            <span class="circle-text">{@html vocationText}</span>
          </div>
          <div class="circle profession" style="opacity: {progress > 0.4 ? 0.6 : 0}; transition: opacity 0.5s ease;">
            <span class="circle-text">{@html professionText}</span>
          </div>
          <!-- <div class="text-box right">This is the mission text</div>
          <div class="text-box left">This is the mission text</div>
          <div class="text-box top">This is the mission text</div>
          <div class="text-box bottom">This is the mission text</div> -->
          <div class="center-text" style="opacity: {progress > 0.8 && progress < 0.9 ? 1 : 0}; transition: opacity 0.5s ease;">
            ?
          </div>
        </div>
  
        <!-- Centered "Ikigai" with aligned words -->
        <!-- Centered "Ikigai" with words to the right -->



        
      </div>
  
      <div slot="foreground">
        <!-- Sections to create a scrollable area -->
        <section>Section 1</section>
        <section>Section 2</section>
        <section>Section 3</section>
        <section>Section 4</section>
        <section>Section 5</section>
      </div>
    </Scroller>
    <div style="height: 400px; width: 100%; background-color: rgba(0, 0, 0, 0.0);"></div>
  </div>
  

  
  <style>
    /* Style the sections */
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

    section {
      background-color: transparent;
      color: white;
      padding: 1em;
      margin: 0 0 2em 0;
      height: 80vh;
    }
  
    .model {
      width: 100%;
      height: 80vh;
      max-width: 1000px;
      margin: auto;
      display: block;
    }
  
    /* Container for Ikigai circles */
    .ikigai-container {
      position: fixed;
      top: 400px;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  
    /* Styling for each circle */
    .circle {
    position: absolute;
    width: 700px;
    height: 700px;
    border-radius: 50%;
    opacity: 0.6; /* Opacity only applies to the background */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    transition: opacity 0.5s ease;
    background-clip: padding-box; /* Ensure the background color respects the opacity */
    z-index: -1;
}

.circle-text {
    position: absolute;
    color: black; /* Fully opaque black text */
    font-size: 1em;
    font-weight: bold;
    pointer-events: none; /* Ensure clicks go through to the circle */
    text-align: center;
    width: 90%; /* Optional: Adjust width to constrain text within the circle */
    word-wrap: break-word;
    font-family: 'Montserrat', sans-serif;

}
/* Individual colors for each circle */
.passion {
    background-color: #ff5f5f;
    top: -170px;
    left: -120px;
}

.mission {
    background-color: #ffd700;
    top: -150px;
    right: -120px;
}

.vocation {
    background-color: #5f9eff;
    bottom: -150px;
    left: -120px;
}

.profession {
    background-color: #5fff5f;
    bottom: -150px;
    right: -120px;
}
/* Text boxes for circles */
.text-box {
    position: absolute;
    width: 150px; /* Adjust as needed */
    font-size: 0.9em;
    font-weight: bold;
    color: black;
    text-align: center;
    border-radius: 5px; /* Rounded edges */
    padding: 5px;
}

/* Positioning text boxes relative to circles */
.text-box.left {
    top: 50%;
    left: -300px; /* Move right from the center of 'What the world needs' */
    transform: translateY(-50%);
}

.text-box.right {
    top: 50%;
    right: -300px; /* Move right from the center of 'What the world needs' */
    transform: translateY(-50%);
}

.text-box.top {
    top: -220px; /* Move downwards from the center of 'What you can be paid for' */
    left: 50%;
    transform: translateX(-50%);
}

.text-box.bottom {
    bottom: -220px; /* Move downwards from the center of 'What you can be paid for' */
    left: 50%;
    transform: translateX(-50%);
}

    /* Center text for Ikigai */
    .center-text {
      position: absolute;
      font-size: 1.5em;
      font-weight: bold;
      color: #333;
      text-align: center;
      opacity: 0;
    }
  .final-text {
  position: fixed;
  top: 400px; /* Adjust to match your design's vertical placement */
  left: 50%;
  transform: translateX(-50%);
  display: inline-block; /* Keeps "Ikigai" centered as a block */
  text-align: center; /* Centers "Ikigai" */
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
}

.centered-text {
  display: inline-block;
  position: relative;
  white-space: nowrap;
}

.right-text {
  position: absolute;
  top: 50%;
  left: 100%; /* Start right after "Ikigai" */
  transform: translateY(-50%); /* Align to the same line vertically */
  white-space: nowrap; /* Prevents wrapping of the text */
  margin-left: 0.5rem; /* Space between "Ikigai" and the right text */
  display: flex;
  align-items: center;

  font-weight: bold;
  color: #333;
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

  </style>
  