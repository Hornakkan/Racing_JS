window.addEventListener('load', () => {

    let canvas = document.querySelectorAll('canvas');
    let parent = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0];
    let children = Array.from(document.getElementsByTagName("footer")[0].getElementsByTagName("div")[0].children);

    let newOrder = [];
    let orange = [];
    let purple = [];
    let black = [];
    let olive = [];

    while(children.length > 0) {
        switch(getComputedStyle(children[0]).getPropertyValue('background-color')) {
            case 'rgb(255, 165, 0)':
                // orange
                // orange.push(children[0]);
            orange.push('rgb(255, 165, 0)');
            children.shift();
            break;
            case 'rgb(128, 0, 128)':
                // purple
                // purple.push(children[0]);
            purple.push('rgb(128, 0, 128)');
            children.shift();
            break;
            case 'rgb(0, 0, 0)':
                // black
                // black.push(children[0]);
            black.push('rgb(0, 0, 0)');
            children.shift();
            break;
            case 'rgb(128, 128, 0)':
                // olive
                // olive.push(children[0]);
            olive.push('rgb(128, 128, 0)');
            children.shift();
            break;
        } 
    }

    // Order = orange > purple > black > olive
    orange.forEach(element => {
        newOrder.push(element)
    });
    purple.forEach(element => {
        newOrder.push(element)
    });
    black.forEach(element => {
        newOrder.push(element)
    });
    olive.forEach(element => {
        newOrder.push(element)
    });

    // parent.replaceChildren(newOrder[0], newOrder[1]);

    for(let i = 0; i < newOrder.length; i++) {
        canvas[i].style.backgroundColor = newOrder[i];
        canvas[i].style.pointerEvents = 'none';
    }

});