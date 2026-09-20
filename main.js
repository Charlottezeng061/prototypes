///////////// Genre Radio
// radio input method adapted from class input-event demo

const fantasyRadio = document.getElementById("fantasy");
const mysteryRadio = document.getElementById("mystery");
const romanceRadio = document.getElementById("romance");
const sciFiRadio = document.getElementById("sci-fi");
const genreOutput = document.getElementById("genreOutput");
const playingGenre = document.getElementById("playing-genre");

function listGenreSelection(e){
    genreOutput.textContent = e.target.value;
    playingGenre.textContent = e.target.value;
}

fantasyRadio.addEventListener("input", listGenreSelection);
mysteryRadio.addEventListener("input", listGenreSelection);
romanceRadio.addEventListener("input", listGenreSelection);
sciFiRadio.addEventListener("input", listGenreSelection);


///////////// Atmosphere Radio
// radio input method adapted from class input-event demo
// https://github.com/rmit-idad-2650-wed/input-event-demos

const calmRadio = document.getElementById("calm");
const darkRadio = document.getElementById("dark");
const magicalRadio = document.getElementById("magical");
const nostalgicRadio = document.getElementById("nostalgic");
const atmosphereOutput = document.getElementById("atmosphereOutput");
const playingAtmosphere = document.getElementById("playing-atmosphere");

function listAtmosphereSelection(e){
    atmosphereOutput.textContent = e.target.value;
    playingAtmosphere.textContent = e.target.value;
}

calmRadio.addEventListener("input", listAtmosphereSelection);
darkRadio.addEventListener("input", listAtmosphereSelection);
magicalRadio.addEventListener("input", listAtmosphereSelection);
nostalgicRadio.addEventListener("input", listAtmosphereSelection);

///////////// Audio
// HTML audio play and pause methods based on class exercise and MDN
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause

const genreAudio =
    document.getElementById("genre-audio");

const atmosphereAudio =
    document.getElementById("atmosphere-audio");


///////////// Audio Arrays
// each category contains four possible sounds
// one sound will be randomly selected when the soundtrack starts

let fantasySounds = [
    "assets/audio/genre/fantasy1.wav",
    "assets/audio/genre/fantasy2.wav",
    "assets/audio/genre/fantasy3.wav",
    "assets/audio/genre/fantasy4.wav"
];

let mysterySounds = [
    "assets/audio/genre/mystery1.wav",
    "assets/audio/genre/mystery2.wav",
    "assets/audio/genre/mystery3.wav",
    "assets/audio/genre/mystery4.wav"
];

let romanceSounds = [
    "assets/audio/genre/romance1.wav",
    "assets/audio/genre/romance2.wav",
    "assets/audio/genre/romance3.wav",
    "assets/audio/genre/romance4.wav"
];

let sciFiSounds = [
    "assets/audio/genre/sci-fi1.wav",
    "assets/audio/genre/sci-fi2.wav",
    "assets/audio/genre/sci-fi3.wav",
    "assets/audio/genre/sci-fi4.wav"
];


let calmSounds = [
    "assets/audio/atmosphere/calm1.wav",
    "assets/audio/atmosphere/calm2.wav",
    "assets/audio/atmosphere/calm3.wav",
    "assets/audio/atmosphere/calm4.wav"
];

let darkSounds = [
    "assets/audio/atmosphere/dark1.wav",
    "assets/audio/atmosphere/dark2.wav",
    "assets/audio/atmosphere/dark3.wav",
    "assets/audio/atmosphere/dark4.wav"
];

let magicalSounds = [
    "assets/audio/atmosphere/magical1.wav",
    "assets/audio/atmosphere/magical2.wav",
    "assets/audio/atmosphere/magical3.wav",
    "assets/audio/atmosphere/magical4.wav"
];

let nostalgicSounds = [
    "assets/audio/atmosphere/nostalgic1.wav",
    "assets/audio/atmosphere/nostalgic2.wav",
    "assets/audio/atmosphere/nostalgic3.wav",
    "assets/audio/atmosphere/nostalgic4.wav"
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



///////////// Default Volume
// default intensity is 50%

genreAudio.volume = 0.5;
atmosphereAudio.volume = 0.5;


///////////// Intensity Range

// adapted from the Range example in the class input-event demo
// I added the slider value to control the volume of the audio
// HTMLMediaElement.volume reference:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume

const intensityRange =
    document.getElementById("intensity");

const intensityOutputText =
    document.getElementById("intensity-value");

const playingIntensity =
    document.getElementById("playing-intensity");


intensityRange.addEventListener("input", (e) => {

    // show percentage

    intensityOutputText.textContent =
        e.target.value + "%";

    playingIntensity.textContent =
        e.target.value + "%";


    // convert 0-100 into 0-1

    let volume =
        e.target.value / 100;


    // change both audio layers

    genreAudio.volume = volume;

    atmosphereAudio.volume = volume

});



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


    if(fantasyRadio.checked === true){

        genreAudio.src =
            randomSound(fantasySounds);

        playingGenre.textContent =
            "Fantasy";

    }


    if(mysteryRadio.checked === true){

        genreAudio.src =
            randomSound(mysterySounds);

        playingGenre.textContent =
            "Mystery";

    }


    if(romanceRadio.checked === true){

        genreAudio.src =
            randomSound(romanceSounds);

        playingGenre.textContent =
            "Romance";

    }


    if(sciFiRadio.checked === true){

        genreAudio.src =
            randomSound(sciFiSounds);

        playingGenre.textContent =
            "Sci-Fi";

    }



    // randomly select one sound
    // from the selected atmosphere


    if(calmRadio.checked === true){

        atmosphereAudio.src =
            randomSound(calmSounds);

        playingAtmosphere.textContent =
            "Calm";

    }


    if(darkRadio.checked === true){

        atmosphereAudio.src =
            randomSound(darkSounds);

        playingAtmosphere.textContent =
            "Dark";

    }


    if(magicalRadio.checked === true){

        atmosphereAudio.src =
            randomSound(magicalSounds);

        playingAtmosphere.textContent =
            "Magical";

    }


    if(nostalgicRadio.checked === true){

        atmosphereAudio.src =
            randomSound(nostalgicSounds);

        playingAtmosphere.textContent =
            "Nostalgic";

    }



    // get current intensity

    let volume =
        intensityRange.value / 100;

    genreAudio.volume =
        volume;

    atmosphereAudio.volume =
        volume;



    // play both random sounds

    genreAudio.play();

    atmosphereAudio.play();



    // update Now Playing

    playingIntensity.textContent =
        intensityRange.value + "%";

    statusText.textContent =
        "Soundtrack playing."

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

    genreAudio.currentTime = 0;
    atmosphereAudio.currentTime = 0;


    // reset genre

    fantasyRadio.checked = true;
    mysteryRadio.checked = false;
    romanceRadio.checked = false;
    sciFiRadio.checked = false;


    // reset atmosphere

    calmRadio.checked = true;
    darkRadio.checked = false;
    magicalRadio.checked = false;
    nostalgicRadio.checked = false;


    // reset intensity

    intensityRange.value =
        50;

    intensityOutputText.textContent =
        "50%";


    // reset audio volume

    genreAudio.volume =
        0.5;

    atmosphereAudio.volume =
        0.5;


    // reset selection outputs

    genreOutput.textContent =
        "";

    atmosphereOutput.textContent =
        "";


    // reset Now Playing

    playingGenre.textContent =
        "—";

    playingAtmosphere.textContent =
        "—";

    playingIntensity.textContent =
        "—";


    // reset status

    statusText.textContent =
        "Make your choices, then start the soundtrack."
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