const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let currentIndex = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    const offset = index - currentIndex;
    item.style.transform = `translateX(${offset * 230}px)`; // Espaciado entre cajas
    item.classList.toggle('active', index === currentIndex);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Ciclo hacia atrás
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Ciclo hacia adelante
  updateCarousel();
});

// Inicializa el carrusel
updateCarousel();
