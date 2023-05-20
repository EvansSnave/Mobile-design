const hamburgerButton = document.querySelector('.navigator');
const mainContent = document.querySelector('.main-section');
const closeMenu = document.querySelector('.closing');
const mobile = document.querySelector('.menu-mobile-version');
const mobileMenuAnchors = document.querySelectorAll('.menu-mobile-version a');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
  mainContent.classList.toggle('inactive');
  mobile.classList.toggle('active');
});

mobileMenuAnchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    hamburgerButton.classList.remove('active');
    mainContent.classList.remove('inactive');
    mobile.classList.remove('active');
  });
});

closeMenu.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
  mainContent.classList.toggle('inactive');
  mobile.classList.toggle('active');
});
