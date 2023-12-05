// *** G L O B A L   V A R S *** //

/*
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
*/
