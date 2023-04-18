function checkWinner(userChoice, computer) {
    if (userChoice === computer) {
    return "tie";
  } //when user choses rock
  else if (userChoice == "rock") {
    if (computer == "scissors") {
      return "player";
    } else if (computer == "paper") {
      return "Computer";
    }
  } //when user choses paper
  else if (userChoice == "paper") {
    if (computer == "scissors") {
      return "computer";
    } else if (computer == "rock") {
      return "Player";
    }
  } // when user choses scissors
  else if (userChoice == "scissors") {
    if (computer == "rock") {
      return "Computer";
    } else if (computer == "paper") {
      return "paper";
    }
  }
}


/*mychoice = prompt("Please Enter you choice", );*/
/*function getUserChoice(mychoice) {
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
  */
//Choosing a number between 1 to 3 and then using it to choose among rock/paper/scissor
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const computerchoice = options[Math.floor(Math.random() * 3)];
    return computerchoice;
}
   
function playGame() {
    const result = checkWinner(userChoice,computer);
    if(result=="tie"){
	return "It is a tie";
    }
    else if(result == "player"){
	    return "You won";
    }
    else{
	return "Computer wins";
    }
}

    const userChoice = "rock";
    const computer = getComputerChoice();
   console.log(checkWinner(userChoice,computer));
   console.log(playGame(userChoice,computer));
