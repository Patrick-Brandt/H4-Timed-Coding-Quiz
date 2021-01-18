// To-do list

// Create a start button. on click, start timer.
    //set interval?
    //hide "start" section when start button is clicked, and display qestion 1.
// When you answer a question correctly, add points to score. You are then presented with a new question. Look up color excercise in class video maybe.
    // when correct, hide question 1, and display question 2.
// When you answer a question incorrectly, time is subtracted from the clock.
//  
// When all questions answered or time reaches 0, then GAME OVER.
// When game over, user can enter their initials and score.

//I was trying to hide section 1, and it worked. I think I need to use this in order to move from question to question. For example, "if user clicks start, hide section 1,3,4,5. Not sure how it will work yet.
//  function hideQuestion1 (){
//  question1.setAtrribute("style","display:none;")  
//}                 or
//var sectionChange = document.querySelector("#question1");
//sectionChange.setAttribute("style","display:none;")

var timer = document.querySelector(".countdown");
var startButton = document.querySelector("startButton");

// The startQuiz function starts the timer when startButton is clicked.
function startQuiz() {
    timerCount = 90;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }