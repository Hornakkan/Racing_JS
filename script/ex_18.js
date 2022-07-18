window.addEventListener('load', () => {
    let dropZone = document.querySelector('.drag_drop');


    window.addEventListener('dragover', (event) => {
        if(event.target != dropZone) {
            event.preventDefault();
            event.dataTransfer.effectAllowed = "none";
            event.dataTransfer.dropEffect = "none";
        }

        if(event.target.className == "myImg" || event.target.tagName == "I") {
            event.dataTransfer.effectAllowed = "uninitialized";
            event.dataTransfer.dropEffect = "move";
        }
    })

    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
    })

    dropZone.addEventListener('drop', (event) => {
        // empêcher l'ouverture de l'image par le browser
        event.preventDefault();
        // lire chacun des fichiers déposés dans la drop zone
       for(let myFile of event.dataTransfer.files) {
            // si le fichier est de type image
            if(myFile.type.includes('image')){
                if(dropZone.innerText === "Drag&Drop here") {
                    dropZone.innerText = "";
                }
                // créer un nouvel élément DOM img
                let myImg = document.createElement('img');
                myImg.setAttribute('class', 'myImg');
                myImg.style.maxWidth = '100%';
                
                // initialiser le file reader puis récupérer le fichier comme une URL
                let reader = new FileReader();
                reader.readAsDataURL(myFile);
                reader.onload = () => {
                    // une fois le chargement terminé, passer l'URL de l'image déposée
                    // dans la SRC du tag IMG
                    myImg.setAttribute('src', reader.result);
                    // ajouter l'élément IMG à la suite de la drop zone
                    dropZone.appendChild(myImg);
                }
            }
       }
    })
    
});