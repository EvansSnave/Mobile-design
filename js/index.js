let HamB = document.querySelector('.navigator');
let cont = document.querySelector('.main-section');
let closed = document.querySelector('.closing');
let mobile = document.querySelector('.menu-mobile-version');
let ans = document.querySelectorAll('.menu-mobile-version a');

HamB.addEventListener('click', () => {
  HamB.classList.toggle('active');
  cont.classList.toggle('inactive');
  mobile.classList.toggle('active');
});

ans.forEach((x) => {
  x.addEventListener('click', () => {
    HamB.classList.remove('active');
    cont.classList.remove('inactive');
    mobile.classList.remove('active');
  });
});

closed.addEventListener('click', () => {
  HamB.classList.toggle('active');
  cont.classList.toggle('inactive');
  mobile.classList.toggle('active');
});
