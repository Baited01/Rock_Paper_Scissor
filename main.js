let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerOption = ["ROCK", "PAPER", "SCISSORS"];
    const computerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];
    console.log(computerChoice);
}

function getPlayerChoice() {
    let playerChoice = null;
    let choiceCheck = "Invalid";
    while(choiceCheck == "Invalid") {
        if((playerChoice == null) || (playerChoice != "ROCK" || playerChoice != "PAPER" || playerChoice != "SCISSORS")) {
            playerChoice = prompt("Choose between the following options");
            if(playerChoice == null) {
                console.error("Choice cannot be empty");
                choiceCheck == "Invalid";
            } else if ((playerChoice.toUpperCase() != "ROCK") && (playerChoice.toUpperCase()!="PAPER") && (playerChoice.toUpperCase()!="SCISSORS")){
                console.warn("Your choice "+ playerChoice+ " is not a valid choice, pick again");
                choiceCheck = "Invalid";
            } else {
                choiceCheck = "valid";
                return playerChoice;
            }
        }
    }
}

function playRound() {
    let playerSelection = getPlayerChoice().toUpperCase();
    let computerSelection = getComputerChoice().toUpperCase();
    console.log("player Selected: "+ playerSelection);
    console.log("Computer Selection: "+ computerSelection);
    if(playerSelection == computerSelection) {
        console.log("Draw, same selection on both sides" + playerSelection);
        playerScore = playerScore+1;
        computerScore = computerScore+1;
    } else if (playerSelection == "PAPER" && computerSelection =="SCISSORS") {
        console.log("You Lost the round");
        computerScore = computerScore+1;
    } else if(playerSelection == "PAPER" && computerSelection =="ROCK") {
        console.log("You won the round");
        playerScore= playerScore+1;
    } else if(playerSelection == "SCISSORS" && computerSelection =="ROCK") {
        console.log("You lost the round");
        computerScore = computerScore+1;
    } else if(playerSelection == "SCISSORS" && computerSelection =="PAPER") {
        console.log(" You won the round");
        playerScore = playerScore+1;
    } else if(playerSelection == "ROCK" && computerSelection =="PAPER") {
        console.log("You lost the round");
        computerScore=computerScore+1;
    } else if(playerSelection == "ROCK" && computerSelection =="SCISSORS") {
        console.log("You won the round");
        playerScore = playerScore+1;
    }
}

function game() {
    console.clear();
    playerScore = 0;
    computerScore = 0;
    let round = 0;
    for(let i=0; i<5;i++) {
        round = round+1;
        console.log("Round: ("+round+ "/5)");
        playRound();
        console.log("Player: "+playerScore+" - "+computerScore+ " computer");
    }
    if(playerScore>computerScore) {
        console.log("Player Wins");
    } else if(playerScore == computerScore) {
        console.log("Draw");
    } else {
        console.log("Computer Wins");
    }
    console.log("Click on start game to start a new game");
}