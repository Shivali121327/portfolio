$(document).ready(function() {
  $('#demo').Morphext({
	  // animation settings.
	  animation: "fadeIn",
	  // custom separator
	  separator: ",",
	  // animation speed
	  speed: 3000,
	  // callback
	  complete: $.noop
	});
  new WOW().init();
});