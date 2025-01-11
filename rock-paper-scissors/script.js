
const choices = ["rock", "paper", "scissors"];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice() {
    const choice = getRandomInt(3);  
    return choices[choice];
}

function getHumanChoice(){
    do{
        let choice = window.prompt("Rock, Paper, Scissors ... GO").trim().toLowerCase();
        if (!choice) {
            alert("Cancelled by user.");
            return null;
        }
        if (choices.includes(choice)){
            return choice;
        }
    } while (true)
}

function playRound(humanChoice, computerChoice) {
    // Map human choices to the choices they can beat
    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (winningMoves[humanChoice] === computerChoice) {
        return "human";
    }

    return "computer";
}


function playGame(){
    const score = {
        human: 0,
        computer: 0,
        tie: 0
    };
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let round = playRound(humanChoice, computerChoice)
        console.log("C:",computerChoice,"H:",humanChoice,"\t| The winner of the round is: ", round)
        score[round] +=1
    }
    console.log(`Human: ${score.human}, Computer: ${score.computer}, Tie: ${score.tie}`);
    console.log(score.human === score.computer ? `Tie: ${score.tie}` : `The overall winner is: ${score.human > score.computer ? "Human" : "Computer"}`);

}

playGame()