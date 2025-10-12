$('.wrap-notification').slick({
  vertical: true, 
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});
$('.category-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.home-2 .wrap-btn  .custom.slick-prev-custom'),
  nextArrow: $('.home-2 .wrap-btn .custom.slick-next-custom'),
});
$('.three-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.home-3 .wrap-btn  .custom.slick-prev-custom'),
  nextArrow: $('.home-3 .wrap-btn .custom.slick-next-custom'),
});
$('.list-hot-deals').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.home-4 .wrap-btn  .custom.slick-prev-custom'),
  nextArrow: $('.home-4 .wrap-btn .custom.slick-next-custom'),
});
$('.wrap-pr-first').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.home-7 .wrap-btn  .btn-simp.slick-prev-custom'),
  nextArrow: $('.home-7 .wrap-btn .btn-simp.slick-next-custom'),
});
$('.wrap-pr-second').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: $('.home-7 .wrap-btn.second  .btn-simp.slick-prev-custom'),
  nextArrow: $('.home-7 .wrap-btn.second  .btn-simp.slick-next-custom'),
});
$('.slide-about-2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false
});
$('.slider-user').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
});
const headerNotification = document.querySelector('.header-notification');
const buttonCloseNotification = document.querySelector('.close-notification');
buttonCloseNotification.addEventListener('click', () => {
    headerNotification.style.display = "none";
});
// Scroll top 
let mybutton = document.getElementById("back-to-top");
window.onscroll = () => scrollFunction();
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
};
mybutton.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

