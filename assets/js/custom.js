
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    //stop the game if pressed Escape
    if (playerPressed === "Escape") {
        gameOver();
    }

    // get the expected key to  press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        const currentScore = getElementValueById("current-score");
        const updatedScore = currentScore + 1;
        setElementValueById("current-score", updatedScore);

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {

        const currentLife = getElementValueById("current-life");
        const updatedLife = currentLife - 1;
        setElementValueById("current-life", updatedLife);

        if (updatedLife === 0) {
            gameOver();
        }
    }
}
// capture keyboard key press
document.addEventListener("keyup", handleKeyboardKeyUpEvent)

function continueGame() {
    // step 1 - generate a random alphabet
    const alphabet = getRandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function play() {
    //hide everything and show only the playground
    hideElementById("home-screen");
    hideElementById("final-score");
    showElementById("play-ground");

    //reset score and life
    setElementValueById("current-life", 5);
    setElementValueById("current-score", 0);

    continueGame();
}

function gameOver() {
    hideElementById("play-ground");
    showElementById("final-score");

    //update final score
    const lastScore = getElementValueById("current-score");
    setElementValueById("last-score", lastScore);

    //clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById("current-alphabet");
    removeBackgroundColorById(currentAlphabet);

}