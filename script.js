// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  speed: 1000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      allowSlidePrev: true,
      allowSlideNext: true,
    },

    800: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      allowSlidePrev: true,
      allowSlideNext: true,
    },

    1000: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
  },
});

// Burger

const burger = document.getElementById('burger');
const navButtons = document.querySelector('.links');

burger.addEventListener('click', function () {
  this.classList.toggle('rotate');
  navButtons.classList.toggle('open');
});
