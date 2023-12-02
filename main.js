var swiper = new Swiper(".mySwiper", {
    spaceBetween: 100,
    // centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      },
});