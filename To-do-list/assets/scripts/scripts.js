const btn_add_new_note = document.querySelector("#btn-add-new-note");

function preventDefault(event) {
  event.preventDefault();
}

function createNewNote(event) {
  preventDefault(event);
  const newLi = createNewLi();

  selectPriority(newLi);

  const checkbox = newLi.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", (event) => verifyCheckboxComplete(event, newLi));
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

  if (selectPriority === "low-priority") {
    newLi.classList.add("low-priority");
  } else if (selectPriority === "middle-priority") {
    newLi.classList.add("middle-priority");
  } else if (selectPriority === "high-priority") {
    newLi.classList.add("high-priority");
  }
}

function verifyCheckboxComplete(event, newLi) {

    const activate_priority = selectPriority(newLi);
    
  if (event.target.type === "checkbox") {
    //Checks the selected target
    const checkbox = event.target; //Selected target
    const isChecked = checkbox.checked; //Target don't selected

    if (isChecked) {
        newLi.classList.remove("low-priority", "middle-priority", "high-priority");
        newLi.classList.add("completed");
    } else {
       activate_priority;
    }
  } else {
    console.log("Evento não disparado");
  }
}

btn_add_new_note.addEventListener("click", createNewNote);
