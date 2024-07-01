let computerNum = 0;
let chances = 3;
let gameOver = false;
let history = [];

let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");

let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let gameoverArea = document.getElementById("gameover-area");
let correctArea = document.getElementById("correct-area");
let answerArea = document.getElementById("answer-area");
let chanceArea = document.getElementById("chance-area");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomnum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("Answer", computerNum);
}

function play() {
  let userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "Please enter a number between 1 and 100!";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = "Please enter a new number!";
    return;
  }

  chances--;
  chanceArea.textContent = `You have ${chances} chances left`;
  console.log("chance", chances);
  if (userValue < computerNum) {
    resultArea.textContent = "Up!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!";
  } else {
    correctArea.textContent = "Correct!";
    chanceArea.textContent = "";
    gameOver = true;
  }
  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  if (gameOver == true) {
    playButton.disabled = true;
    gameoverArea.textContent = "GAME OVER";
    answerArea.textContent = `The answer was ${computerNum}!`;
    resultArea.textContent = "";
  }
}

function reset() {
  userInput.value = "";
  pickRandomnum();
  resultArea.textContent = "";
  gameoverArea.textContent = "";
  answerArea.textContent = "";
  correctArea.textContent = "";
  chances = 3;
  playButton.disabled = false;
  chanceArea.textContent = `You have ${chances} chances left`;
  history = [];
  gameOver = false;
}

pickRandomnum();
