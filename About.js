function AboutPage() {
  return `<section class="mx-auto max-w-8xl px-4 py-8">

  <header class="relative mx-auto max-w-8xl mt-8 mb-12 rounded-[2rem] overflow-hidden text-center py-16 sm:py-24 px-6 md:px-12 border border-black/5 dark:border-white/5 shadow-lift">
    <!-- Background Image -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.28] dark:opacity-[0.11] pointer-events-none transition-opacity duration-300"
        style="background-image: url('https://i.pinimg.com/1200x/48/08/50/4808507b12218fd6f32b23798e190c89.jpg');">
    </div>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-amber-500/5 dark:from-teal-950/20 dark:to-transparent pointer-events-none"></div>

    <div class="relative z-10 space-y-5 max-w-3xl mx-auto">
        <span
            class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full luxury-accent-badge text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider bg-white/40 dark:bg-[#1d1712]/40 backdrop-blur-sm">
            ❤️ About Us
        </span>

        <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink dark:text-cream leading-tight">
            Caring for Pets with <span class="premium-text-gradient font-black italic">Love & Dedication</span>
        </h1>

        <p class="text-base sm:text-lg text-ink/80 dark:text-cream/80 max-w-2xl mx-auto leading-relaxed font-medium">
            At Pet Care, we believe every pet deserves compassionate care, expert attention, and a happy, healthy life. Our experienced team is committed to providing trusted veterinary services, grooming, wellness support, and personalized care for every furry companion.
        </p>
    </div>
</header>

    <!-- Hero Block -->
    <div class="reveal bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/10 dark:to-transparent rounded-[2rem] p-8 sm:p-12 mb-12 shadow-soft relative overflow-hidden border border-black/5 dark:border-white/5">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-4">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-600/10 text-teal-700 dark:text-teal-300 text-xs font-semibold uppercase tracking-wider">🌟 About Samruddhi</span>
          <h1 class="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink dark:text-cream leading-tight">Bringing Joy to Pet Parents in Jalgaon Since 2018</h1>
          <p class="text-base text-ink/70 dark:text-cream/70 max-w-xl">Samruddhi Pet Shop & Aquarium is Jalgaon's premium destination for complete pet care, high-quality nutrition, specialized vet advisory, and beautiful custom aquatic setups.</p>
        </div>
        <div class="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden shadow-lift border-4 border-white/20 dark:border-[#2a221c]/50 bg-black/40">
          <!-- Clear storefront displaying complete shop details -->
          <img src="./assets/shop.png" alt="Samruddhi Pet Shop Storefront in Jalgaon" class="relative z-10 w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>

    <!-- Legacy / Story Section -->
    <div class="reveal grid md:grid-cols-2 gap-10 items-center my-16">
      <div class="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-soft border border-black/5 dark:border-white/5">
        <img src="https://i.pinimg.com/1200x/ce/fe/fa/cefefa4cba6a280acdad04369ec201c6.jpg" alt="Dogs playing together happily" class="w-full h-full object-cover" />
      </div>
      <div class="space-y-5">
        <span class="text-clay-600 dark:text-clay-300 font-semibold uppercase tracking-widest text-xs">Our Journey</span>
        <h2 class="font-display text-3xl font-bold">From a local storefront to Jalgaon's pet hub</h2>
        <p class="text-sm sm:text-base text-ink/70 dark:text-cream/70 leading-relaxed">
          Founded by Vikram Patil in the heart of Jaikisan Wadi, Jalgaon, Samruddhi started as a small, passionate neighborhood venture with a single glass fish tank and a shelf of puppy food. Our goal was simple: to make honest, premium-grade pet supplies accessible to every household in Khandesh.
        </p>
        <p class="text-sm sm:text-base text-ink/70 dark:text-cream/70 leading-relaxed">
          Today, we have helped thousands of animals thrive. We are not just a pet shop; we design and install custom aquariums, supply authentic pharmaceutical medicines under veterinary guidance, and offer 24/7 tele-support for pet health issues.
        </p>
      </div>
    </div>

    <!-- Services & Specialties Grid -->
    <div class="my-16">
      <div class="text-center mb-10">
        <span class="text-clay-600 dark:text-clay-300 font-semibold uppercase tracking-widest text-xs">Why Choose Us</span>
        <h2 class="font-display text-3xl font-bold mt-2">What makes Samruddhi special</h2>
        <p class="text-sm text-ink/50 dark:text-cream/50 mt-1 max-w-xl mx-auto">We look after every dimension of your companion's food, health, environment, and wellness.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="reveal rounded-3xl bg-white dark:bg-[#1d1712] shadow-soft p-6 border border-black/5 dark:border-white/5 hover:shadow-lift hover:border-teal-500/20 transition-all duration-350">
          <div class="w-12 h-12 rounded-2xl bg-teal-50 to-teal-100 dark:bg-teal-950 flex items-center justify-center text-teal-600 dark:text-teal-300 text-2xl shadow-sm mb-4">🐠</div>
          <h3 class="font-display text-lg font-bold">Custom Aquarists</h3>
          <p class="text-xs sm:text-sm text-ink/60 dark:text-cream/60 mt-2 leading-relaxed">Expert design, custom glass manufacturing, and in-home cleaning schedules for fresh and saltwater aquariums across Jalgaon.</p>
        </div>

        <div class="reveal rounded-3xl bg-white dark:bg-[#1d1712] shadow-soft p-6 border border-black/5 dark:border-white/5 hover:shadow-lift hover:border-clay-500/20 transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-clay-50 to-clay-100 dark:bg-clay-950 flex items-center justify-center text-clay-600 dark:text-clay-300 text-2xl shadow-sm mb-4">🧪</div>
          <h3 class="font-display text-lg font-bold">Vet-Approved Products</h3>
          <p class="text-xs sm:text-sm text-ink/60 dark:text-cream/60 mt-2 leading-relaxed">Every recipe, capsule, and accessory catalogued undergoes rigorous screening by our expert veterinary advisors.</p>
        </div>

        <div class="reveal rounded-3xl bg-white dark:bg-[#1d1712] shadow-soft p-6 border border-black/5 dark:border-white/5 hover:shadow-lift hover:border-amber-500/20 transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 to-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-300 text-2xl shadow-sm mb-4">🐾</div>
          <h3 class="font-display text-lg font-bold">Premium Grooming</h3>
          <p class="text-xs sm:text-sm text-ink/60 dark:text-cream/60 mt-2 leading-relaxed">Top-tier brushes, medicated Himalayan herbal lotions, and flea and tick solutions to keep their coat shining.</p>
        </div>

        <div class="reveal rounded-3xl bg-white dark:bg-[#1d1712] shadow-soft p-6 border border-black/5 dark:border-white/5 hover:shadow-lift hover:border-rose-500/20 transition-all duration-300">
          <div class="w-12 h-12 rounded-2xl bg-rose-50 to-rose-100 dark:bg-rose-950 flex items-center justify-center text-rose-600 dark:text-rose-300 text-2xl shadow-sm mb-4">🤝</div>
          <h3 class="font-display text-lg font-bold">Community Support</h3>
          <p class="text-xs sm:text-sm text-ink/60 dark:text-cream/60 mt-2 leading-relaxed">We commit 1% of our proceeds to support local strays, rescue programs, and shelter feeding drives in Jalgaon.</p>
        </div>
      </div>
    </div>

    <!-- Founders & Team -->
    <div class="my-16">
      <div class="text-center mb-10">
        <span class="text-clay-600 dark:text-clay-300 font-semibold uppercase tracking-widest text-xs">Our Pioneers</span>
        <h2 class="font-display text-3xl font-bold mt-2">Meet our team</h2>
        <p class="text-sm text-ink/50 dark:text-cream/50 mt-1 max-w-xl mx-auto">The humans dedicated to making your pets' lives wonderful.</p>
      </div>

      <div class="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div class="reveal bg-white dark:bg-[#1d1712] p-5 rounded-3xl border border-black/5 dark:border-white/5 shadow-soft hover:shadow-lift transition duration-300 text-center">
          <div class="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-teal-500/20">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" alt="Vikram Patil" class="w-full h-full object-cover" />
          </div>
          <h4 class="font-display text-lg font-bold">Vikram Patil</h4>
          <p class="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">Founder & Aquarist</p>
          <p class="text-xs sm:text-sm text-ink/55 dark:text-cream/55 mt-2.5">Passionate about custom glass aquarium crafting and creating balanced, therapeutic aquascapes.</p>
        </div>

        <div class="reveal bg-white dark:bg-[#1d1712] p-5 rounded-3xl border border-black/5 dark:border-white/5 shadow-soft hover:shadow-lift transition duration-308 text-center">
          <div class="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-clay-500/20">
            <img src="https://plus.unsplash.com/premium_photo-1723568666044-1b066e26b1fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmVoYSUyMHNoYXJtYXxlbnwwfHwwfHx8MA%3D%3D" alt="Dr. Neha Sharma" class="w-full h-full object-cover" />
          </div>
          <h4 class="font-display text-lg font-bold">Dr. Neha Sharma, B.V.Sc</h4>
          <p class="text-xs text-clay-600 dark:text-clay-400 font-semibold uppercase tracking-wider">Chief Veterinary Advisor</p>
          <p class="text-xs sm:text-sm text-ink/55 dark:text-cream/55 mt-2.5">Vets our product catalogue to ensure all ingredients are safe and conducts regular telehealth sessions.</p>
        </div>

        <div class="reveal bg-white dark:bg-[#1d1712] p-5 rounded-3xl border border-black/5 dark:border-white/5 shadow-soft hover:shadow-lift transition duration-305 text-center">
          <div class="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-amber-500/20">
            <img src="https://plus.unsplash.com/premium_photo-1734603746591-cdac6d02a83e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJhaHVsfGVufDB8fDB8fHww" alt="Rohan Kale" class="w-full h-full object-cover" />
          </div>
          <h4 class="font-display text-lg font-bold">Rohan Kale</h4>
          <p class="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wider">Store Manager & Behaviorist</p>
          <p class="text-xs sm:text-sm text-ink/55 dark:text-cream/55 mt-2.5">Advises visitors regarding healthy habits, sizing, and proper toy engagement in the Jalgaon store.</p>
        </div>
      </div>
    </div>

    <!-- Milestones / Stats Block -->
    <div class="reveal rounded-3xl sm:rounded-[2rem] bg-teal-700 text-cream p-8 sm:p-12 mb-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-lift relative overflow-hidden">
      <!-- Background subtle graphics -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-600/30 via-transparent to-transparent pointer-events-none"></div>
      
      <div class="relative z-10 border-r border-white/10 last:border-0">
        <div class="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">15k+</div>
        <div class="text-cream/80 text-xs sm:text-sm mt-1 uppercase font-semibold tracking-wider">Happy Pets Served</div>
      </div>
      <div class="relative z-10 border-r border-white/10 last:border-0">
        <div class="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">500+</div>
        <div class="text-cream/80 text-xs sm:text-sm mt-1 uppercase font-semibold tracking-wider">Aquariums Crafted</div>
      </div>
      <div class="relative z-10 border-r-0 md:border-r border-white/10 last:border-0">
        <div class="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">1,500+</div>
        <div class="text-cream/80 text-xs sm:text-sm mt-1 uppercase font-semibold tracking-wider">Premium Products</div>
      </div>
      <div class="relative z-10 last:border-0 grid place-content-center">
        <div class="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">100%</div>
        <div class="text-cream/80 text-xs sm:text-sm mt-1 uppercase font-semibold tracking-wider">Vet-Approved</div>
      </div>
    </div>

    <div class="text-center mt-12">
      <button data-nav="shop" class="px-8 py-3.5 rounded-full bg-ink text-cream hover:bg-slate-900 dark:bg-cream dark:text-ink dark:hover:bg-cream/90 font-semibold shadow-lg hover:scale-[1.02] transition duration-200">Shop Premium Pet Supplies</button>
    </div>
  </section>`;
}
