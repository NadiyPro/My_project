window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    gsap.to('.box', {
        scrollTrigger: {
            trigger: '.box',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
        },
    });

    // Оновлення змінної --scrollTop під час скролу
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`);
    });
});