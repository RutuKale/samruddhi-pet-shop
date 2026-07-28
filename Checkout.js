/* ---------- CHECKOUT ---------- */
let stateCityMap = {};

// Fetch comprehensive list of Indian states and districts dynamically
fetch("https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json")
  .then(r => r.json())
  .then(data => {
    data.states.forEach(s => {
      // Clean naming conventions (UT), (NCT)
      let cleanedState = s.state.replace(/ \((UT|NCT|NCT of Delhi)\)/g, "").trim();
      stateCityMap[cleanedState] = s.districts;
      // Map aliases for better API matching
      if (cleanedState === "Delhi") stateCityMap["New Delhi"] = s.districts;
      if (cleanedState === "Orissa") stateCityMap["Odisha"] = s.districts;
      // Add Jalgaon manually across Maharashtra just in case
      if (cleanedState === "Maharashtra" && !s.districts.includes("Jalgaon")) {
        stateCityMap[cleanedState].push("Jalgaon");
      }
    });

    // If checkout page is already open, populate the state dropdown
    const stateSelect = document.getElementById("stateSelect");
    if (stateSelect && stateSelect.options.length <= 1) {
      const currentVal = stateSelect.value;
      Object.keys(stateCityMap).sort().forEach(state => {
        stateSelect.innerHTML += `<option value="${state}">${state}</option>`;
      });
      if (currentVal) stateSelect.value = currentVal;
    }
  })
  .catch(err => console.error("Could not fetch states", err));

window.handleStateChange = function (stateSelect) {
  const state = stateSelect.value;
  const cities = stateCityMap[state] || [];
  const citySelect = document.getElementById("citySelect");
  if (citySelect) {
    citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
    cities.forEach(city => {
      citySelect.innerHTML += `<option value="${city}">${city}</option>`;
    });
  }
};

