// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@            MENU 1            @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navLinks1 = document.querySelectorAll('.menu-1 nav ul a');

navLinks1.forEach((navLink) => {
  navLink.addEventListener('click', function () {
    navLinks1.forEach((navLink) => {
      navLink.classList.remove('active-link');
      this.classList.add('active-link');
    });
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@            MENU 2            @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const navToggle2 = document.querySelector('.menu-2 .nav__toggle'),
  navClose2 = document.querySelector('.menu-2 .nav__close'),
  navMenu2 = document.querySelector('.menu-2 .nav__menu'),
  navLogo2 = document.querySelector('.menu-2 .nav__logo');

navToggle2.addEventListener('click', () => {
  navMenu2.classList.add('show-menu');
});

navClose2.addEventListener('click', () => {
  navMenu2.classList.remove('show-menu');
});

navLogo2.addEventListener('click', () => {
  navMenu2.classList.remove('show-menu');
});

const navLinks2 = document.querySelectorAll('.menu-2 .nav__link');
navLinks2.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu2.classList.remove('show-menu');
  });
});


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@            MENU 3            @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const navToggle3 = document.querySelector('.menu-3 .nav__toggle'),
  navClose3 = document.querySelector('.menu-3 .nav__close'),
  navMenu3 = document.querySelector('.menu-3 .nav__menu'),
  navLogo3 = document.querySelector('.menu-3 .nav__logo');

navToggle3.addEventListener('click', () => {
  navMenu3.classList.add('show-menu');
});

navClose3.addEventListener('click', () => {
  navMenu3.classList.remove('show-menu');
});

navLogo3.addEventListener('click', () => {
  navMenu3.classList.remove('show-menu');
});

const navLinks3 = document.querySelectorAll('.menu-3 .nav__link');
navLinks3.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu3.classList.remove('show-menu');
  });
});
