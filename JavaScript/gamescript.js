const toeBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

var isWinner = false;

var game = {
    player1: '',
    player2: '',
    winner: '',
    moves: 1
}

let modal = document.getElementById('gameSetUp');
let startButton = document.getElementById('newGame');
let resetButton = document.getElementById('resetGame');
let modalClose = document.getElementsByClassName('close')[0];

startButton.onclick = function() {
    modal.style.display = "block";
};

resetButton.onclick = function() {
    alert("This is working!");
};

modalClose.onclick = function() {
    modal.style.display = "none";
};

function setGameUp() {

}



// minimax algorithm to determine all possible moves in current state of tic tac toe game.
function minimax(game) {
}
