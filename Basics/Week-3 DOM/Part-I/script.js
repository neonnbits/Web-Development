function addTask(){
    let task = document.getElementById("task");
    let list = document.getElementById("list");
    if(!task || !list){
        console.error("task or list not found!");
        return;
    }
    if(task.value.trim() === ""){
        alert("Task cannot be empty");
        return;
    }

    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    let listItem = document.createElement("li");
    listItem.textContent = task.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => {
        list.removeChild(taskItem);
    }

    taskItem.appendChild(listItem);
    taskItem.appendChild(deleteBtn);

    list.appendChild(taskItem);

    task.value = "";
}

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById("task");

    if (taskInput) {
        taskInput.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                addTask(); 
            }
        });
    } else {
        console.error("Element with id 'task' not found!");
    }
});