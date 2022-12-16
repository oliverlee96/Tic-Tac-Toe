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

    const winner = checkForGameOver();
    console.log(winner);

    currentRound++ //adds one to currentRound value
    switchPlayer();
};

function checkForGameOver() {

    //checking rows for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
        return gameData[i][0];
        }
    };

    //checking columns for equality
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i]
        ) {
        return gameData[0][i];
        }
    };

    //checking diagonal: top left to bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
        ) {
        return gameData[0][0];
        }

    //checking diagonal: top right to bottom left
    if (
        gameData[0][2] > 0 &&
        gameData[0][2] === gameData[1][1] &&
        gameData[1][1] === gameData[2][0]
        ) {
        return gameData[0][2];
        }

    if (currentRound === 9) {
        return -1;
    }

    return 0;
};

