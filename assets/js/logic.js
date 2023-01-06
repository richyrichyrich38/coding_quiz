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

// function that executes the quiz
function startQuiz() {
    // If statement that loops through questions and if no more available ends the quiz with the remaining time being saved as the final score
    if (currentQuestionIndex < questions.length) {

        var currentQuestion = questions[currentQuestionIndex]; 
        questionTitle.innerText = currentQuestion.title;  
        var choices = currentQuestion.choices;  
        choiceOutput.innerHTML = "";  //sets div to empty string once run

        // For Loop to create a button for each choice in the current question title and choices
        for (var i = 0; i < choices.length; i++) {
            var choice = choices[i];  //Set as current choice
            var correctAnswer = currentQuestion.answer === choice;  //measures against correct answer

            //Creating a button for every choice in our questions array and target the correct answer with the data-correct class
            choiceOutput.insertAdjacentHTML('beforeend', `
            <button data-correct=${correctAnswer}>${choice}</button>
            `);

        }

        //Display the question and choices when start button is clicked
        questionWrap.classList.remove('hide');

    } else {
        localStorage.setItem("Score", JSON.stringify(quizTime)); // final score is time remaining
        questionWrap.classList.add('hide'); // hides final question
        endScreen.classList.remove('hide'); // displays initial input page
        finalScore.innerHTML = JSON.parse(localStorage.getItem("Score")); // shows final score and you can input initials
        submit.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.setItem("Initials", JSON.stringify(initials.value));  // stores initials 
            endScreen.innerText = 'Congratulations! Please click <b>View Highscores</b> on the left of the page to view all high scores!';
        
        });
    };
}