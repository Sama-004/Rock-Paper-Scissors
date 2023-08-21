let playerScore=0;
let computerScore=0;
let userChoice = "";
function rock() {
  console.log("Player: rock");
  userChoice = "rock";
    playGame();
}
function paper() {
  console.log("Player: paper");
  userChoice = "paper";
    playGame();
}
function scissors() {
  console.log("Player: scissors");
  userChoice = "scissors";
    playGame();
}
function getComputerChoice() {
let choices=["rock","paper","scissors"];
let randNum=Math.floor(Math.random()*3);
console.log("Computer: "+choices[randNum]);
return choices[randNum];
}

function checkWinner(){
let computerChoice=getComputerChoice();
switch(userChoice+computerChoice){
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
        console.log("It is a draw");
}

}
function playGame(){
let winner=checkWinner();
    if(winner==="Player"){
    playerScore+=1
    console.log("You win this round");
    }
    else if(winner==="Computer"){
        computerScore+=1;
        console.log("Computer wins this round");
    }
console.log("Player Score => "+playerScore);
console.log("Computer Score => "+computerScore);
    if(playerScore>computerScore)console.log("Player wins the game")
    else if(computerScore>playerScore)console.log("Computer wins the game")
    else console.log("It is a tie");
}
