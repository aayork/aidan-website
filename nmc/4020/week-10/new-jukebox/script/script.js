const songs = [
  {
    name: "Song 1",
    coverArt: "images/cover1.png",
    audioSrc: "audio/song1.mp3",
  },
  {
    name: "Song 2",
    coverArt: "images/cover2.png",
    audioSrc: "audio/song2.mp3",
  },
  {
    name: "Song 3",
    coverArt: "images/cover3.png",
    audioSrc: "audio/song3.mp3",
  },
];
const audio = new Audio();
let currentSongIndex = 0;

// Play button
document.getElementById("togglePlay").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    document.getElementById("togglePlay").innerHTML =
      '<img src="images/pause.png">';
  } else {
    audio.pause();
    document.getElementById("togglePlay").innerHTML =
      '<img src="images/play.png">';
  }
});

// Previous button
document.getElementById("previous-button").addEventListener("click", () => {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = songs.length - 1;
  }
  updateSong();
});

// Next button
document.getElementById("next-button").addEventListener("click", () => {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    currentSongIndex = 0;
  }
  updateSong();
});

// Update the audio source and cover art
function updateSong() {
  audio.src = songs[currentSongIndex].audioSrc;
  document.getElementById("disk-image").src = songs[currentSongIndex].coverArt;
  audio.play();
  document.getElementById("togglePlay").innerHTML =
    '<img src="images/pause.png">';
  document.getElementById("displayName").innerHTML =
    songs[currentSongIndex].name;
}
