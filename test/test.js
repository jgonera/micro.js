$('#test').on('tap', function(ev) {
  ev.preventDefault();
  if (window.location.href.slice(-1) !== '#') {
    $('#log').append("OK (URL doesn't end with #)\n");
  } else {
    $('#log').append("FAIL (URL ends with #)\n");
  }
});
