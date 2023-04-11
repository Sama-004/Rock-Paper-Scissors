function playRound(playerSelection, computerSelection) {}

const playerSelection = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("error");
  }
}; //string
const computerSelection = (getComputerChoice) => {
  Math.floor(Math.random() * 1);
  switch (1) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
console.log(
  `The player chose ${playerSelection}. The Computer chose ${getComputerChoice}`
);

function game(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    console.log("It's a tie");
  } else {
    if (playerSelection == "rock") {
      computerSelection == "paper";
      console.log("Paper defeats rock! Computer wins");
    } else {
      console.log("Congratulations! You win!");
    }
  }
}
