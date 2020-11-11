$(document).ready(function () {
  $(".test-content").owlCarousel({
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    items: 1,
  });

  $(".hamburger").click(function () {
    return $(".navigation").slideToggle(500), !1;
  });
});

$(window).scroll(function () {
  var scrollValue = $(this).scrollTop();

  if (scrollValue > 200) {
    $(".header-area").addClass("sticky");
  } else {
    $(".header-area").removeClass("sticky");
  }
});
