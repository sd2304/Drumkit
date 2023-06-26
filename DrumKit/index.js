/*
Another approach for applying same event to all elements in the class

  for(var i=0;i<document.querySelectorAll(".drum").length;i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
  alert("I got clicked!");
});
}
*/

document.querySelectorAll(".drum").forEach((item, i) => {
  item.addEventListener("click", handleClick)
});

function handleClick() {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml); //Passing the innerHTML i.e., the character clicked on by the user as parameter to makeSound() function.
  //this.style.color="black";
  buttonAnimation(buttonInnerHtml);
}

// By default first button is handled. addEventListener has
// two parameters , the type of event and the function to be called in order to handle it.
// remember we do not use paranthesis when specifying which method to be called bcuz it calls the method even before the event occurs as soon as JS is loaded.
//Anonymus function could also be used, works normally but does not have a name

document.addEventListener("keydown", function(event) { // Key press is added to entire document instead of limiting it to a button.
  makeSound(event.key); // Passing the key as parameter to the makeSound function
  buttonAnimation(event.key);
});

//Common function to handle both keypress and button click.
function makeSound(key) {
  switch (key) {
    case 'w':
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case 'a':
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case 's':
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case 'd':
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case 'j':
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case 'k':
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case 'l':
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100)
}





/*Example of Anonymus function used
  document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});*/
