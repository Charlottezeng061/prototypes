/////////// Audio Arrays

// JavaScript arrays are used to store the four sounds
// available for each genre and atmosphere.


// Genre sounds
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

// Store the sound and name currently selected by the user
// The first Fantasy and Calm sounds are the default selections

// Arrays use zero-based indexing, 
// so [0] selects the first sound in the array.
// Reference: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays

let selectedGenreSound =
    fantasySounds[0];

let selectedAtmosphereSound =
    calmSounds[0];

let selectedGenreName =
    "Piano & Strings";

let selectedAtmosphereName =
    "Rain";

///////////// Audio
// Find the two audio elements used to play the genre and atmosphere sounds
const genreAudio =
    document.getElementById("genre-audio");

const atmosphereAudio =
    document.getElementById("atmosphere-audio");

//default volume
genreAudio.volume = 0.5;
atmosphereAudio.volume = 0.5;

///////////// Now Playing
// Find the text elements used to show the current soundtrack information
const playingGenre =
document.getElementById("playing-genre");

const playingAtmosphere =
document.getElementById("playing-atmosphere");

const playingIntensity =
document.getElementById("playing-intensity");

///////////// Genre Sound Buttons
const fantasySound1 =
document.getElementById("fantasy-sound-1");
const fantasySound2 =
document.getElementById("fantasy-sound-2");
const fantasySound3 =
document.getElementById("fantasy-sound-3");
const fantasySound4 =
document.getElementById("fantasy-sound-4");

const mysterySound1 =
document.getElementById("mystery-sound-1");
const mysterySound2 =
document.getElementById("mystery-sound-2");
const mysterySound3 =
document.getElementById("mystery-sound-3");
const mysterySound4 =
document.getElementById("mystery-sound-4");


const romanceSound1 =
document.getElementById("romance-sound-1");
const romanceSound2 =
document.getElementById("romance-sound-2");
const romanceSound3 =
document.getElementById("romance-sound-3");
const romanceSound4 =
document.getElementById("romance-sound-4");


const sciFiSound1 =
document.getElementById("sci-fi-sound-1");
const sciFiSound2 =
document.getElementById("sci-fi-sound-2");
const sciFiSound3 =
document.getElementById("sci-fi-sound-3");
const sciFiSound4 =
document.getElementById("sci-fi-sound-4");

///////////// Atmosphere Sound Buttons

const calmSound1 =
document.getElementById("calm-sound-1");
const calmSound2 =
document.getElementById("calm-sound-2");
const calmSound3 =
document.getElementById("calm-sound-3");
const calmSound4 =
document.getElementById("calm-sound-4");


const darkSound1 =
document.getElementById("dark-sound-1");
const darkSound2 =
document.getElementById("dark-sound-2");
const darkSound3 =
document.getElementById("dark-sound-3");
const darkSound4 =
document.getElementById("dark-sound-4");


const magicalSound1 =
document.getElementById("magical-sound-1");
const magicalSound2 =
document.getElementById("magical-sound-2");
const magicalSound3 =
document.getElementById("magical-sound-3");
const magicalSound4 =
document.getElementById("magical-sound-4");


const nostalgicSound1 =
document.getElementById("nostalgic-sound-1");
const nostalgicSound2 =
document.getElementById("nostalgic-sound-2");
const nostalgicSound3 =
document.getElementById("nostalgic-sound-3");
const nostalgicSound4 =
document.getElementById("nostalgic-sound-4");

///////////// Select Genre Sound
// Save the genre sound selected by the user
// and play it as a preview

function selectGenreSound(sound, name){

    selectedGenreSound = sound;
    selectedGenreName = name;
    playGenreSound();
}
///////////// Select Atmosphere Sound
// Save the atmosphere sound selected by the user
// and play it as a preview

function selectAtmosphereSound(sound, name){
    selectedAtmosphereSound = sound;
    selectedAtmosphereName = name;
    playAtmosphereSound();
}
//////Genre Button Events
// When a genre sound button is clicked,
// select and preview that sound

fantasySound1.addEventListener("click", function(){

    selectGenreSound(
        fantasySounds[0],
        "Piano & Strings"
    );
});
fantasySound2.addEventListener("click", function(){

    selectGenreSound(
        fantasySounds[1],
        "Medieval Lute"
    );
});
fantasySound3.addEventListener("click", function(){

    selectGenreSound(
        fantasySounds[2],
        "Fantasy Soundscape"
    );
});
fantasySound4.addEventListener("click", function(){

    selectGenreSound(
        fantasySounds[3],
        "Piano & Pad"
    );
});

