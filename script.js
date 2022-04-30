const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const hamburgerLines = document.querySelectorAll('.line');
const shadow = document.querySelector('.shadow');

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  shadow.classList.toggle('active');
  document.body.classList.toggle('lock');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
  if (event.target.classList.contains('nav-link') || event.target.classList.contains('shadow')) {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    shadow.classList.remove('active');
    document.body.classList.remove('lock');
  }
}
nav.addEventListener('click', closeMenu);
shadow.addEventListener('click', closeMenu);