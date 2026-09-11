/* Bakana Empire — Main JS */

document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('bakana-lang') || 'pt';

  function setLanguage(lang) {
    if (lang !== 'pt' && lang !== 'en') lang = 'pt';
    html.setAttribute('lang', lang);
    localStorage.setItem('bakana-lang', lang);

    langBtns.forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Notify other scripts (listings, etc.)
    document.dispatchEvent(new CustomEvent('bakana:langchange', { detail: { lang } }));
  }

  // Expose for other modules
  window.setLanguage = setLanguage;

  // Apply saved language on load
  setLanguage(savedLang);

  // Click handlers
  langBtns.forEach(btn => {
    btn.setAttribute('type', 'button');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });

  // ===== Mobile Menu =====
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // ===== Header scroll effect =====
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // ===== Smooth scroll for internal links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
