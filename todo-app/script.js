// Select elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task function
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Click events (check or delete)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save to browser
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
