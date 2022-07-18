window.addEventListener('load', () => {
        (function () {
            // let whiteSquare = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
            let whiteSquare = document.querySelector("footer>div");
            whiteSquare.innerText = "Hello World";
        })();
});