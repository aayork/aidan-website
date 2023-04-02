const songs = [
  {
    name: "Grouplove - Tongue Tied",
    coverArt: "images/Grouplove - Tongue Tied.jpg",
    audioSrc: "songs/Grouplove - Tongue Tied.mp3",
  },
  {
    name: "Train - Hey, Soul Sister",
    coverArt: "images/Train - Hey, Soul Sister.jpg",
    audioSrc: "songs/Train - Hey, Soul Sister.mp3",
  },
  {
    name: "Vance Joy - Riptide",
    coverArt: "images/Vance Joy - Riptide.jpg",
    audioSrc: "songs/Vance Joy - Riptide.mp3",
  },
];
let audio = new Audio();
let currentSongIndex = 0;

// Shuffle the songs array
for (let i = 0; i < songs.length; i++) {
  let randomIndex = Math.floor(Math.random() * songs.length);
  let temp = songs[i];
  songs[i] = songs[randomIndex];
  songs[randomIndex] = temp;
}

// Play the first song in the shuffled list
updateSong();

// Add event listener to the audio element to shuffle and play the next song
audio.addEventListener("ended", () => {
  currentSongIndex++;
  if (currentSongIndex >= songs.length) {
    // If all songs have been played, shuffle the list again
    for (let i = 0; i < songs.length; i++) {
      let randomIndex = Math.floor(Math.random() * songs.length);
      let temp = songs[i];
      songs[i] = songs[randomIndex];
      songs[randomIndex] = temp;
    }
    currentSongIndex = 0;
  }
  updateSong();
});

// Play button
document.getElementById("togglePlay").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    document.getElementById("togglePlay").innerHTML =
      "<img style='padding-left: 5px; padding-right: 5px; width: 20px' src='images/play-pause.png'/>";
  } else {
    audio.pause();
    document.getElementById("togglePlay").innerHTML =
      "<img style='padding-left: 5px; padding-right: 5px; width: 20px' src='images/play-pause.png'/>";
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
  document.getElementById("disk-image").innerHTML =
    "<img id='disc-cover' src='" +
    songs[currentSongIndex].coverArt +
    "'></div>";
  audio.play();
  document.getElementById("togglePlay").innerHTML =
    "<img style='padding-left: 5px; padding-right: 5px; width: 20px' src='images/play-pause.png'/>";
  document.getElementById("displaySong").innerHTML =
    songs[currentSongIndex].name;
}
