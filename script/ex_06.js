
// // Ancienne version de l'exercice 6
// // a été changée le 12/07/2022
// window.addEventListener('load', () => {

//     let whiteSquare = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
//     class Hero {
//         constructor(name, type, int = 0, str = 0) {
//             this.name = name;
//             this.type = type;
//             this.int = int;
//             this.str = str;
//         }

//         toString () {
//             if(whiteSquare.innerText.length != 0) {
//                 whiteSquare.innerText += "\n";
//             }

//             let myName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
//             let myInt;
//             let myStr;
            
//             if (this.int > 1 || this.int < 1) {
//                 myInt = this.int + " points";
//             } else {
//                 myInt = this.int + " point";
//             }
            
//             if (this.str > 1 || this.str < 1) {
//                 myStr = this.str + " points";
//             } else {
//                 myStr = this.str + " point";
//             }

//             whiteSquare.innerText += "Je suis " + myName + " le " + this.type + ", j'ai "
//                                         + myInt + " d'intelligence et " + myStr + " de force !";
//         }
//     }

// });

// var mage = new Hero("amadeus", "mage", 10, 3);
// var guerrier = new Hero("pontius", "guerrier", 3, 10);
// mage.toString();
// guerrier.toString();


// Nouvel exercice 6, changé le 12/07/2022
window.addEventListener('load', () => {
    let whiteSquare = document.querySelector("footer>div");
    let url = 'https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=%2A&limit=25&offset=0';
    let options = { method: 'GET'};

    fetch(url, options)
    .then(response => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error()
        }
    })
    .then(data => {
        let schools = data.records;
        let schoolsList = "";
        schools.forEach(school => {
            schoolsList += school.record.fields.nom_commune + 
                            ", " + school.record.fields.nom_etablissement + 
                            ", " + school.record.fields.mail + "\n";
        });
        whiteSquare.innerText = schoolsList;
    })
    .catch(error => {
        whiteSquare.innerText = "Something went wrong with the API"
    });


});