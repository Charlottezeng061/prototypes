///////////// Genre Select

// adapted from the Select example in the class input-event demo
// https://github.com/rmit-idad-2650-wed/input-event-demos

const genreSelect =
    document.getElementById("genre-select");

const playingGenre =
    document.getElementById("playing-genre");

genreSelect.addEventListener("change", (e) => {

    playingGenre.textContent =
        e.target.value;

});



///////////// Atmosphere Select

// adapted from the Select example in the class input-event demo
// https://github.com/rmit-idad-2650-wed/input-event-demos

const atmosphereSelect =
    document.getElementById("atmosphere-select");

const playingAtmosphere =
    document.getElementById("playing-atmosphere");

atmosphereSelect.addEventListener("change", (e) => {

    playingAtmosphere.textContent =
        e.target.value;

});



///////////// Audio

// HTML audio play and pause methods based on class exercise and MDN
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause

const genreAudio =
    document.getElementById("genre-audio");

const atmosphereAudio =
    document.getElementById("atmosphere-audio");



///////////// Audio Arrays

let fantasySounds = [
    "./assets/audio/genre/fantasy1.wav",
    "./assets/audio/genre/fantasy2.wav",
    "./assets/audio/genre/fantasy3.wav",
    "./assets/audio/genre/fantasy4.wav"
];

let mysterySounds = [
    "./assets/audio/genre/mystery1.wav",
    "./assets/audio/genre/mystery2.wav",
    "./assets/audio/genre/mystery3.wav",
    "./assets/audio/genre/mystery4.wav"
];

let romanceSounds = [
    "./assets/audio/genre/romance1.wav",
    "./assets/audio/genre/romance2.wav",
    "./assets/audio/genre/romance3.wav",
    "./assets/audio/genre/romance4.wav"
];

let sciFiSounds = [
    "./assets/audio/genre/sci-fi1.wav",
    "./assets/audio/genre/sci-fi2.wav",
    "./assets/audio/genre/sci-fi3.wav",
    "./assets/audio/genre/sci-fi4.wav"
];


let calmSounds = [
    "./assets/audio/atmosphere/calm1.wav",
    "./assets/audio/atmosphere/calm2.wav",
    "./assets/audio/atmosphere/calm3.wav",
    "./assets/audio/atmosphere/calm4.wav"
];

let darkSounds = [
    "./assets/audio/atmosphere/dark1.wav",
    "./assets/audio/atmosphere/dark2.wav",
    "./assets/audio/atmosphere/dark3.wav",
    "./assets/audio/atmosphere/dark4.wav"
];

let magicalSounds = [
    "./assets/audio/atmosphere/magical1.wav",
    "./assets/audio/atmosphere/magical2.wav",
    "./assets/audio/atmosphere/magical3.wav",
    "./assets/audio/atmosphere/magical4.wav"
];

let nostalgicSounds = [
    "./assets/audio/atmosphere/nostalgic1.wav",
    "./assets/audio/atmosphere/nostalgic2.wav",
    "./assets/audio/atmosphere/nostalgic3.wav",
    "./assets/audio/atmosphere/nostalgic4.wav"
];

///////////// Random Sound

// random method adapted from the class extended techniques demo
// https://github.com/rmit-idad-2650-wed/extended-techniques-demos
// Math.random reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomSound(soundArray){

    let randomNumber =
        Math.random();

    let randomSelector =
        Math.floor(
            soundArray.length * randomNumber
        );

    return soundArray[randomSelector];

}



///////////// Genre Volume Range

// adapted from the Range example in the class input-event demo
// HTMLMediaElement.volume reference:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume

const genreVolume =
    document.getElementById("genre-volume");

const genreVolumeValue =
    document.getElementById("genre-volume-value");

const playingGenreVolume =
    document.getElementById("playing-genre-volume");


genreVolume.addEventListener("input", (e) => {

    genreVolumeValue.textContent =
        e.target.value + "%";

    playingGenreVolume.textContent =
        e.target.value + "%";

    let volume =
        e.target.value / 100;

    genreAudio.volume =
        volume;

});


///////////// Atmosphere Volume Range

