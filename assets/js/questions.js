var questions  = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        answer: '3. alerts'
    },
    {
        title: 'The condition in an if / else statement is enclose within ____.',
        choices: ['1. quotes', '2. curly braces', '3. parentheses', '4. square brackets'],
        answer: '3. parentheses'
    },
    {
        title: 'Arrays in Javascript can be used to store ____.',
        choices: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        answer: '4. all of the above'
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables',
        choices: ['1. commas', '2. curly braces', '3. quotes', '4. parentheses'],
        answer: '3. quotes'
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['1. Javascript', '2. terminal / bash', '3. for loops', '4. console.log'],
        answer: '4. console.log'
    }
];

var currentQuestionIndex = 0;
var questionWrap = document.getElementById('questions')
var questionTitle = document.getElementById('question-title')
var choicesOutput = document.getElementById('choices')

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

}

function checkAnswer(event) {
    console.log(event.target);
}

choicesOutput.addEventListener('click', checkAnswer)

startQuiz();