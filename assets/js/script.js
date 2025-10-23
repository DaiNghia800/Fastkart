// $('.product-list').slick({
//     dots:true,
//     speed:500,
//     cssEase:'linear',
//     infinite:true,
// });

// Search
$(document).ready(function(){
  $('.product-slider').slick({
    slidesToShow: 5,    // Số sản phẩm hiển thị cùng lúc
    slidesToScroll: 3,  // Số sản phẩm trượt mỗi lần click
    autoplay: true,     // Tự động trượt
    autoplaySpeed: 2000, // Tốc độ trượt (2 giây)
    dots: true,         // Hiển thị dấu chấm điều hướng
    infinite: true,      // Lặp vô hạn

    // Thêm phần responsive
    responsive: [
      {
        breakpoint: 1200, // Màn hình từ 768px đến 992px
        settings: {
          slidesToShow: 4,   // 3 cái
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992, // Màn hình từ 768px đến 992px
        settings: {
          slidesToShow: 3,   // 3 cái
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 2,   // 2 cái
          slidesToScroll: 1
        }
      }
      // Bạn có thể thêm các breakpoint khác ở đây
    ]
  });
});
// End Search