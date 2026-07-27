function ContactPage() {
  const prefilledMsg = State.prefilledMessage || "";
  const prefilledReason = State.prefilledReason || "general";

  // Clear instantly for safety on next visits
  State.prefilledMessage = "";
  State.prefilledReason = "";

  const isSelected = (val) => val === prefilledReason ? "selected" : "";

  return `<section class="mx-auto max-w-8xl px-4 py-8">

  <header class="relative mx-auto max-w-8xl mt-8 mb-12 rounded-[2rem] overflow-hidden text-center py-16 sm:py-24 px-6 md:px-12 border border-black/5 dark:border-white/5 shadow-lift">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.28] dark:opacity-[0.11] pointer-events-none transition-opacity duration-300"
        style="background-image: url('https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=1600&auto=format&fit=crop&q=80');">
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-amber-500/5 dark:from-teal-950/20 dark:to-transparent pointer-events-none"></div>

    <div class="relative z-10 space-y-5 max-w-3xl mx-auto">
        <span
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-accent-badge text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider bg-white/40 dark:bg-[#1d1712]/40 backdrop-blur-sm">
            📞 Contact Us
        </span>

        <h1
            class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink dark:text-cream leading-tight">
            We're Here to <span class="premium-text-gradient font-black italic">Help Your Pets</span>
        </h1>

        <p
            class="text-base sm:text-lg text-ink/80 dark:text-cream/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions or need assistance? Our friendly team is ready to help with appointments, pet care advice,
            grooming services, and veterinary support. Reach out today—we'd love to hear from you and your furry friend.
        </p>
    </div>
</header>

    <!-- Hero Header -->
    <div class="reveal bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/10 dark:to-transparent rounded-[2rem] p-8 sm:p-12 mb-10 shadow-soft relative overflow-hidden border border-black/5 dark:border-white/5">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="relative z-10 space-y-4">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-600/10 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">🐾 Support Center</span>
          <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink dark:text-cream leading-tight animate-fadeUp">We're here to help you & your companion</h1>
          <p class="text-base text-ink/70 dark:text-cream/70 max-w-xl">Have questions about pet diets, order delivery, or need a quick vet check? Get in touch with our caring support team — available around the clock.</p>
        </div>
        <div class="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden shadow-lift border-4 border-white/20 dark:border-[#2a221c]/50">
          <img src="https://i.pinimg.com/1200x/c0/bb/52/c0bb52c34e37087c54cb22c8bc195415.jpg" alt="Friendly pet care support team" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- Contact Grid -->
    <div class="grid lg:grid-cols-2 gap-10 items-start">
      <!-- Contact Info Cards -->
      <div class="space-y-6">
        <!-- Info Card 1: Support Desk -->
        <div class="reveal flex gap-5 p-5 rounded-2xl bg-white dark:bg-[#1d1712] shadow-soft border border-black/5 dark:border-white/5 hover:border-teal-500/20 hover:shadow-lift transition duration-300">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-300 text-2xl shadow-sm shrink-0">
            📞
          </div>
          <div>
            <h3 class="font-display text-lg font-semibold">General Support Desk</h3>
            <p class="text-sm text-ink/50 dark:text-cream/50 mt-0.5">Call for product inquiries, returns, or order status.</p>
            <p class="text-base font-semibold mt-2 text-teal-700 dark:text-teal-300">080874 26569</p>
            <p class="text-xs text-ink/40 dark:text-cream/40 mt-1">Available 9:00 AM – 9:00 PM daily</p>
          </div>
        </div>

        <!-- Info Card 2: Vet Assistance -->
        <div class="reveal flex gap-5 p-5 rounded-2xl bg-white dark:bg-[#1d1712] shadow-soft border border-black/5 dark:border-white/5 hover:border-clay-500/20 hover:shadow-lift transition duration-300">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-clay-50 to-clay-100 dark:from-clay-950 dark:to-clay-900 flex items-center justify-center text-clay-600 dark:text-clay-300 text-2xl shadow-sm shrink-0">
            🩺
          </div>
          <div>
            <h3 class="font-display text-lg font-semibold">24/7 Veterinary Hotline</h3>
            <p class="text-sm text-ink/50 dark:text-cream/50 mt-0.5">Urgent dietary advice or symptom check-ins with licensed vets.</p>
            <p class="text-base font-semibold mt-2 text-clay-600 dark:text-clay-400">vet@samruddhipet.com</p>
            <p class="text-xs text-ink/40 dark:text-cream/40 mt-1">Available 24/7 for live chat & virtual consults</p>
          </div>
        </div>

        <!-- Info Card 3: Location -->
        <div class="reveal flex gap-5 p-5 rounded-2xl bg-white dark:bg-[#1d1712] shadow-soft border border-black/5 dark:border-white/5 hover:border-amber-500/20 hover:shadow-lift transition duration-300">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-300 text-2xl shadow-sm shrink-0">
            📍
          </div>
          <div>
            <h3 class="font-display text-lg font-semibold">Samruddhi Retail Store</h3>
            <p class="text-sm text-ink/50 dark:text-cream/50 mt-0.5 font-medium">Visit our physical pet store in Jalgaon.</p>
            <p class="text-sm font-semibold mt-2 leading-relaxed">SHOP NO 1, near GOLANI MKT, Sangamwadi, Jaikisan Wadi, Jalgaon, Maharashtra 425001</p>
            <p class="text-xs text-ink/40 dark:text-cream/40 mt-1">Mon – Sun · 9:00 AM – 9:00 PM</p>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <form id="contactForm" class="reveal bg-white dark:bg-[#1d1712] rounded-2xl sm:rounded-[2rem] shadow-lift p-6 sm:p-8 space-y-5 border border-black/5 dark:border-white/5">
        <div class="border-b border-black/5 dark:border-white/5 pb-3">
          <h2 class="font-display text-xl font-bold">Send a Message</h2>
          <p class="text-sm text-ink/50 dark:text-cream/50 mt-1">Fill out the form below and we will get back to you within 2 hours.</p>
        </div>
        
        <div>
          <label class="text-sm font-semibold">Department / Inquiry Type</label>
          <select id="contactReason" onchange="this.value === 'order' ? document.getElementById('orderIdField').style.display='block' : document.getElementById('orderIdField').style.display='none'" class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-teal-600 border border-black/10 dark:border-white/10 text-sm">
            <option value="general" ${isSelected("general")}>General Inquiry</option>
            <option value="order" ${isSelected("order")}>Order Support & Deliveries</option>
            <option value="vet" ${isSelected("vet")}>Veterinary Guidance Support</option>
            <option value="partnership" ${isSelected("partnership")}>Business Partnership</option>
          </select>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-semibold">Full Name</label>
            <input type="text" placeholder="Your name" required class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-teal-600 border border-black/10 dark:border-white/10 text-sm" />
          </div>
          <div>
            <label class="text-sm font-semibold">Email Address</label>
            <input type="email" placeholder="you@email.com" required class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-teal-600 border border-black/10 dark:border-white/10 text-sm" />
          </div>
        </div>

        <div id="orderIdField" style="display: ${prefilledReason === 'order' ? 'block' : 'none'};">
          <label class="text-sm font-semibold">Order ID (optional)</label>
          <input type="text" placeholder="e.g. PM-12948" class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-teal-600 border border-black/10 dark:border-white/10 text-sm" />
        </div>

        <div>
          <label class="text-sm font-semibold">Message</label>
          <textarea rows="4" placeholder="Describe how we can assist you or your pet..." required class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-teal-600 border border-black/10 dark:border-white/10 text-sm">${prefilledMsg}</textarea>
        </div>

        <button type="submit" class="w-full py-3.5 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-teal-600/30 flex items-center justify-center gap-2 group">
          <span>Send Message</span>
          <span class="group-hover:translate-x-1 transition-transform">🐾</span>
        </button>
      </form>
    </div>

    <!-- Map Section -->
    <div class="reveal mt-16 rounded-[2rem] overflow-hidden bg-white dark:bg-[#1d1712] p-5 shadow-soft border border-black/5 dark:border-white/5">
      <div class="mb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 class="font-display text-2xl font-bold">Visit Our Store</h2>
          <p class="text-sm text-ink/50 dark:text-cream/50 mt-1">Convenient pet parking, free treats upon entry, and in-store pick-up available.</p>
        </div>
        <a href="https://maps.google.com/?q=SHOP+NO+1,+near+GOLANI+MKT,+Sangamwadi,+Jaikisan+Wadi,+Jalgaon,+Maharashtra+425001" target="_blank" class="px-5 py-2.5 rounded-full bg-clay-100 hover:bg-clay-200 dark:bg-white/10 dark:hover:bg-white/15 text-sm font-semibold transition flex items-center gap-2">
          <span>Get Directions</span>
          <span>🗺️</span>
        </a>
      </div>
      <div class="relative w-full h-[360px] rounded-2xl overflow-hidden bg-clay-100 dark:bg-white/5">
        <iframe src="https://maps.google.com/maps?q=SHOP%20NO%201,%20near%20GOLANI%20MKT,%20Jalgaon&t=&z=16&ie=UTF8&iwloc=&output=embed" class="absolute inset-0 w-full h-full border-0 filter grayscale hover:grayscale-0 contrast-125 dark:invert dark:contrast-100 transition-all duration-700" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <!-- FAQ Accordions -->
    <div class="reveal mt-16 max-w-4xl mx-auto">
      <div class="text-center mb-10">
        <span class="text-clay-600 dark:text-clay-300 font-semibold uppercase tracking-widest text-xs">Got Questions?</span>
        <h2 class="font-display text-3xl font-bold mt-2">Support FAQs</h2>
        <p class="text-sm text-ink/50 dark:text-cream/50 mt-1">Read answers to questions pet parents ask us most.</p>
      </div>
      
      <div class="space-y-4">
        <details class="group bg-white dark:bg-[#1d1712] rounded-2xl p-5 shadow-soft border border-black/5 dark:border-white/5 [&::-webkit-details-marker]:hidden cursor-pointer">
          <summary class="flex items-center justify-between font-semibold list-none text-base">
            <span>How fast is home delivery?</span>
            <span class="text-teal-600 transition-transform group-open:rotate-45 font-light text-2xl leading-none">+</span>
          </summary>
          <div class="text-sm text-ink/70 dark:text-cream/70 mt-3 pt-3 border-t border-black/5 dark:border-white/5 leading-relaxed">
            Orders placed before 2:00 PM qualify for same-day delivery in select Jalgaon subway areas. Standard shipping across other districts typically takes between 1 to 2 business days. Delivery is free for all orders above ₹49.
          </div>
        </details>

        <details class="group bg-white dark:bg-[#1d1712] rounded-2xl p-5 shadow-soft border border-black/5 dark:border-white/5 [&::-webkit-details-marker]:hidden cursor-pointer">
          <summary class="flex items-center justify-between font-semibold list-none text-base">
            <span>How do I start a veterinary chat?</span>
            <span class="text-teal-600 transition-transform group-open:rotate-45 font-light text-2xl leading-none">+</span>
          </summary>
          <div class="text-sm text-ink/70 dark:text-cream/70 mt-3 pt-3 border-t border-black/5 dark:border-white/5 leading-relaxed">
            Registered members can access live veterinary assistance 24/7. Simply log into your account, look for the "Vet Support Chat" badge in the navigation overlay or footer, and start typing. In-house veterinarians will respond in under 5 minutes.
          </div>
        </details>

        <details class="group bg-white dark:bg-[#1d1712] rounded-2xl p-5 shadow-soft border border-black/5 dark:border-white/5 [&::-webkit-details-marker]:hidden cursor-pointer">
          <summary class="flex items-center justify-between font-semibold list-none text-base">
            <span>What is your returns policy?</span>
            <span class="text-teal-600 transition-transform group-open:rotate-45 font-light text-2xl leading-none">+</span>
          </summary>
          <div class="text-sm text-ink/70 dark:text-cream/70 mt-3 pt-3 border-t border-black/5 dark:border-white/5 leading-relaxed">
            We want your pets to be 100% happy. You can return unopened food bags, toys, and pharmacy accessories within 30 days of purchase for a full refund. Just contact our Support Desk with your order number to arrange free return shipping.
          </div>
        </details>

        <details class="group bg-white dark:bg-[#1d1712] rounded-2xl p-5 shadow-soft border border-black/5 dark:border-white/5 [&::-webkit-details-marker]:hidden cursor-pointer">
          <summary class="flex items-center justify-between font-semibold list-none text-base">
            <span>Can I feed my pets pharmacy lines without a prescription?</span>
            <span class="text-teal-600 transition-transform group-open:rotate-45 font-light text-2xl leading-none">+</span>
          </summary>
          <div class="text-sm text-ink/70 dark:text-cream/70 mt-3 pt-3 border-t border-black/5 dark:border-white/5 leading-relaxed">
            Any products labeled "Prescription-only" require a doctor’s guidance. You can upload clinical prescriptions during checkout, or consult our free tele-vet support desk to assess if a therapeutic brand suits your companion.
          </div>
        </details>
      </div>
    </div>
  </section>`;
}
