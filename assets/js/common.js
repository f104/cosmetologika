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
  
  // goods list toggler
  (function($) {
    $('.grid-options').click(function(event) {
      event.preventDefault();
      if ($(this).hasClass('active')) {
        return;
      } else {
        var className = $(this).data('list');
        $('.goods-list').removeClass('full grid short');
        $('.goods-list').addClass(className);        
      }
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
  })(jQuery);
  
  $('.goods-gallery ul, .reviews-slider ul, .big-slider ul').slick({
    adaptiveHeight: true,
    arrows: false,
    dots: true
  });
  
  $('.goods-list-recent').each(function(){
    var slides = $(this).data('slides');
    $(this).slick({
      slidesToShow: slides,
      slidesToScroll: slides,
      infinite: false
    });
  });
  
  $('select, input[type=file]').styler();
  
  $('.js-tab-container').easytabs();
  
  $('.js-video-iframe').fancybox({
    maxWidth	: 800,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
  });
  
});