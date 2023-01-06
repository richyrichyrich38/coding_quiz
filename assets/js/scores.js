// Retrieve data from localStorage
var highScore = JSON.parse(localStorage.getItem("Score"));
var initial = JSON.parse(localStorage.getItem("Initials"));

//Targets the clear high score button
var deleteHighScore = document.getElementById('clear');


// Shows high scores when button clicked
document.getElementById('highscores').innerHTML = `${initial}: ${highScore}`;

// Deletes all previous scores when clear high score button is pressed
deleteHighScore.addEventListener ('click', function() {
    document.getElementById('highscores').classList.add('hide');
});