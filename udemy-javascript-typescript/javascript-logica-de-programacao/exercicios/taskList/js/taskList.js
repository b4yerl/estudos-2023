// Primeira versão do código, feita antes de assistir a aula
function main() {
  const addBtn = document.querySelector('#add');
  const input = document.querySelector('#new-task');
  const taskList = document.querySelector('#task-list');
  let tasksArr = []

  addBtn.addEventListener('click', () => {
    if(input.value != '') {
      tasksArr.push(input.value);
      updateHTML(tasksArr, taskList);
    }
  })

  // Somente dispara quando o clique ocorre no botão de delete
  document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
      tasksArr.splice(e.target.value, 1);
      updateHTML(tasksArr, taskList)
    }
  })
}
// Reseta a lista adicionando todos os elementos do array
// Adiciona também um botão com o index do item como valor
function updateHTML(arr, list) {
  list.innerHTML = '';
  for(let i in arr) {
    list.innerHTML += `
    <li>${arr[i]}  <button value="${i}" class="delete">Remover tarefa</button></li>
    `
  }
}
main();
