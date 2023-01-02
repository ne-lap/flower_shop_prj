let btnSubmit = document.getElementById('submit');
let btnReset = document.getElementById('reset');
let porudzbina = document.getElementById('porudzbina');

let ruza = document.getElementById('ruze');
let ljiljan = document.getElementById('ljiljani');
let gerber = document.getElementById('gerberi');


btnSubmit.addEventListener('click', () => {
    let naslov = document.createElement('h2');
    naslov.textContent = 'Vaša porudžbina:';
    porudzbina.appendChild(naslov);
    
    let ruzaNo = ruza.value;
    let ljiljanNo = ljiljan.value;
    let gerberNo = gerber.value;
    console.log(ruzaNo);
    console.log(ljiljanNo);
    console.log(gerberNo);
    
    for(let i=1; i<=ruzaNo; i++) {
        let img = document.createElement('img');
        img.src = 'photos/rose.png';
        img.classList.add('flower');
        porudzbina.append(img);
    }
    
    for(let i=1; i<=ljiljanNo; i++) {
        let img = document.createElement('img');
        img.src = 'photos/lily.png';
        img.classList.add('flower');
        porudzbina.append(img);
    }

    for(let i=1; i<=gerberNo; i++) {
        let img = document.createElement('img');
        img.src = 'photos/gerbera.png';
        img.classList.add('flower');
        porudzbina.append(img);
    }


});