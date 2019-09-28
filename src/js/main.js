export default function() {
  const jQuery = window && window.jQuery

  // iPad and iPod detection
  var isiPad = function() {
    return navigator.platform.indexOf("iPad") != -1
  }

  var isiPhone = function() {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    )
  }

  var fullHeight = function() {
    jQuery(".js-fullheight").css("height", jQuery(window).height())
    jQuery(window).resize(function() {
      jQuery(".js-fullheight").css("height", jQuery(window).height())
    })
  }

  var burgerMenu = function() {
    jQuery(".js-fh5co-nav-toggle").on("click", function(event) {
      event.preventDefault()
      var jQuerythis = jQuery(this)
      if (jQuery("body").hasClass("menu-show")) {
        jQuery("body").removeClass("menu-show")
        jQuery("#fh5co-main-nav > .js-fh5co-nav-toggle").removeClass("show")
      } else {
        console.log(jQuery("body"))

        jQuery("body").addClass("menu-show")
        setTimeout(function() {
          jQuery("#fh5co-main-nav > .js-fh5co-nav-toggle").addClass("show")
        }, 900)
      }
    })
  }

  // Animations

  var contentWayPoint = function() {
    var i = 0
    jQuery(".animate-box").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !jQuery(this.element).hasClass("animated")
        ) {
          i++

          jQuery(this.element).addClass("item-animate")
          setTimeout(function() {
            jQuery("body .animate-box.item-animate").each(function(k) {
              var el = jQuery(this)
              setTimeout(
                function() {
                  var effect = el.data("animate-effect")
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated")
                  } else {
                    el.addClass("fadeInUp animated")
                  }

                  el.removeClass("item-animate")
                },
                k * 200,
                "easeInOutExpo"
              )
            })
          }, 100)
        }
      },
      { offset: "85%" }
    )
  }

  var sliderMain = function() {
    jQuery("#fh5co-hero .flexslider").flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function() {
        setTimeout(function() {
          jQuery(".slider-text").removeClass("animated fadeInUp")
          jQuery(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp")
        }, 500)
      },
      before: function() {
        setTimeout(function() {
          jQuery(".slider-text").removeClass("animated fadeInUp")
          jQuery(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp")
        }, 500)
      },
    })

    jQuery("#fh5co-hero .flexslider .slides > li").css(
      "height",
      jQuery(window).height()
    )
    jQuery(window).resize(function() {
      jQuery("#fh5co-hero .flexslider .slides > li").css(
        "height",
        jQuery(window).height()
      )
    })
  }

  var counter = function() {
    jQuery(".js-counter").countTo({
      formatter: function(value, options) {
        return value.toFixed(options.decimals)
      },
    })
  }

  // Document on load.
  jQuery(function() {
    fullHeight()
    burgerMenu()
    counter()
    sliderMain()
    contentWayPoint()
  })
}
