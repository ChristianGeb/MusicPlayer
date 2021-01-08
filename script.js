const image = document.querySelector("img");
const title = document.querySelector("#title");
const artist = document.querySelector("#artist");
const music = document.querySelector("audio");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");

const songs = [{
    name: "jacinto-1",
    displayName: "Electric chill Machine",
    artist: "Test"
  },
  {
    name: "jacinto-2",
    displayName: "Remix",
    artist: "Test2"
  },
  {
    name: "jacinto-3",
    displayName: "Something",
    artist: "Test3"
  },
  {
    name: "jacinto-4",
    displayName: "Electric Washing machiney",
    artist: "Test4"
  }
];

let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

let songIndex = 0;

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

loadSong(songs[songIndex]);

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);