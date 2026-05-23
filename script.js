document.getElementById('footer-year').textContent = new Date().getFullYear();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Portfolio filter
function filterPortfolio(cat, el) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');

  document.querySelectorAll('.video-card').forEach(card => {
    card.classList.toggle('hidden', card.dataset.cat !== cat);
  });

  document.querySelectorAll('.cat-text').forEach(t => t.classList.remove('active'));
  const desc = document.querySelector(`.cat-text[data-cat="${cat}"]`);
  if (desc) desc.classList.add('active');
}

// Scroll to about on load
window.addEventListener('load', () => {
  document.getElementById('about').scrollIntoView();
});

// Show advertising category on load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.video-card').forEach(card => {
    card.classList.toggle('hidden', card.dataset.cat !== 'advertising');
  });
  document.querySelector('.tab-btn').classList.add('active');
  const firstDesc = document.querySelector('.cat-text[data-cat="advertising"]');
  if (firstDesc) firstDesc.classList.add('active');
});

// Open video modal
let ctaTimer = null;
const VIDEO_DURATION = 30; // seconds

function openVideo(id) {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  const overlay = document.getElementById('cta-overlay');
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  modal.classList.add('open');
  overlay.classList.remove('visible');
  clearTimeout(ctaTimer);
  ctaTimer = setTimeout(() => overlay.classList.add('visible'), VIDEO_DURATION * 1000);
}

// Close modal
function closeModal() {
  const modal = document.getElementById('video-modal');
  const iframe = document.getElementById('modal-iframe');
  const overlay = document.getElementById('cta-overlay');
  iframe.src = '';
  modal.classList.remove('open');
  overlay.classList.remove('visible');
  clearTimeout(ctaTimer);
}

// Hide CTA overlay and continue video
function continuePlaying() {
  document.getElementById('cta-overlay').classList.remove('visible');
}

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// Scroll to portfolio from service card
function showPortfolio(cat) {
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  setTimeout(() => {
    document.querySelectorAll('.tab-btn').forEach((btn, i) => {
      const cats = ['advertising','branding','events','special','training'];
      if (cats[i] === cat) btn.click();
    });
  }, 600);
}

// Form submit
function submitForm(e) {
  e.preventDefault();
  alert('תודה! אחזור אליך בהקדם.');
  e.target.reset();
}
