function checkWinner(userChoice, computer) {
  if (userChoice === computer) {
    return "tie";
  } //when user choses rock
  else if (userChoice == "rock") {
    if (computer == "scissors") {
      return "Player";
    } else if (computer == "paper") {
      return "Computer";
    }
  } //when user choses paper
  else if (userChoice == "paper") {
    if (computer == "scissors") {
      return "Computer";
    } else if (computer == "rock") {
      return "Player";
    }
  } // when user choses scissors
  else if (userChoice == "scissors") {
    if (computer == "rock") {
      return "Computer";
    } else if (computer == "paper") {
      return "Player";
    }
  }
}
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const computerchoice = options[Math.floor(Math.random() * 3)];
  return computerchoice;
}

function playGame() {
  const result = checkWinner(userChoice, computer);
  if (result == "tie") {
    return "It is a tie";
  } else if (result == "player") {
    return `you win ${userChoice} beats ${computer}`;
  } else {
    return `Computer win ${computer} beats ${userChoice}`;
  }
}
function getPlayerChoice() {
  const options = ["rock", "paper", "scissors"];
  let input = false;
  while (input == false) {
    const choice = prompt("Select from Rock, Paper or Scissors");
    if (choice == null) {
      continue;
    }
    const choiceInlower = choice.toLowerCase();
    if (options.includes(choiceInlower)) {
      validatedInput = true;
      return choiceInlower;
    }
  }
}

function game() {
  let Playerscore = 0;
  let Computerscore = 0;
  for (let i = 0; i < 5; i++) {
    const userChoice = getPlayerChoice();
    const computer = getComputerChoice();
    console.log(checkWinner(userChoice, computer));
    if (checkWinner(userChoice, computer == "Player")) {
      Playerscore++;
    } else if (checkWinner(userChoice, computer == "Computer")) {
      Computerscore++;
    }
  }
  console.log("game over");
  console.log("Player score is " + Playerscore);
  console.log("Computer score is " + Computerscore);
  if (Playerscore > Computerscore) {
    console.log("Player wins");
  } else if (Computerscore > Playerscore) {
    console.log("Computer wins");
  } else {
    console.log("It's a tie");
  }
}

game();
