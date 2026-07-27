function FooterComponent() {
  return `
  <!-- ===================== FOOTER ===================== -->
  <footer class="mt-20 bg-[#09110f] text-cream/90 relative overflow-hidden border-t border-white/5">
    <!-- Premium dynamic background elements -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiLz48L3N2Zz4=')] opacity-30 pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-clay-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] pointer-events-none" style="animation-delay: 2s;"></div>

    <div class="relative z-10 mx-auto max-w-8xl px-4 py-16">
      <!-- Main footer grid -->
      <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <!-- Brand Column -->
        <div class="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
          <a href="#" data-nav="home" class="flex items-center gap-3 mb-6 group">
            <span
              class="grid place-items-center w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-full bg-gradient-to-tr from-teal-500 to-teal-300 p-1.5 shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(20,184,166,0.5)] group-hover:-translate-y-1"><img
                src="./assets/logo.png" alt="Samruddhi" class="w-full h-full object-contain drop-shadow-md" /></span>
            <span class="font-display text-2xl sm:text-3xl font-600 text-white tracking-tight drop-shadow-sm group-hover:text-teal-50 transition-colors">Samruddhi</span>
          </a>
          <p class="text-base text-cream/70 max-w-md leading-relaxed font-medium">
            Everything your companion needs — from premium food and healthcare to joyful play and expert care — delivered with the warmth and dedication every family member truly deserves.
          </p>

          <!-- Social Icons with glassmorphism design -->
          <div class="flex gap-4 mt-8">
           <a href="https://www.instagram.com/samruddhi_pet_shop_jalgaon"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Instagram"
   class="w-11 h-11 grid place-items-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-orange-500 text-cream/70 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(236,72,153,0.5)]">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>

</a>
            <a href="https://www.youtube.com/@SamrudhiPetShopJalgaon" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
              class="w-11 h-11 grid place-items-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-[#FF0000] text-cream/70 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(255,0,0,0.5)]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            </a>
            <a href="#" aria-label="Twitter"
              class="w-11 h-11 grid place-items-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-[#1DA1F2] text-cream/70 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(29,161,242,0.5)]">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
            <a href="#" aria-label="Facebook"
              class="w-11 h-11 grid place-items-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-[#1877F2] text-cream/70 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(24,119,242,0.5)]">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-bold text-white mb-6 text-[13px] tracking-[0.2em] uppercase opacity-90">
            Quick links
          </h4>
          <ul class="space-y-4 text-sm font-medium">
            ${["Shop all:shop", "About us:about", "Contact:contact", "Blog:home?scroll=blog", "Wishlist:wishlist", "Privacy:privacy", "Terms:terms", "Shipping:shipping", "Cookies:cookies"]
      .map(link => {
        const [label, nav] = link.split(":");
        // Extract possible data-nav and data-scroll easily
        let navStr = nav.includes("?") ? `data-nav="${nav.split("?")[0]}" data-scroll="${nav.split("=")[1]}"` : `data-nav="${nav}"`;
        return `
            <li>
              <a class="text-cream/60 hover:text-teal-300 transition-all duration-300 flex items-center gap-3 group" href="#" ${navStr}>
                <span class="w-1.5 h-1.5 rounded-full bg-teal-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-[0_0_8px_rgba(45,212,191,0.6)]"></span>
                <span class="group-hover:translate-x-1 transition-transform duration-300">${label}</span>
              </a>
            </li>`;
      }).join("")}
          </ul>
        </div>

        <!-- Categories -->
        <div>
          <h4 class="font-bold text-white mb-6 text-[13px] tracking-[0.2em] uppercase opacity-90">
            Categories
          </h4>
          <ul id="footerCats" class="space-y-4 text-sm font-medium [&>li>a]:text-cream/60 [&>li>a]:hover:text-teal-300 [&>li>a]:transition-colors [&>li>a]:duration-300"></ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="font-bold text-white mb-6 text-[13px] tracking-[0.2em] uppercase opacity-90">
            Support
          </h4>
          <ul class="space-y-5 text-sm font-medium">
            <li class="flex items-start gap-4 text-cream/70 group">
              <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-all duration-300">📍</div>
              <span class="leading-relaxed mt-1">SHOP NO 1, near GOLANI MKT, Sangamwadi, Jaikisan Wadi, Jalgaon, Maharashtra 425001</span>
            </li>
            <li class="flex items-center gap-4 text-cream/70 group">
              <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-all duration-300">📞</div>
              <a href="tel:+918087426569" class="hover:text-teal-300 transition-colors duration-300">080874 26569</a>
            </li>
            <li class="flex items-center gap-4 text-cream/70 group">
              <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-all duration-300">✉️</div>
              <a href="mailto:care@samruddhipet.com" class="hover:text-teal-300 transition-colors duration-300">care@samruddhipet.com</a>
            </li>
            <li class="flex items-center gap-4 text-cream/70 group">
              <div class="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-all duration-300">🕘</div>
              <span class="hover:text-teal-300 transition-colors duration-300">Mon–Sun · 9am–9pm</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar with premium subtle separation -->
      <div class="mt-16 pt-8 border-t border-white/10 relative">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-cream/50">
          <p class="flex items-center gap-2">
            © 2026 Samruddhi Pet Shop.
          </p>
          <div class="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur shadow-sm">
            <span>Made with <span class="text-teal-400">🐾</span> for pets everywhere</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `;
}
