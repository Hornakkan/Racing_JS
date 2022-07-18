window.addEventListener('load', () => {
    let whiteSquare = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    let myCount = 0;
    
    whiteSquare.addEventListener("click", () => {
        myCount += 1;
        whiteSquare.innerText = myCount;
    });
})
