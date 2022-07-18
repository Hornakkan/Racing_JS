window.addEventListener('load', () => {
    let whiteSquare = document.querySelector('footer > div');
    let imageUrl = document.querySelector('section > a').href;
    
    window.localStorage.setItem('ex12_img', imageUrl);
    whiteSquare.appendChild(document.createElement('img')).setAttribute('src', window.localStorage.getItem('ex12_img'));

    let imgTag = document.querySelector('img');
    imgTag.style.width = "100%";

});