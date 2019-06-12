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
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

var galleryTop = new Swiper('#second-window .gallery-top', {
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

$(document).ready(function() {

    $('#dd-size').click(function() {
        if (this.className == 'disabled') {
            let len = $(this).find('li').length;
            $(this).height(len * 37 + 35);
            this.className = 'enabled';
            $('#dd-size .arrow-down:first').prop('className', 'arrow-up arrow');
            $('#dd-size .dropdown:first').prop('className', 'dropdown drop');
        } else {
            $(this).height(29);
            this.className = 'disabled';
            $('#dd-size .arrow-up:first').prop('className', 'arrow-down arrow');
            $('#dd-size .dropdown:first').prop('className', 'dropdown drop-off');
        }
    })

    $('a[href^="#second-window"]').on('click', function(event) {
        var sc = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(sc).offset().top
        }, 1000);
    })

});
