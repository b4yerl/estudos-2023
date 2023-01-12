const addBtn = document.querySelector('#add');
const input = document.querySelector('#new-task');

// Event listeners que controlam a aplicação

addBtn.addEventListener('click', () => {
  if(!input.value) {
    return;
  }
  newListItem(input.value);
});

document.addEventListener('keypress', e => {
  const element = e.target
  const keyPressed = e.key;
  if (element === input && keyPressed === 'Enter') {
    newListItem(input.value)
    resetInput()
  }
});

document.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    deleteTask(e.target);
  }
});

// Funções para gerar um novo item e adicioná-lo à DOM tree
function newListItem(text) {
  const taskList = document.querySelector('#task-list');
  const newLi = document.createElement('li')
  const deleteBtn = generateDeleteBtn();

  newLi.innerText = text + '  ';
  
  taskList.appendChild(newLi);
  newLi.appendChild(deleteBtn);

  resetInput();
  saveTasks();
}

function generateDeleteBtn() {
  const btn = document.createElement('button');
  btn.setAttribute('class', 'delete');
  btn.innerText = 'Apagar esta tarefa'

  return btn;
}

// Função limpa o input e reseta o cursor
function resetInput() {
  input.value = ''
  input.focus();
}

// Deletar a tarefa usando o conceito de parent e child
function deleteTask(btn) {
  btn.parentNode.remove()
  saveTasks()
}

// Gerar um array com as tarefas atuais e salvar a string JSON no localStorage

function saveTasks() {
  let tasksArray = []
  const allListItems = document.querySelectorAll('li');
  
  for(let item of allListItems) {
    let task = item.innerText;
    task = task.replace('Apagar esta tarefa', '').trim();
    tasksArray.push(task)
  }
  
  tasksToLocalStorage(tasksArray);
}

function tasksToLocalStorage(arr) {
  const jsonTasks = JSON.stringify(arr);
  localStorage.setItem('taskList', jsonTasks);
}

// Reverte o processo do json para array e carrega a lista ao abrir a página

function recoverTasksFromLocalStorage() {
  const jsonTasks = localStorage.getItem('taskList');
  const tasksArray = JSON.parse(jsonTasks);

  for(let task of tasksArray) {
    newListItem(task)
  }
}

recoverTasksFromLocalStorage()
