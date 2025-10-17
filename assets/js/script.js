$('.product-lists').slick({
  slidesToShow:5,
   dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
   slidesToScroll: 1,
});
$('.slider-faq-box').slick({
  slidesToShow:4,
  dots: false,
  infinite: false,
  speed: 500,
  cssEase: 'linear',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
       slidesToShow:3,
        dots: true,
        autoplay: true,     
        autoplaySpeed: 2000,  
        speed: 800, 
      }
    },
     {
      breakpoint: 767,
      settings: {
       slidesToShow:2,
        dots: true,
        autoplay: true, 
        autoplaySpeed: 2000,
        speed: 800,
      }
    },
    {
      breakpoint: 473,
      settings: {
       slidesToShow:1,
        dots: true,
        autoplay: true, 
        autoplaySpeed: 2000,
        speed: 800,
      }
    },
  ]
});
