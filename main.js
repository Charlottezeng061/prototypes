///////////// Genre Radio
// radio input method adapted from class input-event demo

const fantasyRadio = document.getElementById("fantasy");
const mysteryRadio = document.getElementById("mystery");
const romanceRadio = document.getElementById("romance");
const sciFiRadio = document.getElementById("sci-fi");
const playingGenre = document.getElementById("playing-genre");

function listGenreSelection(e){
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
const playingAtmosphere = document.getElementById("playing-atmosphere");

function listAtmosphereSelection(e){
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
"https://archive.org/download/audio-20260925-genre-atmosphere/fantasy1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/fantasy2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/fantasy3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/fantasy4.mp3"
];

let mysterySounds = [
"https://archive.org/download/audio-20260925-genre-atmosphere/mystery1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/mystery2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/mystery3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/mystery4.mp3"
];

let romanceSounds = [
"https://archive.org/download/audio-20260925-genre-atmosphere/romance1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/romance2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/romance3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/romance4.mp3"
];

let sciFiSounds = [
"https://archive.org/download/audio-20260925-genre-atmosphere/sci-fi1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/sci-fi2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/sci-fi3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/sci-fi4.mp3"
];

let calmSounds = [
"https://archive.org/download/audio-20260925-genre-atmosphere/calm1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/calm2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/calm3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/calm4.mp3"
];

let darkSounds = [
"https://archive.org/download/audio-20260925-genre-atmosphere/dark1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/dark2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/dark3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/dark4.mp3"
];

let magicalSounds = [
"https://archive.org/download/audio-20260925-genre-atmosphere/magical1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/magical2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/magical3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/magical4.mp3"
];

let nostalgicSounds = [
"https://archive.org/download/audio-20260925-genre-atmosphere/nostalgic1.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/nostalgic2.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/nostalgic3.mp3",
"https://archive.org/download/audio-20260925-genre-atmosphere/nostalgic4.mp3"
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

const playPauseButton =
document.getElementById("play-pause-button");

const playPauseIcon =
document.getElementById("play-pause-icon");

const repeatButton =
document.getElementById("repeat-button");

const resetButton =
document.getElementById("reset-button");

let isPlaying = false;
let isRepeat = false;
let hasStarted = false;

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
}

///////////// Pause Soundtrack

function pauseSoundtrack(){
    genreAudio.pause();
    atmosphereAudio.pause();
}

///////////// Play and Pause

function togglePlayPause(){

    if(isPlaying === false){

        if(hasStarted === false){
            startSoundtrack();
            hasStarted = true;
        } else {
            genreAudio.play();
            atmosphereAudio.play();
        }

        playPauseIcon.src =
            "assets/icons/pause.png";
        isPlaying = true;

    } else {

        pauseSoundtrack();
        playPauseIcon.src =
            "assets/icons/play.png";
        isPlaying = false;

    }
}

///////////// Repeat

function toggleRepeat(){

    if(isRepeat === false){

        genreAudio.loop = true;
        atmosphereAudio.loop = true;

        repeatButton.setAttribute(
            "aria-pressed",
            "true"
        );

        isRepeat = true;

    } else {

        genreAudio.loop = false;
        atmosphereAudio.loop = false;

        repeatButton.setAttribute(
            "aria-pressed",
            "false"
        );
        isRepeat = false;
    }
}

///////////// Reset

// currentTime reference from:
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


    // reset Now Playing

    playingGenre.textContent =
        "—";

    playingAtmosphere.textContent =
        "—";

    playingIntensity.textContent =
        "—";
        // reset play button

playPauseIcon.src =
    "assets/icons/play.png";

isPlaying = false;
hasStarted = false;


// reset repeat

genreAudio.loop = false;
atmosphereAudio.loop = false;

repeatButton.setAttribute(
    "aria-pressed",
    "false"
);

isRepeat = false;
}

///////////// Button Event Listeners

playPauseButton.addEventListener(
    "click",
    togglePlayPause
);

repeatButton.addEventListener(
    "click",
    toggleRepeat
);

resetButton.addEventListener(
    "click",
    resetSoundtrack
);


