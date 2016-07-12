
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

  $(document).on({
      mouseenter: function () {
          //stuff to do on mouse enter
          $(this).addClass('semi-active');
          $(this).siblings().addClass('semi-active');
          $('.active').removeClass('semi-active');
      },
      mouseleave: function () {
          $(this).removeClass('semi-active');
          $(this).siblings().removeClass('semi-active');
      }
  }, ".inactive");

});
