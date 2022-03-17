const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const hamburgerLines = document.querySelectorAll('.line');
const shadow = document.querySelector('.shadow');

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  shadow.classList.toggle('active');
  document.body.style.overflow = 'hidden';
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
  if (event.target.classList.contains('nav-link') || !event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    shadow.classList.remove('active');
    document.body.style.overflow = 'visible';
  }
}
nav.addEventListener('click', closeMenu);
shadow.addEventListener('click', closeMenu);