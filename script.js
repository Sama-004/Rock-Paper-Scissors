function playRound(userChoice, ComputerSelection) {
  if (userChoice === computerSelection) {
    return "It's a tie";
  } else if (userChoice == "rock") {
    if (ComputerSelection == "scissors") {
      return "rock defeats scissors! player wins";
    } else if (ComputerSelection == "paper") {
      return "paper defeats rock! Computer win";
    }
  } else if (userChoice == "paper") {
    if (ComputerSelection == "scissors") {
      return "scissors defeats paper! computer wins";
    } else if (ComputerSelection == "stone") {
      return "paper defeats stone! Player wins";
    }
  } else if (userChoice == "scissors") {
    if (ComputerSelection == "stone") {
      return "stone defeats scissors! Computer wins";
    } else if (ComputerSelection == "paper") {
      return "scissors defeat paper";
    }
  }
}

let userChoice = prompt("Enter your selection");
function getComputerChoice(userInput) {
  // this entire function takes userinput and checks if it is rock/paper/scissor if not then displays error
  let userChoice = userInput.toLowerCase(); //converting the userinput to lowercase
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
  Math.floor(Math.random() * 3);
  switch (1) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
