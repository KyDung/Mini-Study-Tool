(function () {
  const data = window.MINI_WEB_HUB || { categories: [], tools: [] };
  const pinnedKey = "mini-web-hub:pinned";
  const state = {
    query: "",
    activeCategory: "all",
    pinned: new Set(readPinned()),
  };

  const elements = {
    searchInput: document.querySelector("#searchInput"),
    clearSearch: document.querySelector("#clearSearch"),
    searchSuggestions: document.querySelector("#searchSuggestions"),
    categoryTabs: document.querySelector("#categoryTabs"),
    toolsSection: document.querySelector("#tools"),
    featuredGrid: document.querySelector("#featuredGrid"),
    toolGrid: document.querySelector("#toolGrid"),
    emptyState: document.querySelector("#emptyState"),
    resultMeta: document.querySelector("#resultMeta"),
    toolCount: document.querySelector("#toolCount"),
    categoryCount: document.querySelector("#categoryCount"),
  };

  function readPinned() {
    try {
      return JSON.parse(localStorage.getItem(pinnedKey)) || [];
    } catch (_error) {
      return [];
    }
  }

  function savePinned() {
    localStorage.setItem(pinnedKey, JSON.stringify([...state.pinned]));
  }

  function normalize(value) {
    return String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
    })[character]);
  }

  function getCategory(categoryId) {
    return data.categories.find((category) => category.id === categoryId);
  }

  function createIcon(name) {
    return `<i data-lucide="${escapeHtml(name)}" aria-hidden="true"></i>`;
  }

  function createToolMedia(tool, category, className) {
    const image = tool.image
      ? `<img class="tool-image" src="${escapeHtml(tool.image)}" alt="" loading="lazy" decoding="async">`
      : "";

    return `<div class="tool-media ${className} ${tool.image ? "has-image" : ""}">
      ${image}
      <div class="tool-icon">${createIcon(category?.icon || "sparkles")}</div>
    </div>`;
  }

  function statusLabel(status) {
    const labels = { live: "Đang dùng", new: "Mới thêm", draft: "Đang làm" };
    return labels[status] || "Đang dùng";
  }

  function getFilteredTools() {
    const query = normalize(state.query);

    return data.tools.filter((tool) => {
      const categoryMatch = state.activeCategory === "all" || tool.category === state.activeCategory;
      const haystack = normalize([tool.title, tool.description, tool.category, ...(tool.tags || [])].join(" "));
      return categoryMatch && (!query || haystack.includes(query));
    });
  }

  function renderStats() {
    elements.toolCount.textContent = data.tools.length;
    elements.categoryCount.textContent = data.categories.length;
  }

  function renderCategories() {
    const categories = [{ id: "all", name: "Tất cả", icon: "grid-2x2" }, ...data.categories];

    elements.categoryTabs.innerHTML = categories.map((category) => {
      const total = category.id === "all"
        ? data.tools.length
        : data.tools.filter((tool) => tool.category === category.id).length;
      const isActive = state.activeCategory === category.id;

      return `<button class="category-tab ${isActive ? "is-active" : ""}" type="button" data-category="${escapeHtml(category.id)}" role="tab" aria-selected="${isActive}" style="--category-color: ${escapeHtml(category.color || "#ff6b57")}">
        <span class="category-icon">${createIcon(category.icon)}</span>
        <span class="category-name">${escapeHtml(category.name)}</span>
        <strong>${total}</strong>
      </button>`;
    }).join("");
  }

  function renderFeatured() {
    const featured = data.tools.filter((tool) => state.pinned.has(tool.id));

    if (!featured.length) {
      elements.featuredGrid.innerHTML = `<div class="featured-empty" data-reveal>
        ${createIcon("pin")}
        <div><h3>Chưa có mini web được ghim</h3><p>Mở kho công cụ và bấm biểu tượng ghim ở tool bạn dùng thường xuyên.</p></div>
      </div>`;
      return;
    }
    elements.featuredGrid.innerHTML = featured.map((tool, index) => {
      const category = getCategory(tool.category);
      return `<article class="featured-card" data-reveal data-open-url="${escapeHtml(tool.url)}" role="link" tabindex="0" aria-label="Mở ${escapeHtml(tool.title)}" style="--category-color: ${escapeHtml(category?.color || "#ff6b57")}">
        ${createToolMedia(tool, category, "featured-media")}
        <div class="featured-copy">
          <p>${escapeHtml(category?.name || "Mini web")}</p>
          <h3>${escapeHtml(tool.title)}</h3>
          <span>${escapeHtml(tool.description)}</span>
          <a href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer">
            Mở tool ${createIcon("arrow-up-right")}
          </a>
        </div>
      </article>`;
    }).join("");
  }

  function renderTools() {
    const tools = getFilteredTools();
    elements.resultMeta.textContent = `${tools.length} tool`;
    elements.emptyState.hidden = tools.length > 0;

    elements.toolGrid.innerHTML = tools.map((tool, index) => {
      const category = getCategory(tool.category);
      const tags = (tool.tags || []).slice(0, 3).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
      return `<article class="tool-card" data-reveal data-open-url="${escapeHtml(tool.url)}" role="link" tabindex="0" aria-label="Mở ${escapeHtml(tool.title)}" style="--category-color: ${escapeHtml(category?.color || "#ff6b57")}">
        ${createToolMedia(tool, category, "card-media")}
        <div class="tool-copy">
          <div class="tool-meta">
            <span>${escapeHtml(category?.name || "Mini web")}</span>
            <span>${statusLabel(tool.status)}</span>
          </div>
          <h3>${escapeHtml(tool.title)}</h3>
          <p>${escapeHtml(tool.description)}</p>
          <div class="tag-row">${tags}</div>
          <div class="tool-actions">
            <a class="open-tool" href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer">Mở tool ${createIcon("arrow-up-right")}</a>
            <button class="icon-button pin-button ${state.pinned.has(tool.id) ? "is-active" : ""}" type="button" data-pin="${escapeHtml(tool.id)}" aria-label="Ghim ${escapeHtml(tool.title)}" aria-pressed="${state.pinned.has(tool.id)}">${createIcon("pin")}</button>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  function renderSearchSuggestions() {
    const query = normalize(state.query);
    if (!query) {
      elements.searchSuggestions.hidden = true;
      elements.searchSuggestions.innerHTML = "";
      return;
    }

    const tools = getFilteredTools().slice(0, 5);
    elements.searchSuggestions.hidden = false;

    if (!tools.length) {
      elements.searchSuggestions.innerHTML = `<p class="search-empty">Không tìm thấy tool phù hợp.</p>`;
      return;
    }

    elements.searchSuggestions.innerHTML = tools.map((tool) => {
      const category = getCategory(tool.category);
      return `<a class="search-suggestion" href="${escapeHtml(tool.url)}" target="_blank" rel="noreferrer" role="option">
        <span class="search-suggestion-icon" style="--category-color: ${escapeHtml(category?.color || "#ff6b57")}">${createIcon(category?.icon || "sparkles")}</span>
        <span><strong>${escapeHtml(tool.title)}</strong><small>${escapeHtml(category?.name || "Mini web")}</small></span>
        ${createIcon("arrow-up-right")}
      </a>`;
    }).join("");
  }

  function refreshIcons() {
    window.lucide?.createIcons();
  }

  function bindImageFallbacks() {
    document.querySelectorAll(".tool-image").forEach((image) => {
      image.addEventListener("error", () => {
        image.closest(".tool-media")?.classList.remove("has-image");
        image.remove();
      }, { once: true });
    });
  }

  function bindReveals() {
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((element) => observer.observe(element));
  }

  function refreshDynamicContent() {
    renderTools();
    renderSearchSuggestions();
    refreshIcons();
    bindImageFallbacks();
    bindReveals();
  }

  function render() {
    renderStats();
    renderCategories();
    renderFeatured();
    refreshDynamicContent();
  }

  function openTool(url) {
    window.open(url, "_blank", "noopener");
  }

  function bindEvents() {
    elements.searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      refreshDynamicContent();
    });

    elements.searchInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || !state.query) return;
      event.preventDefault();
      elements.toolsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    elements.clearSearch.addEventListener("click", () => {
      state.query = "";
      elements.searchInput.value = "";
      elements.searchInput.focus();
      refreshDynamicContent();
    });

    elements.categoryTabs.addEventListener("click", (event) => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.activeCategory = button.dataset.category;
      render();
      elements.toolsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.addEventListener("click", (event) => {
      const pinButton = event.target.closest("[data-pin]");

      if (pinButton) {
        const toolId = pinButton.dataset.pin;
        state.pinned.has(toolId) ? state.pinned.delete(toolId) : state.pinned.add(toolId);
        savePinned();
        renderFeatured();
        refreshDynamicContent();
        return;
      }

      const card = event.target.closest("[data-open-url]");
      if (card && !event.target.closest("a, button, input, label")) {
        openTool(card.dataset.openUrl);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const card = event.target.closest("[data-open-url]");
      if (!card || event.target !== card) return;
      event.preventDefault();
      openTool(card.dataset.openUrl);
    });
  }

  bindEvents();
  render();
})();
