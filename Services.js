// Sync local custom vouchers with PRODUCTS array when the page starts up
window.initServicesPage = function () {
    if (typeof PRODUCTS !== 'undefined' && !PRODUCTS.some(p => p.id.startsWith('srv-'))) {
        const serviceImages = [
            "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80", // Foods
            "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80", // Accessories
            "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&auto=format&fit=crop&q=80", // Spa
            "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=600&auto=format&fit=crop&q=80", // Aquarium Setup
            "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80"  // Fish supplies
        ];

        SERVICES.forEach((s, idx) => {
            const basePrice = parseInt(s.price.replace(/[^0-9]/g, '')) || 99;
            PRODUCTS.push({
                id: `srv-${idx}`,
                name: `${s.name} Prepaid Voucher`,
                category: "Services Vouchers",
                pet: "all",
                price: basePrice,
                mrp: Math.round(basePrice * 1.25),
                rating: 4.9,
                reviews: 18 + idx * 5,
                brand: "Samruddhi Services",
                tags: ["service", "voucher"],
                discount: 20,
                image: serviceImages[idx % serviceImages.length],
                gallery: [serviceImages[idx % serviceImages.length]],
                desc: `Premium pre-paid service voucher for ${s.name}. Valid for 6 months globally. Redeemable at the Jalgaon store or for local home visits.`,
                stock: 999
            });
        });
    }
};

if (!window.servicesPageInitialized) {
    window.servicesPageInitialized = true;
    window.selectedWhatsappPet = "dog";
    window.selectedWhatsappServiceType = "Grooming & Spa";

    window.selectWhatsappPet = function (petType) {
        window.selectedWhatsappPet = petType;
        const pills = document.querySelectorAll('.wa-pet-pill');
        pills.forEach(pill => {
            if (pill.getAttribute('data-pet') === petType) {
                pill.classList.add('bg-teal-600', 'text-white', 'scale-105', 'shadow-md');
                pill.classList.remove('bg-clay-50', 'text-ink/80', 'dark:bg-white/5', 'dark:text-cream/80');
            } else {
                pill.classList.remove('bg-teal-600', 'text-white', 'scale-105', 'shadow-md');
                pill.classList.add('bg-clay-50', 'text-ink/80', 'dark:bg-white/5', 'dark:text-cream/80');
            }
        });
    };

    window.selectWhatsappService = function (selectEl) {
        window.selectedWhatsappServiceType = selectEl.value;
    };

    window.sendWhatsappInquiry = function () {
        const notesObj = document.getElementById('waCustomNotes');
        const notes = notesObj ? notesObj.value.trim() : "";

        let message = `Hi Samruddhi Pet Shop Support!\n\nI am looking to inquire about your custom services:\n`;
        message += `- Pet Category: ${window.selectedWhatsappPet.toUpperCase()}\n`;
        message += `- Service Required: ${window.selectedWhatsappServiceType}\n`;

        if (notes) {
            message += `- Specific Details: ${notes}\n`;
        } else {
            message += `- Details: Please share options and pricing slots.\n`;
        }

        message += `\nI would love to arrange this soon. Thank you!`;

        const encodedText = encodeURIComponent(message);
        const url = `https://wa.me/918087426569?text=${encodedText}`;
        window.open(url, '_blank');
        toast("WhatsApp application chat opened!", "ok");
    };

    window.filterServiceCatalog = function (category) {
        const cards = document.querySelectorAll('.service-catalog-card');
        cards.forEach(card => {
            const cat = card.getAttribute('data-category');
            if (category === 'all' || cat === category) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';
                requestAnimationFrame(() => {
                    card.style.transition = 'all 0.4s ease-out';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            } else {
                card.classList.add('hidden');
            }
        });

        const tabs = document.querySelectorAll('.catalog-tab-btn');
        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === category) {
                tab.classList.add('bg-teal-600', 'text-white', 'shadow-md');
                tab.classList.remove('bg-white', 'text-ink/70', 'dark:bg-white/5', 'dark:text-cream/70');
            } else {
                tab.classList.remove('bg-teal-600', 'text-white', 'shadow-md');
                tab.classList.add('bg-white', 'text-ink/70', 'dark:bg-white/5', 'dark:text-cream/70');
            }
        });
    };

    window.triggerVoucherAdd = function (productId, productName) {
        // Direct event delegation mock hook
        toast(`${productName} added to cart!`, "ok");
        // Open standard cart drawer after slight delay
        setTimeout(() => {
            const btn = document.getElementById('cartBtn');
            if (btn) btn.click();
        }, 300);
    };
}

