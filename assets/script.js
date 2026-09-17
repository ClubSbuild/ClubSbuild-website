// Mobile nav, sticky-header border, and scroll reveal.

(function () {
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  var onScroll = function () {
    nav.classList.toggle('is-stuck', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Reveal sections as they enter the viewport.
  var targets = document.querySelectorAll('.section .wrap > *, .join .wrap > *');
  if (!('IntersectionObserver' in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = Math.min(i % 5, 4) * 45 + 'ms';
    io.observe(el);
  });
})();
