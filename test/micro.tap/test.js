;(function($) {

  function test() {
    setTimeout(function() {
      if (!/#.+/.test(window.location.href)) {
        $('#log').append("OK (URL without #sth)\n");
      } else {
        $('#log').append("FAIL (URL with #sth)\n");
      }

      window.location.hash = '';
    }, 500);
  }

  $('#test').on('tap', function(ev) {
    ev.preventDefault();
    test();
  });

  $('#hidden, #test-position').on('tap', function(ev) {
    ev.preventDefault();
    $('body').toggleClass('toggled');

    test();
  });

}(jQuery));
