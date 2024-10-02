document.getElementById('wishButton').addEventListener('click', function() {
    document.getElementById('birthdayCard').classList.toggle('show-back');
});

// Funcionalidad para reproducir la canción
document.getElementById('playButton').addEventListener('click', function() {
    var song = document.getElementById('birthdaySong');
    song.play();
});