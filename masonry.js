var $grid = $('#grid').masonry({
  percentPosition: true,
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  gutter: '.gutter-sizer'
});

// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
  $grid.masonry('layout');
});