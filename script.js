let btnSubmit = document.getElementById('submit');
let btnReset = document.getElementById('reset');
let porudzbina = document.getElementById('porudzbina');

let ruza = document.getElementById('ruze');
let ljiljan = document.getElementById('ljiljani');
let gerber = document.getElementById('gerberi');

let bombonjeraCheck = document.getElementById('bombonjera');
let cokoladaCheck = document.getElementById('cokolada');
let sampanjacCheck = document.getElementById('sampanjac');

btnSubmit.addEventListener('click', () => {
    let naslov = document.createElement('h2');
    naslov.textContent = 'Vaša porudžbina:';
    porudzbina.appendChild(naslov);
    
    let sum = 0

    let ruzaNo = ruza.value;
    let ljiljanNo = ljiljan.value;
    let gerberNo = gerber.value;

    let picContainerRose = document.createElement('div');
    porudzbina.append(picContainerRose);
    for(let i=1; i<=ruzaNo; i++) {
        let img = document.createElement('img');
        img.src = 'photos/rose.png';
        img.classList.add('flower');
        picContainerRose.append(img);
        sum += 150;
    }
    let picContainerLily = document.createElement('div');
    porudzbina.append(picContainerLily);
    for(let i=1; i<=ljiljanNo; i++) {
        let img = document.createElement('img');
        img.src = 'photos/lily.png';
        img.classList.add('flower');
        picContainerLily.append(img);
        sum += 120;
    }
    let picContainerGarbera = document.createElement('div');
    porudzbina.append(picContainerGarbera);
    for(let i=1; i<=gerberNo; i++) {
        let img = document.createElement('img');
        img.src = 'photos/gerbera.png';
        img.classList.add('flower');
        picContainerGarbera.append(img);
        sum += 70;
    }

    if(bombonjeraCheck.checked) {
        let poklon = document.createElement('p');
        poklon.textContent = '+ bombonjera';
        porudzbina.append(poklon);
        sum += 500;
    }

    if(cokoladaCheck.checked) {
        let poklon = document.createElement('p');
        poklon.textContent = '+ čokolada';
        porudzbina.append(poklon);
        sum += 500;
    }

    if(sampanjacCheck.checked) {
        let poklon = document.createElement('p');
        poklon.textContent = '+ šampanjac';
        porudzbina.append(poklon);
        sum += 500;
    }
    if(sum == 0) {
        let cena = document.createElement('p');
        cena.setAttribute('id','cena');
        cena.textContent = `Niste odabrali proizvode.`;
        porudzbina.append(cena);
    }
    else {
        let placanje = document.querySelector(`input[type="radio"]:checked`).value;
        if(placanje == 1) {
            let cena = document.createElement('p');
            cena.setAttribute('id','cena');
            cena.textContent = `Cena je ${sum} dinara.`;
            porudzbina.append(cena);
        }
        else {
            if(sum > 2000) {
                let cena = document.createElement('p');
                let cenaPopust = document.createElement('p');
                cena.setAttribute('id','cena');
                cenaPopust.setAttribute('id','cp');
                cena.textContent = `Cena bez popusta je ${sum} dinara.`;
                cenaPopust.textContent = `Cena sa popustom je ${sum*0.9} dinara.`;
                porudzbina.append(cena, cenaPopust);
            }
            else {
                let cena = document.createElement('p');
                cena.setAttribute('id','cena');
                cena.textContent = `Cena je ${sum} dinara.`;
                porudzbina.append(cena);
            }
        }
    }
    btnSubmit.disabled = true;
});

btnReset.addEventListener('click', () => {
    location.reload();
});