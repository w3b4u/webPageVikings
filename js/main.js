$(function(){

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        }
    });
    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow_right.png" alt="arrow_right"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow_left.png" alt="arrow_right"></button>',
        responsive: [{
          breakpoint: 767,
          settings: {
              arrows: false
          }
        }]
      });
      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        dots: false,
        centerMode: false,
        focusOnSelect: false,
        arrows: false
      });
      $('.menu__btn').on('click', function() {
        $('.menu__list').toggleClass('menu__list--active')
      });

});