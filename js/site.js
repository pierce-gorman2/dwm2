/* Die Well Media: small, dependency-free motion helpers.
   Everything here is decoration. The site works fine if this file fails. */
(function () {
  window.__dw = true;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* scroll progress line along the very top */
  var bar = document.createElement('div');
  bar.className = 'progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  function updateProgress() {
    var el = document.documentElement;
    var max = el.scrollHeight - el.clientHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? el.scrollTop / max : 0) + ')';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* fade/slide things in as they scroll into view */
  var targets = document.querySelectorAll(
    '.episode, .founder, .verse, .mission, .ornament, .section-title, .hero-copy, .hero-art'
  );

  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  } else {
    targets.forEach(function (t) { t.classList.add('in'); });
  }

  /* spotlight that follows the cursor across episode cards */
  document.addEventListener('pointermove', function (e) {
    var card = e.target.closest && e.target.closest('.episode');
    if (!card) return;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--x', (e.clientX - r.left) + 'px');
    card.style.setProperty('--y', (e.clientY - r.top) + 'px');
  });

  /* home hero: smooth glow that eases toward the cursor */
  var hero = document.querySelector('.home-hero');
  if (hero && finePointer && !reduce) {
    var tx = 0.5, ty = 0.38, x = tx, y = ty, running = false;

    var tick = function () {
      x += (tx - x) * 0.07;
      y += (ty - y) * 0.07;
      hero.style.setProperty('--mx', (x * 100).toFixed(2) + '%');
      hero.style.setProperty('--my', (y * 100).toFixed(2) + '%');
      if (Math.abs(tx - x) > 0.0005 || Math.abs(ty - y) > 0.0005) {
        requestAnimationFrame(tick);
      } else {
        running = false;
      }
    };

    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width;
      ty = (e.clientY - r.top) / r.height;
      if (!running) {
        running = true;
        requestAnimationFrame(tick);
      }
    });
  }

  /* home hero: rising points of light */
  var field = document.querySelector('.hero-particles');
  if (field && !reduce) {
    var count = window.innerWidth < 700 ? 14 : 30;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('i');
      var size = 1 + Math.random() * 2.6;
      p.style.left = (Math.random() * 100) + '%';
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.animationDuration = (11 + Math.random() * 17) + 's';
      p.style.animationDelay = '-' + (Math.random() * 24) + 's';
      p.style.setProperty('--dx', (Math.random() * 90 - 45) + 'px');
      p.style.setProperty('--o', (0.25 + Math.random() * 0.55).toFixed(2));
      field.appendChild(p);
    }
  }
})();
