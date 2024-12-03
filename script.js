const carouselWrapper = document.querySelector('.carousel-wrapper');
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

let isMouseDown = false;
let startX;
let scrollLeft = 0;
let maxScrollWidth;
let itemWidth = carouselItems[0].offsetWidth + 40; // Ancho de las cajas
let carouselWidth = carouselWrapper.offsetWidth;

// Calcular el ancho máximo del carrusel
maxScrollWidth = (carouselItems.length - 1) * itemWidth;

// Función de drag
function dragMove(e) {
    if (!isMouseDown) return;
    const diff = startX - e.pageX;
    carouselWrapper.style.transform = `translateX(${scrollLeft - diff}px)`;
}

// Evento para iniciar el arrastre
carouselWrapper.addEventListener('mousedown', (e) => {
    // Solo activar el movimiento si se hace clic fuera de las cajas
    if (!e.target.classList.contains('carousel-item')) {
        isMouseDown = true;
        startX = e.pageX;
        carouselWrapper.style.cursor = 'grabbing'; // Cambiar el cursor
    }
});

// Evento para mover el carrusel
carouselWrapper.addEventListener('mousemove', dragMove);

// Evento para soltar el mouse y detener el movimiento
carouselWrapper.addEventListener('mouseup', () => {
    isMouseDown = false;
    carouselWrapper.style.cursor = 'grab';

    // Ajustar la posición cuando se suelta el mouse
    const newScrollLeft = scrollLeft - (startX - event.pageX);
    carouselWrapper.style.transition = 'transform 0.3s ease';
    carouselWrapper.style.transform = `translateX(${newScrollLeft}px)`;

    scrollLeft = newScrollLeft;

    // Activar el loop infinito
    if (scrollLeft >= maxScrollWidth) {
        scrollLeft = 0;
    } else if (scrollLeft < 0) {
        scrollLeft = maxScrollWidth - itemWidth;
    }

    carouselWrapper.style.transition = 'transform 0.3s ease';
    carouselWrapper.style.transform = `translateX(-${scrollLeft}px)`;
});

// Evitar la selección de texto al arrastrar
carouselWrapper.addEventListener('mousedown', (e) => {
    e.preventDefault();
});
