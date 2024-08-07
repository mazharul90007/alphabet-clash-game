// function play(){
//     // hide home screen
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     // show playground screen
//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove("hidden");
// }
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