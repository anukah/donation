/**
 * Rebuild Peradeniya - Main JavaScript
 * University of Peradeniya Restoration Fund Website
 */

// ===== Animated Counter =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Intersection Observer for counter animation
const statNumbers = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const target = parseInt(element.dataset.count);
            animateCounter(element, target);
            counterObserver.unobserve(element);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => counterObserver.observe(stat));

// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('flex');
    });
}

// ===== Mobile Dropdown Toggle =====
document.querySelectorAll('#navMenu .border-b > a').forEach(toggle => {
    // Only attach to dropdown toggles (ones with a next sibling ul)
    const submenu = toggle.nextElementSibling;
    if (submenu && submenu.tagName === 'UL') {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            submenu.classList.toggle('hidden');
        });
    }
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});




// GALLARY SECTION

document.addEventListener('DOMContentLoaded', () => {
    initDynamicGallery();
    initGalleryScroll();
});

function initDynamicGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    const galleryData = [
        {
            title: "University Gymnasium",
            description: "Once a hub for student athletics, the indoor stadium remains submerged in mud and debris.",
            damageBadge: "CRITICAL DAMAGE",
            beforeImg: "assets/home/1.jpg",
            afterImg: "assets/home/hero.jpg"
        },
        {
            title: "Sarachchandra Open Air Theatre",
            description: "The iconic 'Wala' was completely inundated. The stage structure has suffered severe weakening.",
            damageBadge: "FLOODED",
            beforeImg: "assets/home/1.jpg",
            afterImg: "assets/home/hero.jpg"
        },
        {
            title: "Information Technology Centre",
            description: "Server rooms and computer laboratories were destroyed, disrupting digital services.",
            damageBadge: "EQUIPMENT LOST",
            beforeImg: "assets/home/1.jpg",
            afterImg: "assets/home/hero.jpg"
        },
        {
            title: "Veterinary Teaching Hospital",
            description: "Sri Lanka's only veterinary teaching hospital lost critical diagnostic equipment and operating theaters.",
            damageBadge: "SEVERE DAMAGE",
            beforeImg: "assets/home/1.jpg",
            afterImg: "assets/home/hero.jpg"
        },
        {
            title: "Faculty of Management",
            description: "Lecture halls and the administrative complex were flooded, destroying records and furniture.",
            damageBadge: "RECORDS DESTROYED",
            beforeImg: "assets/home/1.jpg",
            afterImg: "assets/home/hero.jpg"
        }
    ];

    const cardsHTML = galleryData.map((item, index) => `
        <div class="dynamic-card flex-none w-[85vw] md:w-[400px] bg-white border border-gray-200 shadow-sm snap-center overflow-hidden group relative" data-index="${index}">
            
            <div class="h-64 bg-gray-300 relative overflow-hidden">
                <img src="${item.afterImg}" alt="${item.title} After" 
                    class="absolute inset-0 w-full h-full object-cover z-0">
                
                <img src="${item.beforeImg}" alt="${item.title} Before" 
                    class="before-layer absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 opacity-0">
                
                <div class="status-badge absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm z-20 transition-all duration-300">
                    ${item.damageBadge}
                </div>
            </div>

            <div class="p-6 bg-white relative z-20">
                <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                    ${item.description}
                </p>
            </div>
        </div>
    `).join('');

    container.innerHTML = cardsHTML;

    // Animation Logic
    const cards = document.querySelectorAll('.dynamic-card');

    cards.forEach(card => {
        const index = card.dataset.index;
        const data = galleryData[index];
        const beforeLayer = card.querySelector('.before-layer');
        const badge = card.querySelector('.status-badge');

        // CSS Classes for Badge States
        const styleDamage = "status-badge absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm z-20 transition-all duration-300";
        const styleSafe = "status-badge absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm z-20 transition-all duration-300";

        let isShowingBefore = false;

        setInterval(() => {
            if (isShowingBefore) {
                beforeLayer.classList.remove('opacity-100');
                beforeLayer.classList.add('opacity-0');
                badge.textContent = data.damageBadge;
                badge.className = styleDamage;
            } else {
                beforeLayer.classList.remove('opacity-0');
                beforeLayer.classList.add('opacity-100');
                badge.textContent = "BEFORE FLOOD";
                badge.className = styleSafe;
            }
            isShowingBefore = !isShowingBefore;
        }, 5000);
    });
}

function initGalleryScroll() {
    const container = document.getElementById('gallery-container');
    const prevBtn = document.getElementById('gallery-prev');
    const nextBtn = document.getElementById('gallery-next');

    if (!container || !prevBtn || !nextBtn) return;

    const scrollAmount = 424;

    prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}