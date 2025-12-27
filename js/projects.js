// ==========================================
// 1. DATA SECTION
// ==========================================
const recoveryData = [
    {
        "faculty": "Faculty of Veterinary Medicine & Animal Science",
        "id": "vet",
        "projects": [
            { "code": "VET 01", "title": "Laboratories", "damage": "Full", "desc": "Completely flooded Micro, Farm CAADDR, and Biochemistry Labs.", "action": "Repair (Walls, ceiling, electrical repairs, partitions, glass repair).", "cost": "100" },
            { "code": "VET 02", "title": "Administration Buildings", "damage": "Partial", "desc": "Main Administration, CAADDR, and Farm Animal buildings affected.", "action": "Repair (Ceiling, partitions, glass doors, and electrical systems).", "cost": "8" },
            { "code": "VET 03", "title": "Cafeterias", "damage": "Partial", "desc": "Student Canteen, cooking area, and goods.", "action": "Floor, walls, electrical wiring, painting, replacing furniture, and other goods (cooking equipment).", "cost": "5" },
            { "code": "VET 04", "title": "Vet Teaching Hospital & Sales Center", "damage": "Partial", "desc": "Hospital, Postmortem Room, and Sales Center affected.", "action": "Repair (Walls, doors, electrical systems, and partitions).", "cost": "53" },
            { "code": "VET 05", "title": "Furniture", "damage": "Full", "desc": "Cupboards, tables, chairs, and glass cupboards.", "action": "Replace.", "cost": "100" },
            { "code": "VET 06", "title": "ICT Equipment", "damage": "Full", "desc": "40 Computers, 5 Printers, 2 Smart Boards, 50 UPS units.", "action": "Replace and Repair.", "cost": "15" },
            { "code": "VET 07", "title": "Laboratory Equipment", "damage": "Full", "desc": "Centrifuges, autoclaves, and incubators.", "action": "Replace and Repair.", "cost": "980" },
            { "code": "VET 08", "title": "VET Teaching Hospital (Other Equipment)", "damage": "Full", "desc": "Hospital equipment, theatre tables, and anesthetic machines.", "action": "Replace and Repair.", "cost": "520" },
            { "code": "VET 09", "title": "Sanitation Facilities", "damage": "Full", "desc": "Washrooms of affected buildings.", "action": "Repair.", "cost": "7" },
            { "code": "VET 10", "title": "Electricity System", "damage": "Full", "desc": "Main switches, panel boards, and electrical sockets.", "action": "Repair and Replace.", "cost": "10" },
            { "code": "VET 11", "title": "Internet Connection / System", "damage": "Full", "desc": "Routers and switches.", "action": "Replace and Repair.", "cost": "25" },
            { "code": "VET 12", "title": "AC Machines and Systems", "damage": "Full", "desc": "20 AC units.", "action": "Replace and Repair.", "cost": "6" },
            { "code": "VET 13", "title": "Walls / Retaining Walls", "damage": "Full", "desc": "Collapsed boundary wall and fence.", "action": "Repair.", "cost": "10" },
            { "code": "VET 14", "title": "Other Damages", "damage": "Full", "desc": "Consumables and Chemicals.", "action": "Replace.", "cost": "150" }
        ]
    },
    {
        "faculty": "Faculty of Management",
        "id": "mgt",
        "projects": [
            { "code": "MGT 01", "title": "Lecture Halls", "damage": "Minimal", "desc": "One Lecture Hall.", "action": "Repair (Walls, replace doors and windows, painting).", "cost": "1" },
            { "code": "MGT 02", "title": "Laboratories", "damage": "Full", "desc": "Simulation Lab.", "action": "Replace Simulation Lab computers, furniture, and software.", "cost": "100" },
            { "code": "MGT 03", "title": "Administration Buildings", "damage": "Full", "desc": "Main Administration Floor.", "action": "Repair.", "cost": "5" },
            { "code": "MGT 04", "title": "Auditorium", "damage": "Full", "desc": "One Auditorium.", "action": "Repair.", "cost": "2" },
            { "code": "MGT 05", "title": "Cafeterias", "damage": "Partial", "desc": "Student Canteen.", "action": "Repair (Floor, walls, electrical wiring, painting), replacing furniture and other goods.", "cost": "1" },
            { "code": "MGT 06", "title": "Recreation Areas", "damage": "Full", "desc": "Full damage to the area.", "action": "Repair.", "cost": "10" },
            { "code": "MGT 07", "title": "Furniture", "damage": "Full", "desc": "Chairs, Tables, and Cupboards.", "action": "Replace and Repair.", "cost": "100" },
            { "code": "MGT 08", "title": "ICT Equipment", "damage": "Full", "desc": "240 Computers, Multimedia Projectors, Smart Boards, Printers, and UPS units.", "action": "Repair and Replace.", "cost": "122" },
            { "code": "MGT 09", "title": "Electricity System", "damage": "Full", "desc": "Panel Boards, Switches, and Fans.", "action": "Repair and Replace.", "cost": "2.5" },
            { "code": "MGT 10", "title": "Internet Connection / System", "damage": "Full", "desc": "Routers and Switches.", "action": "Repair and Replace.", "cost": "5" },
            { "code": "MGT 11", "title": "AC Machines and Systems", "damage": "Full", "desc": "Indoor and Outdoor AC Units.", "action": "Repair and Replace.", "cost": "2" },
            { "code": "MGT 12", "title": "Internal Roads", "damage": "Minimal", "desc": "Internal Road.", "action": "Repair.", "cost": "1" },
            { "code": "MGT 13", "title": "Vehicles", "damage": "Partial", "desc": "Car and Bus.", "action": "Repair.", "cost": "4" }
        ]
    },
    {
        "faculty": "Faculty of Agriculture",
        "id": "agri",
        "projects": [
            { "code": "AGR 01", "title": "Laboratories", "damage": "Partial", "desc": "Animal Science Laboratory.", "action": "Repair (Walls, Ceiling, Partitions, Electrical Plugs, and Panel Boards Repair).", "cost": "100" },
            { "code": "AGR 02", "title": "Furniture", "damage": "Full", "desc": "Cupboards, Tables, Chairs, and Glass Cupboards.", "action": "Replace.", "cost": "3" },
            { "code": "AGR 03", "title": "Laboratory Equipment", "damage": "Full", "desc": "Scientific Equipment.", "action": "Repair and Replace.", "cost": "118" },
            { "code": "AGR 04", "title": "Sanitation Facilities", "damage": "Full", "desc": "Plumbing and Water Pump Connectivity.", "action": "Repair and Replace.", "cost": "3" },
            { "code": "AGR 05", "title": "Electricity System", "damage": "Full", "desc": "Main Switches, Panel Boards, Electrical Sockets, and Generator.", "action": "Repair and Replace.", "cost": "5" },
            { "code": "AGR 06", "title": "Internal Roads", "damage": "Full", "desc": "3 Internal Roads.", "action": "Repair.", "cost": "5" },
            { "code": "AGR 07", "title": "Vehicles", "damage": "Full", "desc": "1 Land Rover 4-wheel Jeep, 1 4-wheel Tractor, 1 2-wheel Tractor, 1 Volkswagen Van, 1 Volkswagen Cab.", "action": "Repair and Replace damaged parts.", "cost": "45" }
        ]
    },
    {
        "faculty": "Faculty of Engineering",
        "id": "eng",
        "projects": [
            { "code": "ENG 01", "title": "Administration Buildings", "damage": "Partial", "desc": "Roof of one building, which is the iconic administrative building of the Faculty of Engineering, University of Peradeniya.", "action": "Repair.", "cost": "10" },
            { "code": "ENG 02", "title": "Walls / Retaining Walls", "damage": "Full", "desc": "The Nanu-Oya bordering the north end of the Faculty of Engineering has eroded into the Faculty Border. The stormwater at building level has flown down, washing away some parts of the soil.", "action": "Construct.", "cost": "45" }
        ]
    },
    {
        "faculty": "Faculty of Allied Health Sciences",
        "id": "ahs",
        "projects": [
            { "code": "AHS 1", "title": "Walls / Retaining Walls (Main Administrative Building)", "damage": "Partial", "desc": "Structural cracks (38 visible across the three-storey structure) and ongoing erosion around the Main Administrative Building, which is built on non-original, unstable soil. The erosion poses a progressive risk to the foundation, leading to potential structural failure and collapse, especially during heavy rainfall.", "action": "Immediately construct a retaining wall on three sides of the Main Administrative Building to eliminate the risk of future structural failure and safeguard operations.", "cost": "20" },
            { "code": "AHS 2", "title": "Walls / Retaining Walls (Land Behind the Student Canteen)", "damage": "Partial", "desc": "Erosion of the land behind the Student Canteen, presenting a significant landslide risk, particularly during periods of intense rainfall, which could damage the canteen structure.", "action": "Expedite the construction of a retaining wall behind the student canteen to stabilize the slope and prevent landslides from impacting the facility.", "cost": "10" },
            { "code": "AHS 3", "title": "Walls / Retaining Walls (Pharmaceutical Laboratory Building Complex)", "damage": "Partial", "desc": "The Pharmaceutical Laboratory Complex, Department of Pharmacy, lacks a retaining wall, leaving the structure without adequate lateral support. This poses a risk of soil erosion, ground movement, and potential instability during adverse weather conditions.", "action": "Immediately design and construct a suitable retaining wall to provide essential structural reinforcement and safeguard the building from future damage.", "cost": "10" }
        ]
    },
    {
        "faculty": "Faculty of Dental Sciences",
        "id": "dental",
        "projects": [
            { "code": "DSC 01", "title": "Any Other Equipment - Underground fuel sump", "damage": "Partial", "desc": "Underground fuel sump with over 3,300 liters of diesel was flooded, and the diesel filter was affected.", "action": "1. Replace filters. 2. Clean and re-fill the fuel sump.", "cost": "1" }
        ]
    },
    {
        "faculty": "Faculty of Arts",
        "id": "arts",
        "projects": [
            { "code": "ART 01", "title": "Walls / Retaining Walls (Psychology Department Building)", "damage": "Partial", "desc": "Partial collapse of retaining wall and sinking of soil bank at the Psychology Department Building.", "action": "Reconstruction of Concrete Retaining wall.", "cost": "15" },
            { "code": "ART 02", "title": "Walls / Retaining Walls (Kannangara Building)", "damage": "Minimal", "desc": "Partial structural cracks in the building wall of the 7-story Kannangara Building.", "action": "Parapet Retaining Wall and any other protective measures.", "cost": "150" }
        ]
    },
    {
        "faculty": "Central Projects",
        "id": "central",
        "projects": [
            { "code": "PHS 01", "title": "PGIHS: ICT Equipment", "damage": "Partial", "desc": "2 Sound Baffles.", "action": "Repair and Replace.", "cost": "0.2" },
            { "code": "PHS 02", "title": "PGIHS: Any Other Equipment - UPS", "damage": "Full", "desc": "2 UPS units.", "action": "Replace.", "cost": "Missing" },
            { "code": "PHS 03", "title": "PGIHS: Any Other Damages", "damage": "Full", "desc": "A number of essential items were lost due to the floods. These include books, notebooks, and diaries, along with a variety of writing tools such as pens, pencils, and markers. Important folders, files, and document holders were also damaged, together with several office supplies including staplers, paper packs, calculators, and rulers. Electronic equipment suffered significant damage as well, with previously used laptop computers and a desktop being rendered unusable. Additionally, chargers, cables, and related accessories were lost, along with external storage devices such as pen drives and hard drives. Several other small electronic items were also affected and destroyed due to water exposure.", "action": "Replace.", "cost": "1.5" },
            { "code": "CDC 01", "title": "CDCE: Furniture", "damage": "Full", "desc": "5 Computer Tables, 2 Office Tables, 35 Student Desks, 2 Chairs.", "action": "Repair and Replace.", "cost": "0.51" },
            { "code": "CDC 02", "title": "CDCE: Any Other Equipment", "damage": "Full", "desc": "3 Duplo Machines, 2 Photocopy Machines, 1 Paper Shredder, 1 Paper Collecting Machine, 1 Mobile Sound System, 1 Vacuum Cleaner, 1 Refrigerator, 1 Microwave Oven, 1 Pressure Gun, 1 Generator.", "action": "Repair and Replace.", "cost": "8.5" },
            { "code": "CDC 03", "title": "CDCE: Electricity System", "damage": "Partial", "desc": "Main switches, Panel Boards, Electrical sockets.", "action": "Repair and Replace.", "cost": "5" },
            { "code": "CDC 04", "title": "CDCE: Internet Connection / System", "damage": "Partial", "desc": "Routers, Switches.", "action": "Repair.", "cost": "7" },
            { "code": "CDC 05", "title": "CDCE: Other Damages", "damage": "Full", "desc": "Stationary items at stores.", "action": "Replace.", "cost": "7" },
            { "code": "GYM 01", "title": "Gymnasium (Wooden Floor)", "damage": "Partial", "desc": "Wooden floor is warped (60x30m).", "action": "Attempt to recover through drying, cutting, and polishing with termiticide treatment; full replacement if recovery fails.", "cost": "Termiticide treatment (3), cutting and polishing (3), or Replacement (50)" },
            { "code": "GYM 02", "title": "Gymnasium (Weight Training Area)", "damage": "Partial", "desc": "Weight training area is partially damaged.", "action": "Servicing and restoration.", "cost": "1.5" },
            { "code": "GYM 03", "title": "Gymnasium (Wiring)", "damage": "Partial", "desc": "Wiring.", "action": "Re-wiring.", "cost": "0.2" },
            { "code": "GYM 04", "title": "Swimming Pool", "damage": "Partial", "desc": "Damage to the swimming pool structure, retaining wall, and 4 pool pumps.", "action": "Restoration of retaining wall; repair of pool pumps (servicing, drying, and replacement of electronic components/panel boards). Potential full replacement and new retaining wall erection.", "cost": "Servicing and drying/electronic components (1), panel boards (1), Replacement (10), New retaining wall/compaction (15)" },
            { "code": "GYM 05", "title": "Playgrounds", "damage": "Partial", "desc": "Damaged electrical systems, jogging track, completely damaged jumping mattresses, and compromised drainage system.", "action": "Replace electricals and jumping mattresses; restore jogging track and drainage system.", "cost": "Electrical restoration (1), Jogging track inclusive of Gabion wall erection (300), Mattresses (0.2), Drainage system restoration (15)" },
            { "code": "HST 01", "title": "Hostel: Sarasavi medura (800 capacity hall)", "damage": "Partial", "desc": "Structural stability concerns and damaged furniture.", "action": "Replacement of furniture and erection of a retaining wall to ascertain the stability of the hostel.", "cost": "Replacement cost of furniture and accessories (10), Erection of an emergency exit and two bridges (6)" },
            { "code": "HST 02", "title": "Hostel: Senaka Bibile Hall (500 capacity hall)", "damage": "Minimal", "desc": "Washing out a section near the cafeteria.", "action": "Retaining wall has to be built.", "cost": "Retaining wall (3)" },
            { "code": "ICT 01", "title": "ITC: Any Other Buildings", "damage": "Full", "desc": "Lower ground floor flooded (1.8m), with silt, mud, and interior damage.", "action": "Restore and rehabilitate interior spaces.", "cost": "2" },
            { "code": "ICT 02", "title": "ITC: Furniture", "damage": "Full", "desc": "30 tables and 10 chairs destroyed.", "action": "Replace furniture.", "cost": "2.1" },
            { "code": "ICT 03", "title": "ITC: ICT Equipment", "damage": "Full", "desc": "4 Servers, 1 VoIP Server, 30 Workstations, UPS units, and network fully damaged.", "action": "Replace all ICT equipment.", "cost": "50.84" },
            { "code": "ICT 04", "title": "ITC: Any Other Equipment (Generator)", "damage": "Partial", "desc": "Generator partially exposed to water, requiring repair.", "action": "Repair / rehabilitate generator.", "cost": "3" },
            { "code": "ICT 05", "title": "ITC: Sanitation Facilities", "damage": "Partial", "desc": "Sanitary lines and fittings flooded and contaminated.", "action": "Replace fixtures and restore sanitation.", "cost": "1" },
            { "code": "ICT 06", "title": "ITC: Electricity System", "damage": "Partial", "desc": "Electrical wiring, sockets damaged; sub-circuits failed.", "action": "Rewire and replace circuits.", "cost": "10" },
            { "code": "ICT 07", "title": "ITC: Internet Connection / System", "damage": "Full", "desc": "Network backbone, cabling, 15 switches, 2 racks, 13 patch panels, and IP system destroyed.", "action": "Replace full network layer.", "cost": "50" },
            { "code": "ICT 08", "title": "ITC: AC Machines and Systems", "damage": "Full", "desc": "Four 48,000 BTU AC units inundated; cooling system failed.", "action": "Replace AC units.", "cost": "2" },
            { "code": "ICT 09", "title": "ITC: Walls / Retaining Walls", "damage": "Partial", "desc": "Moisture seepage and plaster damage on walls.", "action": "Repair damaged walls.", "cost": "1" },
            { "code": "WDT 01", "title": "Works Dept: Recreation Areas", "damage": "Full", "desc": "(Missing)", "action": "Repair.", "cost": "100" },
            { "code": "WDT 02", "title": "Works Dept: Other Buildings", "damage": "Partial", "desc": "Buildings completely flooded, with damage to the wall, roof, ceiling, retaining walls, structures, boundary fences, electronic items, tools, and office furniture.", "action": "Relocate and newly construct Works Department buildings.", "cost": "New construction to relocate (200), Replacing electronic and other tools/equipment (10), Furniture (4)" },
            { "code": "WDT 03", "title": "Works Dept: ICT Equipment", "damage": "Full", "desc": "40 Computers, Printers, and Photocopiers.", "action": "Repair and Replace.", "cost": "10" },
            { "code": "WDT 04", "title": "Works Dept: Any Other Equipment", "damage": "Full", "desc": "Power Tools and Maintenance equipment.", "action": "Repair and Replace.", "cost": "10" },
            { "code": "WDT 05", "title": "Works Dept: Sanitation Facilities", "damage": "Full", "desc": "Sanitary lines and fittings flooded and contaminated.", "action": "Repair and Replace.", "cost": "0.5" },
            { "code": "WDT 06", "title": "Works Dept: Sanitation Facilities (Plumbing)", "damage": "Partial", "desc": "Plumbing and general repair.", "action": "Repair and Replace.", "cost": "0.3" },
            { "code": "WDT 07", "title": "Works Dept: Electricity System", "damage": "Full", "desc": "Main switches, panel boards, and electrical sockets.", "action": "Repair and Replace.", "cost": "0.3" },
            { "code": "WDT 08", "title": "Works Dept: Internal Roads", "damage": "Full", "desc": "Main entrance road.", "action": "Repair.", "cost": "0.2" },
            { "code": "WDT 09", "title": "Works Dept: Walls / Retaining Walls", "damage": "Partial", "desc": "Retaining wall damage.", "action": "Repair.", "cost": "5" },
            { "code": "WDT 10", "title": "Works Dept: Vehicles", "damage": "Partial", "desc": "2 Tractors.", "action": "Repair.", "cost": "5" },
            { "code": "WDT 11", "title": "Works Dept: Any Other Damages", "damage": "Partial", "desc": "Electrical Items (Bulbs, Panel Boards), Hardware (Cement, Paints, Thinner), Water Tanks, Computers, Laptops, and Photocopiers.", "action": "Replace.", "cost": "Replace (30), Relocation of stores building (40)" },
            { "code": "OTH 01", "title": "Other: Open air theater", "damage": "Full", "desc": "Green room is damaged thus needs to be replaced.", "action": "Replacement of the existing green room.", "cost": "50" },
            { "code": "OTH 02", "title": "Other: Pre-school", "damage": "Partial", "desc": "Damages to the suspended ceiling, door locks and glass sashes, furniture, walls, toys and stationery, appliances, and electronic items.", "action": "Replacement of appliances and other items, mending the ceiling, and painting of walls.", "cost": "Replacement of items (1.2), mending the ceiling and wall painting (2)" },
            { "code": "OTH 03", "title": "Other: Staff quarters (2 nos)", "damage": "Partial", "desc": "Building completely flooded.", "action": "Repairs to the walls, columns, and floor.", "cost": "(Missing)" },
            { "code": "OTH 04", "title": "Other: Security and Landscape Division", "damage": "Minimal", "desc": "Collapse of retaining wall and sinking of soil bank.", "action": "Relocation.", "cost": "75" },
            { "code": "MES 01", "title": "UOP Main Electricity System", "damage": "Partial", "desc": "Funding is needed to replace the following items of the university electricity ring substation due to an electricity outage caused by floods: 1. Supply, install, and commission one input, two output, 11 kV, 1 MVA Ring Main Unit (RMU). 2. Supply, install, and commission an Earth fault and over-current protection system with panel, relay, auxiliary circuits, indicators, and displays covering one 1 MVA port and the two 500 kVA ports of the RMU. 3. Additional 11 kV cabling from RMU to 500 kVA transformers (approximately 10m).", "action": "Repair and Replace.", "cost": "8" }
        ]
    }
];

