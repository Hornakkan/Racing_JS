window.addEventListener('load', () => {

let whiteSquare = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[0];
let coordinates = document.getElementsByTagName('footer')[0].getElementsByTagName('div')[1];
let mySquare = document.querySelector('canvas');
let originalColor = getComputedStyle(coordinates).color;   
let initX;
let initY;
let endX;
let endY;
let transformX;
let transformY;

    mySquare.draggable = true;

    mySquare.addEventListener('dragstart', (event) => {
        initX = event.clientX;
        initY = event.clientY;
    });

    whiteSquare.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    whiteSquare.addEventListener('drop', (event) => {
        event.preventDefault();
        // si on drop bien le carré et pas un fichier ou autre
        if(event.dataTransfer.files.length == 0) {
            endX = event.clientX;
            endY = event.clientY;
            // si mon carré a déjà été déplacé
            if(transformX && transformY) {
                let newX = (endX-initX)+parseInt(transformX);
                let newY = (endY-initY)+parseInt(transformY);
                mySquare.style.transform = "translate(" + newX + "px, " + newY + "px)";
            // sinon c'est le premier déplacement
            } else {
                mySquare.style.transform = "translate(" + (endX-initX) + "px, " + (endY-initY) + "px)";
            }

            // affichage des nouvelles coordonnées du carré sur la page
            // coordinates.innerText = "New coordinates => {x:" + event.clientX + ", y:" + event.clientY + "}";
            // affichage des nouvelles coordonnées du carré sur la div du footer
            coordinates.innerText = "New coordinates => {x:" + event.offsetX + ", y:" + event.offsetY + "}";

            // récupérer la valeur de mon translate pour préparer le prochain déplacement
            transformX = getComputedStyle(mySquare).transform.split(",")[4];
            transformY = getComputedStyle(mySquare).transform.split(",")[5].slice(0, -1);
        
        // sinon afficher un message d'erreur pendant 3s
        } else {
            // console.error("You can only drag an drop the square, no files allowed.");
            coordinates.style.color = 'red';
            coordinates.innerText = "You can only drag an drop the square, no files allowed.";
            setTimeout(() => {
                coordinates.style.color = originalColor;
                coordinates.innerText = "New coordinates => {x:?, y:?}";
            }, 3000);
        }
    });

});