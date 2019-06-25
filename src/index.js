import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import $ from 'jquery';



$(document).ready(function() {
    $('.sneakers__dd-button').click(function() {
        if (this.className == 'sneakers__dd-button sneakers__dd-button_disabled') {
            let len = $(this).find('li').length;
            $(this).height(len * 37 + 35);
            this.className = 'sneakers__dd-button sneakers__dd-button_enabled';
            $('.sneakers__dd-button .arrow_down:first').prop('className', 'arrow_up arrow');
            $('.sneakers__dd-button .dd-button__dropdown:first').prop('className', 'dd-button__dropdown dd-button__dropdown_on');
        } else {
            $(this).height(29);
            this.className = 'sneakers__dd-button sneakers__dd-button_disabled';
            $('.sneakers__dd-button .arrow_up:first').prop('className', 'arrow_down arrow');
            $('.sneakers__dd-button .dd-button__dropdown:first').prop('className', 'dd-button__dropdown dd-button__dropdown_off');
        }
    });

    $('a[href^="#sneakers"]').on('click', function(event) {
        var sc = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sc).offset().top
        }, 1000);
    });


    var mySwiper = new Swiper('#first-screen .swiper-container', {
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

    


    var mySwiper2 = new Swiper('#feedback .swiper-container', {
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


    var galleryThumbs = new Swiper('#sneakers .gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: false,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var galleryTop = new Swiper('#sneakers .gallery-top', {
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    });

    mySwiper.init();
    mySwiper2.init();
    galleryThumbs.init();
    galleryTop.init();
})