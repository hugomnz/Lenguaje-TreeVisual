// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggleBtn){
  toggleBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('show');
    toggleBtn.setAttribute('aria-expanded', String(open));
  });
  // Cerrar al elegir
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('show');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }));
}

// Tema (oscuro/claro)
const themeBtn = document.getElementById('theme-btn');
const setTheme = (t) => document.documentElement.classList.toggle('light', t === 'light');
const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);
themeBtn.addEventListener('click', () => {
  const nowLight = !document.documentElement.classList.contains('light');
  setTheme(nowLight ? 'light' : 'dark');
  localStorage.setItem('theme', nowLight ? 'light' : 'dark');
});

// Lightbox simple con <dialog>
const lightbox = document.getElementById('lightbox');
const lbImg = lightbox.querySelector('img');
const lbCap = lightbox.querySelector('.caption');
document.querySelectorAll('[data-zoom]').forEach(img => {
  img.addEventListener('click', () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt;
    lightbox.showModal();
  });
});
lightbox.querySelector('.close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (e) => {
  // cerrar si clic fuera de la imagen
  const rect = lbImg.getBoundingClientRect();
  const inImage = e.clientX >= rect.left && e.clientX <= rect.right &&
                  e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!inImage) lightbox.close();
});
