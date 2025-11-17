// script.js

// Array of image paths
const images = [
  "Images/Squash.jpg",
  "Images/Squash - Copy (2).jpg",
  "Images/Squash - Copy (3).jpg",
  "Images/Squash - Copy (4).jpg",
];

// Select the image element by ID
const carousel = document.getElementById("carousel-image");

// Start index
let index = 0;

// Function to change the image
function changeImage() {
  index = (index + 1) % images.length; // loop back to start
  carousel.src = images[index];
}

// Change image every 4 seconds (4000 milliseconds)
setInterval(changeImage, 4000);
