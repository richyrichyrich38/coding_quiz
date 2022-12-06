// global variables
var timerEl = document.getElementById('time')
var btn = document.getElementById('start')
var startScreen = document.getElementById('start-screen')
var currentQuestionIndex = 0
var score = 0
var questionWrap = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var choicesOutput = document.getElementById('choices')
var counter;

// adding countdown
function startCountdown(seconds) {
    counter = seconds;
    var interval = setInterval(() => {
    // console.log(counter);
    counter--;
    if(counter < 1) {
        clearInterval(interval);
    }
    timerEl.innerHTML = `${counter}`;
    }, 1000);
};


btn.addEventListener('click', function () {
    questionWrap.classList.remove('hide');
    startScreen.classList.add('hide')
    startCountdown(75)
});

// function to cycle through questions
function startQuiz() {
    var currentQuestion = questions[currentQuestionIndex];
    var choices = currentQuestion.choices;
    questionTitle.innerText = currentQuestion.title;
    choicesOutput.innerHTML = '';


    for(var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var isCorrect = currentQuestion.answer === choice;

        choicesOutput.insertAdjacentHTML('beforeend', `
        <button data-correct=${isCorrect}>${choice}</button>
        `)

    }

};

function checkAnswer(event) {

    console.log(event.target.dataset.correct);
    var userChoice = event.target.dataset.correct;

    if(userChoice == 'true') {
        console.log(`Correct`);
        currentQuestionIndex++
        insertAdjacentHTML('')
        startQuiz();
    } else {
        console.log(`Wrong`);
        currentQuestionIndex++
        startQuiz();
        counter-= 15;
    }
};

choicesOutput.addEventListener('click', checkAnswer)



startQuiz();