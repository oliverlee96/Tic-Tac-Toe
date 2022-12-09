//responsible for the game logic

//When you start a new game, checks if both player names are added and displays game board
function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set the player names for both players!') //TODO: Create custom modal for this warning. Specify which player name isn't set.

        return; //stops executing function 
    };
    activePlayerName.textContent = players[activePlayer].name;
    gameBoard.style.display = 'block';
};

function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;

};

function selectGameField(event) {

    // event.target gets access to the field in which the event occurred,
    const selectedField = event.target;

    //[activePlayer] accesses that index number. So players[0], and you can just change the value to access player 2
    selectedField.textContent = players[activePlayer].symbol; 

    //so it looks like you can't click again once clicked.
    selectedField.classList.add('disabled'); 

    //this performs a maths operation so converts result to number, and gets us the correct index of the gameData array
    const selectedColumn = selectedField.dataset.col -1; 
    const selectedRow = selectedField.dataset.row -1;

    if (gameData [selectedRow][selectedColumn] > 0) {
        alert('Please select an empty square') //TODO: Add seperate modal for this
        return;
    }

    //accessing the arrays within the array so you need two
    gameData[selectedRow][selectedColumn] = activePlayer +1; 
    console.log(gameData);

    switchPlayer();
};