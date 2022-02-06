// *** G L O B A L   V A R S *** //
var fancyBackgroundRendered = false;


// *** O N L O A D   E V E N T S *** //

$(document).ready(function(){
    // fancy background
    if(window.innerWidth >= 1024) { // tmp..
      VANTA.BIRDS({
        el: ".container",
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xffffff,
        backgroundAlpha: 0.001,
        birdSize: 1.00,
        speedLimit: 4.00,
        separation: 90.00,
        alignment: 40.00,
        quantity: 2.00
      })
    }
    renderFancyBackground();

    // activate animated img slider
    var mySwiper = new Swiper ('.swiper-slider', {
        // Optional parameters
        speed: 500,
        autoplay: 3500,

        // If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable: true,

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    var mySwiper = new Swiper ('.swiper-slider-no-auto', {
        // Optional parameters
        loop: false,
        speed: 500,

        // If we need pagination
        pagination: '.swiper-pagination',
        paginationClickable: true,

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

	// bubble effect
	$.each($(".bubbles"), function(){
		var bubblecount = ($(this).width()/50)*10;
		for(var i = 0; i <= bubblecount; i++) {
		   var size = ($.rnd(40,80)/10);
		   $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
		}
	});

	// progress bar
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},4000);
	});

    // ordered lists .steps => arrow animation
    var time_for_one = 1500;
    // trigger first one
    setClassStepByStep("ol.steps li", "arrow", time_for_one);
    // add endless loop
    setInterval(function(){
        setClassStepByStep("ol.steps li", "arrow", time_for_one);
    }, time_for_one * $("ol.steps li").length)

});

$( window ).resize(function() {
  renderFancyBackground();
});


// *** F U N C T I O N S *** //

// shows/hide hints for quotes
function changeQuoteVisibility(quote_id) {
    $('#quote_' + quote_id + '_help').slideToggle("slow");
}

// loops through elements step by step - adds and removes class
function setClassStepByStep(selector, classname, time_for_one) {
	var li_element =[];
    $(selector).each( function(index){
        li_element[index] = $(this);
        setTimeout( function () {
           li_element[index].addClass(classname).delay(time_for_one).queue(function(next) {
              li_element[index].removeClass(classname);
              next();
          });
       }, index * time_for_one);
    });
}

function renderFancyBackground() {
  if(!fancyBackgroundRendered && window.innerWidth >= 1024) {
    VANTA.CELLS({
      el: "html",
      mouseControls: false,
      touchControls: false,
      minHeight: screen.height+20,
      minWidth: 200.00,
      scale: 1.00,
      color1: 0x282a2a,
      color2: 0xfffefd,
      size: 0.80
    });
    fancyBackgroundRendered = true;
  }
}

// position for bubble effect
jQuery.rnd = function(m,n) {
      m = parseInt(m);
      n = parseInt(n);
      return Math.floor( Math.random() * (n - m + 1) ) + m;
}
