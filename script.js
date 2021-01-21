// To-do list

// When you answer a question correctly, add points to score.
    
// When you answer a question incorrectly, time is subtracted from the clock.
  
// When all questions answered or time reaches 0, then GAME OVER.

// When game over, user can enter their initials and score.
    //need to add local storage.
  
// The below variables are for the quiz questions and answers.   
var currentQuestionIndex = 1;
var finishedQuizQuestions= currentQuestionIndex.length;
//The below variables are for the start button and timer.
var startButton = document.getElementById("startButton");
var startSection = document.getElementById("start-section");
var countdown = document.querySelector(".countdown");
var timer;
var timerCount= 75;
// The below variables are for pulling info from HTML for quiz questions.
var questionSection = document.getElementById("question_section");
var questionText = document.getElementById("question-text")
var choicesList = document.getElementById("choices-list")
//The below variables are for tracking points scored.
var winCounter = 0;
var loseCounter = 0;
var points = 0;
  
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
    //start out with hidden class on questions section. Removed once quiz starts.
    questionSection.removeAttribute("class")
    displayQuestion()
    startTimer ()
}

// The function below is for the timer. It is invoked within the startQuiz function, once the start button is pressed.
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        countdown.textContent = timerCount;

            if (timerCount === 0) {
                window.clearInterval(timer);
            }
    }, 1000);    
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

        button.textContent = choice
        button.addEventListener("click", checkAnswer)
        choicesList.append(button)
    })
}

//This is the function that checks to see if the answer is correct.
function checkAnswer(event) {
    var chosenAnswer = event.target.textContent
    
    if (chosenAnswer === questions[currentQuestionIndex].answer) {
        points++; //Not sure if this is correct. Still some work to do with points.
        currentQuestionIndex ++; 
        displayQuestion ();
    } else if (chosenAnswer !== questions[currentQuestionIndex].answer) {
        currentQuestionIndex ++;
        points--; //Not sure if this is correct. Still some work to do with points.
        displayQuestion();
    }   
// To-do- Add a conditional that checks to see if all questions have been answered. Probably will use 'array.length' or something.
//If all questions answered, call function that ends quiz. 
}

function endQuiz() {
    //Todo- clear timer.
    //To-do- hide question sections.
    //show final score
    //user enters initials and saves high score to local storage.
}

// Event listener starts quiz when user clicks the startButton.
startButton.addEventListener('click', startQuiz)
  
//Event Listener for correct answers or an I good with the quesryselector above? 
//correct.addEventListener("click",//Do I add in the hide question function here?)
//Event listener for incorrect answers.
var section = document.getElementById(currentQuestion.toString())
section.addEventListener('click', function(e) {
    console.log('e: ', e.target.dataset.answer)
})