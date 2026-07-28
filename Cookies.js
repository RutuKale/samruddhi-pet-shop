function openCookiesPopup() {
    const content = `
    <button data-close-quick class="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 z-10 transition-colors" aria-label="Close">✕</button>
    <div class="p-6 sm:p-10 space-y-6">
      <div class="text-center">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-clay-500/10 text-clay-700 dark:text-clay-300 text-xs font-bold uppercase tracking-wider mb-4 border border-clay-500/20">
          🍪 Cookie Policy
        </span>
        <h2 class="font-display text-3xl sm:text-4xl text-ink dark:text-cream">How we use Cookies</h2>
      </div>
      <div class="prose prose-teal dark:prose-invert max-w-none text-ink/80 dark:text-cream/80 space-y-4">
        <p>We use cookies and similar technologies to enhance your browsing experience, serve personalized content, and analyze our web traffic. By clicking "Accept All", you consent to our use of cookies.</p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Essential Cookies:</strong> Extremely necessary for the website to function correctly (e.g., maintaining your shopping cart and secure login).</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our pet marketplace so we can improve our services.</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant promotions for your companions.</li>
        </ul>
      </div>
      <div class="flex flex-col sm:flex-row gap-3 pt-6">
        <button data-close-quick class="flex-1 py-3.5 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 shadow-soft transition-all active:scale-95">Accept All</button>
        <button data-close-quick class="flex-1 py-3.5 rounded-full bg-white dark:bg-[#1d1712] border border-black/10 dark:border-white/10 font-semibold text-ink dark:text-cream hover:bg-black/5 dark:hover:bg-white/5 transition-all active:scale-95">Manage Preferences</button>
      </div>
    </div>
  `;
    document.querySelector("#quickContent").innerHTML = content;
    openOverlay("#quickModal");
}
