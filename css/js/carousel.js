document.addEventListener('DOMContentLoaded', () => {
  const track      = document.querySelector('.carousel-track');
  const slides     = Array.from(track ? track.children : []);
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');
  let currentIndex = 0;

  if (!track || slides.length === 0 || !prevButton || !nextButton) {
    console.error('carousel.js: елементів немає');
    return;
  }

  function updateCarousel() {
    const width = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
});