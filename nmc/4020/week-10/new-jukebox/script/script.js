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
  {
    name: "Semisonic - Closing Time",
    coverArt: "",
    audioSrc: "songs/01 Closing Time.mp3",
  },
  {
    name: "Avicii - Wake Me Up",
    coverArt: "",
    audioSrc: "songs/01 Wake Me Up.mp3",
  },
  {
    name: "Drive By",
    coverArt: "",
    audioSrc: "songs/02 Drive By.mp3",
  },
  {
    name: "Mumford & Sons - I Will Wait",
    coverArt: "",
    audioSrc: "songs/03 I Will Wait.mp3",
  },
  {
    name: "She Will Be Loved",
    coverArt: "",
    audioSrc: "songs/04 She Will Be Loved.mp3",
  },
  {
    name: "Little Talks",
    coverArt: "",
    audioSrc: "songs/06 Little Talks.mp3",
  },
  {
    name: "Little Lion Man",
    coverArt: "",
    audioSrc: "songs/07 Little Lion Man.mp3",
  },
  {
    name: "Coldplay - Viva la Vida",
    coverArt: "",
    audioSrc: "songs/07. Coldplay - Viva la Vida.mp3",
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
