$(document).ready(function() {
  $('#demo').Morphext({
	  // animation settings.
	  animation: "zoomIn",
	  // custom separator
	  separator: ",",
	  // animation speed
	  speed: 4000,
	  // callback
	  complete: $.noop
	});
});
new WOW().init();