mysterySound1.addEventListener("click", function(){

    selectGenreSound(
        mysterySounds[0],
        "Mystery Background"
    );
});
mysterySound2.addEventListener("click", function(){

    selectGenreSound(
        mysterySounds[1],
        "Suspense Strings"
    );
});
mysterySound3.addEventListener("click", function(){

    selectGenreSound(
        mysterySounds[2],
        "Choir & Guitar"
    );
});
mysterySound4.addEventListener("click", function(){

    selectGenreSound(
        mysterySounds[3],
        "Bright Mystery"
    );
});


romanceSound1.addEventListener("click", function(){

    selectGenreSound(
        romanceSounds[0],
        "Emotional Piano"
    );
});
romanceSound2.addEventListener("click", function(){

    selectGenreSound(
        romanceSounds[1],
        "Violin & Cello"
    );
});
romanceSound3.addEventListener("click", function(){

    selectGenreSound(
        romanceSounds[2],
        "Lo-fi Guitar"
    );
});
romanceSound4.addEventListener("click", function(){

    selectGenreSound(
        romanceSounds[3],
        "Soft Strings"
    );
});

sciFiSound1.addEventListener("click", function(){

    selectGenreSound(
        sciFiSounds[0],
        "Space Ambience"
    );
});
sciFiSound2.addEventListener("click", function(){

    selectGenreSound(
        sciFiSounds[1],
        "Sci-Fi Synth"
    );
});
sciFiSound3.addEventListener("click", function(){

    selectGenreSound(
        sciFiSounds[2],
        "Deep Drone"
    );
});
sciFiSound4.addEventListener("click", function(){

    selectGenreSound(
        sciFiSounds[3],
        "Space Travel"
    );
});

//////Atmosphere Button Events
// When an atmosphere sound button is clicked,
// select and preview that sound
calmSound1.addEventListener("click", function(){

    selectAtmosphereSound(
        calmSounds[0],
        "Rain"
    );
});
calmSound2.addEventListener("click", function(){

    selectAtmosphereSound(
        calmSounds[1],
        "Windy Forest"
    );
});
calmSound3.addEventListener("click", function(){

    selectAtmosphereSound(
        calmSounds[2],
        "Ocean Waves"
    );
});
calmSound4.addEventListener("click", function(){

    selectAtmosphereSound(
        calmSounds[3],
        "Fireplace"
    );
});

darkSound1.addEventListener("click", function(){

    selectAtmosphereSound(
        darkSounds[0],
        "Dark Drone"
    );
});
darkSound2.addEventListener("click", function(){

    selectAtmosphereSound(
        darkSounds[1],
        "Wind"
    );
});
darkSound3.addEventListener("click", function(){

    selectAtmosphereSound(
        darkSounds[2],
        "Deep Drone"
    );
});
darkSound4.addEventListener("click", function(){

    selectAtmosphereSound(
        darkSounds[3],
        "Cave"
    );
});

magicalSound1.addEventListener("click", function(){

    selectAtmosphereSound(
        magicalSounds[0],
        "Choir & Synth"
    );
});
magicalSound2.addEventListener("click", function(){

    selectAtmosphereSound(
        magicalSounds[1],
        "Chimes"
    );
});
magicalSound3.addEventListener("click", function(){

    selectAtmosphereSound(
        magicalSounds[2],
        "Cymbal Shimmer"
    );
});
magicalSound4.addEventListener("click", function(){

    selectAtmosphereSound(
        magicalSounds[3],
        "Music Box & Bells"
    );
});

nostalgicSound1.addEventListener("click", function(){

    selectAtmosphereSound(
        nostalgicSounds[0],
        "Lo-fi Piano"
    );
});
nostalgicSound2.addEventListener("click", function(){

    selectAtmosphereSound(
        nostalgicSounds[1],
        "Nostalgic Piano"
    );
});
nostalgicSound3.addEventListener("click", function(){

    selectAtmosphereSound(
        nostalgicSounds[2],
        "Music Box"
    );
});
nostalgicSound4.addEventListener("click", function(){

    selectAtmosphereSound(
        nostalgicSounds[3],
        "Old Clock"
    );
});

///////////// Intensity

const intensityRange =
document.getElementById("intensity");

const intensityOutputText =
document.getElementById("intensity-value");

