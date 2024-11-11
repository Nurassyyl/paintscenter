const mainDesktopSwiper = new Swiper(".mainDesktopSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination-main",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-main",
    prevEl: ".swiper-button-prev-main",
  },
  breakpoints: {
    // when window width is >= 320px
    280: {
      slidesPerView: 1.1,
      spaceBetween: 12
    },
    480: {
      slidesPerView: 1.4,
      spaceBetween: 12
    },
    650: {
      slidesPerView: 1.9,
      spaceBetween: 12
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 12
    },
    992: {
      slidesPerView: 1.2,
      spaceBetween: 12
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 1.2,
      spaceBetween: 12,
    },
    // when window width is >= 640px
    1300: {
      slidesPerView: 2.1,
      spaceBetween: 12,
    },
    1400: {
      slidesPerView: 2.4,
      spaceBetween: 12,
    }
  }
});

const mainSwiper = new Swiper(".mainSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: ".swiper-pagination-main",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-main",
    prevEl: ".swiper-button-prev-main",
  },
});

const paintsSwiper = new Swiper(".paintsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 12,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-paints",
    prevEl: ".swiper-button-prev-paints",
  },
});

const guidesSwiper = new Swiper(".guidesSwiper", {
  slidesPerView: "auto",
  loop: true,
  pagination: {
    el: ".swiper-pagination-guides",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-guides",
    prevEl: ".swiper-button-prev-guides",
  },
});
