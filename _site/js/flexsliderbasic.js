jQuery(document).ready(function ($) {
	$('#basic-slider').flexslider({
	pauseOnHover: true,    
	slideshow: false,                //Boolean: Animate slider automatically
	slideshowSpeed: 5000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationSpeed: 1300,
	animation: "fade",              //String: Select your animation type, "fade" or "slide"
	easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
	direction: "horizontal",
	controlNav: false,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
	useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
	touch: true, 
	directionNav: true,
	smoothHeight: true
	});
  });