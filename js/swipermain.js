$('#menu-toggle').click(function(){
    $(this).toggleClass('open'),
    $('.main-nav').toggleClass('show-it');
  })

  var swiper1 = new Swiper('.client-swiper', {
    slidesPerView: 3,
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 60,
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: '.swiper-pagination'
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  });