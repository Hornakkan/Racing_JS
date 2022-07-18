window.addEventListener('load', () => {
    let footer = document.querySelector('footer > div');
    let myForm = document.querySelector('form');
    let inputFile = document.querySelectorAll('input')[0];
    let submitButton = document.querySelectorAll('input')[1];
    let warningContainer = document.createElement('div');
    warningContainer.setAttribute('id', '#warningMessage');
        warningContainer.style.margin = '5px 0';
        warningContainer.style.padding = 0;
        warningContainer.style.minHeight = '25px';
        warningContainer.style.color = 'red';

    footer.appendChild(warningContainer);

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
            let reader = new FileReader();
            reader.onload = (e) => {
                    // création du lien downloadable
                    let downloadLink = e.target.result;
                    let anchor = document.createElement('a');
                    anchor.href = downloadLink;
                    // initialisation du tag A qui contient le fichier à télécharger
                    // puis click pour laisser l'utilisateur choisir où l'enregistrer
                    anchor.setAttribute('download', result[0].name);
                    anchor.click();
                }
            reader.readAsDataURL(result[0]);
        })
        .catch((message) => {
            // console.log(message);
            warningContainer.innerText = message;
            setTimeout(() => {
                warningContainer.innerText = ""
            }, 3000);
        });
    })

});