// Event Listeners for the buttons
document.querySelector(".Rock").addEventListener("click", function() { playRound("Rock") });
document.querySelector(".Paper").addEventListener("click", function() { playRound("Paper") });
document.querySelector(".Scissors").addEventListener("click", function() { playRound("Scissors") }); // I've changed "Scissor" to "Scissors" here

var playerWin = 0;
var computerWin = 0;

function displayMessage(message) {
    document.getElementById('results').textContent = message;
}

function updateScoreboard() {
    document.getElementById('scoreboard').textContent = `Player: ${playerWin} - Computer: ${computerWin}`;
}

function playRound(playerSelection) {
    let comp = computerSelect();
    displayMessage(`Computer selected ${comp}. You selected ${playerSelection}. Let's see!`);
    
    switch (comp) {
        case "Rock":
            if (playerSelection === "Scissors") {
                computerWin++;
                displayMessage("Ooops, scissors beat by rock.");
            }
            else if (playerSelection === "Paper") {
                playerWin++;
                displayMessage("Hooray, you beat rock!");
            }
            else
                displayMessage("Oh oh, it's a draw.");
            break;
        case "Paper":
            if (playerSelection === "Rock") {
                computerWin++;
                displayMessage("Ooops, rock beat by paper.");
            }
            else if (playerSelection === "Scissors") {
                playerWin++;
                displayMessage("Hooray, you beat paper!");
            }
            else
                displayMessage("Oh oh, it's a draw.");
            break;
        case "Scissors":
            if (playerSelection === "Paper") {
                computerWin++;
                displayMessage("Ooops, paper beat by scissors.");
            }
            else if (playerSelection === "Rock") {
                playerWin++;
                displayMessage("Hooray, you beat scissors!");
            }
            else
                displayMessage("Oh oh, it's a draw.");
            break;
        default:
            displayMessage(`Your input ${playerSelection} is incorrect. Please use Rock, Paper, or Scissors.`)
            break;
    }

    updateScoreboard();

    if (playerWin === 5) {
        displayMessage("Congratulations! You won the game!");
        playerWin = 0;
        computerWin = 0;
        updateScoreboard();
    }
    else if (computerWin === 5) {
        displayMessage("Sorry, the computer won the game.");
        playerWin = 0;
        computerWin = 0;
        updateScoreboard();
    }
}


function computerSelect() {
    var randomSelection = Math.floor(Math.random() * 3);
    switch (randomSelection) {
        case 0:
            return "Rock";
        case 1:
            return "Scissors";
        case 2:
            return "Paper";
    }
}
