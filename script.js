/* ══════════════════════════════════════════════
   AWAIS TAHIR PORTFOLIO — JAVASCRIPT
   ══════════════════════════════════════════════ */

/* ─── Navbar ─── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

/* ─── Mobile Menu ─── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}

/* ─── Hero Canvas (Animated particles + data wave) ─── */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const PARTICLE_COUNT = 60;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.5 + 0.1
    });
  }

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 0.006;

    // Draw animated wave
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += 4) {
      const y = canvas.height * 0.6 + Math.sin(x * 0.008 + t) * 60 + Math.sin(x * 0.015 + t * 1.3) * 30;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    const wg = ctx.createLinearGradient(0, 0, canvas.width, 0);
    wg.addColorStop(0, 'rgba(201,168,76,0.0)');
    wg.addColorStop(0.3, 'rgba(201,168,76,0.12)');
    wg.addColorStop(0.7, 'rgba(160,120,40,0.08)');
    wg.addColorStop(1, 'rgba(201,168,76,0.0)');
    ctx.strokeStyle = wg;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Second wave
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += 4) {
      const y = canvas.height * 0.45 + Math.sin(x * 0.01 + t * 0.8 + 1) * 40 + Math.cos(x * 0.005 + t * 0.5) * 25;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    const wg2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
    wg2.addColorStop(0, 'rgba(201,168,76,0.0)');
    wg2.addColorStop(0.5, 'rgba(201,168,76,0.07)');
    wg2.addColorStop(1, 'rgba(201,168,76,0.0)');
    ctx.strokeStyle = wg2;
    ctx.lineWidth = 1;
    ctx.stroke();

    // Particles
    particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${p.opacity})`;
      ctx.fill();
    });

    // Draw connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─── Scroll Reveal ─── */
const revealEls = document.querySelectorAll('.scroll-reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

/* ─── Skill Circles ─── */
const skillCircles = document.querySelectorAll('.skill-circle');
const circleObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const pct = parseInt(e.target.dataset.pct);
      const arc = e.target.querySelector('.skill-arc');
      const circumference = 314;
      const offset = circumference - (pct / 100) * circumference;
      setTimeout(() => {
        arc.style.strokeDashoffset = offset;
      }, 200);
      circleObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillCircles.forEach(el => circleObserver.observe(el));

/* ─── Skill Bars ─── */
const skillBars = document.querySelectorAll('.sb-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const w = e.target.dataset.w;
      setTimeout(() => {
        e.target.style.width = w + '%';
      }, 150);
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(el => barObserver.observe(el));

/* ─── Stats Counter ─── */
function animateCounter(el, target, suffix) {
  let start = 0;
  const duration = 2000;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const statNums = document.querySelectorAll('.stat-num');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = parseInt(e.target.dataset.target);
      animateCounter(e.target, target);
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });
statNums.forEach(el => statsObserver.observe(el));

/* ─── Testimonials ─── */
let currentTesti = 0;
const testiCards = document.querySelectorAll('.testi-card');
const testiDots = document.querySelectorAll('.testi-dot');

function goTesti(idx) {
  testiCards[currentTesti].classList.remove('active');
  testiDots[currentTesti].classList.remove('active');
  currentTesti = idx;
  testiCards[currentTesti].classList.add('active');
  testiDots[currentTesti].classList.add('active');
}

// Auto-rotate testimonials
setInterval(() => {
  goTesti((currentTesti + 1) % testiCards.length);
}, 5000);

/* ─── Contact Form ─── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.innerHTML = '<span>Sending…</span>';
  btn.disabled = true;
  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('show');
    btn.innerHTML = '<span>Message Sent ✓</span>';
    btn.style.background = 'linear-gradient(135deg,#059669,#065f46)';
  }, 1200);
}

/* ─── Smooth active nav highlight ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    const href = a.getAttribute('href');
    // Skip links that go to separate pages — only highlight anchor links
    if (href && href.includes('.html')) return;
    a.style.color = '';
    if (href === '#' + current) {
      a.style.color = 'var(--blue-light)';
    }
  });
}, { passive: true });

/* ─── Animate floating cards after load ─── */
window.addEventListener('load', () => {
  document.querySelectorAll('.float-card').forEach((c, i) => {
    setTimeout(() => c.style.opacity = '1', 800 + i * 200);
  });
});
