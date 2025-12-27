# REBUILD PERA - Project Task Distribution

> **Project Overview:** Static website for University of Peradeniya Restoration Fund  
> **Team Size:** 3 Members  
> **Reference:** See `docs/website_structure.md` for detailed content requirements

---

## 📋 Project Status Overview

### ✅ COMPLETED (Shared Components)
- [x] **Navigation Bar** - Desktop & Mobile responsive menu with dropdowns
- [x] **Hero Section** - Background image, headline, stats, CTA buttons
- [x] **Footer** - Logo, quick links, projects, contact, social icons
- [x] **Tailwind CSS Setup** - CDN integration with custom config
- [x] **JS Utilities** - Counter animation, mobile nav toggle, smooth scroll

### 🔄 REMAINING WORK
All pages below are **empty placeholders** that need full implementation.

---

## 👤 MEMBER 1: Homepage Sections + Core Pages

### Homepage Additional Sections

#### Task 1.1: Before/After Gallery Section
**File:** `index.html` (add after Hero, before Footer)  
**Instructions:**
1. Create section with id `gallery` and gray background (`bg-gray-100`)
2. Add section header with "The Impact" badge and "Before & After" title
3. Create horizontal scrollable gallery with cards showing:
   - University Gymnasium (before/after)
   - Prof. Ediriweera Sarachchandra Open Air Theatre (before/after)
   - IT Centre flood damage
   - Veterinary Teaching Hospital damage
   - Faculty of Management damage
4. Each card: image placeholder, title, short description
5. Use `overflow-x-auto` for horizontal scroll on mobile
6. Images are in `assets/` folder - check what's available

#### Task 1.2: Challenge Section  
**File:** `index.html`  
**Instructions:**
1. Create section with id `challenge` and white background
2. Add "The Challenge" badge and "Why We Need Your Help" title
3. Create 5 challenge cards in a grid (1 col mobile, 2 col md, 3 col lg):
   - Landslide & Erosion Risk
   - Education Disrupted
   - Equipment Lost
   - Safety Threats
   - Emergency Preparedness
4. Each card: icon box (use SVG), title, description paragraph
5. Add hover effect: `hover:border-black transition-colors`

#### Task 1.3: Solution Section (The Restoration Plan)
**File:** `index.html`  
**Instructions:**
1. Create section with id `solution`, black background, white text
2. Add "Our Solution" badge and "The Restoration Plan" title
3. Create 6 numbered cards for the 6 key components:
   1. Gabion Walls - erosion control
   2. Slope Stabilization - geotechnical solutions  
   3. Equipment Replacement - lab & teaching equipment
   4. Facility Relocation - daycare, works department
   5. Electrical Infrastructure - transformers restoration
   6. Emergency Siren System - alerts during power failures
4. Each card: large number (01-06), emoji icon, title, description
5. Add "View Complete Restoration Plan" button linking to `plan/overview.html`

#### Task 1.4: Featured Projects Section
**File:** `index.html`  
**Instructions:**
1. Create section with id `projects`, gray background
2. Highlight 3 projects in cards:
   - Veterinary Teaching Hospital Recovery (National Importance badge, Rs. 50M x 2)
   - Student Accommodation Restoration (1,300+ Students badge, Rs. 6M)
   - ICT & Digital Infrastructure (Critical Infrastructure badge, Rs. 268M+)
3. Each card: badge, emoji, title, description, cost breakdown, "Learn More →" link
4. First card should have thick black border (featured)

#### Task 1.5: Expected Outcomes Section
**File:** `index.html`  
**Instructions:**
1. Create section with id `outcomes`, white background
2. Create 4 outcome cards in horizontal grid:
   - Disaster-Resilient Infrastructure
   - Reduced Future Risk
   - Enhanced Safety
   - Emergency Preparedness
3. Each card: checkmark icon box, title, short description
4. Cards should have gray background with hover effect

#### Task 1.6: Call to Action Section
**File:** `index.html`  
**Instructions:**
1. Create section with id `cta`, black background, centered content
2. Large headline: "Help Us Rebuild a Legacy"
3. Supporting paragraph about impact of donations
4. Two buttons: "Donate Now" (white) and "Why Support Us" (outline)
5. Italic tagline: "For the benefit of present and future generations"

---

### Core Pages

