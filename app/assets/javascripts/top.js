$(window).on("load", function() {
  $("#left").on("click", function() {
    $(".left").css('background','blue');
  });
  $("#center").on("click", function() {
    $(".center").css('background','yellow');
  });
  $("#right").on("click", function() {
    $(".right").css('background','red');
  });
});