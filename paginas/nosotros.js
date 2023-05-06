const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;
let interval;

function startInterval() {
  interval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide();
  }, 6000);
}

function stopInterval() {
  clearInterval(interval);
}

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  stopInterval();
  showSlide();
  startInterval();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  stopInterval();
  showSlide();
  startInterval();
});

startInterval();