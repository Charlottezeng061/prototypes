/////////// Audio Arrays

// JavaScript arrays are used to store the four sounds
// available for each genre and atmosphere.
// Array tutorials:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays
// https://www.w3schools.com/js/js_arrays.asp
let fantasySounds = [
    "assets/audio/genre/fantasy1.mp3",
    "assets/audio/genre/fantasy2.mp3",
    "assets/audio/genre/fantasy3.mp3",
    "assets/audio/genre/fantasy4.mp3"
];

let mysterySounds = [
    "assets/audio/genre/mystery1.mp3",
    "assets/audio/genre/mystery2.mp3",
    "assets/audio/genre/mystery3.mp3",
    "assets/audio/genre/mystery4.mp3"
];

let romanceSounds = [
    "assets/audio/genre/romance1.mp3",
    "assets/audio/genre/romance2.mp3",
    "assets/audio/genre/romance3.mp3",
    "assets/audio/genre/romance4.mp3"
];

let sciFiSounds = [
    "assets/audio/genre/sci-fi1.mp3",
    "assets/audio/genre/sci-fi2.mp3",
    "assets/audio/genre/sci-fi3.mp3",
    "assets/audio/genre/sci-fi4.mp3"
];


let calmSounds = [
    "assets/audio/atmosphere/calm1.mp3",
    "assets/audio/atmosphere/calm2.mp3",
    "assets/audio/atmosphere/calm3.mp3",
    "assets/audio/atmosphere/calm4.mp3"
];

let darkSounds = [
    "assets/audio/atmosphere/dark1.mp3",
    "assets/audio/atmosphere/dark2.mp3",
    "assets/audio/atmosphere/dark3.mp3",
    "assets/audio/atmosphere/dark4.mp3"
];

let magicalSounds = [
    "assets/audio/atmosphere/magical1.mp3",
    "assets/audio/atmosphere/magical2.mp3",
    "assets/audio/atmosphere/magical3.mp3",
    "assets/audio/atmosphere/magical4.mp3"
];

let nostalgicSounds = [
    "assets/audio/atmosphere/nostalgic1.mp3",
    "assets/audio/atmosphere/nostalgic2.mp3",
    "assets/audio/atmosphere/nostalgic3.mp3",
    "assets/audio/atmosphere/nostalgic4.mp3"
];

///////////// Audio Names

// The name arrays use the same order as the audio arrays.
// This means the same random number can be used to select both the audio file and its correct name.

// Genre names
let fantasyNames = [
    "Fantasy Piano",
    "Lute",
    "Fantasy Ambience",
    "Soft Fantasy"
];

let mysteryNames = [
    "Mystery Ambience",
    "Suspense Strings",
    "Soft Mystery",
    "Bright Mystery"
];

let romanceNames = [
    "Soft Piano",
    "Soft Strings",
    "Lo-fi Music",
    "String Ambience"
];

let sciFiNames = [
    "Space Ambience",
    "Synth",
    "Sci-Fi Drone",
    "Space Travel"
];


// Atmosphere names
let calmNames = [
    "Rain",
    "Forest",
    "Ocean",
    "Fireplace"
];

let darkNames = [
    "Dark Drone",
    "Dark Wind",
    "Deep Drone",
    "Cave"
];

let magicalNames = [
    "Magical Ambience",
    "Chimes",
    "Shimmer",
    "Music Box"
];

let nostalgicNames = [
    "Lo-fi Piano",
    "Nostalgic Piano",
    "Old Music Box",
    "Old Clock"
];

///////////// Select Controls

// select input method adapted from the class input-event demo
const genreSelect =
    document.getElementById("genre-select");

const atmosphereSelect =
    document.getElementById("atmosphere-select");


///////////// Lock Checkboxes

// checkbox values are checked using .checked
// true means the sound is locked
// false means the sound can be randomised
const genreLock =
    document.getElementById("genre-lock");

const atmosphereLock =
    document.getElementById("atmosphere-lock");


///////////// Generated Results
const genreResult =
    document.getElementById("genre-result");

const atmosphereResult =
    document.getElementById("atmosphere-result");


///////////// Audio

// HTML audio play and pause methods based on
// class exercises and MDN.
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause
const genreAudio =
    document.getElementById("genre-audio");

const atmosphereAudio =
    document.getElementById("atmosphere-audio");

// set a comfortable default volume
genreAudio.volume = 0.5;
atmosphereAudio.volume = 0.5;

