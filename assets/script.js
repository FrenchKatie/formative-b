(function() {
    var image = document.getElementById("image");
    var background = document.getElementById("background");
    var font = document.getElementById("font");
    var border = document.getElementById("border");
    var submit = document.getElementById("submitBtn");
    var message = document.getElementById("message");
    var card = document.getElementById("card");

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        console.dir("The image is: " + image.value);
        // console.dir("The background is: " + background.value);
        // console.dir("The font is: " + font.value);
        // console.dir("The border is: " + border.value);
        // console.dir("The message is: " + message.value);

    }); //end of submit event

// parameters & arguments
// onchange event

}());
