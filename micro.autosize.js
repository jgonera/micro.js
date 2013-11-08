/**
 * micro.autosize
 * https://github.com/jgonera/micro.js
 */

;(function($) {
  $.fn.microAutosize = function() {
    var $el = this;

    $el.on('input', function() {
      if ($el.prop('scrollHeight')) {
        $el.
          css('height', 'auto').
          // can't reuse prop('scrollHeight') because we need the current value
          css('height', ($el.prop( 'scrollHeight' ) + 2) + 'px');
      }
    });

    return $el;
  };
}(jQuery));

