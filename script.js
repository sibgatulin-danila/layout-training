var mySwiper = new Swiper('#first-window .swiper-container', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
     el: '.swiper-scrollbar',
   },
});

var galleryThumbs = new Swiper('#second-window .gallery-thumbs', {
  spaceBetween:17,
  slidesPerView: 4,
  loop: false,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper('#second-window .gallery-top', {
      spaceBetween: 10,
      loop:false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
