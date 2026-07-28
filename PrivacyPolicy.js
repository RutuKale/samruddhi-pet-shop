function PrivacyPolicyPage() {
    return `<section class="mx-auto max-w-4xl px-4 py-16 animate-fadeUp">
    <!-- Header -->
    <header class="text-center mb-16">
      <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-600/10 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-600/20">
        🛡️ Privacy & Security
      </span>
      <h1 class="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink dark:text-cream mb-6">
        Privacy Policy
      </h1>
      <p class="text-lg text-ink/70 dark:text-cream/70 max-w-2xl mx-auto">
        Your trust is our priority. Learn how Samruddhi Pet Shop collects, uses, and protects your information, including data processed securely through Razorpay.
      </p>
    </header>

    <!-- Policy Content -->
    <article class="prose prose-teal dark:prose-invert max-w-none space-y-10 prose-headings:font-display prose-headings:font-bold prose-lg prose-p:text-ink/80 dark:prose-p:text-cream/80 prose-a:text-teal-600 dark:prose-a:text-teal-400">
      
      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">1. Information We Collect</h2>
        <p>
          At Samruddhi Pet Shop, we collect information to provide better services to all our users. When you visit our website, register an account, or make a purchase, we may collect the following types of information:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-ink/80 dark:text-cream/80">
          <li><strong>Personal Information:</strong> Name, email address, phone number, and shipping address.</li>
          <li><strong>Pet Details:</strong> Information about your pets to provide personalized recommendations.</li>
          <li><strong>Device & Log Data:</strong> IP address, browser type, device information, and interaction data to improve your experience.</li>
        </ul>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">2. Payment Processing via Razorpay</h2>
        <p>
          We use <strong>Razorpay</strong> as our primary payment gateway to ensure secure and seamless transactions.
        </p>
        <ul class="list-disc pl-6 space-y-2 text-ink/80 dark:text-cream/80">
          <li><strong>No Credit Card Storage:</strong> We do not store your credit/debit card numbers or UPI details on our servers.</li>
          <li><strong>Secure Gateway:</strong> All payment details are securely passed directly to Razorpay through encrypted connections (SSL/TLS).</li>
          <li><strong>Razorpay Privacy Policy:</strong> For more details on how your payment data is handled, please review <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" class="font-semibold underline decoration-2 underline-offset-2">Razorpay's Privacy Policy</a>.</li>
        </ul>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">3. How We Use Your Information</h2>
        <p>
          The information we collect is used to:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-ink/80 dark:text-cream/80">
          <li>Process and deliver your orders accurately.</li>
          <li>Communicate with you regarding your orders, support requests, and updates.</li>
          <li>Personalize your shopping experience based on your pet's needs.</li>
          <li>Improve our website, services, and product offerings.</li>
          <li>Comply with legal obligations and prevent fraudulent activities.</li>
        </ul>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">4. Data Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers behind robust firewalls. Access to your personal data is restricted to authorized personnel only, who are bound by strict confidentiality agreements.
        </p>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">5. Third-Party Services</h2>
        <p>
          Except for trusted third parties like Razorpay (for payments) and shipping partners (for delivery) who operate under strict privacy agreements, we do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
        </p>
      </div>

      <div class="bg-white dark:bg-[#1d1712] p-8 sm:p-10 rounded-[2rem] shadow-soft border border-black/5 dark:border-white/5 space-y-6 hover:shadow-lift transition-shadow duration-300">
        <h2 class="text-3xl text-ink dark:text-cream mb-4">6. Changes to this Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page with an updated revision date.
        </p>
      </div>
    </article>

    <!-- Support CTA -->
    <div class="mt-16 text-center bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-900/10 dark:to-transparent p-10 rounded-[2rem] border border-black/5 dark:border-white/5">
      <h3 class="font-display text-2xl font-bold mb-3">Questions about our privacy practices?</h3>
      <p class="text-ink/60 dark:text-cream/60 mb-6">Our dedicated support team is here to help you understand how your data is handled.</p>
      <button data-nav="contact" class="px-8 py-3 rounded-full bg-ink text-cream dark:bg-cream dark:text-ink font-semibold shadow-soft hover:shadow-lift transition-all hover:scale-[1.02]">
        Contact Support
      </button>
    </div>
  </section>`;
}
