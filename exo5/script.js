const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.right');
const prevButton = document.querySelector('.carousel-button.left');
const dots = Array.from(document.querySelectorAll('.carousel-indicator'));

let currentIndex = 0;

const updateCarousel = (index) => {
  track.style.transform = `translateX(-${index * 100}%)`;
  document.querySelector('.carousel-indicator.current-slide').classList.remove('current-slide');
  dots[index].classList.add('current-slide');
};


nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});


prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});


dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(currentIndex);
  });
});
