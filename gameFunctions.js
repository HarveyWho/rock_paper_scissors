function playerChoose() {
    let playerSelection = prompt("Please input one of the three following: Rock, Paper, Scissors")
    return playerSelection;
}

function playRound (playerSelection) {
    let comp = computerSelect()
    alert(`Computer selected ${comp}. You selected ${playerSelection}. Let's see!`)
    switch (comp) {
        case "Rock":
            if(playerSelection=="Scissors")
                alert("Ooops, scissors beat by rock.")
            else if (playerSelection=="Paper")
                alert(`Hooray, you beat rock! This is the ${++playerWin}nd game you win`)
            else
                alert("Oh oh, it's a draw.")
            break;
        case "Paper":
            if(playerSelection=="Rock")
                alert("Ooops, rock beat by paper.")
            else if (playerSelection=="Scissors")
                alert(`Hooray, you beat paper! This is the ${++playerWin}nd game you win`)
            else
                alert("Oh oh, it's a draw.")
            break;
        case "Scissors":
            if(playerSelection=="Paper")
                alert("Ooops, paper beat by scissors.")
            else if (playerSelection=="Rock")
                alert(`Hooray, you beat scissors! This is the ${++playerWin}nd game you win`)
            else
                alert("Oh oh, it's a draw.")
            break;
        default:
            alert(`Your input ${playerSelection} is incorrect. Please use Rock, Paper, or Scissors.`)
            break;
    }
}

function computerSelect() {
    var randomSelection = Math.floor(Math.random()*3)
    switch (randomSelection) {
        case 0:
            return "Rock"
        case 1:
            return "Scissors"
        case 2:
            return "Paper"
    }
}