$(document).ready(function() {
    var owl = $('.owl-carousel');
        owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:300000,
        autoplayHoverPause:true,
        dots: true, 
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
    });

$('.topmenu_btn').on('click', function() {
    $('.topmenu_btn span:nth-child(1)').toggleClass('span_first');
    $('.topmenu_btn span:nth-child(2)').toggleClass('span_middle');
    $('.topmenu_btn span:nth-child(3)').toggleClass('span_last');
    $('.topmenu').toggle('active');
})