#### Task 1.7: Donate Page
**File:** `donate.html`  
**Instructions:**
1. Copy navbar and footer from `index.html`
2. Create hero section with "Make a Donation" title
3. Add donation information section with:
   - Bank account details (placeholder - ask project lead for real details)
   - Foreign currency donation instructions
   - Contact email: bursar@pdn.ac.lk
4. Optional: Add donation tiers (suggested amounts)
5. Include trust badges (university logo, official seal)

#### Task 1.8: Acknowledgements Page (acknowledgements.html)
**File:** `acknowledgements.html`  
**Instructions:**
1. Copy navbar and footer from `index.html`
2. Rename to acknowledgements content
3. Create sections for:
   - University leadership acknowledgment
   - Partner organizations (if any)
   - Donor recognition (placeholder for future)
   - Contact information for inquiries
4. Professional, formal tone

---

## 👤 MEMBER 2: The damage Pages (6 pages)

**Common Setup for ALL pages:**
1. Copy navbar and footer from `index.html`
2. **Add HERO section** (see structure below)
3. Add content sections with: badge, title, content
4. Reference `docs/website_structure.md` for exact content

**Hero Section Template (use on EVERY page):**
```html
<section class="relative py-32 text-white" style="background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/damage/PAGE-IMAGE.jpg') center/cover no-repeat;">
    <div class="max-w-7xl mx-auto px-6 pt-16">
        <!-- Breadcrumb -->
        <nav class="text-sm text-gray-300 mb-4">
            <a href="../index.html" class="hover:text-white">Home</a> / 
            <span>The Damage</span> / 
            <span class="text-white">PAGE TITLE</span>
        </nav>
        <!-- Page Title -->
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4">PAGE TITLE</h1>
        <p class="text-lg text-gray-300 max-w-2xl">Brief description of this section.</p>
    </div>
</section>
```

---

#### Task 2.1: Background & Situation Analysis
**File:** `damage/background.html`  

**HERO:**
- Title: "Background & Situation"
- Subtitle: "Understanding the impact of the Ditwah Cyclone on Peradeniya"
- Background image: Wide shot of flooded campus

**CONTENT SECTIONS:**
1. **The Ditwah Cyclone** section:
   - Explanation of floods and landslides
   - Impact across Sri Lanka
2. **Why Peradeniya Was Severely Affected**:
   - Geographic sensitivity (river basin, hilly terrain)
   - List: flooding, slope failures, erosion, landslides
3. **About the University**:
   - Sri Lanka's oldest/largest comprehensive university
   - Quote: "LKR 4 billion in damages"
4. **Immediate Impacts**:
   - Academic interruption
   - Safety risks
   - 1,300+ students displaced

#### Task 2.2: Faculty of Management
**File:** `damage/management.html`  

**HERO:**
- Title: "Faculty of Management"
- Subtitle: "Severe damage to one of the university's key faculties"
- Background image: Management faculty flood damage

**CONTENT SECTIONS:**
1. Overview section about severity of damage
2. **Damages to Buildings** - lecture halls, libraries, auditoriums, cafeterias
3. **ICT Losses Table** (create a table):
   - 240 desktops, 10 laptops
   - 7 inkjet printers, 3 photocopiers
   - 2 servers, 8 switches, 3 UPS
   - 10 smart panels, 7 projectors
4. **Other Equipment**: freezer, AC units, speakers
5. **Infrastructure Damage**: electricity, internet, retaining walls
6. **Impact on Education**: teaching, distance learning affected
7. **Related Projects**: E2 (Rs. 127M), C2-G links
8. Add photo gallery placeholder

#### Task 2.3: Faculty of Veterinary Medicine
**File:** `damage/veterinary.html`  

**HERO:**
- Title: "Faculty of Veterinary Medicine"
- Subtitle: "Home to Sri Lanka's ONLY Veterinary Teaching Hospital"
- Background image: Veterinary hospital damage

**CONTENT SECTIONS:**
1. Emphasize: **Only Veterinary Teaching Hospital in Sri Lanka**
2. **Teaching Hospital Damage**:
   - List equipment: theatre tables, anaesthetic machines, surgical instruments, monitors, sterilisation units, biosafety cabinets
   - Neonatal care, necropsy facilities affected
