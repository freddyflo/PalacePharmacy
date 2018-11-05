$('.tab-bar').click(function () {
  $(this).siblings('.active').removeClass('.active');
  $(this).addClass('.active');
});
