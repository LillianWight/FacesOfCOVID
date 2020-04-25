$("form").on("change", ".file-upload-field", function(){ 
    $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
});

form = document.getElementByClassName('needs-validation');
if(form.checkValidity() === true) {
  //form validation succeeded
} else {
  //form validation failed
}