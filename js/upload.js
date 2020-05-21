$("form").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
});



$('.photos__cards').hover(function(){
    $(this).find('.photos__cards--side').addClass('flipped');
    return false;
}).mouseleave(function () {
    $('.photos__cards > .photos__cards--side').removeClass('flipped');
});

var frontHeight = $('.photos__cards--front').outerHeight();
var backHeight = $('.photos__cards--back').outerHeight();

if (frontHeight > backHeight) {
    $('.photos__cards, .photos__cards--back').height(frontHeight);
}
else if (frontHeight > backHeight) {
    $('.photos__cards, .photos__cards--front').height(backHeight);
}
else {
    $('.photos__cards').height(backHeight);
}