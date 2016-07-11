
$(document).ready(function() {
  if(window.location.hash) {
    $(location.hash).addClass('active').removeClass('inactive');
    $(location.hash).siblings().addClass('inactive');
  }
  $('.woman > a').click(function(event) {
    event.preventDefault();
    if ($(this).parent('.woman').hasClass('active')) {
      $(this).parent('.woman').removeClass('active');
      $(this).parent('.woman').siblings().removeClass('inactive');
    } else {
      $(this).parent('.woman').siblings().removeClass('active').removeClass('semi-active');
      $(this).parent('.woman').removeClass('active').removeClass('inactive').removeClass('semi-active').addClass('active');
      $(this).parent('.woman').siblings().removeClass('inactive').addClass('inactive');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top}
    );
  });
});
