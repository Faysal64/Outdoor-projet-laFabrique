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

document.addEventListener('DOMContentLoaded', function () {
    let toggle = document.querySelector('.toggle');
    let navBar = document.querySelector('#nav-bar');
    let menuIcon = document.querySelector('.menu-icon');
    let navLinks = document.querySelectorAll('#nav-bar a');

    toggle.addEventListener('click', function () {
        navBar.classList.toggle('show');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');

        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.remove('colorkit2');
            menuIcon.classList.add('colorkit');
        } else {
            menuIcon.classList.remove('colorkit');
            menuIcon.classList.add('colorkit2');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

