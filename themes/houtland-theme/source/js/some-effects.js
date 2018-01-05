$(document).ready(function() {

  // ==== trying a fade in whole page thing.
  $(function() {
    $('body').removeClass('fade-out');
  });


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


  };

  var elementPosition = $('#header_nav').offset();

  $(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
      $('#header_nav').addClass('fixed-top navbar-when-fixed', {duration:500});

    } else {
      $('#header_nav').removeClass('fixed-top navbar-when-fixed')
    }
  });

	// Use lazyload

	$(".lazy").lazyload({
		effect          : "fadeIn"
	});

});




