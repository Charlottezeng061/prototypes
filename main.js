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


function randomNumber(soundArray){

    // Math.random creates a random number
    // between 0 and 1

    let randomValue =
        Math.random();

    // multiply it by the number of sounds
    // then Math.floor changes it into
    // a whole number such as 0, 1, 2 or 3

    let randomSelector =
        Math.floor(
            soundArray.length * randomValue
        );


    return randomSelector;

}



///////////// Generate Soundtrack

function generateSoundtrack(){


    ///////////// Randomize Genre

    // only generate a new genre sound
    // when the genre lock is not checked

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


        // Sci-F
        if(genreSelect.value === "Sci-Fi"){

            let number =
                randomNumber(sciFiSounds);

            genreAudio.src =
                sciFiSounds[number];

            genreResult.textContent =
                sciFiNames[number];
        }

    }


    ///////////// Randomise Atmosphere

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