window.handleZipChange = async function (zipInput) {
  const val = zipInput.value.trim();
  if (val.length === 6 && !isNaN(val)) {
    try {
      const res = await fetch(`https://api.zippopotam.us/IN/${val}`);
      if (res.ok) {
        const data = await res.json();
        const place = data.places[0];
        const stateName = place.state;
        const cityName = place["place name"];

        const stateSelect = document.getElementById("stateSelect");
        const citySelect = document.getElementById("citySelect");

        // Set state
        let stateFound = false;
        for (let i = 0; i < stateSelect.options.length; i++) {
          if (stateSelect.options[i].value.toLowerCase() === stateName.toLowerCase()) {
            stateSelect.selectedIndex = i;
            stateFound = true;
            break;
          }
        }

        // Setting state triggers cities loading, but we need to do it programmatically here
        if (stateFound) {
          window.handleStateChange(stateSelect);

          let cityFound = false;
          for (let i = 0; i < citySelect.options.length; i++) {
            const optVal = citySelect.options[i].value.toLowerCase();
            if (optVal.includes(cityName.toLowerCase()) || cityName.toLowerCase().includes(optVal)) {
              citySelect.selectedIndex = i;
              cityFound = true;
              break;
            }
          }

          if (!cityFound) {
            citySelect.innerHTML += `<option value="${cityName}">${cityName}</option>`;
            citySelect.value = cityName;
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
};

function CheckoutPage() {
  if (!State.cart.length)
    return emptyState(
      "Nothing to check out",
      "Add a few things to your cart first.",
      "Go to shop",
      "shop",
      "🧾",
    );
  const t = cartTotals();
  const field = (label, ph, type = "text", cls = "", attrs = "") =>
    `<div class="${cls}">
        <label class="text-sm font-medium text-ink/80 dark:text-cream/80">${label}</label>
        <input type="${type}" placeholder="${ph}" class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#2a221b] transition-all duration-300 shadow-sm hover:shadow" ${attrs}/>
    </div>`;

  const indianStates = Object.keys(stateCityMap).sort();

  return `<section class="mx-auto max-w-7xl px-4 py-6 sm:py-10">
    <h1 class="font-display text-2xl sm:text-3xl mb-0 flex items-center gap-3">
        Checkout
        <i class="fa-solid fa-bag-shopping text-teal-600 text-2xl hidden sm:block"></i>
    </h1>
    <div class="grid lg:grid-cols-[minmax(0,1fr)_380px] gap-6 lg:gap-8">
      <form id="checkoutForm" class="space-y-8">
        <div class="relative bg-white dark:bg-[#1d1712] rounded-2xl sm:rounded-3xl shadow-soft hover:shadow-lg transition-shadow duration-500 p-6 sm:p-8 border border-black/5 dark:border-white/5 mt-1 sm:mt-2">
          <!-- Sleeping Cat Image -->
          <img src="./assets/checkout_cat.png" alt="Sleeping Cat" class="absolute bottom-[99%] sm:bottom-[95.5%] right-4 sm:right-10 w-28 sm:w-56 h-auto drop-shadow-lg z-10 pointer-events-none origin-bottom-right" style="transform: translateY(12px);" />
          
          <h2 class="font-display text-xl mb-6 flex items-center gap-2 relative z-20">
            <i class="fa-solid fa-truck-fast text-teal-600"></i> Contact & shipping
          </h2>
          <div class="grid sm:grid-cols-2 gap-5">
            ${field("Full name", "Jordan Rivera", "text", "", `value="${State.currentUser?.name || ''}" required`)}
            ${field("Email", "you@email.com", "email", "", `value="${State.currentUser?.email || ''}" required`)}
            <div class="sm:col-span-2">
                <label class="text-sm font-medium text-ink/80 dark:text-cream/80">Mobile number</label>
                <div class="flex items-center gap-2 mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 outline-none focus-within:ring-2 focus-within:ring-teal-500 focus-within:bg-white dark:focus-within:bg-[#2a221b] transition-all duration-300 shadow-sm hover:shadow">
                  <span class="text-ink/60 font-semibold border-r border-black/10 dark:border-white/10 pr-3">+91</span>
                  <input type="tel" required pattern="[0-9]{10}" maxlength="10" placeholder="9876543210" class="w-full py-3 bg-transparent outline-none focus:outline-none" />
                </div>
            </div>
            ${field("Address", "240 Maple Ave", "text", "sm:col-span-2", "required")}
            <div class="sm:col-span-1">
                <label class="text-sm font-medium text-ink/80 dark:text-cream/80">State</label>
                <select id="stateSelect" required onchange="window.handleStateChange(this)" class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#2a221b] transition-all duration-300 shadow-sm hover:shadow appearance-none bg-no-repeat" style="background-image: url('data:image/svg+xml;utf8,<svg fill=%22none%22 stroke=%22currentColor%22 viewBox=%220 0 24 24%22 xmlns=%22http://www.w3.org/2000/svg%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22></path></svg>'); background-size: 1.25rem; background-position: right 1rem center;">
                    <option value="" disabled selected>Select State</option>
                    ${indianStates.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                </select>
            </div>
            <div class="sm:col-span-1">
                <label class="text-sm font-medium text-ink/80 dark:text-cream/80">City</label>
                <select id="citySelect" required class="w-full mt-1.5 rounded-xl bg-clay-50 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white dark:focus:bg-[#2a221b] transition-all duration-300 shadow-sm hover:shadow appearance-none bg-no-repeat" style="background-image: url('data:image/svg+xml;utf8,<svg fill=%22none%22 stroke=%22currentColor%22 viewBox=%220 0 24 24%22 xmlns=%22http://www.w3.org/2000/svg%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22></path></svg>'); background-size: 1.25rem; background-position: right 1rem center;">
                    <option value="" disabled selected>Select City</option>
                </select>
            </div>
            ${field("ZIP / PIN Code", "425001", "text", "sm:col-span-2", 'id="zipInput" oninput="window.handleZipChange(this)" maxlength="6" pattern="[0-9]{6}" required')}
          </div>
        </div>
        <div class="bg-white dark:bg-[#1d1712] rounded-2xl sm:rounded-3xl shadow-soft hover:shadow-lg transition-shadow duration-500 p-6 sm:p-8 border border-black/5 dark:border-white/5">
          <h2 class="font-display text-xl mb-2 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-teal-600"></i> Secure Payment
          </h2>
          <p class="text-sm text-ink/50 dark:text-cream/50 mb-6 flex items-center gap-2">
            <i class="fa-solid fa-circle-info"></i> Demo only — please don’t enter real card details.
          </p>
          <div class="grid sm:grid-cols-2 gap-5">
            ${field("Card number", "•••• •••• •••• ••••", "text", "sm:col-span-2")}
            ${field("Expiry", "MM/YY")}
            ${field("CVC", "•••")}
          </div>
        </div>
      </form>
      <div class="lg:sticky lg:top-24 h-fit">
        ${orderSummary(t, "__placeorder", "Place order")}
      </div>
    </div>
  </section>`;
}
