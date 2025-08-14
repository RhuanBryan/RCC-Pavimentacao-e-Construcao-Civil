let index = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}
