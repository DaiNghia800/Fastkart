$('.wrap-notification').slick({
  vertical: true, 
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});
const headerNotification = document.querySelector('.header-notification');
const buttonCloseNotification = document.querySelector('.close-notification');
buttonCloseNotification.addEventListener('click', () => {
    headerNotification.style.display = "none";
});
