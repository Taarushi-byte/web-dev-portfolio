// Select elements
const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.createElement("ul");

document.body.appendChild(list);

addBtn.addEventListener("click", function () {
    const taskText = input.value.trim();

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
});
