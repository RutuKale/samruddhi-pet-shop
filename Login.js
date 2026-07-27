/* ---------- LOGIN PAGE ---------- */
function LoginPage() {
  return `
<style>
  #header-root, #footer-root { display: none !important; }
  body { 
    margin: 0; 
    height: 100vh;
    overflow: hidden;
  }
  #app { 
    height: 100vh;
    overflow: hidden;
  }
  .bg-grid-pattern {
    background-size: 40px 40px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
  }
  .dark .bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  }
</style>

<section class="h-screen w-full flex text-ink dark:text-cream bg-cream dark:bg-[#120e0b] overflow-hidden">
  <!-- Left Decorative Side -->
  <div class="hidden lg:flex flex-col justify-between w-[45%] relative bg-teal-900 border-r border-black/10 dark:border-white/10">
    <div class="absolute inset-0 bg-teal-900/30 z-10"></div>
    <img src="./assets/LoginImage.jpg" alt="Login Banner" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] hover:scale-110" />
    
    <div class="relative z-20 p-8 flex items-center gap-3">
      <img src="./assets/logo.png" alt="Samruddhi Logo" class="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 backdrop-blur-md rounded-[1.5rem] p-3 shadow-soft" />
      <span class="font-display text-3xl sm:text-4xl text-white drop-shadow-md">Samruddhi</span>
    </div>

    <div class="relative z-20 p-8 pb-12 text-white bg-gradient-to-t from-teal-950/90 to-transparent pt-24">
      <span class="inline-block px-3 py-1 mb-3 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-widest text-teal-50 border border-white/20">Welcome to the pack</span>
      <h2 class="font-display text-4xl leading-[1.1] drop-shadow-lg">Your pet's <br/>happy place.</h2>
      <p class="mt-3 text-base text-teal-50 max-w-sm leading-snug drop-shadow-md">Premium pet care, vet-approved nutrition, and treats they'll love—all in one place.</p>
    </div>
  </div>

  <!-- Right Form Side -->
  <div class="flex-1 flex flex-col relative bg-grid-pattern h-full overflow-hidden">
    
    <!-- Header with Back Button -->
    <div class="p-4 sm:p-6 flex justify-end shrink-0">
      <button data-nav="home" class="flex items-center gap-2 text-xs font-semibold text-ink/50 dark:text-cream/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm border border-black/5 dark:border-white/5">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
        Back to Home
      </button>
    </div>

    <!-- Login Container -->
    <div class="flex-1 flex flex-col justify-center px-6 sm:px-10 mx-auto w-full max-w-md shrink-0">
      <div class="w-full animate-fadeUp">
        <div class="text-center mb-5">
          <div class="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white dark:bg-[#1d1712] rounded-[1.5rem] shadow-soft flex items-center justify-center border border-black/5 dark:border-white/5 mb-4 ring-2 ring-teal-50 dark:ring-teal-900/20">
            <img src="./assets/logo.png" alt="Logo" class="w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-90 drop-shadow-sm" />
          </div>
          <h1 class="font-display text-2xl sm:text-3xl tracking-tight" id="authTitle">Welcome back</h1>
          <p class="text-ink/60 dark:text-cream/60 text-sm mt-1" id="authSub">Log in to track orders and reorder fast.</p>
        </div>
        
        <div class="bg-white dark:bg-[#1d1712] rounded-2xl shadow-lift border border-black/5 dark:border-white/5 p-1 mb-5">
          <div class="flex bg-clay-50/50 dark:bg-black/20 rounded-xl p-1 relative">
            <button data-auth="login" class="auth-tab flex-1 py-1.5 rounded-lg text-sm font-semibold bg-white dark:bg-[#2a221c] shadow-soft text-ink dark:text-cream transition-all">Log in</button>
            <button data-auth="register" class="auth-tab flex-1 py-1.5 rounded-lg text-sm font-semibold text-ink/60 dark:text-cream/60 hover:text-ink dark:hover:text-cream transition-all">Register</button>
          </div>
        </div>

        <form id="authForm" class="space-y-3.5">
          <div id="nameField" class="hidden animate-fadeUp" style="animation-duration: 0.4s;">
            <label class="block text-[10px] font-bold uppercase tracking-widest text-ink/70 dark:text-cream/70 mb-1 ml-1">Full name</label>
            <input type="text" placeholder="e.g. Maya Rivers" class="w-full bg-white dark:bg-[#1d1712] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm placeholder:text-ink/30 dark:placeholder:text-cream/30"/>
          </div>
          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-ink/70 dark:text-cream/70 mb-1 ml-1">Email</label>
            <input type="email" required placeholder="you@example.com" class="w-full bg-white dark:bg-[#1d1712] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm placeholder:text-ink/30 dark:placeholder:text-cream/30"/>
          </div>
          <div>
            <div class="flex items-center justify-between mb-1 ml-1 pr-1">
              <label class="block text-[10px] font-bold uppercase tracking-widest text-ink/70 dark:text-cream/70">Password</label>
              <a href="#" class="text-[10px] text-teal-600 dark:text-teal-400 font-semibold hover:underline">Forgot?</a>
            </div>
            <input type="password" required placeholder="••••••••" class="w-full bg-white dark:bg-[#1d1712] border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all shadow-sm placeholder:text-ink/30 dark:placeholder:text-cream/30"/>
          </div>
          <button type="submit" class="w-full py-2.5 rounded-xl bg-teal-600 text-white text-sm font-bold hover:bg-teal-700 active:scale-[0.98] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-1" id="authSubmit">
            Log in
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</section>`;
}
