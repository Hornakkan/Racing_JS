window.addEventListener('load', () => {
    let footer = document.querySelector('footer > div');
    let datePicker = document.createElement('input');
    let dateSaved = document.createElement('div');
    let label  =document.createElement('label');

    // préparation des éléments du DOM
    datePicker.setAttribute('type', 'date');
        datePicker.style.border = '1px solid #293fb9';
        datePicker.style.borderRadius = '5px';
        datePicker.style.cursor = 'pointer';
        
    dateSaved.setAttribute('id', 'myDate');
        dateSaved.style.margin = 0;
        dateSaved.style.padding = 0;
        dateSaved.style.fontStyle = 'italic';

    label.setAttribute('for', 'myDate');
    label.innerText = 'Last date saved';
        label.style.fontWeight = 600;
        label.style.color = '#293fb9';
    
    
    // ajout des nouveaux éléments au DOM
    footer.appendChild(label);
    footer.appendChild(dateSaved);

    // si le localstorage contient une date je l'affiche
    if(window.localStorage.getItem('saved_date')) {
        let showDate = document.querySelector('#myDate');
        showDate.innerText = window.localStorage.getItem('saved_date');
    } else {

    }

    // ajout du date picker au DOM
    footer.appendChild(datePicker);

    datePicker.addEventListener('change', () => {
        if(datePicker.value != '') {
            myDate = new Date(datePicker.value);
            getFullDate(myDate);
            let showDate = document.querySelector('#myDate');
            showDate.innerText = window.localStorage.getItem('saved_date');
        } else {
            window.localStorage.removeItem('saved_date')
            let showDate = document.querySelector('#myDate');
            showDate.innerText = '';
        }
        datePicker.blur();
    })

    function getFullDate(date) {
        let month = ['January','February','March','April','May', 'June','July','August','September','October','November','December'];
        let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let savedDate = day[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getYear();

        window.localStorage.setItem('saved_date', savedDate);
    }
});