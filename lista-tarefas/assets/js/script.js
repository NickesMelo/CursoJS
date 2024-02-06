const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaTarefa() {
    if (verificaInput(inputTarefa.value)) {
        const li = criaLi();
        li.innerText = inputTarefa.value;
        tarefas.appendChild(li);
        limpaInput();
        criaBotaoApagar(li)
        salvarTarefa();
    }
}

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //Replace modifica o texto //trin() remove espaços do array
        listaDeTarefas.push(tarefaTexto);
    }

}

function limpaInput() {
    inputTarefa.value = ''; //Limpa o input
    inputTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function botaoApagar(e) {
    const elementoClicado = e.target;

    if (elementoClicado.classList.contains('apagar')) {
        if (confirm('Este item será excluído!')) {
            elementoClicado.parentNode.remove();
        } else {
            console.log('Ação cancelada pelo usuário.');
        }
    }
}


function verificaInput(texto) {
    if (!texto) {
        alert("O input está vazio. Por favor, insira um valor.");
        return false;
    }
    return true;
};

function verificaTecla(e) {
    if (e.keyCode === 13) {
        criaTarefa();
    }
}



btnTarefa.addEventListener('click', criaTarefa);
inputTarefa.addEventListener('keypress', verificaTecla);
document.addEventListener('click', botaoApagar)
