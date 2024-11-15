const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const currentProgress = document.getElementById("current-progress")

const asYouWere = {
    songName: "As You Were",
    file: "as_you_were",
    artist: "TrackTribe",
  };
  const cantHide = {
    songName: "Can't Hide",
    file: "cant_hide",
    artist: "Otis McDonald",
  };
  const boomBapFlick = {
    songName: "Boom Bap Flick",
    file: "boom_bap_flick",
    artist: "Quincas Moreira",
  };
  let isPlaying = false;
const playlist = [asYouWere, cantHide, boomBapFlick];
let index = 0;

function playSong() {
    isPlaying = true;
    play.querySelector("i.bi").classList.remove("bi-play-circle-fill");
    play.querySelector("i.bi").classList.add("bi-pause-circle-fill");
    song.play();
    isPlaying = true;
  }
  function pauseSong() {
    isPlaying = false;
    play.querySelector("i.bi").classList.add("bi-play-circle-fill");
    play.querySelector("i.bi").classList.remove("bi-pause-circle-fill");
    song.pause();
    isPlaying = false;
  }
  play.addEventListener("click", playSong);

  function playPauseDecider() {
    if (isPlaying === true) {
      pauseSong();
    } else {
      playSong();
    }
  }
  function initializeSong() {

    cover.src = `/images/${playlist[currentSong].file}.webp`;
    songName
    bandName
    song

}
function initializeSong() {
    cover.src = `/images/${playlist[currentSong].file}.webp`;
    songName.innerText = playlist[currentSong].songName;
    bandName.innerText = playlist[currentSong].artist;
    song.src = `/songs/${playlist[currentSong].file}.mp3`; 
}

initializeSong();

function previousSong() {
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index -=1;  
    }
}
initializeSong();
playSong();
    
function nextSong(){
    if(index === playlist.length - 1){
        index = 0;
    }
    else{
        index +=1;
    }
}
initializeSong();
playSong();
function updateProgressBar(){
    song.currenTime
    song.duration
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress
}
function updateProgressBar(){
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress','${barWidth}%');
}