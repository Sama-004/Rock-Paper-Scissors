let playerScore = 0;
let computerScore = 0;
let userChoice = "";
let winMessage = document.getElementById("win-el");
let infoMessage = document.getElementById("info-el");
let score = document.getElementById("score-el");
let finalScore = document.getElementById("final-el");
let compChoice = "";
function rock() {
  userChoice = "rock";
  playGame();
}
function paper() {
  userChoice = "paper";
  playGame();
}
function scissors() {
  userChoice = "scissors";
  playGame();
}
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return choices[randNum];
}
function checkWinner() {
  let computerChoice = getComputerChoice();
  compChoice = computerChoice;
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      return "Player";

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      return "Computer";

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      return "Draw";
  }
}
function playGame() {
  let winner = checkWinner();
  if (winner === "Player") {
    playerScore += 1;
    winMessage.innerText = "You Win this round";
    infoMessage.innerText = userChoice + " " + "beats" + " " + compChoice;
  } else if (winner === "Computer") {
    computerScore += 1;
    winMessage.innerText = "You Lost this round";
    infoMessage.innerText = compChoice + " " + "beats" + " " + userChoice;
  } else {
    winMessage.innerText = "This round ends in a Draw!!";
    infoMessage.innerText = userChoice + " " + "ties" + " " + compChoice;
  }
  score.innerText =
    "Score: " + "Player: " + playerScore + " " + "Computer: " + computerScore;
  if (playerScore > computerScore) finalScore.innerText = "You are winning!";
  else if (computerScore > playerScore)
    finalScore.textContent =
      "Computer is winning the game. Don't lose hope, you can still try to defeat the computer. ";
  else finalScore.innerText = "The scores are tied play a decider round";
}
