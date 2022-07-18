window.addEventListener('load', () => {
    let whiteSquare = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];

    document.addEventListener("keypress", (event) => {
        if (whiteSquare.innerText.length < 42) {
            whiteSquare.innerText += event.key;
        } else {
            whiteSquare.innerText = whiteSquare.innerText.substring(1,whiteSquare.innerText.length) + event.key;
        }
    });
});