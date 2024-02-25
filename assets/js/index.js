$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  });



  const nav = document.querySelector(".Navbar");
  window.addEventListener("scroll", fixNav);
  
  function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add("navbar-active");
     nav.removeAttribute('clip-path');
    } else {
      nav.classList.remove("navbar-active");
    }
  }
  
  var owl = $("#owl");
  owl.owlCarousel({
    items: 6,
    navigation: false,
    loop: true,
    autoplay: true,
    margin: 40,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    dots: false,
    nav: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: [
      "",
      "",
    ],
    responsiveClass: true,
    responsive: {
      100: {
        items: 1,
        nav: true,
      },
      400: {
        items: 1,
        nav: true,
      },
      768: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 5,
        nav: false,
      },
      1600: {
        items: 6,
        nav: true,
        loop: false,
      },
    },
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [5000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });


  $('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

const anchorTags = document.querySelectorAll('a');
anchorTags.forEach(anchor => {
    const content = anchor.textContent.trim();
    anchor.setAttribute('title', content);
});