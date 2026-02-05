// Select elements
const inputBox = document.querySelector("input");
const addBtn = document.querySelector("button");
const listContainer = document.createElement("ul");

document.querySelector(".todo-container").appendChild(listContainer);

// ADD TASK
addBtn.addEventListener("click", function () {
    if (inputBox.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputBox.value;

    // DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    listContainer.appendChild(li);

    inputBox.value = "";
});
