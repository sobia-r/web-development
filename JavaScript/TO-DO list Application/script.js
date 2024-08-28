const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTask);

function addTask() {
    const task = inputField.value.trim();

    if (task === '') {
        alert('Please enter a task');
        return;
    }

    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    inputField.value = '';
}
