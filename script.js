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
var currentQuestionIndex = 1;
var startButton = document.getElementById("startButton");
var startSection = document.getElementById("start-section");
var countdown = document.querySelector(".countdown");

var questionSection = document.getElementById("question_section");
var questionText = document.getElementById("question-text")
var choicesList = document.getElementById("choices-list")

var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");

var winCounter = 0;
var loseCounter = 0;
var points = 0;
var timer;
var timerCount= 75;

    // target all sections, and add class of hidden
    // target section with id of `currentQuestion`...
    // const currentSection = document.getElementById(currentQuestion.toString())
    // removed hidden class
  
var questions = [
    {
        question: "The main purpose of Javascript is to:",
        choices: ["A. define the content of webpages.","B. specify the layout of webpages.","C. program the behavior of the webpages.","D. destroy the information super highway."],
        answer: "C. program the behavior of the webpages."  
    },
    {
        question: "Javascript data types DO NOT include:",
        choices: ["A. strings","B. balloons","C. booleans","D. numbers"],
        answer: "B. balloons" 
    },
    {
        question: "Patrick's coding skills have improved immensely since he started coding in December 2020.",
        choices: ["A. Maybe a little bit.","B. Not really, no.","C. What coding skills?","D. YES! Look at how far he has come in such a short time!"],
        answer: "D. YES! Look at how far he has come in such a short time! " 
    },
    {
        question: "I would love to hire Patrick as a web developer, based on his winning smile and superb coding skills.",
        choices: ["A. No, I wouldn't hire him.","B. YES! He would be perfect!","I'm not sure.","D. I'm going to wait and think about it for a while."],
        answer: "B. YES! He would be perfect!" 
    },
    {
        question: "Patrick should be living good while he continues to work on his coding skills. A good starting salary for him would be:",
        choices: ["A. Hmmm...somewhere between $70,000 and $150,000...to start.","B. $40,000 per year.","C. Minimum wage is fine.","D. He should be paying us!"],
        answer: "A. Hmmm...somewhere between $70,000 and $150,000...to start." 
    },
]

function startQuiz() {
    startSection.setAttribute("class", "hidden")
    //start out with hidden class on questions section. Removed once quix starts.
    questionSection.removeAttribute("class")
    //TO-DO Add logic that sets up timer
    displayQuestion()
}

function displayQuestion() {
    //clear out the content of the questions and answers.
    questionText.textContent = " "
    choicesList.textContent = " "
    //Add the new question to the page.
    questionText.textContent = questions
    [currentQuestionIndex].question
    //loop through answers from current question and display each one in a button.
    questions[currentQuestionIndex].choices.forEach(function(choice) {
        var button = document.createElement('button')
//To-do I need to go through my html page and remove buttons and probably bootstrap.
        button.textContent = choice
        button.addEventListener("click", checkAnswer)
        choicesList.append(button)
    })
}

function checkAnswer(event) {
    var chosenAnswer = event.target.textContent
    //var userAnswer = event.target.dataset.answer
    if (chosenAnswer === questions[currentQuestionIndex]
        .answer) {
 // I'm doing console.log to test, but may remove at end.
            console.log("User chose correct answer.")
 //To-do- display user feedback. Or do I? I don't think this is necessary, unless I need to for storing locally. Will get to later.
    } else {
        console.log("User chose incorrect answer.")
 //To-do- Need to add code that will remove seconds from time-clock. --
    }

//Increase current question index.
// To-do- Add a conditional that checks to see if all questions have been answered. Probably will use 'array.length' or something.
//If all questions answered, call function that ends quiz.
//If more more questions left, call displayQuestion function again. 
displayQuestion()
}

function endQuiz() {
    //Todo- clear timer.
    //To-do- hide question sections.
    //show final score
    //user enters initials and saves high score to local storage.
}

// Event listener starts quiz when user clicks the startButton.
startButton.addEventListener('click', startQuiz)

// function startGame () {
  
//     timerCount = 75;
//     startTimer ()
// }

// function startTimer() {
//     // Sets the timer
//     timer = setInterval(function() {
//         timerCount--;
//         countdown.textContent = timerCount;
//         if (timerCount <=0) {
//             //clears interval and stops timer.
//             clearInterval(timer);

//         }
    
//     },1000);
// }

//Event Listener for correct answers or an I good with the quesryselector above? Then do I have the event listener trigger the hide question function?
//correct.addEventListener("click",//Do I add in the hide question function here?)
//Event listener for incorrect answers.
var section = document.getElementById(currentQuestion.toString())
section.addEventListener('click', function(e) {
    console.log('e: ', e.target.dataset.answer)
})