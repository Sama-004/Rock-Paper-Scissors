function playRound(userChoice, ComputerSelection) {
  if (userChoice === computerSelection) {
    return "It's a tie";
  } //when user choses rock
  else if (userChoice == "rock") {
    if (ComputerSelection == "scissors") {
      return "rock defeats scissors! player wins";
    } else if (ComputerSelection == "paper") {
      return "paper defeats rock! Computer win";
    }
  } //when user choses paper
  else if (userChoice == "paper") {
    if (ComputerSelection == "scissors") {
      return "scissors defeats paper! computer wins";
    } else if (ComputerSelection == "rock") {
      return "paper defeats stone! Player wins";
    }
  } // when user choses scissors
  else if (userChoice == "scissors") {
    if (ComputerSelection == "rock") {
      return "stone defeats scissors! Computer wins";
    } else if (ComputerSelection == "paper") {
      return "scissors defeat paper";
    }
  }
}
let mychoice = null;
function getUserChoice(mychoice) {
  //  take userinput and check if it is rock/paper/scissor if not then displays error
  let userChoice = mychoice.toLowerCase(); //converting the userinput to lowercase
  if (
    userChoice === "rock" ||
    userChoice === "paper" ||
    userChoice === "scissors"
  ) {
    return userInput;
  } else {
    return "error";
  }
}
// making a number and then using it to choose rock/paper/scissor for the computer
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function playGame() {
  mychoice = "rock";
  ComputerSelection = getComputerChoice();
  let playerScore;
  let computerScore;

  playRound();
}
playGame();
