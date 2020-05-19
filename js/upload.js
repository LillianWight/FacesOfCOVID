$("form").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
});

form = document.getElementsByClassName('needs-validation');
if(form.checkValidity() === true) {
  //form validation succeeded
} else {
  //form validation failed
}

$('.photo__cards').hover(function(){
    $(this).find('.photo__cards--side').addClass('flipped');
    return false;
}).mouseleave(function () {
    $('.photo__cards > .photo__cards--side').removeClass('flipped');
});

var frontHeight = $('.photo__cards--front').outerHeight();
var backHeight = $('.photos__cards--back').outerHeight();

if (frontHeight > backHeight) {
    $('.photo__cards, .photos__cards--back').height(frontHeight);
}
else if (frontHeight > backHeight) {
    $('.photo__cards, .photo__cards--front').height(backHeight);
}
else {
    $('.photo__cards').height(backHeight);
}