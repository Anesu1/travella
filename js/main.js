AOS.init();

$(window).on('scroll', function(){
if($(window).scrollTop()){
$('header').addClass('bgColor')
}
else{
$('header').removeClass('bgColor')
}
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoPlay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
