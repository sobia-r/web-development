document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
    // Load tasks from localStorage on page load
    loadTasks();
  
    addTaskBtn.addEventListener('click', addTask);
  
    // Add task on pressing "Enter" key
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const taskItem = createTaskItem(taskText);
      taskList.appendChild(taskItem);
  
      saveTask(taskText);
      taskInput.value = '';
    }
  
    // Create a task item with delete and complete functionality
    function createTaskItem(text) {
      const li = document.createElement('li');
      li.textContent = text;
  
      // Complete task toggle
      li.addEventListener('click', function () {
        this.classList.toggle('completed');
      });
  
      // Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.classList.add('delete-btn');
      deleteBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        deleteTask(this.parentNode.textContent.replace('Delete', ''));
        this.parentNode.remove();
      });
  
      li.appendChild(deleteBtn);
      return li;
    }
  
    // Save task to localStorage
    function saveTask(task) {
      let tasks = getTasks();
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Delete task from localStorage
    function deleteTask(task) {
      let tasks = getTasks();
      tasks = tasks.filter(t => t !== task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Load tasks from localStorage
    function loadTasks() {
      let tasks = getTasks();
      tasks.forEach(task => {
        const taskItem = createTaskItem(task);
        taskList.appendChild(taskItem);
      });
    }
  
    // Get tasks from localStorage
    function getTasks() {
      const tasks = localStorage.getItem('tasks');
      return tasks ? JSON.parse(tasks) : [];
    }
  });
  