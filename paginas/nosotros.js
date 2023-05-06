const slides = document.querySelectorAll(".carousel-slide");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
let slideIndex = 0;

showSlide(slideIndex);

function showSlide(n) {
  slides.forEach(slide => slide.style.transform = `translateX(-${n * 100}%)`);
}

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

prevBtn.addEventListener("click", () => moveSlide(-1));
nextBtn.addEventListener("click", () => moveSlide(1));
console.log('El código JavaScript se está ejecutando');