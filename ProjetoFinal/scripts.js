//Chama a função que carrega as tarefas salvas
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

let tasks = [];
let currentTaskIndex = null;

//Abre a janela de tarefa
function openTaskModal(index = null) {
    document.getElementById('task-modal').style.display = 'block';
    if (index !== null) {
        const task = tasks[index];
        document.getElementById('nameTask').innerText = task.nameTask;
        document.getElementById('description').value = task.description;
        document.getElementById('responsibles').value = task.responsibles;
        document.getElementById('priority').value = task.priority;
        document.getElementById('status').value = task.status;
        document.getElementById('due-date').value = task.dueDate;
        currentTaskIndex = index;
    } else {
        currentTaskIndex = null;
        document.getElementById('task-form').reset();
    }
}

//Fecha a janela de tarefa
function closeTaskModal() {
    document.getElementById('task-modal').style.display = 'none';
}

//Abre a confirmação de exclusão da tarefa
function openDeleteConfirmation(index) {
    document.getElementById('delete-confirmation').style.display = 'block';
    currentTaskIndex = index;
}

//Fecha a confirmação de exclusão da tarefa
function closeDeleteConfirmation() {
    document.getElementById('delete-confirmation').style.display = 'none';
}

//Salva uma nova tarefa ou atualiza uma tarefa aberta
function saveTask() {
    const nameTask = document.getElementById('nameTask').innerText;
    const description = document.getElementById('description').value;
    const responsibles = document.getElementById('responsibles').value;
    const priority = document.getElementById('priority').value;
    const status = document.getElementById('status').value;
    const dueDate = document.getElementById('due-date').value;

    const task = {
        nameTask,
        description,
        responsibles,
        priority,
        status,
        dueDate,
        createdAt: new Date().toISOString()
    };

    if (currentTaskIndex === null) {
        tasks.push(task);
    } else {
        tasks[currentTaskIndex] = task;
    }

    saveTasks();
    closeTaskModal();
    renderTasks();
}

//Exclui a tarefa selecionada
function deleteTask() {
    if (currentTaskIndex !== null) {
        tasks.splice(currentTaskIndex, 1);
        saveTasks();
        closeDeleteConfirmation();
        closeTaskModal();
        renderTasks();
    }
}

//Confirma a exclusão da tarefa
function confirmDelete() {
    deleteTask();
}

//Cancela a exclusão da tarefa
function cancelDelete() {
    closeDeleteConfirmation();
}

//Salva a lista de tarefas no armazenamento local
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Carrega as tarefas salvas do armazenamento local
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    renderTasks();
}

//Renderiza as tarefas na interface, exibindo na coluna referente ao seu status
function renderTasks() {
    const pendingTasks = document.getElementById('tasks-pending');
    const inProgressTasks = document.getElementById('tasks-in-progress');
    const completedTasks = document.getElementById('tasks-completed');

    pendingTasks.innerHTML = '';
    inProgressTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    const today = new Date();
    const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = `task ${task.status}`;
        taskElement.draggable = true;
        taskElement.ondragstart = (event) => drag(event, index);

        const dueDate = new Date(task.dueDate);
        if (task.status !== 'completed' && (dueDate - today <= oneWeekInMilliseconds || dueDate < today)) {
            taskElement.classList.add('overdue');
        }

        taskElement.innerHTML = `
            <h2>${task.nameTask}</h2>
            <h3>${task.description}</h3>
            <p>${task.responsibles}</p>
        `;

        taskElement.addEventListener('click', () => {
            openTaskModal(index);
        });

        switch (task.status) {
            case 'pending':
                pendingTasks.appendChild(taskElement);
                break;
            case 'in-progress':
                inProgressTasks.appendChild(taskElement);
                break;
            case 'completed':
                completedTasks.appendChild(taskElement);
                break;
        }
    });
}

//Permite arrastar um card de tarefa
function drag(event, index) {
    event.dataTransfer.setData('text/plain', index);
}

//Permite soltar um card arrastado
function allowDrop(event) {
    event.preventDefault();
}

//Atualiza o status da tarefa para a coluna que foi arrastado o card e renderiza a lista de tarefas
function drop(event, status) {
    event.preventDefault();
    const index = event.dataTransfer.getData('text/plain');
    tasks[index].status = status;
    saveTasks();
    renderTasks();
}