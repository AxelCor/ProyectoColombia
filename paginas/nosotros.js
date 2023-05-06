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
  }, 5000);
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

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const overlayText = document.getElementById('overlay-text');

btn1.addEventListener('click', () => {
  overlayImage.src = '../imagenes/axel.jpg';
  overlayImage.alt = 'Imagen 1';
  overlayText.textContent = 'Axel Ariel Cordoba nació en Rosario, Argentina. Programador FrontEnd. Actualiza sus conocimientos de forma autodidacta debido a la demandas de las nuevas tecnologias.Desarrollando diferentes proyectos web, hoy apoyando este increible proyecto que va a permitir a losniños aprender jugando y demostrar que hay una forma diferente de enseñar en las instituciones de toda Colombia.';
  overlay.style.display = 'flex';
});

btn2.addEventListener('click', () => {
  overlayImage.src = '../imagenes/cathe.jpg';
  overlayImage.alt = 'Imagen 2';
  overlayText.textContent = 'Catherine Parra o "Kade" , nacida en Bogotá, Colombia. Con poco más de dos años de experiencia como animadora, estudia de manera autodidacta a través de distintos cursos online. Escritora de guiones y poemas para una serie nominada a los premios Quirino; animadora de distintas series animadas colombianas, actualmente dedicada al desarrollo del proyecto "Mi Bello País Colombia" en pro de ofrecer un producto que aporte al desarrollo intelectual de los niños.';
  overlay.style.display = 'flex';
});

btn3.addEventListener('click', () => {
  overlayImage.src = '../imagenes/ale.jpeg';
  overlayImage.alt = 'Imagen 3';
  overlayText.textContent = 'Texto para la imagen 3';
  overlay.style.display = 'flex';
});

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });