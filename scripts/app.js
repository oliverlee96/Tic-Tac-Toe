//responsible for initialising the app and storing intital variables

//overlay and backdrop elements
const configOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const form = document.querySelector('form');

//button elements
const editPlayerOneButtonElement = document.getElementById('edit-player-one-button');
const editPlayerTwoButtonElement = document.getElementById('edit-player-two-button');
const overlayCancelButton = document.getElementById('cancel-config-button');

//event listeners for the buttons to edit player info
editPlayerOneButtonElement.addEventListener('click', openPlayerConfig);
editPlayerTwoButtonElement.addEventListener('click', openPlayerConfig);
overlayCancelButton.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

form.addEventListener('submit', savePlayerConfig) //submit is a built in browser event like 'click'