// $(document).ready(function(){
//   $('.content_toggle').click(function(){
//     $('.content_block').toggleClass('hide');	
//     if ($('.content_block').hasClass('hide')) {
//       $('.content_toggle').html('Показать всё');
//     } else {
//       $('.content_toggle').html('Скрыть');
//     }		
//     return false;
//   });	
// });
  
new Swiper('.swiper-container', {
    // Optional parameters
    width: 1485,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 30,
    // centeredSlides: true,
    initialSlide: 3,
    slideToClickedSlide: true,
});

new Swiper('.swiper2', {
    // Optional parameters
    width: 1400,
    loop: false,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    // centeredSlides: true,
    initialSlide: 1,
    slideToClickedSlide: true,
});

new Swiper('.swiper3', {
    // Optional parameters
    // width: 1400,
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



var clickMe = document.querySelector('.content_toggle');
var el = document.querySelector('.content_block');

document.addEventListener("DOMContentLoaded", function(event) {
document.addEventListener('click', function (event) {

  if (!event.target.matches('.content_toggle')) return;
  el.classList.toggle('hide');

 if(el.classList.contains('hide')) {
    clickMe.innerHtml = 'Показать всё';
  } else{
    clickMe.innerHtml = 'Скрыть';
  }
  return false;
  });
});