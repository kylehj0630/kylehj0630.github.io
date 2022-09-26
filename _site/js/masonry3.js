(function($){
$(window).load(function() {
var $container = $('#content')
// initialize Isotope
$container.isotope({
  // options...
  resizable: false, // disable normal resizing
  // set columnWidth to a percentage of container width
  masonry: { columnWidth: $container.width() / 3 }
});

// update columnWidth on window resize
$(window).smartresize(function(){
  $container.isotope({
    // update columnWidth to a percentage of container width
    masonry: { columnWidth: $container.width() / 3 }
  });
});
});
})(jQuery);
