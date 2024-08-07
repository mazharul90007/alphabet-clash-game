
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    // get the expected key to  press
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not
    if(playerPressed === expectedAlphabet){
        console.log("you got a point");
        console.log("you have pressed correctly", expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else{
        console.log("you missed and lost a life");
    }
}
// capture keyboard key press
document.addEventListener("keyup", handleKeyboardKeyUpEvent)

function continueGame(){
    // step 1 - generate a random alphabet
    const alphabet = getRandomAlphabet();

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById("current-alphabet");
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);


}


function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}