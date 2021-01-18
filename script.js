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

var timer = document.querySelector(".countdown");
var startButton = document.querySelector("startButton");

// The startQuiz function starts the timer when startButton is clicked.
function startQuiz() {
    timerCount = 90;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }