<script>
    // Array of image URLs
    let images = [
      '/images/shirt1.png',
      '/images/shirt2.png',
      '/images/shirt3.png',
      '/images/shirt4.png',
      '/images/shirt5.png'
    ];
  
    // Index of the current image
    let currentIndex = 0;
  
    // Function to go to the next image
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Function to go to the previous image
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
  </script>
  
  <div class="carousel items-center">
    <button class="arrow left" on:click={prevImage}>&lt;</button>
    <div class="image-container">
      <img src="{images[currentIndex]}" alt="Image {currentIndex + 1}" />
    </div>
    <button class="arrow right" on:click={nextImage}>&gt;</button>
  </div>
  
  <style>
    .carousel {
      position: relative;
      width: 100%;
      max-width: 700px; /* Reduced max width */
      margin: auto;
      overflow: hidden;
    }
  
    .image-container {
      width: 100%;
      height: 400px; /* Reduced height */
    }
  
    img {
      width: 100%; /* Ensures the image fits the container width */
      height: 100%; /* Ensures the image fits the container height */
      object-fit: contain; /* Adjust the image without cropping */
      display: block;
      border-radius: 8px; /* Optional: Add rounded corners */
    }
  
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.7);
      border: none;
      font-size: 1.5em; /* Reduced font size */
      padding: 5px 8px; /* Reduced padding */
      cursor: pointer;
      color: #333;
      border-radius: 4px; /* Optional: Rounded edges for buttons */
    }
  
    .arrow.left {
      left: 10px;
    }
  
    .arrow.right {
      right: 10px;
    }
  
    .arrow:hover {
      background: rgba(255, 255, 255, 1);
    }
  
    .arrow:focus {
      outline: none;
    }
  </style>
  