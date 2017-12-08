$(document).ready(function() {

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
                if ($(this).scrollTop() > 500) {
                  $('.super-navbar').fadeIn(350);
                  $('.super-navbar').addClass('d-flex');
                  // console.log('show');
                } else {
                  $('.super-navbar').removeClass('d-flex');
                  $('.super-navbar').fadeOut(10);
                  // console.log('hide');
                }
            });
      });
    };



	// Use lazyload

	$(".lazy").lazyload({
		effect          : "fadeIn"
	});


	// magnific popup
	$('.mfp-iframe').magnificPopup({
		type:'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

          patterns: {
          	gmaps: {
          		index: '//maps.google.',
          		src: '%id%&output=embed'
          	}
          },

  		srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
  	}
  });

});




