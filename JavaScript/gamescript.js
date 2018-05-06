const toeBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

let game = {
    player1: '',
    player2: '',
    winner: '',
    moves: 1
}

let isWinner = false;

const modal = document.getElementById('gameSetUp');
const newGameButton = document.getElementById('newGame');
const resetButton = document.getElementById('resetGame');
const startPlayerGameButton = document.getElementById('startPlayerGame');

const modalClose = document.getElementsByClassName('close')[0];

newGameButton.onclick = function() {
    modal.style.display = "block";
};

resetButton.onclick = function() {
    alert("This is working!");
};

modalClose.onclick = closeModalWindow;

startPlayerGameButton.onclick = function() {
    setPlayerNames();
    closeModalWindow();
}

function setPlayerNames() {
    const playerOneName = document.getElementById('p1Name').value;
    const playerTwoName = document.getElementById('p2Name').value;

    document.getElementById('playerOneScore').innerText = playerOneName;
    document.getElementById('playerTwoScore').innerText = playerTwoName;
}

// minimax algorithm to determine all possible moves in current state of tic tac toe game.
function minimax(game) {
}

function closeModalWindow() {
    modal.style.display = "none";
}