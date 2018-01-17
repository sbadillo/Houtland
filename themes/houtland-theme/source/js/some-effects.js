$(document).ready(function() {

  // ==== trying a fade in whole page thing.
  $(function() {
    $('body').removeClass('fade-out');
  });

  var pathname = window.location.pathname; // Returns path only
  
  // // Appear on scroll navbar
  // // (this one is used in the main page only)
  
  if (pathname == '/' || pathname == '/houtland/') {

    console.log("HELLO MAIN PAGE :)")
    var elementPosition = $('#header_nav').offset();

    $(window).scroll(function () {
      if ($(window).scrollTop() > elementPosition.top) {
        $('#header_nav').addClass('fixed-top navbar-when-fixed', {duration:500});

      } else {
        $('#header_nav').removeClass('fixed-top navbar-when-fixed')
      }
    });

  };




	// Use lazyload

	$(".lazy").lazyload({
		effect          : "fadeIn"
	});


 // Instance the tour


 $( "#support-button" ).click(function() {

  var tour = new Tour({
    name: "tour",
    smartPlacement: false,
    steps: [
    {
      title:"Hi!",
      content: "You can support by choosing your actions over here." ,
      element: "#tour-target",
      placement: 'top'
    }
    ],
    template: 
    '<div class="popover popover-dismiss border-full" role="tooltip"> \
    <div class="arrow"></div> \
    <div class="popover-data-content lead m-4">You can support by choosing your actions over here.</div>\
    <div class="popover-navigation"><button class="btn btn-nocolor" data-role="end">Okay!</button></div> \
    </div>',
    container: "body",
    keyboard: true,
    debug: true,
    backdrop: true,
    backdropContainer: 'body',
    backdropPadding: 20,
    redirect: true,
    orphan: true,
  });

    // Initialize the tour
    tour.init();
    
    tour.restart();


  });



// =================  Applies to livestream page only: ============

if (pathname == '/pages/tree01.html' || pathname == '/houtland/pages/tree01.html') {


  $(".video-noclick").bind("contextmenu",function(){
    return false;
  });

  var waittime = 4000 + Math.floor(Math.random() * 7000);
  console.log("HELLO LIVETREE!", waittime);
  
  setTimeout(function(){
    $(".loading").css('display', 'none');
    $(".video-noclick").css('display','inline');
  }, waittime);

};



});











