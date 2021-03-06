// The below variables are for the quiz questions and answers.   
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
        answer: "D. YES! Look at how far he has come in such a short time!" 
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

var currentQuestionIndex = 0;
var finishedQuizQuestions = questions.length - 1;
//The below variables are for the start button and timer.
var startButton = document.getElementById("startButton");
var startSection = document.getElementById("start-section");
var countdown = document.querySelector(".countdown");
var timerCount = 75;
var timer;
// The below variables are for pulling info from HTML for quiz questions.
var questionSection = document.getElementById("question_section");
var questionText = document.getElementById("question-text")
var choicesList = document.getElementById("choices-list")
//The below variables are for tracking points scored.
var points = 0;
var scores = document.querySelector(".scores");
//This is for local storage
var points = localStorage.getItem("points");
var initialsAndScore = saveScore + points;
var saveScore ;

//starts the Quiz
function startQuiz() {
    startSection.setAttribute("class", "hidden")
    //start out with hidden class on questions section. Removed once quiz starts.
    questionSection.removeAttribute("class")
    displayQuestion()
    startTimer ()
}

// The function below is for the timer. It is invoked within the startQuiz function, once the start button is pressed.
function startTimer() {
    countdown.textContent = timerCount;
    timer = setInterval(function() {
        timerCount--;
        countdown.textContent = timerCount;

            if (timerCount <= 0) {
                window.clearInterval(timer);
                countdown.textContent = 0;
            }
    }, 1000);    
}

function displayQuestion() {
    //clear out the content of the questions and answers.
    questionText.textContent = " "
    choicesList.textContent = " "
    //Adds the new question to the page.
    questionText.textContent = questions
    [currentQuestionIndex].question
    // Loops through answers from current question and display each one in a button.
    questions[currentQuestionIndex].choices.forEach(function(choice) {
        var button = document.createElement('button')
        button.textContent = choice
        button.addEventListener("click", checkAnswer)
        choicesList.append(button)
    })
}

// This function displays the score on the top right corner of screen.
function displayScore (){
scores.innerText = points;
console.log(points)
}

//This is the function that checks to see if the answer is correct.
function checkAnswer(event) {
    var chosenAnswer = event.target.textContent
    
    if (chosenAnswer === questions[currentQuestionIndex].answer && currentQuestionIndex !==finishedQuizQuestions) {
        points += 20; 
        displayScore ();
        currentQuestionIndex ++; 
        displayQuestion ();
    } else if (chosenAnswer !== questions[currentQuestionIndex].answer && currentQuestionIndex !==finishedQuizQuestions) {
        currentQuestionIndex ++;
        timerCount -= 20;
        displayQuestion();
    } else if (chosenAnswer === questions[currentQuestionIndex].answer && currentQuestionIndex === finishedQuizQuestions) {         
        points += 20; 
        displayScore ();
        endQuiz();
    } else if (chosenAnswer !== questions[currentQuestionIndex].answer && currentQuestionIndex === finishedQuizQuestions) {          
        displayScore ();
        endQuiz();
        storePoints ();
    }        
}

//This function ends the quiz.
function endQuiz() {
    clearInterval(timer);
    questionSection.setAttribute("class", "hidden");
    countdown.textContent = 0;
    storePoints();
}

//This function stores points to local storage.
function storePoints () {
    localStorage.setItem("score", points);
    var saveScore = prompt("Please enter your initials.");
    console.log ("Your initials are: ",saveScore);
    console.log ("Your score was: ",points)
    initialsAndScore = saveScore + points;
    localStorage.setItem("lastScore", initialsAndScore)
}

// Event listener starts quiz when user clicks the startButton.
startButton.addEventListener('click', startQuiz)
   