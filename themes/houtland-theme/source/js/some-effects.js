$(document).ready(function() {

	// Appear on scroll navbar
	// (this one is used in the main page only)
	
	// hide .navbar-onscroll first (this one is used in the main page only)

    $("#navbar-onscroll").hide();
    $('#navbar-onscroll').removeClass('static-top').addClass('fixed-top');

	// fade in .navbar-onscrollo
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 500) {
            	$('#navbar-onscroll').fadeIn(350);
            	$('#navbar-onscroll').addClass('d-flex');
            } else {
            	$('#navbar-onscroll').removeClass('d-flex');
            	$('#navbar-onscroll').fadeOut(10);
            }
        });
	});



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




