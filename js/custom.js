$(window).on("load", function () {
  $(".preloader").fadeOut("slow", function () {
    $(this).remove();
  });
});
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
$(".gallery-carousel").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: false,
  items: 4,
  autoplay: true,
  autoplayTimeout: 4000,
  smartSpeed: 2500,
  navText: ["", ""],
  responsive: {
    0: {
      items: 1,
      margin: 12,
    },

    480: {
      items: 2,
      margin: 12,
    },
    768: {
      items: 3,
      margin: 12,
    },
    992: {
      items: 3,
      margin: 20,
    },
    1200: {
      items: 4,
      margin: 20,
    },
    1600: {
      items: 6,
      margin: 20,
    },
  },
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
