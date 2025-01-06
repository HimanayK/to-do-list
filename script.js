
function createTask() {
    const taskInput = document.getElementById("create-task");
    const taskList = document.getElementById("task-list");
    if(taskInput.value) {
        const listItem = document.createElement("li");
        const para = document.createElement('p');
        para.textContent = taskInput.value;
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done'
        doneButton.className = 'done-button';
        doneButton.onclick = () => listItem.remove();
        listItem.append(para, doneButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }
}