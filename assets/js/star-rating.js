$(document).ready(function () {
  (function() {
    $wrapper = $('.star-rating');
    console.log($wrapper.length);
    if ($wrapper.length == 0) return;

    var $span = $wrapper.find('span');
    $wrapper.find('input[type="radio"]').hide();
    $wrapper.on('mouseleave', function(e){
      $span.removeClass('selected');
    });
    $wrapper.find('label')
      .on('click', function(e){
        var thisIndex = $(this).index();
        $span.each(function(index){
          if (index <= thisIndex) {
            $(this).addClass('checked');
          } else {
            $(this).removeClass('checked');
          }
        });
      })
      .on('mouseenter', function(e){
        var thisIndex = $(this).index();
        $span.each(function(index){
          if (index <= thisIndex) {
            $(this).addClass('selected');
          }
        });
      })
      .on('mouseleave', function(e){
        var thisIndex = $(this).index();
        $span.each(function(index){
          if (index >= thisIndex) {
            $(this).removeClass('selected');
          }
        });
      });    
  })(jQuery);
});