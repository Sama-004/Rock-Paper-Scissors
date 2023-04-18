const game= () =>{
let mychoice = null;
let computer = null;
function checkWinner(userChoice, computer) {
    if (userChoice === computer) {
    return "It's a tie!";
  } //when user choses rock
  else if (userChoice == "rock") {
    if (computer == "scissors") {
      return "rock defeats scissors! player wins";
    } else if (computer == "paper") {
      return "paper defeats rock! Computer win";
    }
  } //when user choses paper
  else if (userChoice == "paper") {
    if (computer == "scissors") {
      return "scissors defeats paper! computer wins";
    } else if (computer == "rock") {
      return "paper defeats stone! Player wins";
    }
  } // when user choses scissors
  else if (userChoice == "scissors") {
    if (computer == "rock") {
      return "stone defeats scissors! Computer wins";
    } else if (computer == "paper") {
      return "scissors defeat paper";
    }
  }
}



mychoice = prompt("Please Enter you choice", );
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
//Choosing a number between 1 to 3 and then using it to choose among rock/paper/scissor
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const computerchoice = options[Math.floor(Math.random() * 3)];
    return computerchoice;
}
    
function playGame() {
  mychoice = "rock";
  computer = getComputerChoice();
  let playerScore;
    let computerScore; 
}
    playGame();
}
game();
