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
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const overlayText = document.getElementById('overlay-text');


btn1.addEventListener('click', () => {
  overlayImage.src = '../imagenes/ale.jpeg';
  overlayImage.alt = 'Imagen 1';
  overlayText.textContent = 'Alba Alexandra Rubio Ramírez nació en Ibagué, Colombia. Estudió arte Dramático en la Universidad del Valle, en la ciudad de Cali. Escritora de guiones para cine, poemas,obras de teatro infantil y juvenil, canciones, al igual que himnos Institucionales. Docente de Danzas y Teatro por más de 20 años, tanto en la Secretaria de Educación del Distrito como en la Gobernación de Cundinamarca en los que dirigió diferentes grupos teatrales, una de las obras ganadoras en el año 2000 fue “Sueños en el lumbral del Silencio” realizada con estudiantes de la Institución Educativa República de Panamá, los cuales tenían limitación auditiva. Asistió con el apoyo de la ONU a la Habana Cuba con la ponencia sobre inclusión de este tipo de estudiantes en las aulas regulares. Participó del diplomado sobre Modificalidad Cognitiva y pensamiento divergente realizado por la cooperativa de educadores del magisterio CODEMA, visitando los colegios que aplican esta metodología con sus estudiantes en Alemania, Francia, Suiza, Italia, y España. Ha participado de varios talleres de Creación Literaria realizados por IDARTES y trabaja activamente para difundir sus obras a las nuevas generaciones.';
  overlay.style.display = 'flex';
});

btn2.addEventListener('click', () => {
  overlayImage.src = '../imagenes/soluna.jpeg';
  overlayImage.alt = 'Imagen 2';
  overlayText.textContent = 'Soluna Aguilar Rubio nació en Bogotá D.C. Ha vivido rodeada de arte gracias a sus padres maestros/directores de arte dramático, así como a sus viajes por el mundo. culminó sus estudios de Licenciatura en Educación con énfasis en inglés, en la universidad Distrital. Estudió en Londres un año y también ha enseñado y aprendido en diferentes países. Su primer viaje al extranjero fue a Estados Unidos como Líder de campamento de la "YMCA". Ya ha viajado por más de 20 países, y su meta es poder realizar un cuento típico para cada país y traducirlo. Ha trabajado como docente de inglés en diversas instituciones en Colombia y on-line. Recientemente está enfocada en el arte plástico, ilustración y todo lo relacionado con este maravilloso proyecto "Mi Bello país Colombia"';
  overlay.style.display = 'flex';
});

btn3.addEventListener('click', () => {
  overlayImage.src = '../imagenes/cathe.jpg';
  overlayImage.alt = 'Imagen 3';
  overlayText.textContent = 'Catherine Parra o "Kade" , nacida en Bogotá, Colombia. Con poco más de dos años de experiencia como animadora, estudia de manera autodidacta a través de distintos cursos online. Escritora de guiones y poemas para una serie nominada a los premios Quirino; animadora de distintas series animadas colombianas, actualmente dedicada al desarrollo del proyecto "Mi Bello País Colombia" en pro de ofrecer un producto que aporte al desarrollo intelectual de los niños.';
  overlay.style.display = 'flex';
});

btn4.addEventListener('click', () => {
  overlayImage.src = '../imagenes/axel.jpg';
  overlayImage.alt = 'Imagen 4';
  overlayText.textContent = 'Axel Ariel Córdoba nació en Rosario, Argentina. Inició su carrera de programación guiado por la curiosidad y fascinado por la manera en que se puede crear utilizando código. Actualiza sus conocimientos de forma autodidacta debido a las demandas de las nuevas tecnologías. Ha desarrollado diferentes proyectos web, así como en la actualidad apoyando este increíble e innovador proyecto educativo que esperamos ayude a niños, jóvenes y adultos a aprender de una forma artística, para demostrar que hay formas creativas de enseñanza que difundir a lo largo de toda Colombia.';
  overlay.style.display = 'flex';
});

  btn5.addEventListener('click', () => {
    overlayImage.src = '../imagenes/falco.jpg';
    overlayImage.alt = 'Imagen 5';
    overlayText.textContent = 'Falco Aguilar Rubio es un ingeniero civil de la Universidad Nacional de Colombia, con máster en Ing. Recursos hídricos. de la Universidad Católica de Leuven. Con más de 8 años de experiencia. Actualmente es el Director en el área de negocios para Reino Unido en la compañía Estal. Ha Vivido en Bélgica, Holanda y después de un año sabático por el sureste asiático, reside actualmente en Barcelona. Es un apasionado de los viajes, la economía y la sostenibilidad, así como del arte escrito y visual. Esposo afectuoso y padre de dos hermosos hijos.';
    overlay.style.display = 'flex';
  });

overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

