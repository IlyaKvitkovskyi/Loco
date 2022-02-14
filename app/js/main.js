$(function () {
  $('.header__burger').on('click', function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('html').toggleClass('lock');
  });

  $('.menu__btn').on('click', function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
  });
  

  $('.seo-reviews__tabs-top-item').on('click', function (e) {
    e.preventDefault();

    $('.seo-reviews__tabs-top-item').removeClass('seo-reviews__tabs-top-item--active');
    $(this).addClass('seo-reviews__tabs-top-item--active');

    $('.seo-reviews__tabs-content-item').removeClass('seo-reviews__tabs-content-item--active');
    $($(this).attr('href')).addClass('seo-reviews__tabs-content-item--active');
  });

  $('[data-collapse]').on('click', function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data('collapse');

    $this.toggleClass('active');
  });

  let clickMe = document.querySelector('.content_toggle');
  let el = document.querySelectorAll('.content_block');
  let buttonContent = '';

  document.addEventListener('click', function (event) {
    console.log(event);
    if (!event.target.matches('.content_toggle')) return;

    const clickedButton = event.srcElement;
    const elems = clickedButton.parentNode.querySelectorAll('.content_block');

    elems.forEach((item) => {
      item.classList.toggle('hide');
      if (item.classList.contains('hide')) {
        clickedButton.innerHTML = buttonContent;
      } else {
        buttonContent = clickMe.innerHTML;
        clickedButton.innerHTML = 'Скрыть';
      }
    });
    // element.classList.toggle('hide');

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

$(function () {
  var header = $('#header'),
    introH = $('#intro').innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed header */
  checkScroll(scrollOffset);

  $(window).on('scroll', function () {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }
});

$(function () {
  let FormS = document.querySelector('.form-data');

  

  FormS.addEventListener('submit', function (e) {
    e.preventDefault();
    let elem = e.target;

    let formData = {
      name: elem.querySelector('[name="user_name"]').value,
      phone: elem.querySelector('[name="user_phone"]').value,
    };

    axios
      .post('https://ww1uzy2qda.api.quickmocker.com/illia', {
        user_name: formData.name,
        user_phone: formData.phone,
      })
      .then(function (res) {
        // FormS.classList.add('_send');
       
        
        alert(res);
      })
      .catch(function (error) {
        alert(error);
      });
  });
});

const popupLinks = document.querySelectorAll('.popup-link');

