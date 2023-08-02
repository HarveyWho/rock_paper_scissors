alert("Welcome to the classic Rock-Paper-Scissors game! We will do 5 games in total.")
var playerWin = 0;
for (let index = 0; index < 5; index++) {
    alert(`This is game No.${index+1}. Ready...go!`);
    playRound(playerChoose());
}
alert("You completed 5 games. You have won "+playerWin+" games.")