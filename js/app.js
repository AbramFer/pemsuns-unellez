/**
 * UNELLEZ PENSUMS - Buscador y Visor de Documentos Curriculares
 * Lógica de la aplicación Vanilla JS
 */

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search-btn");
  const sortSelect = document.getElementById("sort-select");
  const categoryPillsContainer = document.getElementById("category-pills");
  const gridContainer = document.getElementById("documents-grid");
  const tableContainer = document.getElementById("documents-table-container");
  const tableBody = document.getElementById("table-body");
  const emptyState = document.getElementById("empty-state");
  const resultsCounter = document.getElementById("results-count-num");
  const totalCounter = document.getElementById("total-count-num");
  const viewGridBtn = document.getElementById("view-grid-btn");
  const viewTableBtn = document.getElementById("view-table-btn");

  // Modal elements
  const modalOverlay = document.getElementById("pdf-modal");
  const modalTitle = document.getElementById("modal-pdf-title");
  const modalBadge = document.getElementById("modal-pdf-badge");
  const modalIframe = document.getElementById("pdf-frame");
  const modalLoader = document.getElementById("iframe-loader");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalDownloadBtn = document.getElementById("modal-download-btn");
  const modalExternalBtn = document.getElementById("modal-external-btn");
  const modalCopyLinkBtn = document.getElementById("modal-copy-link-btn");
  const modalFullscreenBtn = document.getElementById("modal-fullscreen-btn");

  // Stats elements
  const statTotal = document.getElementById("stat-total");
  const statLocal = document.getElementById("stat-local");
  const statPages = document.getElementById("stat-pages");

  // App State
  let allDocs = [];
  let filteredDocs = [];
  let activeCategory = "all";
  let searchQuery = "";
  let currentSort = "newest";
  let currentView = "grid";
  let activeModalIndex = -1;

  // Initialize
  initApp();

  async function initApp() {
    try {
      const resp = await fetch("catalog.json");
      if (!resp.ok) throw new Error("No se pudo cargar catalog.json");
      allDocs = await resp.json();

      // Setup stats
      updateGlobalStats();

      // Render category filter pills
      renderCategoryPills();

      // Initial filter & render
      applyFilters();

      // Event listeners
      setupEventListeners();
    } catch (err) {
      console.error(err);
      gridContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: #f87171; padding: 40px;">
        <h3>Error al cargar los datos del catálogo</h3>
        <p>${err.message}</p>
      </div>`;
    }
  }

  function updateGlobalStats() {
    if (statTotal) statTotal.textContent = allDocs.length;
    const localCount = allDocs.filter(d => d.has_local).length;
    if (statLocal) statLocal.textContent = localCount;
    const totalPages = allDocs.reduce((acc, d) => acc + (d.pages || 0), 0);
    if (statPages) statPages.textContent = totalPages.toLocaleString();
  }

  function renderCategoryPills() {
    const categories = [
      { id: "all", label: "Todos los Documentos", icon: "fa-layer-group" },
      { id: "local", label: "Descargados en Local", icon: "fa-hard-drive" },
      { id: "Producción Agrícola y Agropecuaria", label: "Agropecuaria y VPA", icon: "fa-seedling" },
      { id: "Administración y Economía", label: "Administración y Negocios", icon: "fa-chart-pie" },
      { id: "Ciencias de la Salud", label: "Salud y Enfermería", icon: "fa-heart-pulse" },
      { id: "Ciencias Básicas y Educación", label: "Básicas y Educación", icon: "fa-graduation-cap" },
      { id: "Ingeniería y Tecnología", label: "Ingeniería e Informática", icon: "fa-laptop-code" },
      { id: "Ciencias Jurídicas y Políticas", label: "Ciencias Jurídicas", icon: "fa-scale-balanced" },
      { id: "Mallas Curriculares (Pensums)", label: "Pensums (1 pág)", icon: "fa-map" }
    ];

    categoryPillsContainer.innerHTML = "";

    categories.forEach(cat => {
      let count = 0;
      if (cat.id === "all") {
        count = allDocs.length;
      } else if (cat.id === "local") {
        count = allDocs.filter(d => d.has_local).length;
      } else {
        count = allDocs.filter(d => d.category === cat.id).length;
      }

      if (count === 0 && cat.id !== "all" && cat.id !== "local") return;

      const btn = document.createElement("button");
      btn.className = `pill-btn ${activeCategory === cat.id ? "active" : ""}`;
      btn.innerHTML = `<i class="fas ${cat.icon}"></i> ${cat.label} <span class="pill-count">${count}</span>`;
      btn.addEventListener("click", () => {
        activeCategory = cat.id;
        document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        applyFilters();
      });
      categoryPillsContainer.appendChild(btn);
    });
  }

  function applyFilters() {
    let result = [...allDocs];

    // Filter by category
    if (activeCategory === "local") {
      result = result.filter(d => d.has_local);
    } else if (activeCategory !== "all") {
      result = result.filter(d => d.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(d => {
        const title = (d.title || "").toLowerCase();
        const sub = (d.subproyecto || "").toLowerCase();
        const car = (d.carrera || "").toLowerCase();
        const fn = (d.filename || "").toLowerCase();
        const vic = (d.vicerrectorado || "").toLowerCase();
        return title.includes(q) || sub.includes(q) || car.includes(q) || fn.includes(q) || vic.includes(q);
      });
    }

    // Sort
    if (currentSort === "newest") {
      result.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
    } else if (currentSort === "oldest") {
      result.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
    } else if (currentSort === "pages-desc") {
      result.sort((a, b) => (b.pages || 0) - (a.pages || 0));
    } else if (currentSort === "alpha-asc") {
      result.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    } else if (currentSort === "code-asc") {
      result.sort((a, b) => (a.filename || "").localeCompare(b.filename || ""));
    }

    filteredDocs = result;
    renderResults();
  }

  function renderResults() {
    resultsCounter.textContent = filteredDocs.length;
    totalCounter.textContent = allDocs.length;

    if (filteredDocs.length === 0) {
      gridContainer.style.display = "none";
      tableContainer.style.display = "none";
      emptyState.style.display = "block";
      return;
    }

    emptyState.style.display = "none";

    if (currentView === "grid") {
      gridContainer.style.display = "grid";
      tableContainer.style.display = "none";
      renderGrid();
    } else {
      gridContainer.style.display = "none";
      tableContainer.style.display = "block";
      renderTable();
    }
  }

  function getCategoryClass(cat) {
    if (cat.includes("Agrícola") || cat.includes("Agropecuaria")) return "cat-agro";
    if (cat.includes("Salud")) return "cat-salud";
    if (cat.includes("Administración")) return "cat-admin";
    if (cat.includes("Educación") || cat.includes("Básicas")) return "cat-educ";
    if (cat.includes("Ingeniería") || cat.includes("Tecnología")) return "cat-ing";
    if (cat.includes("Mallas")) return "cat-malla";
    return "";
  }

  function renderGrid() {
    gridContainer.innerHTML = "";
    filteredDocs.forEach((doc, idx) => {
      const card = document.createElement("div");
      card.className = "doc-card";

      const catClass = getCategoryClass(doc.category || "");
      const localBadge = doc.has_local
        ? `<span class="local-badge"><i class="fas fa-check-circle"></i> Local</span>`
        : "";

      const fileTargetUrl = doc.has_local ? doc.local_url : doc.url;
      const downloadAttr = doc.has_local ? `download="${doc.filename}"` : "";

      card.innerHTML = `
        <div>
          <div class="card-top">
            <span class="category-tag ${catClass}">${doc.category || "General"}</span>
            ${localBadge}
          </div>
          <h3 class="card-title" title="Ver documento en visor">${doc.title || doc.filename}</h3>
          <div class="card-metadata">
            ${doc.carrera ? `<div class="meta-item"><i class="fas fa-graduation-cap"></i> <span>${doc.carrera}</span></div>` : ""}
            ${doc.vicerrectorado ? `<div class="meta-item"><i class="fas fa-university"></i> <span>${doc.vicerrectorado}</span></div>` : ""}
            <div class="meta-item"><i class="fas fa-file-lines"></i> <span>${doc.pages ? doc.pages + " páginas" : "Documento PDF"}</span> &bull; <i class="fas fa-calendar-alt"></i> <span>${doc.date_str || "2022"}</span></div>
          </div>
        </div>
        <div class="card-footer">
          <span class="file-code">${doc.filename}</span>
          <div class="card-buttons">
            <button class="btn-action btn-primary open-modal-btn" data-index="${idx}">
              <i class="fas fa-eye"></i> Ver PDF
            </button>
            <a href="${fileTargetUrl}" ${downloadAttr} target="_blank" class="btn-action" title="Abrir / Descargar">
              <i class="fas fa-download"></i>
            </a>
          </div>
        </div>
      `;

      // Open viewer when clicking title or button
      card.querySelector(".card-title").addEventListener("click", () => openPdfViewer(idx));
      card.querySelector(".open-modal-btn").addEventListener("click", () => openPdfViewer(idx));

      gridContainer.appendChild(card);
    });
  }

  function renderTable() {
    tableBody.innerHTML = "";
    filteredDocs.forEach((doc, idx) => {
      const tr = document.createElement("tr");
      const fileTargetUrl = doc.has_local ? doc.local_url : doc.url;
      const downloadAttr = doc.has_local ? `download="${doc.filename}"` : "";

      tr.innerHTML = `
        <td><code class="file-code">${doc.filename}</code></td>
        <td>
          <span class="table-doc-title" data-index="${idx}">${doc.title || doc.filename}</span>
          ${doc.carrera ? `<div style="font-size: 0.78rem; color: #6b7280;">${doc.carrera}</div>` : ""}
        </td>
        <td><span class="category-tag ${getCategoryClass(doc.category || "")}">${doc.category || "General"}</span></td>
        <td>${doc.pages || "-"}</td>
        <td>${doc.date_str || "Desconocida"}</td>
        <td>${doc.has_local ? `<span class="local-badge"><i class="fas fa-check-circle"></i> Local</span>` : `<span style="color: #6b7280; font-size: 0.75rem;">Servidor</span>`}</td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="btn-action btn-primary" style="padding: 4px 8px; font-size: 0.75rem;" onclick="window.appOpenViewer(${idx})"><i class="fas fa-eye"></i> Ver</button>
            <a href="${fileTargetUrl}" ${downloadAttr} target="_blank" class="btn-action" style="padding: 4px 8px; font-size: 0.75rem;"><i class="fas fa-download"></i></a>
          </div>
        </td>
      `;

      tr.querySelector(".table-doc-title").addEventListener("click", () => openPdfViewer(idx));
      tableBody.appendChild(tr);
    });
  }

  window.appOpenViewer = function(idx) {
    openPdfViewer(idx);
  };

  function openPdfViewer(index) {
    const doc = filteredDocs[index];
    if (!doc) return;
    activeModalIndex = index;

    modalTitle.textContent = doc.title || doc.filename;
    if (doc.has_local) {
      modalBadge.innerHTML = `<span class="local-badge"><i class="fas fa-hard-drive"></i> Archivo Local</span>`;
    } else {
      modalBadge.innerHTML = `<span style="color: #60a5fa; font-size: 0.78rem; font-weight: 600;"><i class="fas fa-cloud"></i> Servidor UNELLEZ</span>`;
    }

    const pdfTarget = doc.has_local ? doc.local_url : doc.url;

    modalDownloadBtn.href = pdfTarget;
    if (doc.has_local) {
      modalDownloadBtn.setAttribute("download", doc.filename);
    } else {
      modalDownloadBtn.removeAttribute("download");
    }

    modalExternalBtn.href = doc.url;

    // Show loading spinner
    modalLoader.style.display = "flex";
    modalIframe.src = pdfTarget;

    modalIframe.onload = () => {
      modalLoader.style.display = "none";
    };

    // Open modal
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePdfViewer() {
    modalOverlay.classList.remove("active");
    modalIframe.src = "";
    document.body.style.overflow = "";
    activeModalIndex = -1;
  }

  function setupEventListeners() {
    // Search input
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      clearSearchBtn.style.display = searchQuery ? "block" : "none";
      applyFilters();
    });

    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearSearchBtn.style.display = "none";
      searchInput.focus();
      applyFilters();
    });

    // Keyboard shortcut / for search
    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput && !modalOverlay.classList.contains("active")) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
      if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
        closePdfViewer();
      }
      if (modalOverlay.classList.contains("active")) {
        if (e.key === "ArrowRight" && activeModalIndex < filteredDocs.length - 1) {
          openPdfViewer(activeModalIndex + 1);
        } else if (e.key === "ArrowLeft" && activeModalIndex > 0) {
          openPdfViewer(activeModalIndex - 1);
        }
      }
    });

    // Sort select
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      applyFilters();
    });

    // View toggle buttons
    viewGridBtn.addEventListener("click", () => {
      currentView = "grid";
      viewGridBtn.classList.add("active");
      viewTableBtn.classList.remove("active");
      renderResults();
    });

    viewTableBtn.addEventListener("click", () => {
      currentView = "table";
      viewTableBtn.classList.add("active");
      viewGridBtn.classList.remove("active");
      renderResults();
    });

    // Modal close
    modalCloseBtn.addEventListener("click", closePdfViewer);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closePdfViewer();
    });

    // Modal Copy Link
    modalCopyLinkBtn.addEventListener("click", () => {
      const doc = filteredDocs[activeModalIndex];
      if (!doc) return;
      navigator.clipboard.writeText(doc.url).then(() => {
        showToast("Enlace del documento copiado al portapapeles");
      });
    });

    // Fullscreen toggle
    modalFullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.getElementById("modal-window").requestFullscreen().catch(err => console.log(err));
      } else {
        document.exitFullscreen().catch(err => console.log(err));
      }
    });
  }

  function showToast(msg) {
    let toast = document.getElementById("app-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "app-toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-emerald);"></i> ${msg}`;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
});
