//responsible for all the logic related to configuring players, opening and closing overlays, and taking, validating and storing user input

function openPlayerConfig() {
    configOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    configOverlay.style.display = "none";
    backdropElement.style.display = "none";
}

function savePlayerConfig(event) { 
    event.preventDefault(); //prevents the browser default behaviour which is to send content to the server
    const formData = new FormData(event.target); //instantiating an object based on an object blueprint, built in JS function
    //event.target points to the html element responsible for the event, in this case the form
    const enteredPlayerName = formData.get('playername');
    console.log(enteredPlayerName);
}