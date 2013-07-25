;(function($) {
  var $body = $('body'), tapOffset, $target;

  $body.on('touchend', function(ev) {
    $target = $(ev.target);
    tapOffset = $target.offset();
    $target.trigger('tap');
    ev.preventDefault();

    $('a').on('click.tap', function(ev) {
      ev.stopImmediatePropagation();
    });
    setTimeout(function() {
      $('a').off('.tap');
    }, 500);
  });
}(jQuery));
