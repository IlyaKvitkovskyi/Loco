$(document).ready(function(){
  $('.content_toggle').click(function(){
    $('.content_block').toggleClass('hide');	
    if ($('.content_block').hasClass('hide')) {
      $('.content_toggle').html('Показать всё');
    } else {
      $('.content_toggle').html('Скрыть');
    }		
    return false;
  });	
  
  new Swiper('.swiper-container', {
    // Optional parameters
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
  });
});
