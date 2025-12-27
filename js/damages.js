document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navbar Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
    }

    // --- 2. Accordion Logic ---
    const sectionToggles = document.querySelectorAll('.section-toggle');

    sectionToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Target the content div (sibling)
            const content = this.nextElementSibling;
            const arrow = this.querySelector('.arrow-icon');
            
            // Toggle Collapsed Class (Logic: Default is Open/Visible)
            content.classList.toggle('collapsed');
            arrow.classList.toggle('collapsed');
        });
    });

    // --- 3. Close Mobile Menu on Link Click ---
    const mobileLinks = document.querySelectorAll('#navMenu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && !navMenu.classList.contains('hidden')) {
                navMenu.classList.add('hidden');
            }
        });
    });

});