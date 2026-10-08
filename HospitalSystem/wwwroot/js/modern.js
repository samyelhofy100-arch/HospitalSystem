/* Unity Hospital — Modern interactions */

(() => {
  const doc = document.documentElement;

  // ------ Inject shared layout (nav + footer) ------
  const NAV_LINKS = [
    ['index.html', 'Home'],
    ['about.html', 'About'],
    ['doctors.html', 'Doctors'],
    ['gallery.html', 'Gallery'],
    ['blog.html', 'Blog'],
    ['contact.html', 'Contact'],
  ];

  const brandHTML = `
    <a href="index.html" class="brand">
      <span class="brand-mark" aria-hidden="true"></span>
      <span class="brand-name">Unity<small>Hospital</small></span>
    </a>`;

  const navHTML = `
    <nav class="nav" aria-label="Primary">
      ${brandHTML}
      <ul class="nav-links">
        ${NAV_LINKS.map(([h,l]) => `<li><a href="${h}">${l}</a></li>`).join('')}
      </ul>
      <div class="nav-actions">
        <button class="theme-toggle" data-theme-toggle aria-label="Toggle theme">
          <svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        </button>
        <a href="appointment.html" class="btn btn-primary" style="padding:10px 18px;font-size:13px">
          Book <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <button class="nav-burger" data-menu-open aria-label="Open menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>
    </nav>
    <div class="mobile-menu">
      <button class="close" data-menu-close aria-label="Close menu">✕</button>
      ${NAV_LINKS.map(([h,l]) => `<a href="${h}">${l}</a>`).join('')}
      <a href="appointment.html" style="color:var(--brand)">Book Appointment →</a>
      <a href="login.html">Sign in</a>
    </div>`;

  const footerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            ${brandHTML}
            <p class="text-dim mt-6" style="max-width:340px;font-size:14px">A state-of-the-art multi-speciality hospital in Ahmedabad, committed to quality, ethical, and affordable healthcare.</p>
            <div class="socials">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12z"/></svg></a>
              <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.7 11.7 0 0 1 3 4.9a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4-.6.2-1.3.2-1.9.1.5 1.7 2.1 2.9 4 2.9A8.3 8.3 0 0 1 2 18.6a11.7 11.7 0 0 0 6.3 1.8c7.6 0 11.8-6.3 11.8-11.8v-.5c.8-.6 1.5-1.3 2-2.2z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3H10V9.7h2.5v1.2a2.8 2.8 0 0 1 2.5-1.4c2.7 0 3.2 1.8 3.2 4.1v4.7z"/></svg></a>
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="doctors.html">Our Doctors</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="appointment.html">Book Appointment</a></li>
              <li><a href="registration.html">Patient Registration</a></li>
              <li><a href="login.html">Patient Portal</a></li>
              <li><a href="contact.html">Emergency</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Vaishnodevi Circle,<br/>SG Road, Ahmedabad</li>
              <li><a href="tel:+918866600555">+91 88666 00555</a></li>
              <li><a href="mailto:unityhospital@gmail.com">unityhospital@gmail.com</a></li>
              <li style="color:var(--brand-3)">● 24/7 Emergency</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Unity Hospital. All rights reserved.</span>
          <span><a href="privacy.html">Privacy</a> · <a href="terms.html">Terms</a></span>
        </div>
      </div>
    </footer>`;

  const mount = (sel, html) => {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = html;
  };
  mount('[data-site-nav]', navHTML);
  mount('[data-site-footer]', footerHTML);
  if (!document.querySelector('.aurora')) {
    const a = document.createElement('div');
    a.className = 'aurora';
    document.body.prepend(a);
  }

  // ------ Theme toggle ------
  const savedTheme = localStorage.getItem('uh-theme');
  if (savedTheme) doc.setAttribute('data-theme', savedTheme);

  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-theme-toggle]');
    if (!t) return;
    const next = doc.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    if (next === 'dark') doc.removeAttribute('data-theme'); else doc.setAttribute('data-theme', 'light');
    localStorage.setItem('uh-theme', next);
  });

  // ------ Mobile menu ------
  document.addEventListener('click', (e) => {
    const open = e.target.closest('[data-menu-open]');
    const close = e.target.closest('[data-menu-close]');
    const m = document.querySelector('.mobile-menu');
    if (!m) return;
    if (open) m.classList.add('is-open');
    if (close) m.classList.remove('is-open');
  });
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => document.querySelector('.mobile-menu').classList.remove('is-open'));
  });

  // ------ Nav hide on scroll down ------
  const nav = document.querySelector('.nav');
  let lastY = window.scrollY;
  window.addEventListener('scroll', () => {
    if (!nav) return;
    const y = window.scrollY;
    if (y > 120 && y > lastY) nav.classList.add('is-hidden');
    else nav.classList.remove('is-hidden');
    lastY = y;
  }, { passive: true });

  // ------ Scroll reveal ------
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ------ Animated counters ------
  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target;
      const target = parseFloat(el.getAttribute('data-count'));
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1600;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target >= 10 ? Math.round(target * eased) : (target * eased).toFixed(1);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  // ------ Cursor glow ------
  if (window.matchMedia('(pointer:fine)').matches) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
  }

  // ------ Lightbox for gallery ------
  const lb = document.querySelector('.lightbox');
  if (lb) {
    const lbImg = lb.querySelector('img');
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (!img) return;
        lbImg.src = img.src;
        lb.classList.add('is-open');
      });
    });
    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target.closest('.close-lb')) lb.classList.remove('is-open');
    });
  }

  // ------ Form submit (demo, no backend) ------
  document.querySelectorAll('form[data-demo]').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = f.querySelector('button[type=submit]');
      if (!btn) return;
      const orig = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.textContent = '✓ Submitted';
        setTimeout(() => { btn.textContent = orig; btn.disabled = false; f.reset(); }, 1800);
      }, 900);
    });
  });

  // ------ Active nav link ------
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });
})();
