
$(document).ready(function() {
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
  }, ".inactive"); //pass the element as an argument to .on
});
