(() => {
  'use strict';

  // Scroll progress bar
  const bar = document.getElementById('progress-bar');
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
      if (bar) bar.style.width = pct.toFixed(2) + '%';
      raf = 0;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal on scroll (subtle)
  const targets = document.querySelectorAll(
    '.section-title, .lead, .long-list li, .parallel-table, .bring, ' +
    '.learn-list li, .question-list li, .invitation-rules, .signoff, ' +
    '.letter-ref-list, .letter-figures, .letter-sub'
  );
  targets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    targets.forEach(el => observer.observe(el));
  } else {
    targets.forEach(el => el.classList.add('in'));
  }

  // Smooth-scroll fallback
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  });
})();
