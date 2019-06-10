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

$(document).ready(function() {
    $('#dd-size').click(function() {
        if (this.className == 'disabled') {
            let len = $(this).find('li').length;
            $(this).height(len * 37 + 35);
            this.className = 'enabled';
            $('#dd-size .arrow-down:first').prop('className', 'arrow-up');
            $('#dd-size .dropdown:first').prop('className', 'dropdown active');
        } else {
            $(this).height(29);
            this.className = 'disabled';
            $('#dd-size .arrow-up:first').prop('className', 'arrow-down');
            $('#dd-size .dropdown:first').prop('className', 'dropdown non-active');
        }
    })
});
