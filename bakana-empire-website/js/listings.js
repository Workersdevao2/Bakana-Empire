/**
 * Bakana Empire — Listings Engine
 * Handles filtering, card rendering, carousels and detail page.
 */

(function () {
  'use strict';

  // ---------- Helpers ----------
  function getLang() {
    return document.documentElement.getAttribute('lang') || 'pt';
  }

  function t(obj, key) {
    const lang = getLang();
    return obj[key + '_' + lang] || obj[key + '_pt'] || '';
  }

  function statusLabel(status) {
    const map = {
      disponivel: { pt: 'Disponível', en: 'Available' },
      novo: { pt: 'Novo', en: 'New' },
      usado: { pt: 'Usado', en: 'Used' },
      reservado: { pt: 'Reservado', en: 'Reserved' }
    };
    const lang = getLang();
    return (map[status] && map[status][lang]) || status;
  }

  function categoryLabel(cat) {
    const map = {
      apartamento: { pt: 'Apartamento', en: 'Apartment' },
      vivenda: { pt: 'Vivenda', en: 'Villa' },
      escritorio: { pt: 'Escritório', en: 'Office' },
      comercial: { pt: 'Comercial', en: 'Commercial' },
      penthouse: { pt: 'Penthouse', en: 'Penthouse' },
      terreno: { pt: 'Terreno', en: 'Land' }
    };
    const lang = getLang();
    return (map[cat] && map[cat][lang]) || cat;
  }

  // ---------- Card HTML ----------
  function createCardHTML(p) {
    const lang = getLang();
    const title = t(p, 'title');
    const priceStr = formatPrice(p.price) + ' kzs' + (t(p, 'priceLabel') || '');
    const badgeClass = p.type === 'sale' ? 'sale' : '';
    const badgeText = p.type === 'sale'
      ? (lang === 'pt' ? 'Venda' : 'Sale')
      : (lang === 'pt' ? 'Arrendamento' : 'Rental');

    const images = p.images && p.images.length ? p.images : ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80'];
    const mainImg = images[0];

    // Mini carousel dots if more than 1 image
    let dots = '';
    if (images.length > 1) {
      dots = `<div class="card-carousel-dots">${images.map((_, i) => `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join('')}</div>`;
    }

    return `
      <article class="property-card" data-id="${p.id}" data-category="${p.category}" data-municipality="${p.municipality}" data-bedrooms="${p.bedrooms}" data-status="${p.status}" data-type="${p.type}">
        <div class="property-img card-carousel" data-images='${JSON.stringify(images)}'>
          <img src="${mainImg}" alt="${title}" class="carousel-img">
          <span class="property-badge ${badgeClass}">${badgeText}</span>
          ${images.length > 1 ? `
            <button class="carousel-btn prev" aria-label="Previous">‹</button>
            <button class="carousel-btn next" aria-label="Next">›</button>
            ${dots}
          ` : ''}
        </div>
        <div class="property-body">
          <div class="property-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</div>
          <h3 class="property-title">${title}</h3>
          <div class="property-price">${priceStr}</div>
          <div class="property-meta">
            <span><i class="fas fa-bed"></i> ${p.bedrooms}</span>
            <span><i class="fas fa-tag"></i> ${categoryLabel(p.category)}</span>
            <span class="badge-available ${p.status}">${statusLabel(p.status)}</span>
          </div>
          <div class="property-actions">
            <a href="property.html?id=${p.id}" class="btn btn-outline" style="flex:1;">
              ${lang === 'pt' ? 'Ver detalhes' : 'View details'}
            </a>
            <a href="https://wa.me/244935110735?text=${encodeURIComponent(t(p, 'whatsappMsg'))}" target="_blank" class="btn btn-primary" style="flex:1;">
              <i class="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </article>
    `;
  }

  // ---------- Render list ----------
  function renderList(containerSelector, properties) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    if (!properties.length) {
      const lang = getLang();
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">${lang === 'pt' ? 'Nenhum imóvel encontrado com esses filtros.' : 'No properties found with these filters.'}</p>
          <p>${lang === 'pt' ? 'Tente alterar os critérios de pesquisa.' : 'Try changing the search criteria.'}</p>
        </div>
      `;
      return;
    }

    container.innerHTML = properties.map(createCardHTML).join('');
    initCardCarousels(container);
  }

  // ---------- Filters ----------
  function getFilterValues(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return {};
    return {
      category: form.querySelector('[name="category"]')?.value || '',
      municipality: form.querySelector('[name="municipality"]')?.value || '',
      bedrooms: form.querySelector('[name="bedrooms"]')?.value || '',
      status: form.querySelector('[name="status"]')?.value || '',
      type: form.querySelector('[name="type"]')?.value || ''
    };
  }

  function applyFilters(allProps, filters) {
    return allProps.filter(p => {
      if (filters.type && p.type !== filters.type) return false;
      if (filters.category && p.category !== filters.category) return false;
      if (filters.municipality && p.municipality !== filters.municipality) return false;
      if (filters.status && p.status !== filters.status) return false;
      if (filters.bedrooms) {
        const bed = String(p.bedrooms).toUpperCase();
        const filterBed = filters.bedrooms.toUpperCase();
        if (filterBed === '5+' || filterBed === 'T5+') {
          // rough match for 5+
          if (!bed.includes('5') && !bed.includes('6') && !bed.includes('7') && !bed.includes('T5') && !bed.includes('T6') && !bed.includes('T7')) return false;
        } else if (!bed.includes(filterBed.replace('T', ''))) {
          // simple contains check
          if (bed !== filterBed && !bed.includes(filterBed)) return false;
        }
      }
      return true;
    });
  }

  function initFilters(pageType) {
    const form = document.querySelector('.filters-bar');
    if (!form) return;

    const container = pageType === 'rent' ? '#rentals-grid' : '#sales-grid';
    const baseProps = PROPERTIES.filter(p => p.type === pageType);

    function run() {
      const filters = getFilterValues('.filters-bar');
      filters.type = pageType; // force
      const filtered = applyFilters(baseProps, filters);
      renderList(container, filtered);
      // update count
      const countEl = document.querySelector('#results-count');
      if (countEl) {
        const lang = getLang();
        countEl.textContent = lang === 'pt'
          ? (filtered.length === 1
            ? '1 imóvel encontrado'
            : `${filtered.length} imóveis encontrados`)
          : `${filtered.length} propert${filtered.length !== 1 ? 'ies' : 'y'} found`;
      }
    }

    form.querySelectorAll('select').forEach(sel => {
      sel.addEventListener('change', run);
    });

    const filterBtn = form.querySelector('button[type="button"], .btn-primary');
    if (filterBtn) filterBtn.addEventListener('click', run);

    // initial render
    run();
  }

  // ---------- Card Carousels ----------
  function initCardCarousels(scope) {
    const carousels = (scope || document).querySelectorAll('.card-carousel');
    carousels.forEach(carousel => {
      const images = JSON.parse(carousel.dataset.images || '[]');
      if (images.length < 2) return;

      let current = 0;
      const imgEl = carousel.querySelector('.carousel-img');
      const dots = carousel.querySelectorAll('.dot');
      const prevBtn = carousel.querySelector('.carousel-btn.prev');
      const nextBtn = carousel.querySelector('.carousel-btn.next');

      function show(index) {
        current = (index + images.length) % images.length;
        imgEl.src = images[current];
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
      }

      if (prevBtn) prevBtn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); show(current - 1); });
      if (nextBtn) nextBtn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); show(current + 1); });
      dots.forEach(d => d.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); show(+d.dataset.index); }));
    });
  }

  // ---------- Detail Page ----------
  function initDetailPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (!id) {
      document.querySelector('#property-detail')?.insertAdjacentHTML('beforeend',
        '<p style="text-align:center;padding:3rem;">Property not found. <a href="rentals.html">Back to listings</a></p>');
      return;
    }

    const p = PROPERTIES.find(item => item.id === id);
    if (!p) {
      document.querySelector('#property-detail')?.insertAdjacentHTML('beforeend',
        '<p style="text-align:center;padding:3rem;">Property not found. <a href="rentals.html">Back to listings</a></p>');
      return;
    }

    const lang = getLang();
    const title = t(p, 'title');
    const desc = t(p, 'description');
    const priceStr = formatPrice(p.price) + ' kzs' + (t(p, 'priceLabel') || '');
    const images = p.images && p.images.length ? p.images : [];

    // Build gallery
    let galleryHTML = '';
    if (images.length) {
      galleryHTML = `
        <div class="detail-gallery">
          <div class="detail-main-img">
            <img src="${images[0]}" alt="${title}" id="detail-main-image">
          </div>
          ${images.length > 1 ? `
            <div class="detail-thumbs">
              ${images.map((src, i) => `
                <button class="thumb ${i === 0 ? 'active' : ''}" data-src="${src}">
                  <img src="${src}" alt="Photo ${i + 1}">
                </button>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    const featuresHTML = (p.features || []).map(f => `<li><i class="fas fa-check" style="color:var(--gold);"></i> ${f}</li>`).join('');

    const html = `
      <div class="detail-header">
        <a href="${p.type === 'sale' ? 'sales.html' : 'rentals.html'}" class="back-link">
          ← ${lang === 'pt' ? 'Voltar aos imóveis' : 'Back to listings'}
        </a>
        <div class="detail-badges">
          <span class="property-badge ${p.type === 'sale' ? 'sale' : ''}">${p.type === 'sale' ? (lang === 'pt' ? 'Venda' : 'Sale') : (lang === 'pt' ? 'Arrendamento' : 'Rental')}</span>
          <span class="badge-available">${statusLabel(p.status)}</span>
        </div>
        <h1 class="detail-title">${title}</h1>
        <p class="detail-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</p>
        <div class="detail-price">${priceStr}</div>
      </div>

      ${galleryHTML}

      <div class="detail-grid">
        <div class="detail-info">
          <h2>${lang === 'pt' ? 'Descrição' : 'Description'}</h2>
          <p>${desc}</p>

          <h3 style="margin-top:2rem;">${lang === 'pt' ? 'Detalhes' : 'Details'}</h3>
          <ul class="detail-specs">
            <li><strong>${lang === 'pt' ? 'Tipo' : 'Type'}:</strong> ${categoryLabel(p.category)}</li>
            <li><strong>${lang === 'pt' ? 'Quartos / Tipologia' : 'Bedrooms'}:</strong> ${p.bedrooms}</li>
            <li><strong>${lang === 'pt' ? 'Modalidade' : 'Modality'}:</strong> ${t(p, 'modality')}</li>
            <li><strong>${lang === 'pt' ? 'Município' : 'Municipality'}:</strong> ${p.municipality}</li>
            <li><strong>${lang === 'pt' ? 'Estado' : 'Status'}:</strong> ${statusLabel(p.status)}</li>
          </ul>

          ${featuresHTML ? `
            <h3 style="margin-top:2rem;">${lang === 'pt' ? 'Características' : 'Features'}</h3>
            <ul class="detail-features">${featuresHTML}</ul>
          ` : ''}
        </div>

        <div class="detail-cta-card">
          <h3>${lang === 'pt' ? 'Interessado?' : 'Interested?'}</h3>
          <p>${lang === 'pt' ? 'Fale directamente com William Canadá via WhatsApp.' : 'Talk directly to William Canadá via WhatsApp.'}</p>
          <a href="https://wa.me/244935110735?text=${encodeURIComponent(t(p, 'whatsappMsg'))}" target="_blank" class="btn btn-whatsapp" style="width:100%; margin-bottom:0.8rem;">
            <i class="fab fa-whatsapp"></i> WhatsApp 935 110 735
          </a>
          <a href="https://wa.me/244956077348" target="_blank" class="btn btn-outline" style="width:100%;">
            956 077 348
          </a>
          <p style="margin-top:1.2rem; font-size:0.85rem; color:var(--text-muted);">
            Bakana Empire · Perito Avaliador Imobiliário
          </p>
        </div>
      </div>
    `;

    const container = document.querySelector('#property-detail');
    if (container) {
      container.innerHTML = html;

      // Thumb click → change main image
      container.querySelectorAll('.thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          const main = document.getElementById('detail-main-image');
          if (main) main.src = thumb.dataset.src;
          container.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });
      });
    }

    // Update page title
    document.title = `${title} | Bakana Empire`;
  }

  // ---------- Homepage featured ----------
  function renderFeatured() {
    const container = document.querySelector('#featured-grid');
    if (!container) return;
    const featured = PROPERTIES.filter(p => p.featured);
    if (featured.length) {
      renderList('#featured-grid', featured);
    }
  }

  // ---------- Init on DOM ready ----------
  function refreshDynamicContent() {
    if (document.querySelector('#rentals-grid')) initFilters('rent');
    if (document.querySelector('#sales-grid')) initFilters('sale');
    if (document.querySelector('#featured-grid')) renderFeatured();
    if (document.querySelector('#property-detail')) initDetailPage();
  }

  document.addEventListener('DOMContentLoaded', () => {
    refreshDynamicContent();
  });

  // Re-render cards / detail when language changes
  document.addEventListener('bakana:langchange', () => {
    refreshDynamicContent();
  });

  // Expose for debugging / admin
  window.BakanaListings = { PROPERTIES, renderList, applyFilters };
})();
