$(document).ready(function() {



  var pathname = window.location.pathname; // Returns path only
  console.log(pathname);
  
  // Appear on scroll navbar
  // (this one is used in the main page only)
  // hide super-navbar first (this one is used in the main page only)
  if (pathname == '/' || pathname == '/houtland/') {

    // set video iniciat volume
    var vid = $('video').get(0);
    vid.volume = 0.2;

    // hide it first
    $(".super-navbar").hide();
    $('.super-navbar').removeClass('static-top').addClass('fixed-top');

    $(function () {
      $(window).scroll(function () {
        // set distance user needs to scroll before we fadeIn navbar
        if ($(this).scrollTop() > 300) { 

          // show navbar
          $('.super-navbar').fadeIn(0);
          $('.super-navbar').addClass('d-flex');
          // and stop video
          $('video').get(0).pause();

          // console.log('show');
        } else {
          $('.super-navbar').removeClass('d-flex');
          $('.super-navbar').fadeOut(0);
          $('video').get(0).play();
          
        }
      });
    });
  };

  var elementPosition = $('#header_nav').offset();

  $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
      $('#header_nav').addClass('fixed-top navbar-when-fixed');
    } else {
      $('#header_nav').removeClass('fixed-top')
    }
  });

	// Use lazyload

	$(".lazy").lazyload({
		effect          : "fadeIn"
	});

});




