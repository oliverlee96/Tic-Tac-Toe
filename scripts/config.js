//responsible for all the logic related to configuring players, opening and closing overlays, and taking, validating and storing user input

function openPlayerConfig() {
    configOverlay.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    configOverlay.style.display = "none";
    backdropElement.style.display = "none";
    form.firstElementChild.classList.remove('error');
    configErrorText.textContent = '';
}

function savePlayerConfig(event) { 
    event.preventDefault(); //prevents the browser default behaviour which is to send content to the server
    const formData = new FormData(event.target); //instantiating an object based on an object blueprint, built in JS function
    //event.target points to the html element responsible for the event, in this case the form
    const enteredPlayerName = formData.get('playername').trim(); //gets rid of the whitespace infront and after the string, but not between it. Will also remove if the whole string is just whitespace.

    if (!enteredPlayerName) { //i.e. false
        event.target.firstElementChild.classList.add('error');
        configErrorText.textContent = "Please enter a valid name";
        configErrorText.classList.add('error')
        return; //When you execute return you stop the execution of the function which called it
    };


}