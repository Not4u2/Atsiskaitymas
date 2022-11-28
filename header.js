// Burger

const burger = document.getElementById('burger');
const navButtons = document.querySelector('.nav-buttons');

burger.addEventListener('click', function () {
  this.classList.toggle('rotate');
  navButtons.classList.toggle('open');
});
