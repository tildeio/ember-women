$(document).ready(function() {
  if(window.location.hash) {
    $(location.hash).addClass('active').removeClass('inactive');
    $(location.hash).siblings().addClass('inactive');
    $('html,body').animate({
      scrollTop: $(location.hash).offset().top - 60}
    );
  }
  $(document).keyup(function(e) {

    if (e.keyCode === 27) { // escape
      $('.inactive').removeClass('inactive'); // remove inactive
      $('.active').removeClass('active');
      // need to delay > 60ms
      window.location.hash = 'all'

    }
    if (e.keyCode === 39) { // right arrow
      $('.active').removeClass('active').addClass('inactive').next().removeClass('inactive').addClass('active');
      $('html,body').animate({
        scrollTop: $('.active').offset().top - 60}
      );
      // need to delay > 60ms
      setTimeout(function () {
              window.location.hash = ($('.active').attr('id'))
          }, 100);


    }
    if (e.keyCode === 37) { // left arrow
      $('.active').removeClass('active').addClass('inactive').prev().removeClass('inactive').addClass('active');
      $('html,body').animate({
        scrollTop: $('.active').offset().top - 60}
      );
      // need to delay > 60ms
      // window.location.hash = ($('.active').prev().attr('id'));
      setTimeout(function () {
              window.location.hash = ($('.active').attr('id'))
          }, 100);
    }
  });

  $('.woman > a').click(function(event) {
    event.preventDefault();
    if ($(this).parent('.woman').hasClass('active')) {
      $(this).parent('.woman').removeClass('active');
      $(this).parent('.woman').siblings().removeClass('inactive');
      //need to delay >60ms
      setTimeout(function () {
              window.location.hash = 'all'
          }, 500);
    } else {
      $(this).parent('.woman').siblings().removeClass('active').removeClass('semi-active');
      $(this).parent('.woman').removeClass('active').removeClass('inactive').removeClass('semi-active').addClass('active');
      $(this).parent('.woman').siblings().removeClass('inactive').addClass('inactive');
    }
    $('html,body').animate({
      scrollTop: $(this).offset().top}
    );
    $('.active').click(function(e) { // don't do the next function if active is clicked (click anywhere but active)
    e.stopPropagation();
  })

  $(function(){
    $(document).click(function(){ // click anywhere
      $('.inactive').removeClass('inactive'); // remove inactive
      $('.active').removeClass('active'); // remove active
      window.location.hash = ('all');
    });
  });

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
