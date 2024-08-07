
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    // get the expected key to  press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        // update score
        const currentScoreElement = document.getElementById("current-score");
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        // increase score
        const newScore = currentScore + 1;

        // show the updated score
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
    //    get the current life number
        const currentLifeElement = document.getElementById("current-life");
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

    // reduce the life count
        const newLife = currentLife - 1;

    // display the updated life count
        currentLifeElement.innerText = newLife;
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
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}