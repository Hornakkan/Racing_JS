window.addEventListener('load', () => {
    let url = document.querySelector('section > a').href;
    let dot = document.querySelector('span');
    let bitcoin_eur;
    let bitcoin_old;

    bitcoin_old = window.localStorage.getItem('bitcoin_rate_euro');
    window.localStorage.removeItem('bitcoin_rate_euro');
    
    fetch(url)
    .then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error();
        }
    })
    .then(data => {
        bitcoin_eur = data.bpi.EUR.rate_float;
        window.localStorage.setItem('bitcoin_rate_euro', bitcoin_eur);
        
        // console.log('Nouvelle valeur = ' + bitcoin_eur);
        // console.log('Ancienne valeur = ' + bitcoin_old);
        // console.log(data);
        // if(window.localStorage.getItem('bitcoin_rate_euro')) {
            if(bitcoin_eur > bitcoin_old) {
                dot.style.backgroundColor = 'green';
            } else if(bitcoin_eur < bitcoin_old) {
                dot.style.backgroundColor = 'red';
            } else {
                dot.style.backgroundColor = 'orange';
            }
        // } else {
        //     console.log("Pas Pouet");
        // }        
    })
    .catch();

});