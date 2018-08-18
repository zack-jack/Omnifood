$(document).ready(function() {
  /* sticky navigation */
  $(".js--features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;"
    }
  );

  /* Scroll for hero section buttons */
  /* Call to action - I'm hungry button scroll to the plans section */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate({ scrollTop: $(".js--plans").offset().top }, 1000);
  });
  /* Learn more - Build my appetite button scroll to the features section */
  $(".js--scroll-to-features").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--features").offset().top },
      1000
    );
  });

  /* Navigation smooth scroll */
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Animations on scroll */
  $(".js--waypoint-1").waypoint(
    function(direction) {
      $(".js--waypoint-1").addClass("animated fadeIn");
    },
    {
      offset: "85%"
    }
  );
  $(".js--waypoint-2").waypoint(
    function(direction) {
      $(".js--waypoint-2").addClass("animated fadeInUp");
    },
    {
      offset: "55%"
    }
  );
  $(".js--waypoint-3").waypoint(
    function(direction) {
      $(".js--waypoint-3").addClass("animated fadeIn");
    },
    {
      offset: "65%"
    }
  );
  $(".js--waypoint-4").waypoint(
    function(direction) {
      $(".js--waypoint-4").addClass("animated pulse");
    },
    {
      offset: "40%"
    }
  );

  /* Mobile nav links */
  $(".js--mobile-nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--mobile-nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
