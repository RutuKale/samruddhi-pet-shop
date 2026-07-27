function HomePage() {
  const featured = PRODUCTS.slice(0, 8);
  const bestsellers = PRODUCTS.filter((p) => p.tags.includes("bestseller"));
  const healthcare = PRODUCTS.filter((p) => p.category === "Healthcare");

  return `
  <!-- ENHANCED HERO with REAL IMAGES -->
  <section class="relative overflow-hidden">
    <div class="mx-auto max-w-8xl px-3 sm:px-4 pt-4 sm:pt-6 pb-8">
      <div id="heroTrack" class="relative rounded-2xl sm:rounded-[2rem] overflow-hidden min-h-[420px] sm:min-h-[400px] lg:min-h-[460px] shadow-lift"></div>
      <div class="flex justify-center gap-3 mt-6" id="heroDots"></div>
    </div>
  </section>

  <!-- TRUST STATS -->
  <!-- ===================== TRUST STATS - ENHANCED ===================== -->
<section class="mx-auto max-w-8xl px-4 mt-12 mb-16">
  <div class="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Stat 1: Happy Pets -->
    <div class="group relative bg-white dark:bg-[#1d1712] rounded-2xl p-6 text-center shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
      <!-- Decorative gradient line -->
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 via-teal-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div class="relative z-10">
        <!-- Animated number -->
        <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-teal-700 to-teal-500 dark:from-teal-300 dark:to-teal-400 bg-clip-text text-transparent counter" data-target="120k+">120k+</div>
        <!-- Label with accent dot -->
        <div class="flex items-center justify-center gap-2 mt-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:scale-150 transition-transform duration-300"></span>
          <span class="text-sm font-medium text-ink/70 dark:text-cream/70 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">Happy pets</span>
          <span class="w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:scale-150 transition-transform duration-300"></span>
        </div>
        <!-- Micro subtitle -->
        <p class="text-[11px] text-ink/40 dark:text-cream/40 mt-1.5 font-medium uppercase tracking-wider">and counting</p>
      </div>
      
      <!-- Background decorative circle -->
      <div class="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-teal-500/5 group-hover:bg-teal-500/10 transition-all duration-500"></div>
    </div>

    <!-- Stat 2: Avg Rating -->
    <div class="group relative bg-white dark:bg-[#1d1712] rounded-2xl p-6 text-center shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div class="relative z-10">
        <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-amber-600 to-amber-400 dark:from-amber-300 dark:to-amber-400 bg-clip-text text-transparent counter" data-target="4.8★">4.8★</div>
        <div class="flex items-center justify-center gap-2 mt-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform duration-300"></span>
          <span class="text-sm font-medium text-ink/70 dark:text-cream/70 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors duration-300">Avg rating</span>
          <span class="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition-transform duration-300"></span>
        </div>
        <p class="text-[11px] text-ink/40 dark:text-cream/40 mt-1.5 font-medium uppercase tracking-wider">from 12k+ reviews</p>
      </div>
      
      <div class="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-amber-500/5 group-hover:bg-amber-500/10 transition-all duration-500"></div>
    </div>

    <!-- Stat 3: Vet Support -->
    <div class="group relative bg-white dark:bg-[#1d1712] rounded-2xl p-6 text-center shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-clay-400 via-clay-500 to-clay-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div class="relative z-10">
        <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-clay-600 to-clay-400 dark:from-clay-300 dark:to-clay-400 bg-clip-text text-transparent counter" data-target="24/7">24/7</div>
        <div class="flex items-center justify-center gap-2 mt-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-clay-400 group-hover:scale-150 transition-transform duration-300"></span>
          <span class="text-sm font-medium text-ink/70 dark:text-cream/70 group-hover:text-clay-600 dark:group-hover:text-clay-300 transition-colors duration-300">Vet support</span>
          <span class="w-1.5 h-1.5 rounded-full bg-clay-400 group-hover:scale-150 transition-transform duration-300"></span>
        </div>
        <p class="text-[11px] text-ink/40 dark:text-cream/40 mt-1.5 font-medium uppercase tracking-wider">live chat available</p>
      </div>
      
      <div class="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-clay-500/5 group-hover:bg-clay-500/10 transition-all duration-500"></div>
    </div>

    <!-- Stat 4: Express Delivery -->
    <div class="group relative bg-white dark:bg-[#1d1712] rounded-2xl p-6 text-center shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-1.5 overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div class="relative z-10">
        <div class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-emerald-600 to-emerald-400 dark:from-emerald-300 dark:to-emerald-400 bg-clip-text text-transparent counter" data-target="2hr">2hr</div>
        <div class="flex items-center justify-center gap-2 mt-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform duration-300"></span>
          <span class="text-sm font-medium text-ink/70 dark:text-cream/70 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">Express delivery</span>
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform duration-300"></span>
        </div>
        <p class="text-[11px] text-ink/40 dark:text-cream/40 mt-1.5 font-medium uppercase tracking-wider">in select areas</p>
      </div>
      
      <div class="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-all duration-500"></div>
    </div>
  </div>
</section>

  <!-- ===================== SMALL ABOUT SECTION ===================== -->
  <section class="mx-auto max-w-8xl px-4 py-12 md:py-16">
    <div class="reveal grid lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white dark:bg-[#1d1712] rounded-[2rem] p-8 md:p-12 shadow-soft relative overflow-hidden border border-black/5 dark:border-white/5">
      <!-- Background subtle graphics -->
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-teal-500/5 rounded-full blur-2xl pointer-events-none"></div>
      <div class="absolute -bottom-10 -left-10 w-44 h-44 bg-clay-500/5 rounded-full blur-2xl pointer-events-none"></div>
      
      <!-- Text content (Left on desktop) -->
      <div class="lg:col-span-6 space-y-5">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wide uppercase">
          🐾 About Samruddhi
        </div>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ink dark:text-cream">
          Where pure care meets <span class="text-clay-500">pet parenting</span>
        </h2>
        <p class="text-base text-ink/70 dark:text-cream/70 leading-relaxed max-w-2xl">
          At Samruddhi, we share your passion for raising happy, healthy companions. We are more than just an e-commerce platform—we are a dedicated ecosystem of premium nutrition, handpicked toys, premium accessories, and direct vet consultations.
        </p>
        <p class="text-sm text-ink/65 dark:text-cream/65 leading-relaxed max-w-2xl">
          Every item in our marketplace undergoes screening against strict chemical and dietary standards. From organic grain-free feeds to interactive enrichment puzzles, we curate only the best because your family members deserve nothing less.
        </p>
        <div class="pt-2 flex flex-wrap gap-4">
          <a href="#" data-nav="about" class="px-6 py-3 rounded-full bg-teal-700 text-white font-semibold text-sm hover:bg-teal-800 transition duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group">
            <span>Our Full Story</span>
            <span class="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a href="#" data-nav="contact" class="px-6 py-3 rounded-full border border-black/10 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 text-ink dark:text-cream font-semibold text-sm transition duration-300 flex items-center gap-2">
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
      
      <!-- Artistic Shapes Collage (Right on desktop) -->
      <div class="lg:col-span-6 relative">
        <div class="relative w-full h-[480px] sm:h-[520px] md:h-[550px] mx-auto max-w-[480px] lg:max-w-none">
          
          <!-- Nursing Shape (Arch) -->
          <div class="absolute w-[32%] h-[40%] left-[2%] top-[2%] overflow-hidden rounded-t-full rounded-b-2xl border-4 border-white dark:border-[#1d1712] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-10 hover:z-25 group animate-float" style="filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.12));">
            <img src="https://i.pinimg.com/1200x/de/7a/c1/de7ac106ffe4fb7c0bf963031e19909d.jpg" alt="Nursing & Vet Care" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
          </div>
          
          <!-- Cat Shape (Arch) -->
          <div class="absolute w-[32%] h-[40%] right-[10%] top-[0%] overflow-hidden rounded-t-full rounded-b-2xl border-4 border-white dark:border-[#1d1712] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-10 hover:z-25 group animate-float" style="animation-delay: 1.5s; filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.12));">
            <img src="https://i.pinimg.com/1200x/2f/49/34/2f49347272440be56744e8f67d51fa64.jpg" alt="Cat Care" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
          </div>

          <!-- Dog Shape (Arch) -->
          <div class="absolute w-[32%] h-[40%] left-[28%] top-[22%] overflow-hidden rounded-t-full rounded-b-2xl border-4 border-white dark:border-[#1d1712] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-15 hover:z-25 group animate-float" style="animation-delay: 0.5s; filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));">
            <img src="https://i.pinimg.com/736x/9a/45/d8/9a45d87336dbb2b7c6059dec9db1ab46.jpg" alt="Dog Care" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
          </div>

          <!-- Pet Food Shape (Arch) -->
          <div class="absolute w-[32%] h-[40%] right-[2%] top-[34%] overflow-hidden rounded-t-full rounded-b-2xl border-4 border-white dark:border-[#1d1712] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-10 hover:z-25 group animate-floatSlow" style="animation-delay: 2s; filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.12));">
            <img src="https://i.pinimg.com/736x/4d/56/98/4d56981d10f4ef10678467555b1f0663.jpg" alt="Premium Pet Food" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
          </div>

          <!-- Fish Shape (Arch) -->
          <div class="absolute w-[32%] h-[40%] left-[6%] bottom-[5%] overflow-hidden rounded-t-full rounded-b-2xl border-4 border-white dark:border-[#1d1712] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-10 hover:z-25 group animate-floatSlow" style="animation-delay: 0.8s; filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.12));">
            <img src="https://i.pinimg.com/736x/60/23/b1/6023b130f0ed3c4f2e230c179f53b9cb.jpg" alt="Aquatic Life & Fish" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
          </div>

          <!-- Bird Shape (Arch) -->
          <div class="absolute w-[32%] h-[40%] right-[28%] bottom-[2%] overflow-hidden rounded-t-full rounded-b-2xl border-4 border-white dark:border-[#1d1712] shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 z-10 hover:z-25 group animate-float" style="animation-delay: 1.2s; filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.12));">
            <img src="https://i.pinimg.com/736x/b6/99/ea/b699ea74859dece3b72cf32ce0f0dba8.jpg" alt="Birds" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy">
            <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300"></div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- SHOP BY PET -->
  <section class="mx-auto max-w-8xl px-4 py-8">
    ${sectionHead("Find their favourites", "Shop by pet", "Pick a companion and we’ll tailor the aisle.")}
    <div class="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
      ${PETS.map(
    (p) => `
        <a href="#" data-nav="shop" data-shop-pet="${p.id}" class="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 aspect-square">
          <img 
            src="${p.image}" 
            alt="${p.name}" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-black/70 transition-all duration-300"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-end p-5 text-center">
            <span class="text-white font-bold text-lg tracking-wide drop-shadow-lg group-hover:scale-105 transition-transform duration-300">${p.name}</span>
            <span class="text-white/80 text-sm font-medium drop-shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">Explore →</span>
          </div>
          <div class="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </div>
        </a>`,
  ).join("")}
    </div>
  </section>

  <!-- SHOP BY CATEGORY -->
  <section class="mx-auto max-w-8xl px-4 py-12 md:py-16">
    ${sectionHead("Everything in one place", "Shop by category")}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 auto-rows-fr">
    ${SHOP_CATEGORIES.map(
    (category) => `
    <div class="category-card group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1f1915] shadow-soft hover:shadow-lift flex flex-col">
      <div class="relative h-56 overflow-hidden">
        <img 
          class="category-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src="${category.image}"
          alt="${category.name}"
          loading="lazy"
        />
      </div>

      <div class="p-5 flex-1">
        <div class="flex items-center justify-between">
          <h3 class="font-display text-2xl font-semibold">${category.name}</h3>
          <span class="text-clay-500 group-hover:translate-x-1 transition">→</span>
        </div>

        <p class="text-ink/60 dark:text-cream/60 text-sm mt-1">
          ${category.desc}
        </p>

        ${category.tags.length
        ? `<div class="flex gap-2 mt-3 flex-wrap">
                ${category.tags
          .map(
            (tag) =>
              `<span class="text-xs bg-clay-100 rounded-full px-2 py-1">${tag}</span>`,
          )
          .join("")}
              </div>`
        : ""
      }
      </div>
    </div>
     `,
  ).join("")}
    </div>
  </section>

  <!-- FEATURED PRODUCTS -->
  <section class="mx-auto max-w-8xl px-4 py-10 sm:py-12">
    ${sectionHead("Hand-picked for you", "Featured products", "Fresh arrivals and team favourites this week.")}
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">${featured.map(productCard).join("")}</div>
    <div class="text-center mt-8"><button data-nav="shop" class="px-7 py-3 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink font-semibold hover:opacity-90">View all products</button></div>
  </section>

  <!-- HEALTHCARE -->
  <section class="mx-auto max-w-8xl px-4 py-12">
    ${sectionHead("Pharmacy", "Pet healthcare, vet-approved", "Medicines, supplements and recommended products you can trust.")}
    <div class="reveal grid sm:grid-cols-3 gap-4 mb-8">
      ${[
      ["💊", "Medicines", "Prescription & OTC, dispatched fast"],
      ["🌿", "Supplements", "Joint, skin, gut & calming support"],
      ["🩺", "Vet recommended", "Curated by our in-house veterinarians"],
    ]
      .map(
        ([
          e,
          t,
          d,
        ]) => `<div class="rounded-3xl p-6 bg-teal-50 dark:bg-teal-900/30 shadow-soft">
          <div class="text-3xl">${e}</div><h3 class="font-display text-xl mt-2">${t}</h3>
          <p class="text-sm text-ink/60 dark:text-cream/60 mt-1">${d}</p></div>`,
      )
      .join("")}
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">${healthcare.slice(0, 4).map(productCard).join("")}</div>
  </section>

  <!-- BRANDS -->
  <section class="py-12 sm:py-16 border-y border-black/5 dark:border-white/10 bg-clay-50/30 dark:bg-[#1a140f]/50">
    <div class="mx-auto max-w-8xl px-4">
      <p class="reveal text-center text-ink/50 dark:text-cream/50 text-[11px] sm:text-sm font-semibold uppercase tracking-[0.2em] mb-8">Featured brands</p>
      <div class="reveal flex gap-4 sm:gap-6 overflow-x-auto no-bar items-center justify-start xl:justify-center pb-4 px-2 snap-x">
        ${(typeof BRAND_OBJS !== 'undefined' && BRAND_OBJS.length > 0)
      ? BRAND_OBJS.map((b) =>
        `<a href="#" data-nav="shop" data-shop-brand="${b.name}" class="snap-start shrink-0 group w-32 h-20 sm:w-44 sm:h-24 flex items-center justify-center bg-white dark:bg-[#1d1712] rounded-2xl shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-500 ease-out border border-black/5 dark:border-white/10 hover:border-teal-500/30 hover:-translate-y-2 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent dark:from-teal-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  ${b.logoUrl ? `<img src="${b.logoUrl}" alt="${b.name}" class="w-20 h-10 sm:w-28 sm:h-12 object-contain relative z-10 transition-all duration-500 ease-out will-change-transform group-hover:scale-110 group-hover:drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]" loading="lazy" />` : `<span class="font-display text-lg sm:text-xl text-ink/40 dark:text-cream/40 group-hover:text-clay-500 dark:group-hover:text-clay-300 transition text-center leading-tight relative z-10">${b.name}</span>`}
                </a>`
      ).join("")
      : BRANDS.map((b) => `<a href="#" data-nav="shop" data-shop-brand="${b}" class="snap-start shrink-0 font-display text-xl sm:text-2xl text-ink/40 dark:text-cream/40 hover:text-clay-500 dark:hover:text-clay-300 transition cursor-pointer px-2">${b}</a>`).join("")}
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="mx-auto max-w-8xl px-4 py-14 scroll-mt-28">
    ${sectionHead("Beyond the bowl", "Pet services", "Care that goes further than the shopping cart.")}
    <div class="reveal grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      ${SERVICES.map((s, index) => {
        const serviceImages = [
          "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=400&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&auto=format&fit=crop&q=80",
          "https://plus.unsplash.com/premium_photo-1683141107194-61e40e327e2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0JTIwbnV0cml0aW9uJTIwZ3VpZGVuY2V8ZW58MHx8MHx8fDA%3D",
          "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&auto=format&fit=crop&q=80",
        ];
        const img = serviceImages[index % serviceImages.length];
        return `
        <div class="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#1d1712] shadow-soft hover:shadow-lift transition-all duration-500 hover:-translate-y-2">
          <!-- Image Background -->
          <div class="relative h-48 overflow-hidden">
            <img 
              src="${img}" 
              alt="${s.name}" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <!-- Icon Badge -->
            <div class="absolute top-3 right-3 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg">
              ${s.icon}
            </div>
            
            <!-- Price Badge -->
            <div class="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-ink shadow-md flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              ${s.price}
            </div>
          </div>
          
          <!-- Content -->
          <div class="p-5 relative">
            <h3 class="font-display text-lg font-semibold group-hover:text-clay-600 dark:group-hover:text-clay-300 transition-colors duration-300">${s.name}</h3>
            <p class="text-sm text-ink/60 dark:text-cream/60 mt-1.5 leading-relaxed line-clamp-2">${s.desc}</p>
            
            <!-- Decorative line -->
            <div class="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-clay-400 mt-3 rounded-full group-hover:w-20 transition-all duration-500"></div>
          </div>
        </div>`;
      }).join("")}
    </div>
    <div class="text-center mt-10">
      <button data-nav="services" class="px-7 py-3 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink font-semibold hover:opacity-90 shadow-lg hover:shadow-xl transition-all">View full services menu</button>
    </div>
  </section>

  <!-- REVIEWS -->
  <section class="py-14 bg-clay-50 dark:bg-[#1a140f]">
    <div class="mx-auto max-w-8xl px-4">
      ${sectionHead("Wagging tails", "What pet parents say")}
      <div class="reveal relative">
        <div id="reviewSlider" class="flex gap-5 overflow-x-auto no-bar snap-x snap-mandatory pb-2">
          ${REVIEWS.map(
        (r) => `
            <figure class="snap-start shrink-0 w-[88vw] sm:w-96 bg-white dark:bg-[#1d1712] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-soft">
              <div class="mb-3">${stars(r.stars)}</div>
              <blockquote class="text-ink/80 dark:text-cream/80">“${r.text}”</blockquote>
              <figcaption class="mt-4 flex items-center gap-3">
                <span class="w-11 h-11 grid place-items-center rounded-full bg-teal-100 dark:bg-teal-900/40 font-display text-lg">${r.name[0]}</span>
                <span><span class="font-semibold block">${r.name}</span><span class="text-sm text-ink/50 dark:text-cream/50">${r.pet}</span></span>
              </figcaption>
            </figure>`,
      ).join("")}
        </div>
        <div class="flex justify-center gap-3 mt-6">
          <button data-slide="reviewSlider:-1" class="w-11 h-11 rounded-full bg-white dark:bg-[#1d1712] shadow-soft hover:scale-110 transition">←</button>
          <button data-slide="reviewSlider:1" class="w-11 h-11 rounded-full bg-white dark:bg-[#1d1712] shadow-soft hover:scale-110 transition">→</button>
        </div>
      </div>
    </div>
  </section>

  <!-- BLOG -->
  <section id="blog" class="mx-auto max-w-8xl px-4 py-14 scroll-mt-28">
    ${sectionHead("From the journal", "Pet care reads")}
    <div class="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      ${BLOG.map(
        (b, i) => `
        <a href="#" class="group rounded-3xl overflow-hidden bg-white dark:bg-[#1d1712] shadow-soft hover:shadow-lift transition-all">
          <div class="aspect-[4/3] grid place-items-center text-6xl" style="background:linear-gradient(135deg,${PALETTES[i % PALETTES.length][0]},${PALETTES[i % PALETTES.length][1]})"><img src="${b.image}" alt="${b.title}" class="w-full h-full object-cover"/></div>
          <div class="p-5">
            <span class="text-xs font-semibold text-teal-700 dark:text-teal-300 uppercase tracking-wide">${b.tag} · ${b.read}</span>
            <h3 class="font-display text-lg mt-2 group-hover:text-clay-600 transition leading-snug">${b.title}</h3>
            <p class="text-sm text-ink/60 dark:text-cream/60 mt-1">${b.excerpt}</p>
          </div>
        </a>`,
      ).join("")}
    </div>
  </section>

  <!-- APP PROMO -->
  <section class="mx-auto max-w-8xl px-4 py-8 md:py-6 lg:py-8">
    <div class="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-700 to-teal-900 text-cream p-0 sm:p-0 grid md:grid-cols-2 gap-0 items-stretch md:h-[340px] lg:h-[400px]">
      <!-- Left Content -->
      <div class="p-6 sm:p-8 md:p-6 lg:p-8 flex flex-col justify-center relative z-10">
        <p class="uppercase tracking-widest text-teal-200 text-xs font-semibold">Pawmark on the go</p>
        <h2 class="font-display text-2xl sm:text-3xl mt-2">Your pet's world,<br />in your pocket</h2>
        <p class="text-cream/80 mt-2 text-sm max-w-md">Track orders, chat with vets, reorder in a tap and earn paw points with every purchase.</p>
        
        <!-- Feature List -->
        <div class="space-y-2 mt-4">
          <div class="flex items-center gap-3 text-cream/90 text-sm">
            <svg class="w-4 h-4 text-teal-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            <span>Real-time order tracking</span>
          </div>
          <div class="flex items-center gap-3 text-cream/90 text-sm">
            <svg class="w-4 h-4 text-teal-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            <span>24/7 vet chat support</span>
          </div>
          <div class="flex items-center gap-3 text-cream/90 text-sm">
            <svg class="w-4 h-4 text-teal-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            <span>One-tap reordering</span>
          </div>
          <div class="flex items-center gap-3 text-cream/90 text-sm">
            <svg class="w-4 h-4 text-teal-300 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
            </svg>
            <span>Earn paw points with every purchase</span>
          </div>
        </div>
      </div>
      
      <!-- Right Image -->
      <div class="relative h-full min-h-[220px] md:min-h-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop&q=80" 
          alt="Person using pet care app on smartphone with dog" 
          class="w-full h-full object-cover object-center md:object-cover"
          loading="lazy"
        />
        <!-- Gradient overlay on image for seamless blend -->
        <div class="absolute inset-0 bg-gradient-to-r from-teal-700/60 via-transparent to-transparent md:from-teal-700/40"></div>
        
        <!-- Floating App UI Element -->
        <div class="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-xs mx-auto md:mx-0">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-2xl shadow-lg flex-shrink-0">
              🐾
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xs text-ink/50 font-semibold uppercase tracking-wider">Order #PM-2847</p>
              <p class="text-sm font-semibold text-ink truncate">Premium Dog Food</p>
              <div class="flex items-center gap-2 mt-0.5">
                <div class="flex-1 h-1.5 bg-teal-100 rounded-full overflow-hidden">
                  <div class="h-full w-3/4 bg-teal-500 rounded-full"></div>
                </div>
                <span class="text-xs font-semibold text-teal-600">75%</span>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </div>
  </section>
  `;
}
