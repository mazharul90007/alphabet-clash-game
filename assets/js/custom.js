// function play(){
//     // hide home screen
//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add('hidden');

//     // show playground screen
//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove("hidden");
// }

function play(){
    hideElementById("home-screen");
    showElementById("play-ground");
}