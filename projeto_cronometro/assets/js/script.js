const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let tempo;

function criaSegundos(segundos) {
    const data = new Date(segundos * 1000) //Multiplica os segundos por mil milesegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarRelogio() {
    clearInterval(tempo);
    relogio.classList.remove('pausado', 'piscar')
    tempo = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    }, 1000)
}

function pausarRelogio() {
    clearInterval(tempo);
    relogio.classList.add('pausado', 'piscar');
}

function zerarRelogio() {
    clearInterval(tempo);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado', 'piscar');
    segundos = 0;
}

iniciar.addEventListener('onclick', iniciarRelogio);
pausar.addEventListener('onclick', pausarRelogio);
zerar.addEventListener('onclick', zerarRelogio);100