(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /*Page Loader active
  ========================================================*/
  $('#preloader').fadeOut();

    	//===== Sticky

    $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 20) {
        $(".navbar-area").removeClass("sticky");
      } else {
        $(".navbar-area").addClass("sticky");
      }
    });

    // for menu scroll 
    $('.page-scroll').click(function () {
      var hash = this.hash;
      var position = $(hash).offset().top - 60;
      $('html').animate({
        scrollTop: position
      }, 900);
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
      var scrollbarLocation = $(this).scrollTop();

      scrollLink.each(function () {

        var sectionOffset = $(this.hash).offset().top - 73;

        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      });
    });


    	//===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
      $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
      $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
      $(".navbar-toggler").removeClass('active');
    });

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();    

    /* Testimonials Carousel 
    ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        center: true,
        margin: 15,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive : {
            0 : {
                items: 1
            },
            768 : {
                items: 2
            },
            960 : {
                items: 3
            },
            1200 : {
                items: 3
            },
            1920 : {
                items: 3
            }
        }
      });  
      

    /* Back Top Link active
    ========================================================*/

      $(".back-to-top").click(function () {
        $("html,body").animate({
          scrollTop: 0
        }, 1000);
      });
      $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
          $(".back-to-top").fadeIn();
        } else {
          $(".back-to-top").fadeOut();
        }
      });

  });      

}(jQuery));
// ========================

$(function(){
  typitvs();
});

function typitvs(){
  var p = $(".typewriter p");
  var text = $(p).text();
  $(p).text("");
  var i = 0;
  var len = text.length;
  setInterval(function(){
    if(i<len){
      $(p).append(text[i]);
      i++;
    }
  },100);
}

// ========================

document.addEventListener("DOMContentLoaded", function() {
  // Wait for the page to load
  setTimeout(function() {
    const element = document.querySelector(".typewriter");
    element.classList.add("remove-animation");
  }, 10000); // 10 seconds delay (10000 milliseconds)
});