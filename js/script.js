// Mobile Menu Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

function toggleMenu() {
    if (!mobileMenu) return;
    const isHidden = mobileMenu.classList.contains('translate-x-full');
    if (isHidden) {
        mobileMenu.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
        mobileMenu.classList.add('translate-x-full');
        document.body.style.overflow = ''; // Unlock scroll
    }
}

if (mobileBtn && closeBtn) {
    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
}

// Close menu when a link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Scroll Reveal Animation Logic
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(element => {
    observer.observe(element);
});


