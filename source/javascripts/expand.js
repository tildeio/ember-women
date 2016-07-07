
$(document).ready(function() {
      if(window.location.hash) {
        jQuery(location.hash).addClass('active').removeClass('inactive');
      }
  $('.woman > a').click(function(event) {
    event.preventDefault();
    if ($(this).parent('.woman').hasClass('active')) {
      $(this).parent('.woman').removeClass('active');
      $(this).parent('.woman').siblings().removeClass('inactive');
    } else {
      $(this).parent('.woman').siblings().removeClass('active');
      $(this).parent('.woman').removeClass('active').removeClass('inactive').addClass('active');
      $(this).parent('.woman').siblings().removeClass('inactive').addClass('inactive');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top}
    );
  });
});
