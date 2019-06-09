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
  spaceBetween:10,
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

window.onload = function() {
  document.getElementById('dd-size').onclick = function() {
    // тут должен быть код для отображения количества доступных размеров кроссовок
  }
}
