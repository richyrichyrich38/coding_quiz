// global variables
var timerEl = document.getElementById('time')
var btn = document.getElementById('start')
var startScreen = document.getElementById('start-screen')

// adding countdown
function startCountdown(seconds) {
    var counter = seconds;
    var interval = setInterval(() => {
    console.log(counter);
    counter--;
    if(counter < 0) {
        clearInterval(interval);
        // showScores();
    }
    timerEl.innerHTML = `${counter}`;
    }, 1000);
};


btn.addEventListener('click', function () {
    questionWrap.classList.remove('hide');
    startScreen.classList.add('hide')
    startCountdown(75)
});