// adapted from the Range example in the class input-event demo

const atmosphereVolume =
    document.getElementById("atmosphere-volume");

const atmosphereVolumeValue =
    document.getElementById("atmosphere-volume-value");

const playingAtmosphereVolume =
    document.getElementById("playing-atmosphere-volume");


atmosphereVolume.addEventListener("input", (e) => {

    atmosphereVolumeValue.textContent =
        e.target.value + "%";

    playingAtmosphereVolume.textContent =
        e.target.value + "%";

    let volume =
        e.target.value / 100;

    atmosphereAudio.volume =
        volume;

});



///////////// Default Volume

genreAudio.volume =
    0.6;

atmosphereAudio.volume =
    0.4;



///////////// Buttons

const startButton =
    document.getElementById("start-button");

const pauseButton =
    document.getElementById("pause-button");

const resetButton =
    document.getElementById("reset-button");

const statusText =
    document.getElementById("status");


///////////// Start Soundtrack

function startSoundtrack(){

    // pause previous soundtrack

    genreAudio.pause();
    atmosphereAudio.pause();



    // randomly select one sound
    // from the selected genre

    if(genreSelect.value === "Fantasy"){

        genreAudio.src =
            randomSound(fantasySounds);

    }


    if(genreSelect.value === "Mystery"){

        genreAudio.src =
            randomSound(mysterySounds);

    }


    if(genreSelect.value === "Romance"){

        genreAudio.src =
            randomSound(romanceSounds);

    }


    if(genreSelect.value === "Sci-Fi"){

        genreAudio.src =
            randomSound(sciFiSounds);

    }



    // randomly select one sound
    // from the selected atmosphere

    if(atmosphereSelect.value === "Calm"){

        atmosphereAudio.src =
            randomSound(calmSounds);

    }


    if(atmosphereSelect.value === "Dark"){

        atmosphereAudio.src =
            randomSound(darkSounds);

    }


    if(atmosphereSelect.value === "Magical"){

        atmosphereAudio.src =
            randomSound(magicalSounds);

    }


    if(atmosphereSelect.value === "Nostalgic"){

        atmosphereAudio.src =
            randomSound(nostalgicSounds);

    }



    // set current volume

    genreAudio.volume =
        genreVolume.value / 100;

    atmosphereAudio.volume =
        atmosphereVolume.value / 100;



    // play both layers

    genreAudio.play();
    atmosphereAudio.play();


    // update Now Playing

    playingGenre.textContent =
        genreSelect.value;

    playingAtmosphere.textContent =
        atmosphereSelect.value;

    playingGenreVolume.textContent =
        genreVolume.value + "%";

    playingAtmosphereVolume.textContent =
        atmosphereVolume.value + "%";


    statusText.textContent =
        "Soundtrack playing.";

    pauseButton.disabled =
        false;

}



///////////// Pause Soundtrack

function pauseSoundtrack(){

    genreAudio.pause();

    atmosphereAudio.pause();

    statusText.textContent =
        "Soundtrack paused.";

}



///////////// Reset

// currentTime reference from MDN
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime

function resetSoundtrack(){

    // pause audio

    genreAudio.pause();
    atmosphereAudio.pause();


    // return audio to beginning

    genreAudio.currentTime =0;

    atmosphereAudio.currentTime =0;


    // reset dropdowns

    genreSelect.value ="Fantasy";

    atmosphereSelect.value ="Calm";


    // reset sliders

    genreVolume.value = 60;

    atmosphereVolume.value = 40;


    genreVolumeValue.textContent = "60%";

    atmosphereVolumeValue.textContent = "40%";


    // reset actual audio volume

    genreAudio.volume = 0.6;

    atmosphereAudio.volume = 0.4;


    // reset Now Playing

    playingGenre.textContent =
        "—";

    playingAtmosphere.textContent =
        "—";

    playingGenreVolume.textContent =
        "—";

    playingAtmosphereVolume.textContent =
        "—";


    // reset status

    statusText.textContent =
     "Choose your sounds, then start the soundtrack.";

    pauseButton.disabled =
        true;

}



///////////// Button Event Listeners

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