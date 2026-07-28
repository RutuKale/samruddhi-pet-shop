function ShippingPage() {
    return `<section class="mx-auto max-w-4xl px-4 py-16 animate-fadeUp">
    <!-- Header -->
    <header class="text-center mb-16">
      <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-600/10 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-600/20">
        🚚 Shipping & Delivery
      </span>
      <h1 class="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink dark:text-cream mb-6">
        Shipping Policy
      </h1>
      <p class="text-lg text-ink/70 dark:text-cream/70 max-w-2xl mx-auto">
        We ensure your pet's essentials reach you safely and on time. Read more about our processing times, delivery options, and shipping rates.
      </p>
    </header>

    <!-- Policy Content -->
    <article class="prose prose-teal dark:prose-invert max-w-none space-y-10 prose-headings:font-display prose-headings:font-bold prose-lg prose-p:text-ink/80 dark:prose-p:text-cream/80 prose-a:text-teal-600 dark:prose-a:text-teal-400">
      
      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">1. Order Processing Time</h2>
        <p>
          All orders are processed within <strong>1 to 2 business days</strong> (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
        </p>
        <p>
          Please note that during peak seasons or promotional events, processing times might be slightly delayed.
        </p>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">2. Domestic Shipping Rates & Estimates</h2>
        <p>
          Shipping charges for your order will be calculated and displayed at checkout. We offer a flat shipping rate for most orders.
        </p>
        <ul class="list-disc pl-6 space-y-2 text-ink/80 dark:text-cream/80">
          <li><strong>Standard Delivery:</strong> 3-5 business days.</li>
          <li><strong>Express Delivery:</strong> 1-2 business days (available for select locations).</li>
          <li><strong>Free Shipping:</strong> Available on orders over ₹49.</li>
        </ul>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">3. Local Delivery</h2>
        <p>
          Free local delivery is available for orders over ₹499 within Jalgaon city limits. For orders under ₹499, we charge a nominal local delivery fee. Local deliveries are typically fulfilled on the same or next business day.
        </p>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">4. Order Tracking</h2>
        <p>
          When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 24 hours for the tracking information to become available.
        </p>
        <p>
          If you haven’t received your order within the estimated delivery time, please contact us with your name and order number.
        </p>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">5. Damages & Issues</h2>
        <p>
          Samruddhi Pet Shop is not liable for any products damaged or lost during shipping. However, we value our customers. If you received your order damaged, please contact our support team immediately, and we will assist you in filing a claim with the shipment carrier or finding a solution.
        </p>
        <p>
          Please save all packaging materials and damaged goods before filing a claim.
        </p>
      </div>

    </article>

    <!-- Support CTA -->
    <div class="mt-16 text-center bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/10 dark:to-transparent p-10 rounded-[2rem] border border-black/5 dark:border-white/5">
      <h3 class="font-display text-2xl font-bold mb-3">Where is my order?</h3>
      <p class="text-ink/60 dark:text-cream/60 mb-6">Need help tracking your package or have shipping questions? Our team is ready to assist.</p>
      <button data-nav="contact" class="px-8 py-3 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink font-semibold shadow-soft hover:shadow-lift transition-all hover:scale-[1.02]">
        Contact Support
      </button>
    </div>
  </section>`;
}
