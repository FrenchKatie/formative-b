(function() {
    //Variables for the form to get the values/inputs
    var image = document.getElementById("image");
    var background = document.getElementById("background");
    var font = document.getElementById("font");
    var border = document.getElementById("border");
    var submit = document.getElementById("submitBtn");
    var message = document.getElementById("message");
    var card = document.getElementsByClassName("card");

    //Variables for the card div
    var cardBox = document.getElementById("cardBox");
    var imageBox = card[0].children[0].children[0];
    var fontBox = card[0].children[1].children[0];
    var borderBox = cardBox.children[1];
    var textBox = borderBox.children[0];

    //On click event listener
    submit.addEventListener('click', function (e) {
          //Prevents defailt refresh when button is clicked
          e.preventDefault();
          //Calls all functions from below
          changeImage();
          changeBgColor();
          changeFont();
          changeBorder();
          changeText();
    }); //end of click event

    //Sets a new src path for each value
    function changeImage() {
          if (image.value === "christmas") {
                imageBox.setAttribute("src", "assets/christmas.jpg");
          }else if (image.value === "valentines") {
                imageBox.setAttribute("src", "assets/valentines.jpg");
          }else if (image.value === "birthday") {
                imageBox.setAttribute("src", "assets/birthday.jpg");
          };
    }

    //Sets a new class for each value. Other classes that don't match the value are removed
    function changeBgColor() {
          if (background.value === "celadon") {
                cardBox.classList.add("celadonBackground");
                cardBox.classList.remove("graphiteBackground");
                cardBox.classList.remove("roseBackground");
          }else if (background.value === "graphite") {
                cardBox.classList.add("graphiteBackground");
                cardBox.classList.remove("celadonBackground");
                cardBox.classList.remove("roseBackground");
          }else if (background.value === "rose") {
                cardBox.classList.add("roseBackground");
                cardBox.classList.remove("celadonBackground");
                cardBox.classList.remove("graphiteBackground");
          };
    }

    //Sets a new class for each value. Other classes that don't match the value are removed
    function changeFont () {
          if (font.value === "handwriting") {
                fontBox.classList.add("handwriting");
                fontBox.classList.remove("sketch");
                fontBox.classList.remove("print");
          }else if (font.value === "sketch") {
                fontBox.classList.add("sketch");
                fontBox.classList.remove("print");
                fontBox.classList.remove("handwriting");
          }else if (font.value === "print") {
                fontBox.classList.add("print");
                fontBox.classList.remove("handwriting");
                fontBox.classList.remove("sketch");
          };
    }

    //Sets a new class for each value. Other classes that don't match the value are removed
    function changeBorder () {
          if (border.value === "none") {
                borderBox.classList.add("noneBorder");
                borderBox.classList.remove("smallBorder");
                borderBox.classList.remove("bigBorder");
                borderBox.classList.remove("filledBorder");
          }else if (border.value === "thin") {
                borderBox.classList.add("smallBorder");
                borderBox.classList.remove("noneBorder");
                borderBox.classList.remove("bigBorder");
                borderBox.classList.remove("filledBorder");
          }else if (border.value === "thick") {
                borderBox.classList.add("bigBorder");
                borderBox.classList.remove("noneBorder");
                borderBox.classList.remove("smallBorder");
                borderBox.classList.remove("filledBorder");
          }else if (border.value === "filled") {
                borderBox.classList.add("filledBorder");
                borderBox.classList.remove("noneBorder");
                borderBox.classList.remove("smallBorder");
                borderBox.classList.remove("bigBorder");
          }
    }

    //Changes the text content to the new value
    function changeText () {
          textBox.textContent = "" + message.value + "";
    }

}());
