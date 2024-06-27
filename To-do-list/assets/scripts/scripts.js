const btn_add_new_note = document.querySelector("#btn-add-new-note");

function preventDefault(event){
    event.preventDefault();
}

function createNewNote(event){
    preventDefault(event);
    const newLi = createNewLi();

    selectPriority(newLi);

}

function createNewLi(){
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `    <li">
                            <div class="notes">
                                <input type="checkbox" name="checkbox-to-do" id="checkbox-to-do">
                                <textarea id="multilineInput" name="multilineInput" rows="4" cols="50" maxlength="80" placeholder="Escreva sua nota"></textarea>
                            </div>
                            <div class="group-buttons">
                                <button class="btn-save">Salvar</button>
                                <button class="btn-edit">Editar</button>
                                <button class="btn-delete">Excluir</button>
                                <button class="btn-return">Voltar</button>
                            </div>
                        </li>
                        `
                ul.append(li)
                return li;
}

function selectPriority(li){
    const selectPriority = document.querySelector('input[name="priority"]:checked').value;

    if(selectPriority === "low-priority"){
        li.classList.add("low-priority");
    } else if(selectPriority === "middle-priority"){
        li.classList.add("middle-priority");
    }else if(selectPriority === "high-priority"){
        li.classList.add("high-priority");
    }
}

btn_add_new_note.addEventListener("click", createNewNote);