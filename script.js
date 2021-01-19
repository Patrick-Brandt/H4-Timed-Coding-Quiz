// To-do list

// I added an event listener for start button, and need to add one for correct/incorrect buttons. I started to on the buttom but need to add in a finction that I haven't made yet?!?!
    //timer starts counting down.    
//hide "start" section when start button is clicked, and display question 1.
// When you answer a question correctly, add points to score.
    // when correct, hide question 1, and display question 2.
// When you answer a question incorrectly, time is subtracted from the clock.
//  
// When all questions answered or time reaches 0, then GAME OVER.

// When game over, user can enter their initials and score.
    //need to add local storage.

//I was trying to hide the start section. I think I need to use this in order to move from question to question. For example, "if user clicks start, hide section start,2,3,4,5. Not sure how it will work yet.
//  function showQuestion1 (){
//  start.setAtrribute("style","display:none;"); 
//  question2.setAttribute("style","display:none;");
//  question3.setAttribute("style",)"display:none;");
//  question4.setAttribute("style",)"display:none;");
//  question5.setAttribute("style",)"display:none;");
//};    

var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var countdown = document.querySelector(".countdown");
var startButton = document.querySelector("startButton");
var winCounter = 0;
var loseCounter = 0;

var timer;
var timerCount;

//This function is called when the user clicks the start button.
function startGame () {
  
    timerCount = 75;
    startTimer ()
}

function startTimer() {
    // Sets the timer
    timer = setInterval(function() {
        timerCount--;
        countdown.textContent = timerCount;
        if (timerCount <=0) {
            //clears interval and stops timer.
            clearInterval(timer);

        }
    
    },1000);
}


// Event listener starts game when user clicks the startbutton.
startButton.addEventListener("click",startGame);

//Event Listener for correct answers or an I good with the quesryselector above? Then do I have the event listener trigger the hide question function?
correct.addEventListener("click",//Do I add in the hide question function here?)
//Event listener for incorrect answers.