
let gameBoard;

const modal = document.getElementById('gameSetUp');
const newGameButton = document.getElementById('newGame');
const resetButton = document.getElementById('resetGame');
const startPlayerGameButton = document.getElementById('startPlayerGame');
const modalClose = document.getElementsByClassName('close')[0];
const cells = document.querySelectorAll('.cell');
const winCond = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

let playersMarker = 'X';

newGameButton.onclick = function() {
    modal.style.display = "block";
};

resetButton.onclick = function() {
    resetGame();
};

function resetGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener('click', turnClick, false);
    }
}

function closeModalWindow() {
    modal.style.display = "none";
}

// Sets the players display names
function setPlayerNames() {
    const player1Name = document.getElementById('p1Name').value;
    const player2Name = document.getElementById('p2Name').value;

    document.getElementById('playerOneScore').innerText = player1Name;
    document.getElementById('playerTwoScore').innerText = player2Name;
}

// minimax algorithm to determine all possible moves in current state of tic tac toe game.
function minimax(game) {
}

function setUpPlayerGame() {
    setPlayerNames();
    gameStarted = true;
    closeModalWindow();
    startPlayerGame();
}

function startPlayerGame() {
    gameBoard = Array.from(Array(9).keys());
    resetGame();
}

function turnClick(square) {
    turn(square.target.id, playersMarker);
}

function turn(squareId, playerMarker) {
    console.log(squareId);
    gameBoard[squareId] = playerMarker;
    document.getElementById(squareId).innerText = playerMarker;
    if (playerMarker === 'X') {
        playersMarker = 'O';
    } else {
        playersMarker = 'X';
    }
}

function isWinner() {
    
}

// Close modal window
modalClose.onclick = closeModalWindow;

// Starts a player vs player game
startPlayerGameButton.onclick = setUpPlayerGame;