3. **Farm Animal Hospital**: extensive damage
4. **Biochemistry Laboratory**: equipment damaged
5. **CAADDR Section** (Centre for Aquatic Animal Disease):
   - Biosafety cabinets, PCR machines, incubators, microscopes, autoclaves
   - National diagnostic capacity affected
6. **Related Projects**: L1 (Rs. 50M), L2 (Rs. 50M), E3 (Rs. 38.61M)
7. Photo gallery with CAADDR, Farm Hospital, Biochemistry Lab

#### Task 2.4: Faculty of Agriculture
**File:** `damage/agriculture.html`  

**HERO:**
- Title: "Faculty of Agriculture"
- Subtitle: "Critical research for Sri Lanka's food security"
- Background image: Agriculture faculty damage

**CONTENT SECTIONS:**
1. Overview: critical for food security research
2. **Animal Science Department**: lab equipment, farm support equipment
3. **Animal Science Laboratory**: 
   - Laboratory instruments
   - Feed processing equipment
   - Pumps, environmental controls
4. **Soil Science Lab & Store**:
   - Soil testing instruments
   - Storage racks, sample cabinets, safety cabinets
5. **Agricultural Engineering**: facilities damaged
6. **Related Projects**: L3 (Rs. 100M), L4, E3, C2-C/D/J slope works
7. Photo placeholder for Department of Animal Science

#### Task 2.5: University Infrastructure
**File:** `damage/infrastructure.html`  

**HERO:**
- Title: "University Infrastructure"
- Subtitle: "Widespread damage across campus facilities"
- Background image: Gymnasium or Swimming Pool damage

**CONTENT SECTIONS:**
1. **University Gymnasium**: before/after, sports events, graduation ceremonies
2. **Swimming Pool**: structural damage, retaining wall, pumps
3. **IT Centre**: 
   - 3 servers destroyed
   - 30 workstations
   - Core switches/routers
   - Related: E1 (Rs. 102.84M)
4. **Residential Infrastructure**:
   - Sarasavi Medura (144+ students)
   - Seneka Bibile Hall
   - Staff quarters
5. **Cultural Landmarks**:
   - Open Air Theatre
   - University Pre-School (needs relocation)
6. **Administrative Facilities**:
   - Works Department (needs relocation)
   - General Stores
7. **Equipment Summary Table**: 309 desktops, 17 laptops, etc.

#### Task 2.6: Photo & Video Gallery
**File:** `damage/gallery.html`  

**HERO:**
- Title: "Photo & Video Gallery"
- Subtitle: "Documenting the damage across campus"
- Background image: Collage or dramatic damage shot

**CONTENT SECTIONS:**
1. Create filterable gallery layout
2. Categories:
   - Gymnasium (before/after)
   - Open Air Theatre (before/after)
   - IT Centre
   - Animal Science Department
   - CAADDR
   - Farm Animal Hospital
   - Biochemistry Lab
   - CDCE
   - Swimming Pool
   - Faculty of Management
   - Works Department
   - Student Hostels
3. Grid layout with image cards
4. Each image: caption explaining context
5. Use images from `assets/` folder
6. Add lightbox functionality (optional: simple CSS/JS modal)

---

## 👤 MEMBER 3: Projects Page + About Page

**Common Setup for ALL pages:**
1. Copy navbar and footer from `index.html`
2. Add hero section with page title
3. Use consistent section structure
4. Reference `docs/website_structure.md` for exact content

---

#### Task 3.1: Projects Page (Single Page with All Projects)
**File:** `projects.html`  

**HERO:**
- Title: "Our Restoration Projects"
- Subtitle: "Comprehensive recovery efforts across all university facilities"
- Background image: Campus restoration work

**PAGE STRUCTURE:**
Create a single page with sections for each project category. Use anchor IDs for navigation.

**Section 1: Overview** (id="overview")
1. **Overall Objective** with main quote
2. **6 Key Components** - brief cards:
   - Gabion Walls, Slope Stabilization, Equipment Replacement
   - Facility Relocation, Electrical Infrastructure, Emergency Siren System
3. **Expected Outcomes** (4 key outcomes)

**Section 2: Electronic & ICT Recovery** (id="ict")
1. Total: Rs. 268.45+ Million
2. Cards for: E1 Core ICT (Rs. 102.84M), E2 Management Faculty (Rs. 127M), E3 Office ICT (Rs. 38.61M), E4 Communications
3. Visual cost breakdown (progress bars)

