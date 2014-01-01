jQuery(document).ready(function () {
	init();
    jQuery(window).resize(function () {
        init();
    });

	$( "body" ).mousemove(function( event ) {
	  jQuery("#top").css("margin-left", event.pageX);
	  jQuery("#top").css("margin-top", event.pageY);
	});
});
function init() {
    // Get height and width.
    myHeight = jQuery(window).height();    
    myWidth = jQuery(window).width();
    var shadow = myHeight * 0.187;
    console.log(myHeight,myWidth);
    jQuery("#top").css("width", myHeight * 0.146);
    jQuery("#top").css("height", myHeight * 0.146);
    jQuery("h1").css("font-size", myHeight * 0.035);
    jQuery("#top").css("box-shadow", "0 0"+shadow+" "+shadow+"#FFF");
    jQuery("h1").css("margin-left", $("h1").width() / -2);
    jQuery("h1").css("margin-top", $("h1").height() / -2);
    jQuery("h2").css("font-size", myHeight * 15 / 682);
    jQuery("h2").css("margin-left", $("h2").width() / -2);
    
   
}
