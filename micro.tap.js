/**
 * micro.tap
 * https://github.com/jgonera/micro.tap
 */

;(function($) {
  var $window = $(window), moved;

  function handleTap(ev) {
    var $target = $(ev.target), tapEv = $.Event();
    if (!moved) $target.trigger('tap', tapEv);
    if (!tapEv.isDefaultPrevented()) $target.one('click', false);
  }

  if ('ontouchstart' in window) {
    $window.
      on('touchstart', function() {
        moved = false;
      }).
      on('touchmove', function() {
        moved = true;
      }).
      on('touchend', handleTap);
  } else {
    $window.on('mouseup', handleTap);
  }
}(jQuery));

