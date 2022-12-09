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
    event.target.textContent = players[activePlayer].symbol; // event.target gets access to the field in which the event occurred, and the [activePlayer] accesses that index number. So players[0], and you can just change the value to access player 2
    event.target.classList.add('disabled'); //so it looks like you can't click again once clicked.
    switchPlayer();
};