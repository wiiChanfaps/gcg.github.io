// smooth scrolling //

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 3000, 'swing', function () {
            window.location.hash = target;
        });
    });
});

// Products //

var pContainerHeight = $('.hero').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

    
    if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {
      $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing');
        }, (700 * (Math.exp(i * 0.14))) - 700);
    });

  } 
});