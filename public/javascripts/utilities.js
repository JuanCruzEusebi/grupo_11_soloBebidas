const menu = document.querySelector('.header__menu-icon');
const xMark = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  nav.style.width = '100%';
});

xMark.addEventListener('click', () => {
  nav.style.width = '0%';
});
