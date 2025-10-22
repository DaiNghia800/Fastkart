$('.product-lists').slick({
  slidesToShow:5,
   dots: true,
  infinite: true,
  speed: 500,
  cssEase: 'linear',
   slidesToScroll: 1,
   responsive:[
    {
      breakpoint: 599,
      settings: {
       slidesToShow:2,
        dots: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
       slidesToShow:3,
        dots: true,
      }
    },
     {
      breakpoint: 1200,
      settings: {
       slidesToShow:4,
        dots: true,
      }
    },
   ]
});
