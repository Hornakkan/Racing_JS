window.addEventListener('load', () => {
    let myForm = document.querySelector('form');
    let inputFile = document.querySelectorAll('input')[0];
    let submitButton = document.querySelectorAll('input')[1];
    let contentDisplay = document.querySelector('.content_display');

    myForm.addEventListener('submit', (event) => {
        // empêcher le comportement par défaut du bouton pour empêcher le refresh de la page
        event.preventDefault();
    })
  
    submitButton.addEventListener('click', (event) => {
        // création de la promesse
        let p = new Promise((resolve, reject) => {
            if(inputFile.value) {
                resolve(inputFile.files);
            } else {
                reject("Please select a file before submitting");
            }
        })     

        // utilisation de la promesse
        p.then((result) => {
            // récupération de l'extension
            let fileDetail = result[0].name.split(".");
            let fileExtension = fileDetail[fileDetail.length-1];
            // afficher un message lorsque l'on charge un fichier autre que TXT
            contentDisplay.innerText = ("Your file's extension is: " + fileExtension);
            if(fileExtension === 'txt') {
                // initialiser le FileReader puis lire son contenu
                // avant de le display dans le contentDisplay
                let reader = new FileReader();
                reader.onload = (e) => {
                    contentDisplay.innerText = e.target.result;
                }
                reader.readAsText(result[0]);
            }
            return fileExtension;
        })
        .catch((message) => {
            // affichage d'un message d'erreur pendant 3s
            contentDisplay.innerText = message;
            setTimeout(() => {
                contentDisplay.innerText = ""
            }, 3000);
        });
    })

});