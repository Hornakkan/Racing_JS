window.addEventListener('load', () => {
    let whiteSquare = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    let plusButton = document.querySelectorAll("button")[0];
    let minusButton = document.querySelectorAll("button")[1];
    let dropDownList = document.querySelector("select");

    plusButton.addEventListener("click", () => {
        let fontSize = (parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size')) + 1) + "px";
        document.body.style.fontSize = fontSize;
    });

    minusButton.addEventListener("click", () => {
        let fontSize = (parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size')) - 1) + "px";
        document.body.style.fontSize = fontSize;
    });

    dropDownList.addEventListener("click", () => {
        document.body.style.backgroundColor = dropDownList.value;
    });
});