window.addEventListener('load', () => {
    let downloadButton = document.querySelector('footer > div > button');
    let url = document.querySelector('section > a').href;
    let blob;

    downloadButton.addEventListener('click', () => {            
        fetch(url)
            .then(response => {
                if(response.ok) {
                    return response.text();
                } else {
                    throw new Error();
                }
            })
            .then(data => {
                blob = new Blob([data],
                { type: "text/plain;charset=utf-8" });
                let downloadLink = window.URL.createObjectURL(blob);
                let anchor = document.createElement('a');
                anchor.href = downloadLink;
                // initialisation du tag A qui contient le fichier à télécharger
                // puis click pour laisser l'utilisateur choisir où l'enregistrer
                anchor.setAttribute('download', 'ex_14.txt');
                anchor.click();
            })
            .catch( error => {
                alert('Something went wrong with your file, please try again.');
            });        
    })

});