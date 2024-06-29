document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelector('.slides');
    const navDots = document.querySelectorAll('.nav-dot');

    let currentIndex = 0;

    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    function updateCarousel() {
        const slideWidth = slides.children[0].offsetWidth + 30; // Inclut le gap de 30px
        slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

        navDots.forEach(dot => dot.classList.remove('active'));
        navDots[currentIndex % 4].classList.add('active');
    }

    updateCarousel();
});
