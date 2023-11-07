
/*********** SWIPER START *****************/ 
var swiper = new Swiper(".cursos-recomendados-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  watchSlidesProgress: true,
  centerSlide: 'true',
  fade: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      395: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 3,
        // spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        // spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        // spaceBetween: 50,
      },
    },
});
/*********** SWIPER END *****************/ 