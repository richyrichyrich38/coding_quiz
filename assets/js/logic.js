// global variables
var timerEl = document.getElementById('time')
var btn = document.getElementById('start')
var startScreen = document.getElementById('start-screen')
var endScreen = document.getElementById('end-screen');
var correctSound = new Audio('./assets/sfx/correct.wav');
var incorrectSound = new Audio('./assets/sfx/incorrect.wav');
var submit = document.getElementById('submit');
var currentQuestionIndex = 0
var score = 0
var questionWrap = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var choicesOutput = document.getElementById('choices')
var initials = document.getElementById('initials');
var feedback = document.getElementById('feedback');
var finalScore = document.getElementById('final-score');
var countdown = 75;




// function that shows countdown timer and 
function timeLeft() {

    var timer = setInterval(function () {
        timerEl.innerText = countdown;
        countdown--;
        if (countdown < 0) {
            localStorage.setItem("Score", JSON.stringify(quizTime + 1)); // rests timed out score to 0
            questionWrap.classList.add('hide'); // hides question
            endScreen.classList.remove('hide'); // shows final score page
            finalScore.innerHTML = JSON.parse(localStorage.getItem("Score")); // displays users final score and initial request
            clearTimeout(timer); // stops the timer
        }
    }, 1000);

    return timer;

};