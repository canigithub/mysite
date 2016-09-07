$('#HomeBtn').click(function(e) {
  e.preventDefault();
  $('#NavHome').removeClass('active');
  $('#NavCv').addClass('active');
});

$('.NavList').click(function(e) {
  e.preventDefault();
  if ($('#navMenu').hasClass('in')) {

    setTimeout(function() {
      $('#navMenu').removeClass('in', 500);
    }, 300)
    
  }
});