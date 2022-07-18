window.addEventListener('load', () => {
    
    let myDom = Array.from(document.querySelectorAll('*'));

    function returnDomElem(searchParam) {
        let searchTerm = searchParam.split('"')[1].toLowerCase();
        let myResults = [];

        myDom.forEach(element => {
            switch (searchTerm) {
                case '.classe':
                    if(element.className !== "" ) {
                        // console.log(element);
                        myResults.push(element);
                    }
                    break;
                case '.class':
                    if(element.className !== "" ) {
                        // console.log(element);
                        myResults.push(element);
                    }
                    break;
                case '#id':
                    if(element.id !== "") {
                        // console.log(element);
                        myResults.push(element);
                    }                
                    break;
                default:
                    if(element.tagName.toLowerCase() == searchTerm) {
                        // console.log(element);
                        myResults.push(element);
                    }
                    break;
            }

        });

        return myResults;
    }

    // console.log(returnDomElem('$("p")'));
    // console.log(returnDomElem('$("span")'));
    // console.log(returnDomElem('$("div")'));
    // console.log(returnDomElem('$("a")'));
    // console.log(returnDomElem('$("nav")'));
    // console.log(returnDomElem('$("header")'));
    // console.log(returnDomElem('$("footer")'));
    // console.log(returnDomElem('$(".classe")'));
    // console.log(returnDomElem('$(".class")'));

});