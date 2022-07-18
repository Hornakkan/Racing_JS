window.addEventListener('load', () => {
    let postalButton = document.querySelector('section > button');

    postalButton.addEventListener('click', () => {
        let postalCode = document.querySelector('section > input').value;        
        if(postalCode) {
            let whiteSquare = document.querySelector('footer > div');
            let url = "https://apicarto.ign.fr/api/codes-postaux/communes/" + postalCode;

            fetch(url)
                .then(response => {
                    if(response.ok) {
                        return response.json();
                    } else {
                        throw new Error();
                    }
                })
                .then(data => {
                    let towns = data;
                    towns.forEach(town => {
                        whiteSquare.innerText = (town.nomCommune + ", " + town.libelleAcheminement);
                    });
                })
                .catch(() => {
                    whiteSquare.innerText = "Town not found, check your entry.";
                }
                );
        }
    })
});