window.addEventListener('load', () => {
    let footer = document.querySelector('footer');
    let footerDiv = document.querySelector('footer > div');
    let canvas = document.createElement('canvas');
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.backgroundColor = '#134074';
    let context = canvas.getContext('2d');
    let myImg = [];
    let allowedX = [];
    let imageArray = [
        // 'http://www.html5canvastutorials.com/demos/assets/darth-vader.jpg',
        // 'http://www.html5canvastutorials.com/demos/assets/yoda.jpg',
        // 'https://www.tomsguide.fr/content/uploads/sites/2/2022/06/dark-vador-1024x576.jpg',
        // 'https://www.journaldugeek.com/content/uploads/2022/05/jdg12.jpg',
        // 'https://www.tomsguide.fr/content/uploads/sites/2/2020/01/baby-yoda.jpg'
        'https://technplay.com/wp-content/uploads/2022/01/Naruto-725x544.png',
        'https://i.skyrock.net/2271/91072271/pics/3217320989_1_2_jzQ9HQjm.jpg',
        'https://media.baamboozle.com/uploads/images/243472/1634839999_341998.png',
        'https://mangainsider.com/wp-content/uploads/2022/03/Kakashi-Hatake.png',
        'https://img1.ak.crunchyroll.com/i/spire2/1d8b407eb8961f96cf0e65136088d5071551823951_full.png'
    ];

    
    // calcul des positions X autorisées (sans mauvais jeu de mot)
    for(let j=0; j<imageArray.length; j++) {
        allowedX[j] = j * (canvas.width/imageArray.length);
    }

    function combineImages(myArray) {
        for(let i = 0; i < myArray.length; i++) {
            myImg[i] = new Image();
            myImg[i].src = imageArray[i];
            myImg[i].onload = () => {
                // calcul du ratio pour préserver l'aspect de l'image après resize
                let ratio = myImg[i].naturalWidth / myImg[i].naturalHeight;
                let maxWidth = canvas.width/myImg.length;
                let myHeight = maxWidth/ratio;
                // détermination de la position X de l'image par appel de la fonction aléa
                let posX = isAllowed(0, allowedX.length);
                let posY = Math.floor(Math.random() * (canvas.height - myHeight));
                context.drawImage(myImg[i], 0, 0, myImg[i].naturalWidth, myImg[i].naturalHeight, posX, posY, maxWidth, (maxWidth/ratio));
            }
        }
        footerDiv.appendChild(canvas);
    }

    // génération d'un aléa pour random la position X de l'image
    // puis la supprimer du tableau des positions autorisées
    function isAllowed(min, max) {
        let myRand = Math.floor(Math.random() * (max - min) + min);
        let myVal = allowedX[myRand];
        allowedX.splice(myRand, 1);
        return myVal;
    }
    
    combineImages(imageArray);
    
});