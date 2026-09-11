/* Bakana Empire — Main JS */

document.addEventListener('DOMContentLoaded', () => {
  // ===== Language Switcher =====
  const html = document.documentElement;
  const langBtns = document.querySelectorAll('.lang-btn');
  const savedLang = localStorage.getItem('bakana-lang') || 'pt';

  function setLanguage(lang) {
    html.setAttribute('lang', lang);
    localStorage.setItem('bakana-lang', lang);
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  setLanguage(savedLang);

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
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

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
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

  // ===== Simple filter (ready for expansion) =====
  const filterSelects = document.querySelectorAll('.filters-bar select');
  if (filterSelects.length) {
    filterSelects.forEach(select => {
      select.addEventListener('change', () => {
        // Placeholder for future real filtering
        console.log('Filter changed — ready for expansion');
      });
    });
  }

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
