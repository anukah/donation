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




const galleries = {
    animal_science: createGalleryData('animal', 'animal', 12),
    gym: createGalleryData('gym', 'gym', 12),
    it_center: createGalleryData('it-center', 'it', 12),
    management: createGalleryData('management', 'management', 12),
    pool: createPoolData(),
    veterinary: [
        { src: '../assets/veterinary/biochemistry.jpg', caption: '' },
        { src: '../assets/veterinary/caaddr.jpg', caption: '' },
        { src: '../assets/veterinary/farm-hospital.jpg', caption: '' },
        { src: '../assets/veterinary/hero-damage.jpg', caption: '' }
    ],
    works_department: createGalleryData('works', 'works', 12)
};

function createGalleryData(folder, prefix, count) {
    const data = [];
    for (let i = 1; i <= count; i++) {
        data.push({ src: `../assets/${folder}/${prefix}_${i}.jpg`, caption: '' });
    }
    return data;
}

function createPoolData() {
    const data = [];
    for (let i = 1; i <= 11; i++) {
        data.push({ src: `../assets/pool/pool_${i}.jpg`, caption: '' });
    }
    data.push({ src: `../assets/pool/pool_1.jpg`, caption: '' });
    return data;
}

let currentGalleryImages = [];
let currentIndex = 0;
let isShowingBatch1 = true; 

const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const lightboxCaption = document.getElementById('lightbox-caption');

document.addEventListener('DOMContentLoaded', () => {
    renderSection('gallery-animal', galleries.animal_science, 'animal_science');
    renderSection('gallery-gym', galleries.gym, 'gym');
    renderSection('gallery-it', galleries.it_center, 'it_center');
    renderSection('gallery-management', galleries.management, 'management');
    renderSection('gallery-pool', galleries.pool, 'pool');
    renderSection('gallery-veterinary', galleries.veterinary, 'veterinary');
    renderSection('gallery-works', galleries.works_department, 'works_department');
    
    startImageToggler();
});

function toggleSection(elementId) {
    const container = document.getElementById(elementId);
    const icon = document.getElementById('icon-' + elementId);
    
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        icon.classList.remove('-rotate-90');
    } else {
        container.classList.add('hidden');
        icon.classList.add('-rotate-90');
    }
}

function renderSection(elementId, data, category) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (data.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center text-gray-500 py-10">No images available.</div>`;
        return;
    }

    if (data.length < 12) {
        data.forEach((item, i) => {
            const card = document.createElement('div');
            card.className = "group relative h-64 sm:h-72 md:h-80 overflow-hidden shadow-md cursor-pointer bg-gray-200 break-inside-avoid";
            
            card.onclick = () => {
                openLightbox(category, i);
            };
            
            card.innerHTML = `
                <img src="${item.src}" 
                     alt="Gallery Image" 
                     class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            `;
            container.appendChild(card);
        });
    } else {
        for (let i = 0; i < 6; i++) {
            const itemBatch1 = data[i];     
            const itemBatch2 = data[i + 6]; 

            const card = document.createElement('div');
            card.className = "group relative h-64 sm:h-72 md:h-80 overflow-hidden shadow-md cursor-pointer bg-gray-200 break-inside-avoid";
            
            card.onclick = () => {
                const actualIndex = isShowingBatch1 ? i : (i + 6);
                openLightbox(category, actualIndex);
            };
            
            card.innerHTML = `
                <img src="${itemBatch2.src}" 
                     alt="Gallery Image" 
                     class="absolute inset-0 w-full h-full object-cover z-0">
                
                <img src="${itemBatch1.src}" 
                     alt="Gallery Image" 
                     class="gallery-fade-layer absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-1000 ease-in-out opacity-100">
                
                <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 z-20 transition-all duration-300"></div>
            `;
            container.appendChild(card);
        }
    }
}

function startImageToggler() {
    setInterval(() => {
        isShowingBatch1 = !isShowingBatch1;

        const layers = document.querySelectorAll('.gallery-fade-layer');
        
        layers.forEach(layer => {
            if (isShowingBatch1) {
                layer.classList.remove('opacity-0');
                layer.classList.add('opacity-100');
            } else {
                layer.classList.remove('opacity-100');
                layer.classList.add('opacity-0');
            }
        });
    }, 5000); 
}

function openLightbox(category, index) {
    currentGalleryImages = galleries[category];
    currentIndex = index;
    updateLightboxContent();
    
    lightbox.classList.remove('hidden');
    setTimeout(() => {
        lightbox.classList.remove('opacity-0');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.add('opacity-0');
    setTimeout(() => {
        lightbox.classList.add('hidden');
        lightboxContent.innerHTML = '';
    }, 300);
    document.body.style.overflow = 'auto';
}

function updateLightboxContent() {
    const item = currentGalleryImages[currentIndex];
    lightboxCaption.innerText = item.caption || "";
    lightboxContent.innerHTML = '';

    const img = document.createElement('img');
    img.src = item.src;
    img.className = "max-w-full max-h-[80vh] object-contain rounded shadow-2xl";
    lightboxContent.appendChild(img);
}

function changeSlide(direction) {
    currentIndex += direction;
    
    if (currentIndex >= currentGalleryImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentGalleryImages.length - 1;
    
    updateLightboxContent();
}

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('hidden')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'ArrowLeft') changeSlide(-1);
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});