// ==========================================
// 2. LOGIC SECTION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {

    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("hidden");
        });
    }


    const container = document.getElementById("project-container");


    const damageOrder = { 'Full': 1, 'Partial': 2, 'Minimal': 3 };

    recoveryData.forEach(dept => {

        dept.projects.sort((a, b) => {
            return (damageOrder[a.damage] || 99) - (damageOrder[b.damage] || 99);
        });


        const section = document.createElement("section");
        section.id = dept.id;
        section.className = "mb-10 scroll-mt-24";


        const header = document.createElement("div");
        header.className = "relative z-30 bg-white shadow-sm border border-gray-200 p-4 md:p-6 mb-4 flex items-center justify-between cursor-pointer group select-none hover:border-blue-200 transition-colors duration-200";
        header.innerHTML = `
            <div class="flex flex-col md:flex-row md:items-center">
                <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0 border-l-4 border-blue-900 pl-4 group-hover:text-blue-900 transition-colors">${dept.faculty}</h2>
                <span class="md:ml-4 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 uppercase tracking-wider w-fit">
                    ${dept.projects.length} Projects
                </span>
            </div>
            <div class="pl-4">
                <i class="fas fa-chevron-up text-gray-400 text-xl transition-transform duration-300 transform group-hover:text-blue-900"></i>
            </div>
        `;
        section.appendChild(header);


        const contentWrapper = document.createElement("div");
        contentWrapper.className = "transition-[max-height,opacity] duration-500 ease-in-out";
        contentWrapper.style.maxHeight = "0";
        contentWrapper.style.opacity = "0";

        contentWrapper.style.overflow = "hidden";


        const grid = document.createElement("div");
        grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 pt-4";

        dept.projects.forEach(proj => {

            const ghost = document.createElement('div');
            ghost.className = "relative h-64 w-full group";


            const badgeClasses = getBadgeColorClasses(proj.damage);
            const { totalCostDisplay, breakdownHtml, hasMultiple } = parseCostLogic(proj.cost);


            ghost.innerHTML = `
                <div class="absolute top-0 left-0 w-full min-h-full bg-white shadow-sm border border-gray-200 p-4 flex flex-col transition-all duration-200 ease-out z-10 group-hover:z-50 group-hover:h-auto group-hover:shadow-2xl group-hover:border-blue-300 group-hover:-translate-y-1">
                    
                    <div class="absolute top-0 left-0 w-full h-1 ${badgeClasses.bar}"></div>

                    <div class="flex justify-between items-start mb-2 mt-2">
                        <span class="font-mono text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1">${proj.code}</span>
                        <span class="${badgeClasses.bg} ${badgeClasses.text} border ${badgeClasses.border} text-[10px] font-bold px-2 py-1 uppercase tracking-wide">
                            ${proj.damage}
                        </span>
                    </div>

                    <h3 class="text-lg font-bold text-gray-900 mb-2 leading-snug">${proj.title}</h3>
                    
                    <div class="flex-1">
                        <p class="text-gray-600 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-200">
                            ${proj.desc}
                        </p>
                    </div>

                    <div class="mt-4 pt-3 border-t border-gray-100 bg-white">
                        <div class="mb-2">
                            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-0.5">Action</span>
                            <p class="text-xs text-gray-800 font-medium leading-tight">${proj.action}</p>
                        </div>
                        
                        
                        <div class="flex flex-col mt-2">
                            <div class="flex justify-between items-end">
                                <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Est. Cost</span>
                                <span class="text-lg font-bold text-blue-900 ${hasMultiple ? 'group-hover:hidden' : ''}">
                                    ${totalCostDisplay}
                                </span>
                            </div>
                            
                            
                            ${hasMultiple ? `
                                <div class="hidden group-hover:block mt-2 text-xs font-medium text-gray-700 bg-blue-50 p-2 border border-blue-100 w-full">
                                    ${breakdownHtml}
                                    <div class="mt-2 pt-2 border-t border-blue-200 text-right font-bold text-blue-900">
                                        Total: ${totalCostDisplay}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(ghost);
        });

        contentWrapper.appendChild(grid);
        section.appendChild(contentWrapper);
        container.appendChild(section);


        let isOpen = false;
        const icon = header.querySelector(".fa-chevron-up");
        icon.style.transform = "rotate(180deg)";
        header.addEventListener("click", () => {
            if (isOpen) {


                contentWrapper.style.overflow = "hidden";

                contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px";

                contentWrapper.offsetHeight;

                contentWrapper.style.maxHeight = "0px";
                contentWrapper.style.opacity = "0";
                icon.style.transform = "rotate(180deg)";
            } else {


                contentWrapper.style.overflow = "hidden";

                contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px";
                contentWrapper.style.opacity = "1";
                icon.style.transform = "rotate(0deg)";


                setTimeout(() => {
                    if (!isOpen) {
                        contentWrapper.style.maxHeight = "none";
                        contentWrapper.style.overflow = "visible";
                    }
                }, 500);
            }
            isOpen = !isOpen;
        });
    });
});


