const container_general = document.querySelector("#container-general");
const btn_add_new_note = document.querySelector("#btn-add-new-note");
const ul = document.querySelector("ul");
const priority_group = document.querySelector("#priority-group");
const save = document.querySelector();

function prevent_default(){
    prevent_default();
}

function create_new_note(event){
    event.preventDefault();
    create_new_li();
    console.log("btn add clicado");
    
}

function create_new_li(){
    const li = document.createElement("li");
    li.innerHTML = `
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

function select_priority_group(){

}

btn_add_new_note.addEventListener("click", create_new_note);