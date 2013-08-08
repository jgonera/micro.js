$('#test').on('tap', function(ev) {
  ev.preventDefault();
  $('#log').append("OK if URL doesn't end with #\n");
});
