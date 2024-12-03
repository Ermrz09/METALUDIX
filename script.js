const carousel = document.querySelector('.carousel');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

const updateCarousel = () => {
  const itemWidth = document.querySelector('.carousel-item').offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * (itemWidth + 20)}px)`;
};

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : 3;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex < 3) ? currentIndex + 1 : 0;
  updateCarousel();
});
