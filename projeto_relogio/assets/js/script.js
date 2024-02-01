const iniciar = document.querySelector('iniciar');
//const pausar = document.querySelector('pausar');
//const zerar = document.querySelector('zerar');


function atualizarRelogio() {
    // lógica para atualizar a exibição do temporizador
    // Lógica de exemplo para atualizar a exibição do temporizador:
    const relogio = document.querySelector('.relogio');
    // Atualize o tempo no elemento relogioElement
    // Exemplo: relogioElement.textContent = 'Tempo atualizado';
};

function iniciarRelogio() {
    setInterval(atualizarRelogio, 1000);
}


iniciar.addEventListener('onclick', iniciarRelogio());
//pausar.addEventListener('onclick', pausarRelogio());
//zerar.addEventListener('onclick', zerarRelogio());