function ServicesPage() {
    // Run sync instantly on rendering
    window.initServicesPage();

    const serviceImages = [
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600&auto=format&fit=crop&q=80", // Foods
        "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&auto=format&fit=crop&q=80", // Accessories
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&auto=format&fit=crop&q=80", // Spa
        "https://images.unsplash.com/photo-1520301255226-bf5f144451c1?w=600&auto=format&fit=crop&q=80", // Aquarium Setup
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&auto=format&fit=crop&q=80"  // Fish supplies
    ];

    const getServiceCategory = (name) => {
        if (name.includes("Grooming")) return "wellness";
        if (name.includes("Aquarium") || name.includes("Fish")) return "aquatics";
        return "nutrition";
    };

    return `
    <style>
        .custom-services-bg {
            background: radial-gradient(circle at top right, rgba(0, 150, 136, 0.07), transparent 600px),
                        radial-gradient(circle at bottom left, rgba(223, 138, 85, 0.05), transparent 500px);
        }
        .premium-text-gradient {
            background: linear-gradient(135deg, #0d9488 0%, #ca8a04 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .luxury-accent-badge {
            background: linear-gradient(135deg, rgba(20, 184, 166, 0.12) 0%, rgba(223, 138, 85, 0.05) 100%);
            border: 1px solid rgba(20, 184, 166, 0.2);
        }
        .whatsapp-btn {
            background-color: #25D366;
            transition: all 0.3s ease;
        }
        .whatsapp-btn:hover {
            background-color: #128C7E;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px -4px rgba(37, 211, 102, 0.4);
        }
        .glass-panel-upscale {
            background: rgba(255, 255, 255, 0.6);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .dark .glass-panel-upscale {
            background: rgba(29, 23, 18, 0.55);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.04);
        }
        .card-illuminate {
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            border: 1px solid rgba(0, 0, 0, 0.04);
        }
        .dark .card-illuminate {
            border: 1px solid rgba(255, 255, 255, 0.03);
        }
        .card-illuminate:hover {
            border-color: rgba(20, 184, 166, 0.4);
            box-shadow: 0 16px 36px -8px rgba(20, 184, 166, 0.12);
        }
    </style>

    <div class="custom-services-bg min-h-screen pb-24 px-4">
        <!-- Interactive Upscale Header with Background Image and Rounded Corners -->
        <header class="relative mx-auto max-w-8xl mt-8 mb-12 rounded-[2rem] overflow-hidden text-center py-16 sm:py-24 px-6 md:px-12 border border-black/5 dark:border-white/5 shadow-lift">
            <!-- Background Image with controlled opacity less than 1 -->
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.16] dark:opacity-[0.12] pointer-events-none transition-opacity duration-300" style="background-image: url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=1600&auto=format&fit=crop&q=80');"></div>
            <!-- Extra gradient overlay for perfect readability -->
            <div class="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-amber-500/5 dark:from-teal-950/20 dark:to-transparent pointer-events-none"></div>

            <div class="relative z-10 space-y-5 max-w-3xl mx-auto">
                <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-accent-badge text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider bg-white/40 dark:bg-[#1d1712]/40 backdrop-blur-sm">
                    🌟 Specialty Solutions
                </span>
                <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink dark:text-cream leading-tight">
                    Pet Services & <span class="premium-text-gradient font-black italic">Prepaid Vouchers</span>
                </h1>
                <p class="text-base sm:text-lg text-ink/80 dark:text-cream/80 max-w-2xl mx-auto leading-relaxed font-medium">
                    Connect directly with our care hub via WhatsApp for bespoke client consults, or purchase prepaid service vouchers to add straight to your e-commerce cart.
                </p>
            </div>
        </header>

        <!-- Main Workspace Split -->
        <main class="mx-auto max-w-7xl">
            
            <!-- Category Catalogs tabs -->
            <div class="flex justify-center mb-10">
                <div class="bg-white/80 dark:bg-[#1d1712]/50 backdrop-blur-md p-1.5 rounded-full border border-black/5 dark:border-white/5 flex flex-wrap gap-1">
                    <button onclick="window.filterServiceCatalog('all')" data-tab="all" class="catalog-tab-btn px-5 py-2 text-sm font-semibold rounded-full bg-teal-600 text-white shadow-md transition duration-300">
                        ✨ All Support
                    </button>
                    <button onclick="window.filterServiceCatalog('nutrition')" data-tab="nutrition" class="catalog-tab-btn px-5 py-2 text-sm font-semibold rounded-full bg-white dark:bg-white/5 text-ink/70 dark:text-cream/70 hover:bg-black/5 dark:hover:bg-white/10 transition duration-300">
                        🥣 Foods & Care
                    </button>
                    <button onclick="window.filterServiceCatalog('wellness')" data-tab="wellness" class="catalog-tab-btn px-5 py-2 text-sm font-semibold rounded-full bg-white dark:bg-white/5 text-ink/70 dark:text-cream/70 hover:bg-black/5 dark:hover:bg-white/10 transition duration-300">
                        ✂️ Grooming Spa
                    </button>
                    <button onclick="window.filterServiceCatalog('aquatics')" data-tab="aquatics" class="catalog-tab-btn px-5 py-2 text-sm font-semibold rounded-full bg-white dark:bg-white/5 text-ink/70 dark:text-cream/70 hover:bg-black/5 dark:hover:bg-white/10 transition duration-300">
                        🐠 Aquatics Specialty
                    </button>
                </div>
            </div>

            <!-- Asymmetrical Grid layout of support solutions -->
            <div class="grid lg:grid-cols-[1fr_390px] gap-8 items-start mb-20">
                
                <!-- Left panel: Catalog of services -->
                <div class="space-y-6">
                    <div class="flex items-center justify-between px-2">
                        <span class="text-xs uppercase font-extrabold tracking-wider text-ink/40 dark:text-cream/40">Available Specialized Support</span>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-6">
                        ${SERVICES.map((s, index) => {
        const cat = getServiceCategory(s.name);
        const img = serviceImages[index % serviceImages.length];

        // Custom WhatsApp inquiry template text
        const waText = encodeURIComponent(`Hi Samruddhi! I would like to inquire about the service: ${s.name}. Please share availability and details.`);
        const waUrl = `https://wa.me/918087426569?text=${waText}`;

        return `
                                <div data-category="${cat}" class="service-catalog-card card-illuminate bg-white dark:bg-[#1d1712] rounded-[1.8rem] overflow-hidden flex flex-col h-full shadow-soft">
                                    <!-- Card Image header -->
                                    <div class="relative h-44 overflow-hidden">
                                        <img src="${img}" alt="${s.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        <span class="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest flex items-center gap-1">
                                            <span>${s.icon}</span> <span>${cat.toUpperCase()}</span>
                                        </span>
                                    </div>

                                    <!-- Content body -->
                                    <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
                                        <div class="space-y-2">
                                            <h3 class="font-display text-xl font-extrabold text-ink dark:text-cream leading-tight">${s.name}</h3>
                                            <p class="text-sm text-ink/60 dark:text-cream/60 leading-relaxed">${s.desc}</p>
                                        </div>

                                        <!-- Pricing list and options -->
                                        <div class="pt-4 border-t border-black/5 dark:border-white/5 space-y-3">
                                            <div class="flex items-center justify-between">
                                                <span class="text-xs font-semibold text-ink/40 dark:text-cream/40">In-Store Rate</span>
                                                <span class="text-teal-600 dark:text-teal-400 font-extrabold text-lg">${s.price}</span>
                                            </div>

                                            <div class="grid grid-cols-2 gap-2">
                                                <!-- WhatsApp Direct Inquiry -->
                                                <a href="${waUrl}" target="_blank" class="whatsapp-btn text-white text-center py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
                                                    <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp
                                                </a>
                                                <!-- Buy prepaid voucher -->
                                                <button data-add="srv-${index}" onclick="window.triggerVoucherAdd('srv-${index}', '${s.name} Prepaid Voucher')" class="bg-clay-100 hover:bg-clay-200 dark:bg-white/5 dark:hover:bg-white/10 text-clay-700 dark:text-cream/90 text-center py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 border border-black/5 dark:border-white/5">
                                                    🛒 Buy Voucher
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
    }).join('')}
                    </div>
                </div>

                <!-- Right panel: Interactive WhatsApp Custom Planner Studio -->
                <div class="lg:sticky lg:top-24 space-y-6">
                    <div class="px-2">
                        <span class="text-xs uppercase font-extrabold tracking-wider text-ink/40 dark:text-cream/40">Custom Requirement Agent</span>
                    </div>

                    <div class="glass-panel-upscale rounded-3xl p-6 shadow-lift border border-teal-500/10 dark:border-teal-500/5 space-y-5 relative overflow-hidden">
                        <!-- Top accent colored bar -->
                        <div class="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-teal-600 to-yellow-500"></div>

                        <div class="pb-3 border-b border-black/5 dark:border-white/5">
                            <h3 class="font-display text-lg font-bold text-ink dark:text-cream">WhatsApp Quote Creator</h3>
                            <p class="text-xs text-ink/50 dark:text-cream/50 mt-0.5">Build a customized inquiry script instantly</p>
                        </div>

                        <!-- Step 1: Select pet category -->
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-ink/50 dark:text-cream/50 uppercase tracking-wider block">Companion Type</label>
                            <div class="grid grid-cols-4 gap-1.5">
                                <button onclick="window.selectWhatsappPet('dog')" data-pet="dog" class="wa-pet-pill py-2 rounded-xl text-xs font-semibold bg-teal-600 text-white scale-105 shadow-md transition duration-300">
                                    🐶 Dog
                                </button>
                                <button onclick="window.selectWhatsappPet('cat')" data-pet="cat" class="wa-pet-pill py-2 rounded-xl text-xs font-semibold bg-clay-50 dark:bg-white/5 text-ink/80 dark:text-cream/80 hover:bg-black/5 dark:hover:bg-white/10 transition duration-300">
                                    🐱 Cat
                                </button>
                                <button onclick="window.selectWhatsappPet('fish')" data-pet="fish" class="wa-pet-pill py-2 rounded-xl text-xs font-semibold bg-clay-50 dark:bg-white/5 text-ink/80 dark:text-cream/80 hover:bg-black/5 dark:hover:bg-white/10 transition duration-300">
                                    🐠 Fish
                                </button>
                                <button onclick="window.selectWhatsappPet('small')" data-pet="small" class="wa-pet-pill py-2 rounded-xl text-xs font-semibold bg-clay-50 dark:bg-white/5 text-ink/80 dark:text-cream/80 hover:bg-black/5 dark:hover:bg-white/10 transition duration-300">
                                    🐹 Small
                                </button>
                            </div>
                        </div>

                        <!-- Step 2: Select service concept -->
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-ink/50 dark:text-cream/50 uppercase tracking-wider block">Service Category</label>
                            <select onchange="window.selectWhatsappService(this)" class="w-full rounded-xl bg-clay-50 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2.5 text-sm outline-none focus:ring-2 ring-teal-600">
                                <option value="Grooming & Spa">✂️ Grooming & Spa Solutions</option>
                                <option value="Custom Aquarium Setup">🐠 Custom Aquascaping & Tanks</option>
                                <option value="Specialist Dietary Consultation">🥣 Specialty Nutrition Formulation</option>
                                <option value="Bespoke Pet Accessories">🛍️ Custom Outfitting & Collars</option>
                                <option value="Bulk Store Orders">📦 Bulk Wholesale Inquiries</option>
                            </select>
                        </div>

                        <!-- Step 3: Message notes text area -->
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-ink/50 dark:text-cream/50 uppercase tracking-wider block">Requirement details (optional)</label>
                            <textarea id="waCustomNotes" rows="4" placeholder="Describe size, pet breed, or custom aquarium measurements..." class="w-full text-sm rounded-xl bg-clay-50 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-2.5 outline-none focus:ring-2 ring-teal-600"></textarea>
                        </div>

                        <!-- CTA WhatsApp compile trigger -->
                        <button onclick="window.sendWhatsappInquiry()" class="w-full py-3.5 rounded-2xl bg-teal-600 text-white font-bold transition shadow-md hover:bg-teal-700 active:scale-95 flex items-center justify-center gap-2 group text-xs border border-transparent">
                            <i class="fa-brands fa-whatsapp text-lg"></i> Send Quote Request via WhatsApp
                        </button>

                        <p class="text-[10px] text-center text-ink/40 dark:text-cream/40 leading-relaxed">
                            Requires WhatsApp Web or mobile app installed. Standard local rates apply.
                        </p>
                    </div>
                </div>

            </div>

            <!-- Paid Vouchers Shelf Rack -->
            <section class="mt-24 space-y-8">
                <div class="text-center max-w-2xl mx-auto space-y-2">
                    <span class="text-xs uppercase font-extrabold tracking-widest text-clay-600 dark:text-clay-400">Add to Cart Options</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-extrabold">Online Prepaid Vouchers Shop</h2>
                    <p class="text-sm text-ink/50 dark:text-cream/50">Purchase service vouchers in advance. Get direct receipt emails instantly and redeem at store or for home specialists.</p>
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    ${SERVICES.map((s, index) => {
        const img = serviceImages[index % serviceImages.length];
        const basePrice = parseInt(s.price.replace(/[^0-9]/g, '')) || 99;
        const mrp = Math.round(basePrice * 1.25);

        return `
                            <div class="bg-white dark:bg-[#1d1712] rounded-3xl overflow-hidden shadow-soft border border-black/5 dark:border-white/5 flex flex-col justify-between group hover:shadow-lift transition-all duration-300">
                                
                                <div class="relative aspect-video overflow-hidden">
                                    <img src="${img}" alt="${s.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <!-- Discount label -->
                                    <span class="absolute top-2 left-2 bg-yellow-500 text-ink text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-sm">
                                        🎫 Voucher -20%
                                    </span>
                                </div>

                                <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
                                    <div class="space-y-1">
                                        <h4 class="font-display font-black text-sm text-ink dark:text-cream group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-tight truncate">
                                            ${s.name} Voucher
                                        </h4>
                                        <p class="text-[11px] text-ink/50 dark:text-cream/50 line-clamp-2 leading-relaxed">
                                            Includes standard setup for 1 companion. Valid 6 months.
                                        </p>
                                    </div>
                                    
                                    <div class="space-y-3">
                                        <div class="flex items-baseline gap-2">
                                            <span class="text-base font-extrabold text-teal-600 dark:text-teal-400">₹${basePrice}</span>
                                            <span class="text-xs text-ink/40 dark:text-cream/40 line-through">₹${mrp}</span>
                                        </div>
                                        
                                        <!-- E-commerce Action add to cart -->
                                        <button data-add="srv-${index}" onclick="window.triggerVoucherAdd('srv-${index}', '${s.name} Prepaid Voucher')" class="w-full py-2 rounded-xl bg-ink text-cream hover:opacity-90 dark:bg-cream dark:text-ink text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95">
                                            🛒 Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
    }).join('')}
                </div>
            </section>

            <!-- Custom Non-Booking Process Steps -->
            <section class="mt-28 reveal text-center max-w-5xl mx-auto space-y-12">
                <div class="space-y-2">
                    <span class="text-xs uppercase font-extrabold tracking-widest text-clay-600 dark:text-clay-400">How It Ticks</span>
                    <h2 class="font-display text-3xl sm:text-4xl font-bold tracking-tight">Accessing Our Services Is Simple</h2>
                    <p class="text-sm text-ink/50 dark:text-cream/50 max-w-md mx-auto">No complicated calendars or schedulers. Three steps to get direct care.</p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8 relative">
                    <!-- Step connector dashed line -->
                    <div class="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-black/5 dark:bg-white/5 border-t border-dashed border-black/15 dark:border-white/15 z-0"></div>

                    <!-- Step 1 -->
                    <div class="space-y-4 relative z-10 flex flex-col items-center bg-white dark:bg-[#1d1712] p-6 rounded-3xl card-illuminate shadow-soft">
                        <div class="w-16 h-16 rounded-full bg-teal-500/10 dark:bg-teal-500/25 border border-teal-500/30 flex items-center justify-center text-2xl shadow-sm text-teal-600 dark:text-teal-400 font-extrabold select-none">
                            1
                        </div>
                        <h4 class="font-display font-bold text-lg">Purchase or Chat</h4>
                        <p class="text-xs text-ink/60 dark:text-cream/60 leading-relaxed max-w-[240px]">
                            Check out a prepaid service voucher above, or use our customized WhatsApp creator to request packages.
                        </p>
                    </div>

                    <!-- Step 2 -->
                    <div class="space-y-4 relative z-10 flex flex-col items-center bg-white dark:bg-[#1d1712] p-6 rounded-3xl card-illuminate shadow-soft">
                        <div class="w-16 h-16 rounded-full bg-clay-500/10 dark:bg-clay-500/25 border border-clay-500/30 flex items-center justify-center text-2xl shadow-sm text-clay-600 dark:text-clay-400 font-extrabold select-none">
                            2
                        </div>
                        <h4 class="font-display font-bold text-lg">Coordinate Dispatch</h4>
                        <p class="text-xs text-ink/60 dark:text-cream/60 leading-relaxed max-w-[240px]">
                            Our support staff contacts you via phone or WhatsApp instantly to settle care schedules and details.
                        </p>
                    </div>

                    <!-- Step 3 -->
                    <div class="space-y-4 relative z-10 flex flex-col items-center bg-white dark:bg-[#1d1712] p-6 rounded-3xl card-illuminate shadow-soft">
                        <div class="w-16 h-16 rounded-full bg-teal-500/10 dark:bg-teal-500/25 border border-teal-500/30 flex items-center justify-center text-2xl shadow-sm text-teal-600 dark:text-teal-400 font-extrabold select-none">
                            3
                        </div>
                        <h4 class="font-display font-bold text-lg">Redeem Service</h4>
                        <p class="text-xs text-ink/60 dark:text-cream/60 leading-relaxed max-w-[240px]">
                            Our care specialist checks in at store or at your doorstep. Hand over the voucher/inbox order ID to finish!
                        </p>
                    </div>
                </div>
            </section>

            <!-- Specialty Services FAQ -->
            <section class="mt-28 max-w-4xl mx-auto space-y-10">
                <div class="text-center space-y-2">
                    <span class="text-xs uppercase font-extrabold tracking-widest text-clay-600 dark:text-clay-400">Got Questions?</span>
                    <h2 class="font-display text-3xl font-extrabold">Services Support FAQs</h2>
                    <p class="text-sm text-ink/50 dark:text-cream/50">Common information on vouchers and custom options.</p>
                </div>

                <div class="space-y-4">
                    <details class="group bg-white dark:bg-[#1d1712] rounded-2xl p-5 shadow-soft border border-black/5 dark:border-white/5 cursor-pointer">
                        <summary class="flex items-center justify-between font-semibold list-none text-base">
                            <span>How do I redeem a prepaid voucher?</span>
                            <span class="text-teal-600 transition-transform group-open:rotate-45 font-light text-2xl">＋</span>
                        </summary>
                        <div class="text-sm text-ink/70 dark:text-cream/70 mt-3 pt-3 border-t border-black/5 dark:border-white/5 leading-relaxed">
                            Simply show your digital invoice receipt or order number (sent to your email upon cart checkout) when visiting the store in Jalgaon, or share it with the specialist dispatched to your home.
                        </div>
                    </details>

                    <details class="group bg-white dark:bg-[#1d1712] rounded-2xl p-5 shadow-soft border border-black/5 dark:border-white/5 cursor-pointer">
                        <summary class="flex items-center justify-between font-semibold list-none text-base">
                            <span>Are at-home grooming services available everywhere?</span>
                            <span class="text-teal-600 transition-transform group-open:rotate-45 font-light text-2xl">＋</span>
                        </summary>
                        <div class="text-sm text-ink/70 dark:text-cream/70 mt-3 pt-3 border-t border-black/5 dark:border-white/5 leading-relaxed">
                            Currently, we dispatch certified groomers and aquarium maintenance specialists to anywhere in Jalgaon and neighboring municipal areas. Feel free to contact our WhatsApp number if you request exceptions.
                        </div>
                    </details>

                    <details class="group bg-white dark:bg-[#1d1712] rounded-2xl p-5 shadow-soft border border-black/5 dark:border-white/5 cursor-pointer">
                        <summary class="flex items-center justify-between font-semibold list-none text-base">
                            <span>Can I build custom monthly subscriptions?</span>
                            <span class="text-teal-600 transition-transform group-open:rotate-45 font-light text-2xl">＋</span>
                        </summary>
                        <div class="text-sm text-ink/70 dark:text-cream/70 mt-3 pt-3 border-t border-black/5 dark:border-white/5 leading-relaxed">
                            Yes! Our specialty is custom dietary schedules and weekly tank servicing. Select the options inside the WhatsApp Quote Creator above and text our concierge desk to customize a discounted periodic rate.
                        </div>
                    </details>
                </div>
            </section>
        </main>
    </div>
    `;
}
