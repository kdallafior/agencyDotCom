/*=============================================>>>>>
= Scrolltop =
===============================================>>>>>*/
$(document).ready(function(e) {

  $('.slide-section').click(function(e) {

    var linkHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    });

    e.preventDefault();
  });

});

/*= End of Scrolltop =*/
/*=============================================<<<<<*/
