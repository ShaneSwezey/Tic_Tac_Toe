const toeBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

class TTTGame {

    constructor() {
        this.player1 = new Player();
        this.player2 = new Player();
        this.turn = 1;
        this.winner = '',
        this.move = 0;
    }
}

class Player {

    constructor() {
        this.playerName = '';
    }

    set name(value) {
        if (value.length === 0) {
            alert("Name is too short.");
            return;
        }
        this.playerName = value;
    }

    get name() {
        return this.playerName;
    }

    
}

let currentGame;
let isWinner = false;
let gameStarted = false;

const modal = document.getElementById('gameSetUp');
const newGameButton = document.getElementById('newGame');
const resetButton = document.getElementById('resetGame');
const startPlayerGameButton = document.getElementById('startPlayerGame');
const modalClose = document.getElementsByClassName('close')[0];

modalClose.onclick = closeModalWindow;

newGameButton.onclick = function() {
    modal.style.display = "block";
};

resetButton.onclick = function() {
    alert(`Game state: ${game.player1Name}`);
};

// Starts a player vs player game
startPlayerGameButton.onclick = function() {
    currentGame = new TTTGame();
    setPlayerNames();
    gameStarted = true;
    closeModalWindow();
}

// Sets the players display names
function setPlayerNames() {
    currentGame.player1.name(document.getElementById('p1Name').value);
    currentGame.player2.name(document.getElementById('p2Name').value);

    document.getElementById('playerOneScore').innerText = currentGame.player1.name();
    document.getElementById('playerTwoScore').innerText = currentGame.player2.name();
}

// minimax algorithm to determine all possible moves in current state of tic tac toe game.
function minimax(game) {
}

function closeModalWindow() {
    modal.style.display = "none";
}

function setTurn() {
    if (game.turn === 'player1') game.turn = 'player2';
    else game.turn = 'player1'
}
