var timerEl = document.getElementById('time')
var btn = document.getElementById('start')
var startScreen = document.getElementById('start-screen')


function startCountdown(seconds) {
    var counter = seconds;
    var interval = setInterval(() => {
    console.log(counter);
    counter--;
    if(counter < 0) {
        clearInterval(interval);
    }
    }, 1000);
};


btn.addEventListener('click', function () {
    questionWrap.classList.remove('hide');
    startScreen.classList.add('hide')
    startCountdown(60)
});