const btn_add_new_note = document.querySelector("#btn-add-new-note");
const task_state = {};

function preventDefault(event) {
  event.preventDefault();
}

function createNewNote(event) {
  preventDefault(event);
  const newLi = createNewLi();
  selectPriority(newLi);

  const checkbox = newLi.querySelector('input[type="checkbox"]');
  const text_area = newLi.querySelector("textarea");
  text_area.focus();
  text_area.select();
 
  checkbox.addEventListener("change", (event) =>
    verifyCheckboxComplete(event, newLi, text_area)
  );

  editAndSave(checkbox, text_area);
}

function createNewLi() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.innerHTML = `  <div class="notes">
                        <input type="checkbox" name="checkbox-to-do" id="checkbox-to-do">
                        <textarea id="multilineInput" name="multilineInput" rows="4" cols="50" maxlength="80" placeholder="Escreva sua nota"></textarea>
                    </div>
                    <div class="group-buttons">
                        <button class="btn-save">Salvar</button>
                        <button class="btn-edit">Editar</button>
                        <button class="btn-delete">Excluir</button>
                        <button class="btn-return">Voltar</button>
                    </div>
                 `;
  ul.append(li);
  return li;
}

function selectPriority(newLi) {
  const selectPriority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;

  newLi.classList.add(selectPriority)
}

function verifyCheckboxComplete(event, newLi, text_area) {
    if(event.target.type === "checkbox"){
        const checkbox = event.target;
        const isChecked = checkbox.checked;

        const taksID = newLi.dataset.id || Date.now();
        newLi.dataset.id = taksID;

        if(isChecked){
            task_state[taksID] = {
                priority: newLi.classList[0],
                text: text_area.value,
            };
            newLi.classList.remove("low-priority", "middle-priority", "high-priority");
            newLi.classList.add("completed");
            checkbox.disabled = true;
        } else{
            if(task_state[taksID]){
                newLi.classList.remove("completed");
                newLi.classList.add(task_state[taksID].priority);
                task_state.value = task_state[taksID].text;
            }
        }
    }else{
        console.log("O evento não foi disparado por um checkbox");
    }
}

function editAndSave(checkbox, text_area, event, newLi){
  const btn_edit = document.querySelector(".btn-edit");
  btn_edit.addEventListener("click", () => {
    text_area.disabled = false;
    text_area.focus();
    text_area.select();
    console.log('btn_edit clicado');
  });

  const btn_save = document.querySelector(".btn-save");
  btn_save.addEventListener("click", (event) => {
    
      text_area.disabled = true;
      console.log("btn_save clicado");
   
  }) 
} 

btn_add_new_note.addEventListener("click", createNewNote);


