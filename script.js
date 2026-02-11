window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

// força scroll top no load (se você ainda usa isso)
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

// CARROSSEL: execução segura após DOM carregado
document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const carousel = document.querySelector('.carousel');

    function getItems() {
        return Array.from(document.querySelectorAll('.carousel-item'));
    }

    let items = getItems();

    // fallback se o template ainda não tiver inserido os items
    if (items.length === 0) {
        setTimeout(() => {
            items = getItems();
            updateCarousel();
            attachButtons();
        }, 100);
    }

    function updateCarousel() {
        if (!carousel) return;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function prev() {
        items = getItems();
        if (items.length === 0) return;
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    }

    function next() {
        items = getItems();
        if (items.length === 0) return;
        index = (index + 1) % items.length;
        updateCarousel();
    }

    function attachButtons() {
        const nextBtn = document.querySelector('.next');
        const prevBtn = document.querySelector('.prev');

        if (nextBtn) {
            // remover listeners antigos (seguro) ao clonar
            const nClone = nextBtn.cloneNode(true);
            nextBtn.parentNode.replaceChild(nClone, nextBtn);
            nClone.addEventListener('click', next);
        }
        if (prevBtn) {
            const pClone = prevBtn.cloneNode(true);
            prevBtn.parentNode.replaceChild(pClone, prevBtn);
            pClone.addEventListener('click', prev);
        }
    }

    // atach buttons e posicionamento inicial
    attachButtons();
    updateCarousel();

    // reposiciona durante resize para evitar deslocamento indevido
    window.addEventListener('resize', updateCarousel);
});
