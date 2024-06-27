const container_general = document.querySelector("#container-general");
const priority_group = document.querySelector("#priority-group");
const btn_add_new_note = document.querySelector("#btn-add-new-note");
const ul = document.querySelector("ul");
const li = document.createElement("li");
const multilineInput = document.querySelector("#multilineInput");
const btn_save = document.querySelector(".btn-save");
const btn_edit = document.querySelector(".btn-edit");
const btn_delete = document.querySelector(".btn-delete");
const btn_return = document.querySelector(".btn-return");

multilineInput.disabled = true;

function prevent_default(event) {
    event.preventDefault();
}

function createNewNote(event){
    event.preventDefault(event);
    createNewLi();
    editNote();
}

function createNewLi(){
    
    li.classList.add("low-priority");
    li.innerHTML = 
    `
        <li>
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
    ul.appendChild(li);
}

function selectPriorityGroup(){
    console.log(priority-group);
}

function editNote(){
    multilineInput.disabled = false;
    multilineInput.focus();
    multilineInput.select();

    console.log(btn_edit);

}

btn_add_new_note.addEventListener("click", createNewNote);
btn_edit.addEventListener("click", editNote);