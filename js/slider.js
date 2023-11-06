const swiper = new Swiper('.first-screen__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const lastPurchaseSwiper = new Swiper('.lastPurchaseSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  allowTouchMove: false,
  breakpoints: {
    1104: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    1410: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

});