function checkWinner(userChoice, computer) {
  if (userChoice == computer) {
    return "tie";
  } else if (
    (userChoice == "rock" && computer == "scissors") ||
    (userChoice == "scissors" && computer == "paper") ||
    (userChoice == "paper" && computer == "rock")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const computerchoice = options[Math.floor(Math.random() * 3)];
  return computerchoice;
}

function playGame(userChoice, computer) {
  const result = checkWinner(userChoice, computer);
  if (result == "tie") {
    return `It is a tie both selects ${userChoice}`;
  } else if (result == "Player") {
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
    console.log(playGame(userChoice, computer));
    if (checkWinner(userChoice, computer) == "Player") {
      Playerscore++;
    } else if (checkWinner(userChoice, computer) == "Computer") {
      Computerscore++;
    }
  }
  console.log("Game over");
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
