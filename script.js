document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const itemWidth = document.querySelector(".carousel-item").clientWidth;
    const itemCount = document.querySelectorAll(".carousel-item").length;
    let currentIndex = 0;
    let autoRotateInterval;
  
    // Function to rotate the carousel to the next item
    function nextSlide() {
      currentIndex = (currentIndex + 1) % itemCount;
      updateCarousel();
    }
  
    // Function to rotate the carousel to the previous item
    function prevSlide() {
      currentIndex = (currentIndex - 1 + itemCount) % itemCount;
      updateCarousel();
    }
  
    // Function to update the carousel's position
    function updateCarousel() {
      const translateX = -currentIndex * itemWidth;
      carousel.style.transform = `translateX(${translateX}px)`;
    }
  
    // Automatic rotation of carousel
    autoRotateInterval = setInterval(nextSlide, 1000); // Change slide every 2 seconds
  
    // Pause automatic rotation on hover
    carousel.addEventListener("mouseenter", () => {
      clearInterval(autoRotateInterval);
    });
  
    carousel.addEventListener("mouseleave", () => {
      autoRotateInterval = setInterval(nextSlide, 5000);
    });
  
    // Manual navigation using buttons
    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);
  });
  