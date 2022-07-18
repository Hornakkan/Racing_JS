window.addEventListener('load', () => {
    let whiteSquare = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    let myName;
    whiteSquare.addEventListener("click", () => {
        myName = prompt("Quel est votre nom ?");
        while(myName == null || myName === "") {
            myName = prompt("Quel est votre nom ?");
        }
        
        if (confirm("Etes vous sûr que " + myName + " est votre nom ?")) {
            whiteSquare.innerText = "Bonjour " + myName + " !"
            alert("Bonjour " + myName + " !");
        }
    });
});

