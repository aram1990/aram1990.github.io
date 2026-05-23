document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();

  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.dataset.page === page) link.classList.add("active");
  });

  document.body.classList.add("fog-enter");

  const searchInput = document.querySelector("#monsterSearch");
  const categoryFilter = document.querySelector("#categoryFilter");
  const dangerFilter = document.querySelector("#dangerFilter");
  const monsterGrid = document.querySelector("#monsterGrid");

  function createMonsterCard(monster) {
    const gallery = (monster.images || []).map((image, index) => `
      <figure class="monster-gallery-slot">
        <div class="monster-image-placeholder" role="img" aria-label="${image.alt}">
          <span>Image ${index + 1}</span>
        </div>
        <figcaption>${monster.name} image slot ${index + 1}</figcaption>
      </figure>
    `).join("");

    const profileAction = monster.profileUrl
      ? `<a class="monster-profile-link" href="${monster.profileUrl}">View Full Monster Profile</a>`
      : `<span class="monster-profile-soon">Full profile coming soon</span>`;

    return `
      <article class="monster-card blood-hover">
        <div class="monster-image" role="img" aria-label="${monster.alt}">
          <span>${monster.name}</span>
        </div>

        <div class="monster-content">
          <div class="monster-meta">
            <span>${monster.category}</span>
            <span>${monster.origin}</span>
          </div>

          <h3>${monster.name}</h3>
          <p class="monster-description">${monster.description}</p>

          <div class="monster-gallery" aria-label="${monster.name} image placeholders">
            ${gallery}
          </div>

          <div class="monster-details">
            <p><strong>Strengths:</strong> ${monster.strengths}</p>
            <p><strong>Weaknesses:</strong> ${monster.weaknesses}</p>
          </div>

          <div class="monster-card-bottom">
            ${profileAction}
            <div class="danger danger-${monster.dangerLevel.toLowerCase()}">
              Danger Level: ${monster.dangerLevel}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function renderMonsters() {
    if (!monsterGrid || typeof monsters === "undefined") return;

    const searchTerm = searchInput ? searchInput.value.toLowerCase() : "";
    const selectedCategory = categoryFilter ? categoryFilter.value : "all";
    const selectedDanger = dangerFilter ? dangerFilter.value : "all";

    const filtered = monsters.filter(monster => {
      const text = `${monster.name} ${monster.category} ${monster.origin} ${monster.description}`.toLowerCase();
      const matchesSearch = text.includes(searchTerm);
      const matchesCategory = selectedCategory === "all" || monster.category === selectedCategory;
      const matchesDanger = selectedDanger === "all" || monster.dangerLevel === selectedDanger;
      return matchesSearch && matchesCategory && matchesDanger;
    });

    monsterGrid.innerHTML = filtered.map(createMonsterCard).join("");

    const count = document.querySelector("#monsterCount");
    if (count) count.textContent = `${filtered.length} monsters found`;
  }

  function populateFilters() {
    if (typeof monsters === "undefined") return;

    if (categoryFilter) {
      const categories = [...new Set(monsters.map(monster => monster.category))].sort();
      categoryFilter.innerHTML = `<option value="all">All categories</option>` +
        categories.map(category => `<option value="${category}">${category}</option>`).join("");
    }

    if (dangerFilter) {
      const levels = ["Low", "Medium", "High", "Extreme"];
      dangerFilter.innerHTML = `<option value="all">All danger levels</option>` +
        levels.map(level => `<option value="${level}">${level}</option>`).join("");
    }
  }

  populateFilters();
  renderMonsters();

  [searchInput, categoryFilter, dangerFilter].forEach(control => {
    if (control) control.addEventListener("input", renderMonsters);
  });
});
