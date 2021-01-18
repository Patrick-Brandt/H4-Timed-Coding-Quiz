// To-do list
// Set up questions in html. Assign a correct answer ID? And maybe a class to wrong answers.
// Create a start button. Un click, start timer.
    //set interval?
// When you answer a question correctly, You are presented with a new question. Look up color excercise in class video.
    // Assign id's to divs.
// When you answer a question incorrectly, time is subtracted from the clock.
// When question is answered correctly, add points to score. 
// When all questions answered or time reaches 0, the GAME OVER.
// When game over, user can enter their initials and score.

//I was trying to hide section 1, and it worked. I think I need to use this in order to move from question to question. For example, "if user clicks start, hide section 1,3,4,5. Not sure how it will work yet.
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