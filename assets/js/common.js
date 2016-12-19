$(document).ready(function () {
  
  // aside menu accordeon
  (function($) {
    $('.aside-menu > li > a').click(function(event) {
      event.preventDefault();
      if ($(this).hasClass('opened')) {
        $(this).next('ul').slideUp();
      } else {
        $('.aside-menu').find('.opened').each(function(index){
          $(this).next('ul').slideUp();
          $(this).removeClass('opened');
        });
        $(this).next('ul').slideDown();
      }
      $(this).toggleClass('opened');
    });
  })(jQuery);
  
  $('.goods-gallery ul').slick({
    adaptiveHeight: true,
    arrows: false,
    dots: true
  });
  
  $('.js-tab-container').easytabs();
  
});