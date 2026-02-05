// Select elements
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.createElement("ul");

document.body.appendChild(list);

// Load saved tasks
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach(addTaskToDOM);

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("li span").forEach(li => {
        tasks.push(li.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToDOM(taskText) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", function () {
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
}

// Add task on button click
addBtn.addEventListener("click", addTask);

// Add task on ENTER key
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    addTaskToDOM(taskText);
    saveTasks();

    input.value = "";
}

