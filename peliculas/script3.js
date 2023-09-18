document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoInput = document.getElementById('videoInput');
    const playButton = document.getElementById('playButton');

    // Reproducir el video cuando se hace clic en el botón "Reproducir"
    playButton.addEventListener('click', () => {
        videoPlayer.play();
    });

    // Cargar y reproducir el video cuando se selecciona un archivo
    videoInput.addEventListener('change', () => {
        const selectedFile = videoInput.files[0];
        const objectURL = URL.createObjectURL(selectedFile);
        videoPlayer.src = objectURL;
        videoPlayer.play();
    });
});
