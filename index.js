
// Button Press
var numberOfCartoonButtons = document.querySelectorAll(".cartoon").length;

for(var i = 0; i<numberOfCartoonButtons; i++) {
  document.querySelectorAll(".cartoon")[i].addEventListener("click", function () {


   var buttonInnerHtml = this.innerHTML;
   makeSound(buttonInnerHtml);
   buttonAnnimation(buttonInnerHtml);
});

}

// Keyboard Press
document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "c":
    var audio = new Audio('sounds/chotabheem.mp3');
    audio.play();
    break;

    case "d":
    var audio = new Audio('sounds/doraemon.mp3');
    audio.play();
    break;

    case "s":
    var audio = new Audio('sounds/Shinchan.mp3');
    audio.play();
    break;

    case "m":
    var audio = new Audio('sounds/mickey.mp3');
    audio.play();
    break;

    case "n":
    var audio = new Audio('sounds/Noddy.mp3');
    audio.play();
    break;

    case "p":
    var audio = new Audio('sounds/Phineas.mp3');
    audio.play();
    break;

    case "b":
    var audio = new Audio('sounds/bean.mp3');
    audio.play();
    break;

    default: console.log(buttonInnerHtml);
}
}

function buttonAnnimation(currentKey){
var activeButton =   document.querySelector("." + currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 15000);
}
