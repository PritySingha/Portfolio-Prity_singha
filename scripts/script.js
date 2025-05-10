// script.js
import { initializeTheme } from './theme.js';

// Portfolio Filter Function (now exported for potential reuse)
export function filterProjects(filter) {
    const projects = document.querySelectorAll('.grid-item');
    projects.forEach(project => {
        const isMatch = filter === 'all' || project.dataset.category === filter;
        
        gsap.to(project, {
            duration: isMatch ? 0.4 : 0.3,
            opacity: isMatch ? 1 : 0,
            scale: isMatch ? 1 : 0.8,
            display: isMatch ? 'grid' : 'none', // Use grid instead of block for better layout
            ease: isMatch ? 'power2.out' : 'power2.in',
            overwrite: true
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme
    initializeTheme();

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.filter);
        });
    });

    // GSAP Animations
    const animateElements = [
        { selector: '.navbar', props: { y: -100, opacity: 0 } },
        { selector: '.animated-text', props: { y: 100, opacity: 0, stagger: 0.2 } }
    ];

    animateElements.forEach(({ selector, props }) => {
        gsap.from(selector, {
            ...props,
            duration: 1,
            ease: 'power4.out',
            delay: selector === '.navbar' ? 0 : 0.5
        });
    });

    // Smooth Scroll with offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 80; // Adjust based on navbar height
            
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    // Optimized Hero Parallax
    let lastTime = 0;
    const parallaxThrottle = (e) => {
        const now = Date.now();
        if (now - lastTime >= 50) { // 20fps throttle
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            gsap.to('.hero-title', {
                x: x * 30 - 15,
                y: y * 30 - 15,
                duration: 1.5,
                ease: 'power2.out'
            });
            
            gsap.to('.hero-shape', {
                x: x * 50 - 25,
                y: y * 50 - 25,
                duration: 2,
                ease: 'power2.out'
            });
            
            lastTime = now;
        }
    };

    window.addEventListener('mousemove', parallaxThrottle);

    // Dynamic CTA Colors using CSS Variables
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to('.cta-border', {
                borderColor: 'var(--dynamic-accent)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to('.cta-border', {
                borderColor: 'var(--accent-dark)', // Fallback
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }
});
