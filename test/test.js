$('#hello').on('click', function(ev) {
  alert('FAIL (ghostclick)');
  console.log(ev);
});

$('#go').on('tap', function() {
  $('a').toggleClass('open');
});
