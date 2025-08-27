$(".service-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  items: 3,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 2500,
  navText: [
    "<img src='images/arrow.svg' alt='Prev'>",
    "<img src='images/arrow.svg' alt='Next'>",
  ],
  responsive: {
    0: {
      items: 1,
    },

    480: {
      items: 2,
    },

    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 30,
  dots: true,
  nav: false,
  items: 1,
  autoplay: true,
  autoplayTimeout: 4500,
  smartSpeed: 2500,
});

$(".toggle-menu").click(function () {
  $(this).toggleClass("menu-active");
  $(".main_menu").toggleClass("menu-opened");
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
