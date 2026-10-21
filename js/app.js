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
  const modalLoaderText = document.getElementById("iframe-loader-text");
  const modalFallback = document.getElementById("iframe-fallback");
  const fallbackTitle = document.getElementById("fallback-title");
  const fallbackDesc = document.getElementById("fallback-desc");
  const fallbackExternalBtn = document.getElementById("fallback-external-btn");
  const fallbackFilterLocalBtn = document.getElementById("fallback-filter-local-btn");
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
        const cod = (d.codigo || "").toLowerCase();
        const prog = (d.programa || "").toLowerCase();
        const proy = (d.proyecto || "").toLowerCase();
        const subprog = (d.subprograma || "").toLowerCase();
        return title.includes(q) || sub.includes(q) || car.includes(q) || fn.includes(q) || vic.includes(q) || cod.includes(q) || prog.includes(q) || proy.includes(q) || subprog.includes(q);
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
  function getFriendlyDownloadName(doc) {
    if (!doc) return "documento.pdf";
    const namePart = (doc.subproyecto || doc.title || doc.filename).replace(/[\\/:*?"<>|]/g, "").trim();
    if (doc.codigo) {
      return `${doc.codigo} - ${namePart}.pdf`;
    }
    return `${namePart}.pdf`;
  }

  function renderGrid() {
    gridContainer.innerHTML = "";
    filteredDocs.forEach((doc, idx) => {
      const card = document.createElement("div");
      card.className = "doc-card";

      const catClass = getCategoryClass(doc.category || "");
      const localBadge = doc.has_local
        ? `<span class="local-badge"><i class="fas fa-check-circle"></i> Local (pdf/)</span>`
        : `<span class="remote-badge"><i class="fas fa-cloud"></i> Servidor</span>`;

      const fileTargetUrl = doc.has_local ? doc.local_url : doc.url;
      const downloadName = getFriendlyDownloadName(doc);
      const downloadAttr = doc.has_local ? `download="${downloadName}"` : "";

      card.innerHTML = `
        <div>
          <div class="card-top">
            <span class="category-tag ${catClass}">${doc.category || "General"}</span>
            ${localBadge}
          </div>
          <h3 class="card-title" title="Ver documento en visor">${doc.title || doc.filename}</h3>
          <div class="card-metadata">
            ${doc.codigo ? `<div class="meta-item"><i class="fas fa-barcode"></i> <code style="color: var(--accent-emerald); font-weight: 600;">${doc.codigo}</code> ${doc.semestre ? `&bull; Semestre ${doc.semestre}` : ""} ${doc.uc ? `&bull; ${doc.uc} U.C.` : ""}</div>` : ""}
            ${doc.programa || doc.carrera ? `<div class="meta-item"><i class="fas fa-graduation-cap"></i> <span>${doc.programa || doc.carrera}</span></div>` : ""}
            ${doc.proyecto ? `<div class="meta-item"><i class="fas fa-folder-tree"></i> <span>${doc.proyecto}</span></div>` : ""}
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
      const downloadName = getFriendlyDownloadName(doc);
      const downloadAttr = doc.has_local ? `download="${downloadName}"` : "";
      const storageBadge = doc.has_local
        ? `<span class="local-badge"><i class="fas fa-check-circle"></i> Local (pdf/)</span>`
        : `<span class="remote-badge"><i class="fas fa-cloud"></i> Servidor</span>`;

      tr.innerHTML = `
        <td><code class="file-code">${doc.filename}</code></td>
        <td>
          <span class="table-doc-title" data-index="${idx}">${doc.title || doc.filename}</span>
          <div style="font-size: 0.78rem; color: #94a3b8; margin-top: 2px;">
            ${doc.codigo ? `<code style="color: var(--accent-emerald); font-weight: 600;">${doc.codigo}</code> &bull; ` : ""}
            ${doc.programa || doc.carrera || ""}
            ${doc.semestre ? ` &bull; Sem ${doc.semestre}` : ""}
            ${doc.uc ? ` &bull; ${doc.uc} U.C.` : ""}
          </div>
        </td>
        <td><span class="category-tag ${getCategoryClass(doc.category || "")}">${doc.category || "General"}</span></td>
        <td>${doc.pages || "-"}</td>
        <td>${doc.date_str || "Desconocida"}</td>
        <td>${storageBadge}</td>
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

  let loadTimeout = null;

  async function openPdfViewer(index) {
    const doc = filteredDocs[index];
    if (!doc) return;
    activeModalIndex = index;

    if (loadTimeout) {
      clearTimeout(loadTimeout);
      loadTimeout = null;
    }

    modalTitle.textContent = doc.title || doc.filename;

    // Reset visual elements inside modal
    if (modalFallback) modalFallback.style.display = "none";
    modalIframe.style.display = "block";
    modalLoader.style.display = "flex";
    if (modalLoaderText) modalLoaderText.textContent = "Preparando visualizador...";

    // Dynamic local folder check: if catalog had has_local: false, check if file exists in pdf/
    if (!doc.has_local && doc.filename) {
      if (modalLoaderText) modalLoaderText.textContent = "Comprobando disponibilidad local en pdf/...";
      try {
        const checkLocal = await fetch(`pdf/${doc.filename}`, { method: "HEAD" });
        if (checkLocal.ok) {
          doc.has_local = true;
          doc.local_url = `pdf/${doc.filename}`;
          updateGlobalStats();
          renderCategoryPills();
        }
      } catch (err) {
        // Continue with normal remote flow
      }
    }

    // Configure badges, labels and download attributes
    if (doc.has_local) {
      modalBadge.innerHTML = `<span class="local-badge"><i class="fas fa-hard-drive"></i> Archivo Local (pdf/)</span>`;
      if (modalLoaderText) modalLoaderText.textContent = "Cargando archivo local desde pdf/...";
      modalDownloadBtn.href = doc.local_url;
      modalDownloadBtn.setAttribute("download", getFriendlyDownloadName(doc));
    } else {
      modalBadge.innerHTML = `<span class="remote-badge"><i class="fas fa-cloud"></i> Servidor UNELLEZ</span>`;
      if (modalLoaderText) modalLoaderText.textContent = "Conectando con el servidor UNELLEZ...";
      modalDownloadBtn.href = doc.url;
      modalDownloadBtn.removeAttribute("download");
    }

    modalExternalBtn.href = doc.url;

    // Open modal immediately
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    if (doc.has_local) {
      modalIframe.src = doc.local_url;
      modalIframe.onload = () => {
        modalLoader.style.display = "none";
      };
      modalIframe.onerror = () => {
        showFallbackError(doc);
      };
    } else {
      // The UNELLEZ server is frequently down, times out, or blocks iframes (X-Frame-Options)
      modalIframe.src = doc.url;

      // Timeout fallback after 4 seconds
      loadTimeout = setTimeout(() => {
        if (modalLoader.style.display !== "none") {
          showFallbackError(doc);
        }
      }, 4000);

      modalIframe.onload = () => {
        // If it loaded, stop the timeout and hide loader
        if (loadTimeout) clearTimeout(loadTimeout);
        modalLoader.style.display = "none";
      };

      modalIframe.onerror = () => {
        showFallbackError(doc);
      };
    }
  }

  function showFallbackError(doc) {
    if (loadTimeout) {
      clearTimeout(loadTimeout);
      loadTimeout = null;
    }
    modalLoader.style.display = "none";
    modalIframe.style.display = "none";
    if (modalFallback) {
      modalFallback.style.display = "flex";
      if (fallbackTitle) fallbackTitle.textContent = "Servidor UNELLEZ no disponible";
      if (fallbackDesc) {
        fallbackDesc.innerHTML = `
          El archivo <code>${doc.filename}</code> no se encuentra en tu carpeta local <code>pdf/</code>.<br>
          El servidor oficial de la UNELLEZ (<code>unellez.edu.ve</code>) actualmente no responde o bloquea la visualización dentro del navegador.
        `;
      }
      if (fallbackExternalBtn) fallbackExternalBtn.href = doc.url;
    }
  }

  function closePdfViewer() {
    if (loadTimeout) {
      clearTimeout(loadTimeout);
      loadTimeout = null;
    }
    modalOverlay.classList.remove("active");
    modalIframe.src = "";
    if (modalFallback) modalFallback.style.display = "none";
    modalIframe.style.display = "block";
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

    if (fallbackFilterLocalBtn) {
      fallbackFilterLocalBtn.addEventListener("click", () => {
        closePdfViewer();
        activeCategory = "local";
        document.querySelectorAll(".pill-btn").forEach(b => {
          if (b.textContent.includes("Descargados en Local")) {
            b.classList.add("active");
          } else {
            b.classList.remove("active");
          }
        });
        applyFilters();
        showToast("Mostrando únicamente documentos descargados en pdf/");
      });
    }

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
