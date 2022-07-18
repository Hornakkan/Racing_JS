window.addEventListener('load', () => {
    let pauseButton = document.querySelectorAll('button')[0];
    let stopButton = document.querySelectorAll('button')[1];
    let muteButton = document.querySelectorAll('button')[2];
    let canvas = document.querySelector('canvas');
    const music = new Audio('./triangle.ogg');

    // dessiner un triangle blanc
    // bordure 1px d'épaisseur
    let ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(6, 14);
    ctx.lineTo(14, 10);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.closePath();
    ctx.stroke();

    canvas.addEventListener('click', () => {
        music.play();
    });

    pauseButton.addEventListener('click', () => {
        music.pause();
    });

    stopButton.addEventListener('click', () => {
        music.pause();
        music.currentTime = 0;
    });

    muteButton.addEventListener('click', () => {
        if(music.muted) {
            music.muted = false;
        } else {
            music.muted = true;
        }
    });

});