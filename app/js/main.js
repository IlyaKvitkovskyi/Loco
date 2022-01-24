$(function () {
  $('[data-collapse]').on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('collapse');

    $this.toggleClass('active');
  });

  var clickMe = document.querySelector('.content_toggle');
  var el = document.querySelectorAll('.content_block');

  document.addEventListener('click', function (event) {
    if (!event.target.matches('.content_toggle')) return;
    console.log(el);
    el.forEach((item) => {
      item.classList.toggle('hide');
    });

    if (el[0].classList.contains('hide')) {
      clickMe.innerHTML = 'Показать всё';
    } else {
      clickMe.innerHTML = 'Скрыть';
    }
    return false;
  });

  new Swiper('.swiper1', {
    // Optional parameters
    width: 1485,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,
    initialSlide: 1,
    slideToClickedSlide: true,
  });

  new Swiper('.swiper2', {
    // Optional parameters
    width: 1400,
    loop: false,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    // centeredSlides: true,
    initialSlide: 0,
    slideToClickedSlide: true,
  });

  new Swiper('.swiper3', {
    // Optional parameters
    width: 1400,
    loop: false,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    // centeredSlides: true,
    initialSlide: 0,
    slideToClickedSlide: true,
  });

  new Swiper('.swiper4', {
    width: 1400,
    loop: false,
    slidesPerView: 'auto',
    initialSlide: 0,
    slideToClickedSlide: true,
  });

  new Swiper('.swiper5', {
    spaceBetween: 20,
    width: 380,

    breakpoints: {
      960: {
        enabled: false,
        // slideToClickedSlide: true,
      },
      640: {
        enabled: true,
        loop: false,
        slideToClickedSlide: true,
      },
      320: {
        enabled: true,
        loop: false,
      },
    },
  });
});
