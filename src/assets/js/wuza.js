// *** G L O B A L   V A R S *** //
var fancyBackgroundRendered = false;


// *** O N L O A D   E V E N T S *** //

$(document).ready(function(){
    // fancy background
    if(false && window.innerWidth >= 1024) { // tmp..
      VANTA.BIRDS({
        el: ".container #birds",
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
    // renderFancyBackground();


	// progress bar
	$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},4000);
	});

});

$( window ).resize(function() {
  // renderFancyBackground();
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
