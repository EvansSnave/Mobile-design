let burger = document.querySelector('.navigator');
let body = document.body;
let navbar = document.querySelector('.navbar');
let newMenu = document.querySelector('.hiddenMenu');
let xButton = document.querySelector('.xIcon');
let portfolio = document.querySelector('.portfolioL');
let about = document.querySelector('.aboutL');
let contact = document.querySelector('.contactL');

burger.addEventListener('click', () => {
  if (window.matchMedia('(min-width: 786px)')) {
    newMenu.style.display = 'flex';
    body.style.overflow = 'hidden';
  }
});

xButton.addEventListener('click', () => {
  body.style.overflow = 'auto';
  newMenu.style.display = 'none';
});

portfolio.addEventListener('click', () => {
  body.style.overflow = 'auto';
  newMenu.style.display = 'none';
  window.scrollBy({
    top: 870,
    left: 0,
    behavior: 'smooth',
  });
});

about.addEventListener('click', () => {
  body.style.overflow = 'auto';
  newMenu.style.display = 'none';
  window.scrollBy({
    top: 3400,
    left: 0,
    behavior: 'smooth',
  });
});

contact.addEventListener('click', () => {
  body.style.overflow = 'auto';
  newMenu.style.display = 'none';
  window.scrollBy({
    top: 5000,
    left: 0,
    behavior: 'smooth',
  });
});
