window.addEventListener('load', () => {
    let okLink = document.querySelector('footer > div > a');
    let footer = document.querySelector('footer');
    let cookie = document.cookie.split("; ");

    // fonction anonyme autoload pour gérer la présence du cookie
    (function () {
        if(cookie.includes('acceptsCookies=true')) {
            okLinkClick();
        }
    })();
    
    // événement principal
    okLink.addEventListener('click', okLinkClick);
    

    // fonction de gestion des événements de la page : cookie, click, affichage
    function okLinkClick() {
        let footerNewDiv = document.createElement('div');
        let deleteLink = document.createElement('a');
        let deleteText = document.createTextNode('Delete cookie');
        
        // création et initialisation de la variable d'expiration du cookie
        let date = new Date();
        date.setTime(date.getTime() + (24*60*60*1000));
        let cookieExpires = date.toUTCString();

        document.cookie = "acceptsCookies=true; expires=" + cookieExpires + "; path=/"; 
        
        // suppression de l'eventListener pour éviter un empilage
        document.querySelector('footer > div > a').removeEventListener('click', okLinkClick);
        
        deleteLink.setAttribute('href', '#');
        footer.appendChild(footerNewDiv).appendChild(deleteLink).appendChild(deleteText);
        // récupération du contenu du innerHTML de la div accueil avant suppression
        let myInner = document.querySelector('footer > div').innerHTML;
        
        // suppression du contenu de la div accueil
        document.querySelector('footer > div').innerHTML = "";
        
        // initialisation des variables
        let footerSecondDiv = document.querySelector('footer > div').nextElementSibling;
        let deleteClick = footerSecondDiv.firstChild;
        
        // détection du click sur le lien de suppression du cookie
        deleteClick.addEventListener('click', () => {
            // suppression du cookie
            document.cookie = "acceptsCookies=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
            // suppression de la div pour delete le cookie
            document.querySelector('footer').removeChild(footerNewDiv);
            // injection de son contenu à la div accueil
            document.querySelector('footer > div').innerHTML = myInner;
            // création de l'eventListener sur la nouvelle div prposant d'accepter le cookie
            document.querySelector('footer > div > a').addEventListener('click', okLinkClick);
        });
    }

});




