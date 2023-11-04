const swiper = new Swiper('.swiper', {
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
  breakpoints: {
    // when window width is >= 480px
    1104: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    // when window width is >= 640px
    1410: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },

});