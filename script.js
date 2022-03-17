const nav = document.querySelector('.nav');
const img = document.querySelector('.photo');
const profile = document.querySelector('#profile');
const contacts = document.querySelector('#contacts');
const summary = document.querySelector('#summary');
const skills = document.querySelector('#skills');
const code = document.querySelector('#code');
const courses = document.querySelector('#courses');
const projects = document.querySelector('#projects');
const education = document.querySelector('#education');
const english = document.querySelector('#english');
const main = document.querySelector('.main');
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
let profileDiv = document.createElement('div');

const mediaQuery = window.matchMedia('(max-width: 900px)');

function handleTabletChange(e) {
  if (e.matches) {
    leftSide.style.display = 'none';
    rightSide.style.display = 'none';
    img.style.width = '30%';
    profileDiv.style.display = 'flex';
    profileDiv.style.alignItems = 'center';
    profileDiv.style.width = '100%';
    profileDiv.style.borderBottom = '1px solid #9e9e9e'
    profileDiv.append(img, profile);
    main.style.flexDirection = 'column';
    main.append(profileDiv, contacts, summary, skills, code, courses, projects, education, english);
  } else {
    main.style.flexDirection = 'row';
    leftSide.style.display = 'flex';
    profileDiv.style.display = 'none';
    img.style.width = '100%';
    leftSide.append(img, contacts, education, skills);
    rightSide.style.display = 'flex';
    rightSide.append(profile, summary, courses, projects, code, english);
  }
}
mediaQuery.addListener(handleTabletChange);

//Burger-menu

const hamburger = document.querySelector('.hamburger');
const hamburgerLines = document.querySelectorAll('.line');
const shadow = document.querySelector('.shadow');

function toggleMenu() {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
  shadow.classList.toggle('active');
}
hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
  if (event.target.classList.contains('nav-link') || !event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    shadow.classList.remove('active');
  }
}
nav.addEventListener('click', closeMenu);
shadow.addEventListener('click', closeMenu);