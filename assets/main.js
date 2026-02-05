document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Header Logic
    const header = document.getElementById('main-header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('glass-nav', 'shadow-lg');
            header.classList.remove('py-4');
            header.classList.add('py-2');
        } else {
            header.classList.remove('glass-nav', 'shadow-lg');
            header.classList.remove('py-2');
            header.classList.add('py-4');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 3. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });

    // 4. FAQ Accordion with ARIA support
    const faqButtons = document.querySelectorAll('.faq-toggle');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle aria-expanded state
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);

            // Toggle the content
            const contentId = button.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            if (content) {
                content.classList.toggle('hidden');
            }

            // Rotate the icon
            const icon = button.querySelector('svg');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }

            // Optional: Close other FAQs (Accordion style)
            // Uncomment the lines below if you want only one FAQ open at a time
            /*
            faqButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.setAttribute('aria-expanded', 'false');
                    const otherContentId = otherButton.getAttribute('aria-controls');
                    const otherContent = document.getElementById(otherContentId);
                    if (otherContent) {
                        otherContent.classList.add('hidden');
                    }
                    const otherIcon = otherButton.querySelector('svg');
                    if (otherIcon) {
                        otherIcon.classList.remove('rotate-180');
                    }
                }
            });
            */
        });
    });
});
