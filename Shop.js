function getFilteredProducts() {
  const f = State.shopFilters;
  let list = PRODUCTS.filter((p) => {
    if (f.pet !== "all" && p.pet !== f.pet) return false;
    if (f.category !== "all" && p.category !== f.category) return false;
    if (f.brand && f.brand !== "all" && p.brand !== f.brand) return false;
    if (f.q) {
      const q = f.q.toLowerCase();
      if (!(p.name + p.brand + p.category).toLowerCase().includes(q))
        return false;
    }
    return true;
  });
  const s = f.sort;
  if (s === "price-low") list.sort((a, b) => a.price - b.price);
  else if (s === "price-high") list.sort((a, b) => b.price - a.price);
  else if (s === "rating") list.sort((a, b) => b.rating - a.rating);
  else if (s === "discount") list.sort((a, b) => b.discount - a.discount);
  else list.sort((a, b) => b.reviews - a.reviews);
  return list;
}

function ShopPage() {
  const f = State.shopFilters;
  const all = getFilteredProducts();
  const totalPages = Math.max(1, Math.ceil(all.length / PER_PAGE));
  if (f.page > totalPages) f.page = totalPages;
  const start = (f.page - 1) * PER_PAGE;
  const pageItems = all.slice(start, start + PER_PAGE);

  let pagination = [];
  if (totalPages > 1) {
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pagination.push(i);
    } else {
      pagination.push(1);
      if (f.page > 3) pagination.push("...");

      let pStart = Math.max(2, f.page - 1);
      let pEnd = Math.min(totalPages - 1, f.page + 1);

      if (f.page === 1) pEnd = 3;
      else if (f.page === totalPages) pStart = totalPages - 2;

      for (let i = pStart; i <= pEnd; i++) pagination.push(i);

      if (f.page < totalPages - 2) pagination.push("...");
      pagination.push(totalPages);
    }
  }

  const pills = (label, key, val, active) =>
    `<button data-filter="${key}:${val}" class="px-4 py-2 rounded-full text-sm font-medium transition ${active ? "bg-teal-600 text-white" : "bg-white dark:bg-[#1d1712] hover:bg-clay-100 dark:hover:bg-white/10"}">${label}</button>`;

  let pageTitle = "Shop all";
  let breadcrumbsPath = `<a href="#" data-nav="home" class="hover:text-clay-600">Home</a> / <span class="text-ink dark:text-cream">Shop</span>`;

  if (f.brand && f.brand !== "all") {
    pageTitle = f.brand;
    breadcrumbsPath = `<a href="#" data-nav="home" class="hover:text-clay-600">Home</a> / <a href="#" data-nav="shop" class="hover:text-clay-600">Shop</a> / <span class="text-ink dark:text-cream">${f.brand}</span>`;
  } else if (f.category !== "all") {
    pageTitle = f.category;
    breadcrumbsPath = `<a href="#" data-nav="home" class="hover:text-clay-600">Home</a> / <a href="#" data-nav="shop" class="hover:text-clay-600">Shop</a> / <span class="text-ink dark:text-cream">${f.category}</span>`;
  } else if (f.pet !== "all") {
    pageTitle = `Shop for ${petName(f.pet)}s`;
    breadcrumbsPath = `<a href="#" data-nav="home" class="hover:text-clay-600">Home</a> / <a href="#" data-nav="shop" class="hover:text-clay-600">Shop</a> / <span class="text-ink dark:text-cream">${petName(f.pet)}</span>`;
  }

  return `
  <section class="mx-auto max-w-7xl px-4 py-8">
    <nav class="text-sm text-ink/50 dark:text-cream/50 mb-4">${breadcrumbsPath}</nav>
    <div class="flex flex-col md:flex-row md:flex-wrap md:items-end justify-between gap-4 mb-4 sm:mb-6">
      <div>
        <h1 class="font-display text-3xl sm:text-4xl">${pageTitle}</h1>
        <p class="text-ink/60 dark:text-cream/60 mt-1">${all.length} product${all.length !== 1 ? "s" : ""} ${f.pet !== "all" ? "for " + petName(f.pet) : ""} ${f.category !== "all" ? "· " + f.category : ""} ${f.brand && f.brand !== "all" ? "· " + f.brand : ""}</p>
      </div>
      <div class="flex flex-row overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full md:w-auto items-center gap-2 sm:gap-3 pb-1 md:pb-0">
        <button onclick="document.getElementById('shopSidebar').classList.toggle('hidden')" class="lg:hidden flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-full bg-white dark:bg-[#1d1712] border border-black/10 dark:border-white/15 px-4 py-2 text-sm font-medium shadow-sm hover:bg-black/5 dark:hover:bg-white/5 transition whitespace-nowrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          Filters
        </button>
        <span class="hidden sm:inline-block text-sm text-ink/60 dark:text-cream/60 whitespace-nowrap">Sort By</span>
        <select id="sortSelect" class="flex-1 sm:flex-none min-w-[150px] rounded-full bg-white dark:bg-[#1d1712] border border-black/10 dark:border-white/15 px-4 py-2 text-sm outline-none shadow-sm focus:ring-2 focus:ring-teal-500/20">
          ${[
      ["popular", "Most popular"],
      ["price-low", "Price: low to high"],
      ["price-high", "Price: high to low"],
      ["rating", "Top rated"],
      ["discount", "Biggest discount"],
    ]
      .map(
        ([v, l]) =>
          `<option value="${v}" ${f.sort === v ? "selected" : ""}>${l}</option>`,
      )
      .join("")}
        </select>
      </div>
    </div>

    <div class="grid lg:grid-cols-[230px_minmax(0,1fr)] gap-6 lg:gap-8">
      <aside id="shopSidebar" class="hidden lg:block space-y-6 lg:sticky lg:top-40 self-start p-4 lg:p-0 bg-white lg:bg-transparent dark:bg-[#1d1712] lg:dark:bg-transparent rounded-2xl lg:rounded-none shadow-soft lg:shadow-none border border-black/5 lg:border-none dark:border-white/5 lg:dark:border-transparent">
        <div>
          <h3 class="font-semibold mb-2 sm:mb-3">Pet</h3>
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            ${pills("All", "pet", "all", f.pet === "all")}
            ${PETS.map((p) => pills(p.emoji + " " + p.name, "pet", p.id, f.pet === p.id)).join("")}
          </div>
        </div>
        <div>
          <h3 class="font-semibold mb-2 sm:mb-3">Category</h3>
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            ${pills("All", "category", "all", f.category === "all")}
            ${CATEGORIES.map((c) => pills(c, "category", c, f.category === c)).join("")}
          </div>
        </div>
        <div>
          <h3 class="font-semibold mb-2 sm:mb-3">Brand</h3>
          <div class="flex flex-wrap gap-1.5 sm:gap-2">
            ${pills("All", "brand", "all", f.brand === "all" || !f.brand)}
            ${BRANDS.map((b) => pills(b, "brand", b, f.brand === b)).join("")}
          </div>
        </div>
        <button data-filter="reset:1" class="text-sm text-clay-600 dark:text-clay-300 hover:underline">Clear all filters</button>
      </aside>

      <div>
        <div id="shopGrid">
          ${pageItems.length
      ? `<div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">${pageItems.map(productCard).join("")}</div>`
      : `<div class="text-center py-20"><div class="text-6xl">🐾</div><p class="font-display text-2xl mt-4">No matches yet</p><p class="text-ink/60 dark:text-cream/60 mt-1">Try clearing a filter or searching something else.</p></div>`
    }
        </div>
        ${totalPages > 1
      ? `
        <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-8 sm:mt-10">
          <button data-page="${f.page - 1}" ${f.page === 1 ? "disabled" : ""} class="px-4 py-2 rounded-full bg-white dark:bg-[#1d1712] shadow-soft hover:bg-clay-50 dark:hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40 transition">←</button>
          ${pagination
        .map((p) =>
          p === "..."
            ? `<span class="px-1 sm:px-2 text-ink/50 dark:text-cream/50 tracking-widest pointer-events-none text-xl sm:text-2xl mt-[-10px]">...</span>`
            : `<button data-page="${p}" class="w-10 h-10 sm:w-11 sm:h-11 rounded-full font-medium text-sm sm:text-base transition ${f.page === p ? "bg-teal-600 text-white" : "bg-white dark:bg-[#1d1712] shadow-soft hover:bg-clay-50 dark:hover:bg-white/10"}">${p}</button>`,
        )
        .join("")}
          <button data-page="${f.page + 1}" ${f.page === totalPages ? "disabled" : ""} class="px-4 py-2 rounded-full bg-white dark:bg-[#1d1712] shadow-soft hover:bg-clay-50 dark:hover:bg-white/10 disabled:pointer-events-none disabled:opacity-40 transition">→</button>
        </div>`
      : ""
    }
      </div>
    </div>
  </section>`;
}
