function HeaderComponent() {
  return `
  <!-- ===================== TOP BAR ===================== -->
  <div class="bg-teal-700 text-cream text-xs sm:text-sm relative z-50">
    <div class="mx-auto max-w-8xl px-4 py-2 flex items-center justify-between gap-3">
      <p class="truncate">
        🐾 Free delivery over <strong>₹49</strong> · Same-day vet chat
        available
      </p>
      <div class="hidden sm:flex items-center gap-4 shrink-0">
        <a href="#" data-nav="contact" class="hover:underline">Help</a>
        <a href="#" data-nav="about" class="hover:underline">Our story</a>
      </div>
    </div>
  </div>

  <!-- ===================== HEADER ===================== -->
  <header id="header" class="sticky top-0 z-40 bg-white dark:bg-[#1d1712] border-b border-black/5 dark:border-white/10 transition-all duration-300">
    <div class="mx-auto max-w-8xl px-4">
      <div class="flex items-center gap-1.5 sm:gap-2 h-14 sm:h-16 lg:h-20">
        <button id="hamburger" class="lg:hidden p-1.5 sm:p-2 -ml-1 sm:-ml-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 shrink-0"
          aria-label="Open menu" aria-expanded="false">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <a href="#" data-nav="home" class="flex items-center gap-2 shrink-0 overflow-hidden">
          <span
            class="grid place-items-center w-9 h-9 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-teal-300 p-1 lg:p-1.5 text-cream text-xl shadow-soft shrink-0">
            <img src="./assets/logo.png" alt="Samruddhi" class="w-full h-full object-contain" />
          </span>
          <span class="brand-word font-display text-lg sm:text-2xl font-600 tracking-tight truncate hidden xs:block min-[360px]:block">Samruddhi</span>
        </a>

        <div class="flex-1 hidden md:block max-w-xl mx-2 lg:mx-4 relative">
          <input id="searchInput" type="search" placeholder="Search food, toys, meds…"
            class="w-full rounded-full bg-white dark:bg-white/10 border border-black/10 dark:border-white/15 pl-10 sm:pl-11 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm focus:border-teal-600 outline-none shadow-sm"
            aria-label="Search products" />
          <svg class="w-4 h-4 sm:w-5 sm:h-5 absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 text-ink/40 dark:text-cream/40" fill="none"
            stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <div id="searchSuggest"
            class="absolute mt-2 w-full bg-white dark:bg-[#1d1712] rounded-2xl shadow-lift border border-black/5 dark:border-white/10 p-2 hidden z-50 max-h-80 overflow-auto no-bar">
          </div>
        </div>

        <div class="flex items-center gap-1 sm:gap-2 ml-auto shrink-0">
          <button id="searchMobileBtn" class="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Search">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <button id="wishlistBtn" class="relative p-1.5 sm:p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Wishlist">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path
                d="M19 14c1.5-1.5 3-3.4 3-5.5A3.5 3.5 0 0 0 15.5 6L12 9.5 8.5 6A3.5 3.5 0 0 0 2 8.5C2 10.6 3.5 12.5 5 14l7 7Z" />
            </svg>
            <span id="wishCount"
              class="absolute top-0 right-0 sm:-top-0.5 sm:-right-0.5 min-w-[18px] sm:min-w-[20px] h-[18px] sm:h-5 px-1 grid place-items-center text-[9px] sm:text-[11px] font-bold bg-clay-500 text-white rounded-full hidden shadow-sm">0</span>
          </button>
          <button id="cartBtn" class="relative p-1.5 sm:p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Cart">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M3 4h2l2.4 12.4A2 2 0 0 0 9.4 18h7.7a2 2 0 0 0 2-1.6L21 8H6" />
            </svg>
            <span id="cartCount"
              class="absolute top-0 right-0 sm:-top-0.5 sm:-right-0.5 min-w-[18px] sm:min-w-[20px] h-[18px] sm:h-5 px-1 grid place-items-center text-[9px] sm:text-[11px] font-bold bg-teal-600 text-white rounded-full hidden shadow-sm">0</span>
          </button>
          <button id="authHeaderBtn" data-nav="login"
            class="hidden sm:flex items-center gap-2 ml-1 px-4 py-2 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink text-sm font-semibold hover:scale-105 transition shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
            <span id="authHeaderBtnText">Login</span>
          </button>
        </div>
      </div>

      <nav class="hidden lg:flex items-center gap-1 h-12 text-sm font-medium">
        <div class="relative group">
          <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            All Brands
          </button>
          <div class="absolute left-0 top-full pt-2 hidden group-hover:block z-30">
            <div id="catDropdown"
              class="w-56 bg-white dark:bg-[#1d1712] rounded-2xl shadow-lift border border-black/5 dark:border-white/10 p-2">
            </div>
          </div>
        </div>
        <a href="#" data-nav="home" class="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">Home</a>
        <a href="#" data-nav="shop" class="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">Shop</a>
        <a href="#services" data-nav="services"
          class="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">Services</a>
        <a href="#" data-nav="about" class="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">About us</a>
        <a href="#" data-nav="contact" class="px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10">Contact
          us</a>
        <a href="tel:+918087426569"
          class="ml-auto text-clay-600 dark:text-clay-300 font-semibold hover:text-clay-700 dark:hover:text-clay-200 transition-colors">📞
          Vet helpline · 080874 26569</a>
      </nav>
    </div>
  </header>
  `;
}
