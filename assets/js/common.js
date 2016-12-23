$(document).ready(function () {
  
  // привести все в порядок
  
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
  
  $('.order .input-wrapper input[type=radio]').change(function(e){
    var $parent = $(this).parents('.radio');
    $parent.addClass('checked');
    $parent.siblings('.checked').removeClass('checked');
  });
  
  $('select, input[type=file], input[type=number], input[type=radio], input[type=checkbox]').styler();
  
  $('.js-tab-container').easytabs();
  
  $('.js-video-iframe, .js-fancy-inline').fancybox({
    maxWidth: 800,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none',
    padding: 0
  });
  $('.callback button[type=reset]').click($.fancybox.close);
  
  $('.js-qs-input').focus(function(){
    $('.js-qs').show();
  });
  $('.js-qs-input').blur(function(){
    $('.js-qs').hide();
  });
  
  $( "#slider-range" ).slider({
     range: true,
     min: 100,
     max: 30000,
     values: [ 3840, 21430 ],
     slide: function( event, ui ) {
      $("#slider-range .ui-slider-handle" ).each(function(i){
        $('#ui-slider-counter-'+i).text($("#slider-range").slider("values", i));
        var l  = $('#ui-slider-counter-'+i).outerWidth();
        $('#ui-slider-counter-'+i).css('left', -l/2+7);
      });
     }
   });
    $("#slider-range .ui-slider-handle" ).each(function(i){
      $(this).append('<span id="ui-slider-counter-'+i+'">'+$("#slider-range").slider("values", i)+'</span>');
      var l  = $('#ui-slider-counter-'+i).outerWidth();
      $('#ui-slider-counter-'+i).css('left', -l/2+7);
    });
  
});