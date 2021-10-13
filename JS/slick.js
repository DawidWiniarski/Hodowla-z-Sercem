
$('.slick').slick({
  
    mobileFirst: true,
    speed: 100,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        
        },

    ]
});