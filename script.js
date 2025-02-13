let score = 0;
let timeLeft = 10;
let gameButton = document.getElementById("gameButton");
let scoreElement = document.getElementById("score");
let timeElement = document.getElementById("time");
let timer;

gameButton.addEventListener("click", function() {
    score++;
    scoreElement.textContent = "Score: " + score;
});

function startTimer() {
    timer = setInterval(function() {
        timeLeft--;
        timeElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Game Over! Your final score is: " + score);
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    score = 0;
    timeLeft = 10;
    scoreElement.textContent = "Score: " + score;
    timeElement.textContent = timeLeft;
    startTimer();
}

startTimer();
