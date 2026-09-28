///////////// Genre Select

// adapted from the Select example in the class input-event demo
// https://github.com/rmit-idad-2650-wed/input-event-demos

const genreSelect =
    document.getElementById("genre-select");

const playingGenre =
    document.getElementById("playing-genre");


///////////// Atmosphere Select

// adapted from the Select example in the class input-event demo
// https://github.com/rmit-idad-2650-wed/input-event-demos

const atmosphereSelect =
    document.getElementById("atmosphere-select");

const playingAtmosphere =
    document.getElementById("playing-atmosphere");


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

///////////// Random Sound

// random method adapted from the class extended techniques demo
// https://github.com/rmit-idad-2650-wed/extended-techniques-demos
// Math.random reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomSound(soundArray){
    // choose one random sound from the selected category
    let randomNumber =
        Math.random();

    let randomSelector =
        Math.floor(
            soundArray.length * randomNumber
        );

    return soundArray[randomSelector];

}



///////////// Genre Volume Range

// allows the user to control the genre layer separately
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

    let volume =
        e.target.value / 100;

    genreAudio.volume =
        volume;

});


///////////// Atmosphere Volume Range

// allows the user to control the atmosphere layer separately
const atmosphereVolume =
    document.getElementById("atmosphere-volume");

const atmosphereVolumeValue =
    document.getElementById("atmosphere-volume-value");

const playingAtmosphereVolume =
    document.getElementById("playing-atmosphere-volume");


atmosphereVolume.addEventListener("input", (e) => {

    atmosphereVolumeValue.textContent =
        e.target.value + "%";

    let volume =
        e.target.value / 100;

    atmosphereAudio.volume =
        volume;

});


///////////// Default Volume

// start with the genre slightly louder than the atmosphere
// to create a simple balance between the two layers
genreAudio.volume =
    0.6;

atmosphereAudio.volume =
    0.4;

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
let hasStarted = false;
let isRepeat = false;

///////////// Start Soundtrack

function startSoundtrack(){

// pause previous soundtrack
genreAudio.pause();
atmosphereAudio.pause();

// randomly choose one sound from the selected genre

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

// randomly choose one sound from the selected atmosphere

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
}

///////////// Play / Pause

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
            "assets/icon/pause.png";

        playPauseButton.setAttribute(
            "aria-label",
            "Pause"
        );

        isPlaying = true;

    } else {

        genreAudio.pause();
        atmosphereAudio.pause();

        playPauseIcon.src =
            "assets/icon/play.png";

        playPauseButton.setAttribute(
            "aria-label",
            "Play"
        );

        isPlaying = false;
    }
}

///////////// Repeat

function toggleRepeat(){

    isRepeat = !isRepeat;

    genreAudio.loop = isRepeat;
    atmosphereAudio.loop = isRepeat;

    repeatButton.setAttribute(
        "aria-pressed",
        isRepeat
    );
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
    
     // reset Play / Pause
    isPlaying = false;
    hasStarted = false;

    playPauseIcon.src =
    "assets/icon/play.png";
    playPauseButton.setAttribute(
    "aria-label",
    "Play"
);
     // reset Repeat
    isRepeat = false;
    genreAudio.loop = false;
    atmosphereAudio.loop = false;
    repeatButton.setAttribute(
    "aria-pressed",
    "false"
);
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