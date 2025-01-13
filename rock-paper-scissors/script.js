
// Global 
const choices = ["rock", "paper", "scissors"];
const score = {
    human: 0,
    computer: 0,
    tie: 0
};

// Game logic
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function getComputerChoice() {
    const choice = getRandomInt(3);  
    return choices[choice];
}


function getHumanChoice() {
    const buttons = document.querySelectorAll("#container-rps-player button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const humanChoice = button.id;
            playGame(humanChoice)
        });
    });
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



function playGame(humanChoice){

    document.querySelector("#container-rps-player p").textContent = `👤: ${humanChoice}`;
    let computerChoice = getComputerChoice();
    document.querySelector("#container-rps-computer p").textContent = `🤖: ${computerChoice}`;

    let round = playRound(humanChoice, computerChoice)
    score[round] +=1

    document.querySelector("#container-result p").textContent = `👤: ${score.human}  🤖: ${score.computer}  🤝: ${score.tie}`;
}

// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", () => {
    getHumanChoice();
});