// $('.product-list').slick({
//     dots:true,
//     speed:500,
//     cssEase:'linear',
//     infinite:true,
// });

$(document).ready(function(){
  $('.product-slider').slick({
    slidesToShow: 5,    // Số sản phẩm hiển thị cùng lúc
    slidesToScroll: 3,  // Số sản phẩm trượt mỗi lần click
    autoplay: true,     // Tự động trượt
    autoplaySpeed: 2000, // Tốc độ trượt (2 giây)
    dots: true,         // Hiển thị dấu chấm điều hướng
    infinite: true      // Lặp vô hạn
  });
});