/////////// Buttons
const randomButton =
    document.getElementById("random-button");

const playPauseButton =
    document.getElementById("play-pause-button");

const playPauseIcon =
    document.getElementById("play-pause-icon");

let isPlaying = false;

const repeatButton =
    document.getElementById("repeat-button");
let isRepeat = false;

const statusText =
    document.getElementById("status");



///////////// Random Number
// random method adapted from the class extended techniques demo
// Math.random reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomNumber(soundArray){
    let randomValue =
        Math.random();

    let randomSelector =
        Math.floor(
            soundArray.length * randomValue
        );
    return randomSelector;
}


///////////// Generate Soundtrack
function generateSoundtrack(){

//////////Randomize Genre

// Create New Mix generates a new random combination
    if(genreLock.checked === false){

    // Fantasy
    if(genreSelect.value === "Fantasy"){
        let number =
         randomNumber(fantasySounds);

    // use the random number
    // to choose the audio file

        genreAudio.src =
            fantasySounds[number];

    // use the same number
    // to show the matching name
    genreResult.textContent =
            fantasyNames[number];
    }

    // Mystery
    if(genreSelect.value === "Mystery"){
     let number =
        randomNumber(mysterySounds);
        genreAudio.src =
            mysterySounds[number];
            genreResult.textContent =
                mysteryNames[number];
        }

    // Romance
    if(genreSelect.value === "Romance"){
      let number =
            randomNumber(romanceSounds);
            genreAudio.src =
                romanceSounds[number];
            genreResult.textContent =
                romanceNames[number];
        }

    // Sci-Fi
    if(genreSelect.value === "Sci-Fi"){
     let number =
        randomNumber(sciFiSounds);
         genreAudio.src =
            sciFiSounds[number];
        genreResult.textContent =
            sciFiNames[number];
        }
    }


    ///////////// Randomize Atmosphere

    // only generate a new atmosphere sound
    // when the atmosphere lock is not checked
    if(atmosphereLock.checked === false){

        // Calm
        if(atmosphereSelect.value === "Calm"){

            let number =
                randomNumber(calmSounds);

            atmosphereAudio.src =
                calmSounds[number];

            atmosphereResult.textContent =
                calmNames[number];
        }

        // Dark
        if(atmosphereSelect.value === "Dark"){

            let number =
                randomNumber(darkSounds);

            atmosphereAudio.src =
                darkSounds[number];

            atmosphereResult.textContent =
                darkNames[number];
        }

        // Magical
        if(atmosphereSelect.value === "Magical"){

            let number =
                randomNumber(magicalSounds);

            atmosphereAudio.src =
                magicalSounds[number];

            atmosphereResult.textContent =
                magicalNames[number];

        }

        // Nostalgic
        if(atmosphereSelect.value === "Nostalgic"){

            let number =
                randomNumber(nostalgicSounds);

            atmosphereAudio.src =
                nostalgicSounds[number];

            atmosphereResult.textContent =
                nostalgicNames[number];
        }
    }
    // update status
    statusText.textContent =
        "New soundtrack generated.";}

//////////// Start Soundtrack

///////////// Play and Pause Soundtrack

function togglePlayPause(){

    if(isPlaying === false){

        // play both audio layers
        genreAudio.play();
        atmosphereAudio.play();

        playPauseIcon.src =
            "assets/icons/pause.png";

        playPauseButton.setAttribute(
            "aria-label",
            "Pause"
        );

        statusText.textContent =
            "Soundtrack playing.";

        isPlaying = true;
    } else {

        // pause both audio layers
        genreAudio.pause();
        atmosphereAudio.pause();

        playPauseIcon.src =
            "assets/icons/play.png";

        playPauseButton.setAttribute(
            "aria-label",
            "Play"
        );

        statusText.textContent =
            "Soundtrack paused.";

        isPlaying = false;
    }
}

///////////// Repeat Soundtrack

// repeat both audio layers when repeat is turned on
function toggleRepeat(){

    isRepeat = !isRepeat;

    genreAudio.loop =
        isRepeat;

    atmosphereAudio.loop =
        isRepeat;

    repeatButton.setAttribute(
        "aria-pressed",
        isRepeat
    );
}

///////////// Button Event Listeners

// button event method adapted from class exercises
randomButton.addEventListener(
    "click",
    generateSoundtrack
);

playPauseButton.addEventListener(
    "click",
    togglePlayPause
);

repeatButton.addEventListener(
    "click",
    toggleRepeat
);