// Update the volume and percentage
// when the user moves the intensity slider
intensityRange.addEventListener("input", function(e){

    // show percentage
    intensityOutputText.textContent =
        e.target.value + "%";

    // convert 0-100 to 0-1
    let volume =
        e.target.value / 100;

    // change both audio layers
    genreAudio.volume = volume;
    atmosphereAudio.volume = volume;

    // update Now Playing
    playingIntensity.textContent =
        e.target.value + "%";
});

///////////// Soundtrack Control Buttons
// Find the Start, Pause and Reset buttons and the status message

const startButton =
    document.getElementById("start-button");

const pauseButton =
    document.getElementById("pause-button");

const resetButton =
    document.getElementById("reset-button");

const statusText =
    document.getElementById("status");


//////////// Start Soundtrack
// Start the selected genre and atmosphere sounds together

function startSoundtrack(){
    // pause both sounds first
    genreAudio.pause();
    atmosphereAudio.pause();

    // use the sounds selected by the user
    genreAudio.src =
        selectedGenreSound;
    atmosphereAudio.src =
        selectedAtmosphereSound;

    // start both sounds from the beginning
    genreAudio.currentTime = 0;
    atmosphereAudio.currentTime = 0;

    // use the current intensity
    let volume =
        intensityRange.value / 100;
    genreAudio.volume =
        volume;
    atmosphereAudio.volume =
        volume;

    // play both audio layers together
    genreAudio.play();
    atmosphereAudio.play();

    // update Now Playing

    playingGenre.textContent =
        selectedGenreName;

    playingAtmosphere.textContent =
        selectedAtmosphereName;

    playingIntensity.textContent =
        intensityRange.value + "%";


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

function selectGenreSound(sound, name){
    selectedGenreSound = sound;
    selectedGenreName = name;
    playGenreSound();
}

function selectAtmosphereSound(sound, name){
    selectedAtmosphereSound = sound;
    selectedAtmosphereName = name;
    playAtmosphereSound();
}

///////////// Play Genre Sound

function playGenreSound(){

    // stop previous genre sound
    genreAudio.pause();

    // use selected genre sound
    genreAudio.src =
        selectedGenreSound;

    // start from the beginning
    genreAudio.currentTime = 0;

    // play selected genre sound
    genreAudio.play();

    // update Now Playing
    playingGenre.textContent =
        selectedGenreName;
}
let selectedGenreButton = null;

let selectedAtmosphereButton = null;


///////////// Play Atmosphere Sound

function playAtmosphereSound(){

    // stop previous atmosphere sound
    atmosphereAudio.pause();

    // use selected atmosphere sound
    atmosphereAudio.src = selectedAtmosphereSound;

    // start from the beginning
    atmosphereAudio.currentTime = 0;

    // play selected atmosphere sound
    atmosphereAudio.play();

    // update Now Playing
    playingAtmosphere.textContent = selectedAtmosphereName;
}

///////////// Reset
// currentTime reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime

function resetSoundtrack(){
// pause both audio layers
genreAudio.pause();
atmosphereAudio.pause();

// return audio to the beginning
genreAudio.currentTime = 0;
atmosphereAudio.currentTime = 0;

// remove  audio
genreAudio.src ="";
atmosphereAudio.src = "";

// remove selected sounds

selectedGenreSound = "";
selectedAtmosphereSound = "";
selectedGenreName = "";
selectedAtmosphereName = "";

// reset intensity
intensityRange.value = 50;
intensityOutputText.textContent = "50%";

// reset volume
genreAudio.volume = 0.5;
atmosphereAudio.volume = 0.5;

// reset Now Playing
playingGenre.textContent ="—";
playingAtmosphere.textContent ="—";
playingIntensity.textContent ="—";

// reset status
statusText.textContent =
    "Choose one genre sound and one atmosphere sound.";
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


///////////// Selected Button State
// Keep one genre sound button highlighted at a time

document.querySelectorAll("#genre-sounds button").forEach(function(button){
    button.addEventListener("click", function(){

// remove the selected style from the other genre buttons
document.querySelectorAll("#genre-sounds button").forEach(function(button){
        button.classList.remove("selected");
});
// add the selected style to the clicked button
this.classList.add("selected");
   });
});

// Keep one atmosphere sound button highlighted at a time
document.querySelectorAll("#atmosphere-sounds button").forEach(function(button){
    button.addEventListener("click", function(){
// remove the selected style from the other atmosphere buttons
document.querySelectorAll("#atmosphere-sounds button").forEach(function(button){
    button.classList.remove("selected");
});
 // add the selected style to the clicked button
this.classList.add("selected");
});
});