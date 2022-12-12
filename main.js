const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumnSlider = document.querySelector(".volumn-slider input"),
keyToggler = document.querySelector(".keyCheckbox input");

// The Key tunes

let allKeys = [],
audio = new Audio("tunes/a.wav"); // by default , audio et is "a" tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing the audio src bassed ont the pressed  
    var playPromise = audio.play();
 
  if (playPromise !== undefined) {
    playPromise.then(_ => {
      // Automatic playback started!
      // Show playing UI.
      // We can now safely pause video...
      audio.pause();
    })
    .catch(error => {
      // Auto-play was prevented
      // Show paused UI.
    });
  }
    audio.pause();

    // To know which key get clicked adding the active class
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active"); // adding the class to the clicked key element
    setTimeout(() =>{
        clickedKey.classList.remove("active");
    },150);
}

// Click event play tune
pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);
    // Calling playtune function with passing data-key value as an argument 
    key.addEventListener("click",() => playTune(key.dataset.key));
    
});

// Keybord event play tune
const keyBoardTune = (keyboad) => {
    // if the pressed is in the allKeys arrays, only then playTune function will call
    if(allKeys.includes(keyboad.key)) playTune(keyboad.key);
}
document.addEventListener("keydown",keyBoardTune);

// End of Key Tunes


// The Volumn level controler
const handleVolumn = (slider) => {
    audio.volume = slider.target.value; // passing the range slider value as an audio volumn
}

volumnSlider.addEventListener("input",handleVolumn);
// End Volumn level controler

// Toggler to show keys
const showHidekey = () => {
    // toggling hide from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
keyToggler.addEventListener("click",showHidekey);