**Section 3: Laboratory Equipment Recovery** (id="laboratory")
1. Total: Rs. 200+ Million
2. Cards for: L1 Veterinary Teaching (Rs. 50M), L2 CAADDR (Rs. 50M), L3 Animal Science (Rs. 100M), L4 Soil Science

**Section 4: Student Welfare & Accommodation** (id="welfare")
1. Total: Rs. 63.7+ Million, 1,300+ students
2. Cards for: S1 Emergency Relief, S2 Sarasavi Medura (Rs. 6M), S3 Counselling, S4 Sports (Rs. 57.7M)

**Section 5: Professional Services** (id="services")
1. P1: Geotechnical Study (Ma Oya, Mahaweli banks)
2. P2: Campus Safety Audit (structural assessments)

**Section 6: Capital Works & Construction** (id="capital")
1. C1: Ma-Oya Riverbank Protection
2. C2: Mahaweli Slope Stabilisation (10 locations table)
3. C3: Rajawatte Redevelopment
4. C4: Drainage & Landslide Mitigation
5. C5: Swimming Pool Rehabilitation

**Downloadable Resources** at bottom:
- Link to `docs/proposal.pdf`
- Link to compressed version


---

## 📁 Shared Resources

### Assets Folder Structure
```
assets/
├── Uni-logo-500.png (logo - already in use)
├── home/
│   └── carousel-1.jpg (hero background - already in use)
├── damage/ (create if needed)
│   ├── gymnasium-before.jpg
│   ├── gymnasium-after.jpg
│   ├── theatre-before.jpg
│   └── ... (per website_structure.md)
└── icons/ (optional for custom icons)
```

### Reference Documents
- `docs/website_structure.md` - Detailed content requirements
- `docs/proposal.pdf` - Full project proposal
- `docs/proposal_compressed.pdf` - Compressed version for web

---

## 📏 Style Guidelines

### Typography
- Headings: Uppercase, bold (`font-extrabold`)
- Body: Regular weight, gray-500 for secondary text
- Font: Inter (already loaded)

### Colors
- Primary: Black (`bg-black`, `text-black`)
- Secondary: Gray scale (`gray-100` to `gray-800`)
- Accent: White on black for CTAs

### Responsive Breakpoints
- Mobile first approach
- `md:` for tablet (768px)
- `lg:` for desktop (1024px)

### Common Classes Used
```html
<!-- Section container -->
<section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">

<!-- Badge label -->
<span class="inline-block px-4 py-1 border border-black text-black text-xs font-semibold uppercase tracking-wider mb-4">

<!-- Section title -->
<h2 class="text-4xl md:text-5xl font-bold text-black mb-4">

<!-- Card with hover -->
<div class="border border-gray-200 p-8 hover:border-black transition-colors">

<!-- Button primary -->
<a class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-black text-white hover:bg-gray-800">

<!-- Button outline -->
<a class="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-transparent text-black border-2 border-black hover:bg-black hover:text-white transition-all">
```

---

## ✅ Completion Checklist

### Member 1
- [ ] Task 1.1: Before/After Gallery Section
- [ ] Task 1.2: Challenge Section
- [ ] Task 1.3: Solution Section
- [ ] Task 1.4: Featured Projects Section
- [ ] Task 1.5: Expected Outcomes Section
- [ ] Task 1.6: Call to Action Section
- [ ] Task 1.7: Donate Page
- [ ] Task 1.8: Acknowledgements Page

### Member 2
- [ ] Task 2.1: Background & Situation Analysis
- [ ] Task 2.2: Faculty of Management
- [ ] Task 2.3: Faculty of Veterinary Medicine
- [ ] Task 2.4: Faculty of Agriculture
- [ ] Task 2.5: University Infrastructure
- [ ] Task 2.6: Photo & Video Gallery

### Member 3
- [ ] Task 3.1: Projects Page (Single Page with All Projects)

---

## 🔧 Testing & Quality Assurance

After completing tasks:
1. **Cross-browser testing**: Chrome, Firefox, Safari
2. **Responsive testing**: Mobile (375px), Tablet (768px), Desktop (1024px+)
3. **Link verification**: All internal links work
4. **Image optimization**: Compress images before deployment
5. **Accessibility**: Alt text on images, proper heading hierarchy
