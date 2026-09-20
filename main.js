/////////// Audio Arrays

// JavaScript arrays are used to store the four sounds
// available for each genre and atmosphere.
// Array tutorials:
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays
// https://www.w3schools.com/js/js_arrays.asp


// Genre sounds
let fantasySounds = [
    "../assets/audio/genre/fantasy1.wav",
    "../assets/audio/genre/fantasy2.wav",
    "../assets/audio/genre/fantasy3.wav",
    "../assets/audio/genre/fantasy4.wav"
];

let mysterySounds = [
    "../assets/audio/genre/mystery1.wav",
    "../assets/audio/genre/mystery2.wav",
    "../assets/audio/genre/mystery3.wav",
    "../assets/audio/genre/mystery4.wav"
];

let romanceSounds = [
    "../assets/audio/genre/romance1.wav",
    "../assets/audio/genre/romance2.wav",
    "../assets/audio/genre/romance3.wav",
    "../assets/audio/genre/romance4.wav"
];

let sciFiSounds = [
    "../assets/audio/genre/sci-fi1.wav",
    "../assets/audio/genre/sci-fi2.wav",
    "../assets/audio/genre/sci-fi3.wav",
    "../assets/audio/genre/sci-fi4.wav"
];


// Atmosphere sounds

let calmSounds = [
    "../assets/audio/atmosphere/calm1.wav",
    "../assets/audio/atmosphere/calm2.wav",
    "../assets/audio/atmosphere/calm3.wav",
    "../assets/audio/atmosphere/calm4.wav"
];

let darkSounds = [
    "../assets/audio/atmosphere/dark1.wav",
    "../assets/audio/atmosphere/dark2.wav",
    "../assets/audio/atmosphere/dark3.wav",
    "../assets/audio/atmosphere/dark4.wav"
];

let magicalSounds = [
    "../assets/audio/atmosphere/magical1.wav",
    "../assets/audio/atmosphere/magical2.wav",
    "../assets/audio/atmosphere/magical3.wav",
    "../assets/audio/atmosphere/magical4.wav"
];

let nostalgicSounds = [
    "../assets/audio/atmosphere/nostalgic1.wav",
    "../assets/audio/atmosphere/nostalgic2.wav",
    "../assets/audio/atmosphere/nostalgic3.wav",
    "../assets/audio/atmosphere/nostalgic4.wav"
];

///////////// Selected Sounds

// default selected sounds

let selectedGenreSound =
    fantasySounds[0];

let selectedAtmosphereSound =
    calmSounds[0];

let selectedGenreName =
    "Piano & Strings";

let selectedAtmosphereName =
    "Rain";

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

const startButton =
    document.getElementById("start-button");

const pauseButton =
    document.getElementById("pause-button");

const resetButton =
    document.getElementById("reset-button");

const statusText =
    document.getElementById("status");



///////////// Random Number
// random method adapted from the class extended techniques demo
// Math.random reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random


// pause previous soundtrack
genreAudio.pause();
atmosphereAudio.pause();

// use the sounds selected by the user

genreAudio.src =
    selectedGenreSound;

atmosphereAudio.src =
    selectedAtmosphereSound;

playingGenre.textContent =
    selectedGenreName;

playingAtmosphere.textContent =
    selectedAtmosphereName;
    // get current intensity


        // Dark
        if(atmosphereSelect.value === "Dark"){

            let number =
                randomNumber(darkSounds);

            atmosphereAudio.src =
                darkSounds[number];

    // play both random sounds


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
        "New soundtrack generated.";





//////////// Start Soundtrack

function startSoundtrack(){

    // play the generated genre
    // and atmosphere together

    genreAudio.play();
    atmosphereAudio.play();
    statusText.textContent =
        "Soundtrack playing.";
}



///////////// Pause Soundtrack

function pauseSoundtrack(){

    genreAudio.pause();
    atmosphereAudio.pause();
    statusText.textContent =
        "Soundtrack paused.";

}



///////////// Reset

// currentTime reference from MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime

function resetSoundtrack(){
    // pause both audio layers

    genreAudio.pause();
    atmosphereAudio.pause();



    // return audio to the beginning

    genreAudio.currentTime = 0;
    atmosphereAudio.currentTime = 0;



    // remove generated audio

    genreAudio.src =
        "";
    atmosphereAudio.src =
        "";



    // reset dropdowns

    genreSelect.value = "Fantasy";
    atmosphereSelect.value = "Calm";


    // unlock both sounds

    genreLock.checked = false;
    atmosphereLock.checked = false;



    // reset generated names

    genreResult.textContent = "—";
    atmosphereResult.textContent = "—";

    // reset volume
    genreAudio.volume = 0.5;
    atmosphereAudio.volume = 0.5;



    // reset status
    statusText.textContent =
        "Choose your sounds, then generate a soundtrack."
}

///////////// Button Event Listeners

// button event method adapted from class exercises
// Randomize Again uses the same function
// as Generate Soundtrack

randomButton.addEventListener(
    "click",
    generateSoundtrack
);


startButton.addEventListener(
    "click",
    startSoundtrack
);


pauseButton.addEventListener(
    "click",
    pauseSoundtrack
);


resetButton.addEventListener(
    "click",
    resetSoundtrack
);