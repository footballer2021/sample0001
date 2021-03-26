//jQuery
$(function(){
    $(window).scroll(function (){
        $('.fade-in').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('effect-scroll');
            }
        });
    　});

$(window).scroll(function () {
  var now = $(window).scrollTop();
  if (now > 100) {
    $('.pagetop').fadeIn("slow");
  } else {
    $('.pagetop').fadeOut('slow');
  }
});

});

