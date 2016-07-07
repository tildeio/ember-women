
$(document).ready(function() {
  $('.woman a').click(function(event) {
    event.preventDefault();
    if ($(this).parent('.woman').hasClass('active')) {
      $(this).parent('.woman').removeClass('active');
    } else {
      $(this).parent('.woman').siblings().removeClass('active');
      $(this).parent('.woman').removeClass('active').addClass('active');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top}
    );
  });
});
