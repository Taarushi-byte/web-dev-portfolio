// Select elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Load saved tasks on page load
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(createTask);
};

// Add task button
addBtn.addEventListener("click", addTask);

// Enter key support
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const text = input.value.trim();
  if (text === "") return;

  createTask(text);
  saveTasks();
  input.value = "";
}

function createTask(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "❌";
  del.onclick = function () {
    li.remove();
    saveTasks();
  };

  li.appendChild(del);
  list.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.firstChild.textContent);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