function parseCostLogic(costStr) {
    if (!costStr || costStr === "Missing" || costStr === "(Missing)") {
        return { totalCostDisplay: "TBD", breakdownHtml: "", hasMultiple: false };
    }

    const hasMultiple = costStr.includes(',') || (costStr.match(/\(/g) || []).length > 1;
    const numberPattern = /(\d+(\.\d+)?)/g;
    const numbers = costStr.match(numberPattern);

    let total = 0;
    if (numbers) {
        total = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    }

    const totalCostDisplay = `Rs. ${parseFloat(total.toFixed(2))} Mn`;

    let breakdownHtml = "";
    if (hasMultiple) {
        breakdownHtml = costStr.split(',').map(item =>
            `<div class="mb-1 border-b border-blue-100 pb-1 last:border-0 last:pb-0 last:mb-0 leading-tight">• ${item.trim()}</div>`
        ).join('');
    }

    if (!isNaN(costStr)) {
        return { totalCostDisplay: `Rs. ${costStr} Mn`, breakdownHtml: "", hasMultiple: false };
    }

    return { totalCostDisplay, breakdownHtml, hasMultiple };
}

function getBadgeColorClasses(level) {
    if (level === 'Full') {
        return { bar: 'bg-red-500', bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' };
    }
    if (level === 'Partial') {
        return { bar: 'bg-yellow-500', bg: 'bg-yellow-50', text: 'text-yellow-800', border: 'border-yellow-200' };
    }
    return { bar: 'bg-green-500', bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' };
}