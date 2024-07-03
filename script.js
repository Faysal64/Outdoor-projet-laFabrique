document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach((carousel) => {
        const slides = carousel.querySelector('.slides');
        const navDots = carousel.querySelectorAll('.nav-dot');

        let currentIndex = 0;

        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });

        function updateCarousel() {
            const slideWidth = slides.children[0].offsetWidth + 30; // gap 30px
            slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[currentIndex].classList.add('active');
        }

        updateCarousel();
    });
});


