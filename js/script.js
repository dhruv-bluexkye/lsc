AOS.init({
  offset: 20,
});

$(".our-assetss-slider").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoHeight: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".our-assetss-slider-1").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoHeight: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$(".milestone-slider").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoHeight: true,
  margin: 0,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".our-blogss-slider").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoHeight: true,
  margin: 20,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2.5,
    },
    1000: {
      items: 3.5,
    },
  },
});

$(".spotlight-slider").owlCarousel({
  loop: true,
  autoplay: false,
  autoHeight: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1.5,
    },
    1000: {
      items: 3.5,
    },
  },
});

$(".celeb-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  dots: false,
  autoplayHoverPause: false,
  slideTransition: "linear",
  autoplayTimeout: 3000,
  autoplaySpeed: 5000,
  margin: 20,

  responsive: {
    0: {
      items: 2.5,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

$(".unlesing-slider").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoHeight: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".our-brand-lr-slider").owlCarousel({
  mouseDrag: false,
  singleItem: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2260,
  autoplaySpeed: 3259,
  autoHeight: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".sustainability-slider").owlCarousel({
  mouseDrag: false,
  loop: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  autoplay: true,
  autoplaySpeed: 2000,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".lsc-accordian-inner-slider").owlCarousel({
  mouseDrag: false,
  loop: false,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  // autoplay: true,
  // autoplaySpeed: 2000,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".our-brand-lr-slider-2").owlCarousel({
  mouseDrag: false,
  singleItem: true,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  loop: true,
  dots: false,
  autoplayTimeout: 3523,
  autoplaySpeed: 2054,
  autoplay: true,
  autoHeight: true,
  margin: 0,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// toggle nav
(function () {
  $(".toggle").on("click", function () {
    return $(this).toggleClass("on");
  });
}).call(this);

// Scroll to top btn

$("#topBtn").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 80) {
    $(".primary-nav").addClass("shrink");
  } else {
    $(".primary-nav").removeClass("shrink");
  }
});

// nav hide show
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

//  slideing-text
$(() => {
  const slidingText = $(".sliding-text");
  const list = slidingText.find("ul");

  list.clone().appendTo(slidingText);

  const totalLength = list.outerWidth(true);

  const animationStart = (isResume = false) => {
    let duration = 30000;

    if (!isResume) {
      slidingText.scrollLeft(0);
    } else {
      duration =
        ((list.outerWidth(true) - slidingText.scrollLeft()) * duration) /
        list.outerWidth(true);
    }

    slidingText.animate(
      {
        scrollLeft: list.outerWidth(true),
      },
      {
        duration,
        easing: "linear",
        complete: animationStart,
      }
    );
  };

  $(".sliding-text > ul > li").on("mouseenter", () => {
    slidingText.stop(true);
  });

  slidingText.on("mouseout", () => {
    animationStart(true);
  });

  slidingText.on("click", () => {
    setTimeout(function () {
      $("#tinyguy").addClass("animation");
    });

    setTimeout(function () {
      $("#tinyguy").removeClass("animation");
    }, 12000);
  });

  animationStart();
});

// OLD HEADER
const app = (() => {
  let body;
  let menu;
  let menuItems;
  let menuContent;

  const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-circle-ic");
    menuItems = document.querySelectorAll(".nav-hamb__list-item");
    menuContent = document.querySelector(".nav-hamb__content");

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener("click", () => {
      toggleClass(body, "nav-hamb-active");
      toggleMenuDisplay();
    });
  };

  const toggleClass = (element, stringClass) => {
    if (element.classList.contains(stringClass)) {
      element.classList.remove(stringClass);
    } else {
      element.classList.add(stringClass);
    }
  };

  const toggleMenuDisplay = () => {
    if (menuContent.style.left === "0px") {
      menuContent.style.left = "-1000px";
    } else {
      menuContent.style.left = "0px";
    }
  };

  init();
})();

$(document).on("click", '.our-story-inner a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    1000
  );
});

$(".brand-new > div + div article").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);

(function () {
  $(".toggle").on("click", function () {
    return $(this).toggleClass("on");
  });
}).call(this);

// LSC  Accordian
$(".accordeon .link").bind("click", function () {
  $(".accordeon .link").removeClass("hovered");
  $(this).addClass("hovered");
});

setInterval(function () {
  var $background1 = $(".link-2 .l2-bg1");
  var $background2 = $(".link-2 .l2-bg2");

  if ($background1.css("opacity") == "1") {
    $background1.css("opacity", "0");
    $background2.css("opacity", "1");
  } else {
    $background1.css("opacity", "1");
    $background2.css("opacity", "0");
  }
}, 4000);

setInterval(function () {
  var $background1 = $(".link-4 .l4-bg1");
  var $background2 = $(".link-4 .l4-bg2");

  if ($background1.css("opacity") == "1") {
    $background1.css("opacity", "0");
    $background2.css("opacity", "1");
  } else {
    $background1.css("opacity", "1");
    $background2.css("opacity", "0");
  }
}, 4000);
