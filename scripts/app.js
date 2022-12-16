//responsible for initialising the app and storing intital variables

const gameData = [ //2d array, i.e arrays within an array
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer = 0;
let activePlayer = 0; // changes from 0 to 1 after each turn, so you can access this index in the array
let currentRound = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

//overlay and backdrop elements
const configOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const form = document.querySelector('form');
const configErrorText = document.getElementById('config-errors');


//button elements
const editPlayerOneButtonElement = document.getElementById('edit-player-one-button');
const editPlayerTwoButtonElement = document.getElementById('edit-player-two-button');
const overlayCancelButton = document.getElementById('cancel-config-button');
const startNewGameButton = document.getElementById('start-new-game-button');
const gameBoardElements = document.querySelectorAll('#game-board li');

//game board
const gameBoard = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');

//event listeners for the buttons to edit player info
editPlayerOneButtonElement.addEventListener('click', openPlayerConfig);
editPlayerTwoButtonElement.addEventListener('click', openPlayerConfig);
overlayCancelButton.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig); //submit is a built in browser event like 'click'

//starting a new game
startNewGameButton.addEventListener('click', startNewGame);

//adds event listeners for all gameboard list items
for (const gameBoardElement of gameBoardElements) {
    gameBoardElement.addEventListener('click', selectGameField);
};