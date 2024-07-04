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

  const btn_save = newLi.querySelector(".btn-save");
  const btn_edit = newLi.querySelector(".btn-edit");
  const btn_delete = newLi.querySelector(".btn-delete");

  btn_save.addEventListener("click", () => {
    text_area.disabled = true;
    btn_save.classList.remove("display-block");
    btn_save.classList.add("display-none");
    btn_edit.classList.add("display-block");
    btn_delete.classList.add("display-block");
    console.log("btn_save clicado");
  });

  btn_edit.addEventListener("click", () => {
    text_area.disabled = false;
    text_area.focus();
    text_area.select();
    btn_save.classList.remove("display-none");
    btn_save.classList.add("display-block");
    btn_edit.classList.remove("display-block");
    btn_edit.classList.add("display-none");
    console.log("btn_edit clicado");
  });

  btn_delete.addEventListener("click", () => {
    newLi.remove();
    console.log("btn_delete clicado");
  });

  checkbox.addEventListener("change", (event) =>
    verifyCheckboxComplete(event, newLi, text_area)
  );
}

function createNewLi() {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.innerHTML = `  
    <div class="notes">
      <input type="checkbox" name="checkbox-to-do" id="checkbox-to-do">
      <textarea id="multilineInput" name="multilineInput" rows="4" cols="50" maxlength="80" placeholder="Escreva sua nota"></textarea>
    </div>
    <div class="group-buttons">
      <button class="btn-save display-block">Salvar</button>
      <button class="btn-edit display-none">Editar</button>
      <button class="btn-delete display-block">Excluir</button>
    </div>
  `;
  ul.append(li);
  return li;
}

function selectPriority(newLi) {
  const selectedPriority = document.querySelector(
    'input[name="priority"]:checked'
  ).value;
  newLi.classList.add(selectedPriority);
}

function verifyCheckboxComplete(event, newLi, text_area) {
  if (event.target.type === "checkbox") {
    const checkbox = event.target;
    const isChecked = checkbox.checked;

    const taskID = newLi.dataset.id || Date.now();
    newLi.dataset.id = taskID;

    if (isChecked) {
      task_state[taskID] = {
        priority: newLi.classList[0],
        text: text_area.value,
      };
      newLi.classList.remove("low-priority", "middle-priority", "high-priority");
      newLi.classList.add("completed");
      text_area.disabled = true;
      checkbox.disabled = true;
    } else {
      if (task_state[taskID]) {
        newLi.classList.remove("completed");
        newLi.classList.add(task_state[taskID].priority);
        text_area.value = task_state[taskID].text;
        text_area.disabled = false;
      }
    }
  } else {
    console.log("O evento não foi disparado por um checkbox");
  }
}

btn_add_new_note.addEventListener("click", createNewNote);
