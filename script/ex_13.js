window.addEventListener('load', () => {
    let whiteSquare = document.querySelector('footer > div');

    
    if(window.localStorage.getItem('ex12_img')) {
        whiteSquare.appendChild(document.createElement('img')).setAttribute('src', window.localStorage.getItem('ex12_img'));
        
        let imgTag = document.querySelector('img');
        imgTag.width = imgTag.parentElement.clientWidth - imgTag.parentElement.offsetLeft*2;
        let imgInitWidth = imgTag.width;
        imgTag.addEventListener('mouseover', () => {
            imgTag.style.cursor = 'pointer';
    
            function reduceImgWidth() {
                imgTag.width = imgTag.width - (imgTag.width*5/100);
            }
    
            var cancel = setInterval(reduceImgWidth, 1000);
            
            imgTag.addEventListener('mouseleave', () => {
                clearInterval(cancel);
                imgTag.width = imgInitWidth;
            })
        })
    
        imgTag.addEventListener('click', () => {
            window.localStorage.removeItem('ex12_img');
            whiteSquare.innerHTML = "";
        })
    }

});