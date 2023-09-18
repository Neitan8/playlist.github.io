
const songs = [
    { title: "Gone Gone Gone", source: "audio/1.mp3", image: "imagenes/1.jpeg" },
    { title: "Hymn For The Weekend", source: "audio/2.mp3", image: "imagenes/2.jpg" },
    { title: "Burnig love", source: "audio/3.mp3", image: "imagenes/3.jpg" },
    { title: "Cant Welp Falling In Love", source: "audio/4.mp3", image: "imagenes/4.jpg" },
    { title: "Te quiero", source: "audio/5.mp3", image: "imagenes/5.jpg" },
    { title: "Goo Goo Dolls", source: "audio/6.mp3", image: "imagenes/6.jpg" },
    { title: "Make You Mine", source: "audio/66.mp3", image: "imagenes/7.jpg" },
    { title: "Until I Found You", source: "audio/8.mp3", image: "imagenes/8.jpg" },
    { title: "Happy togerther", source: "audio/7.mp3", image: "imagenes/9.jpg" },
    { title: "Perfect", source: "audio/9.mp3", image: "imagenes/10.jpg" },
    { title: "Let Her Go", source: "audio/11.mp3", image: "imagenes/11.jpg" },
];

const songList = document.getElementById("songList");
const audioPlayer = document.getElementById("audioPlayer");
const audioSource = document.getElementById("audioSource");
const songImage = document.getElementById("songImage");

songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = song.title;
    listItem.addEventListener("click", () => {
        audioSource.src = song.source;
        songImage.src = song.image;
        audioPlayer.load();
        audioPlayer.play();
    });
    songList.appendChild(listItem);
});