$(document).ready(function() {

  // set video iniciat volume
  var vid = $('video').get(0);
  vid.volume = 0.2;

	// Appear on scroll navbar
	// (this one is used in the main page only)
	
	// hide super-navbar first (this one is used in the main page only)

    var pathname = window.location.pathname; // Returns path only
    console.log(pathname);
    if (pathname == '/' || pathname == '/houtland/') {
    
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



	// Use lazyload

	$(".lazy").lazyload({
		effect          : "fadeIn"
	});

});




