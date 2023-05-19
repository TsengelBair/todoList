document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let todoInput = document.getElementById("todo-input");
    let todoList = document.getElementById("todo-list");

    if (todoInput.value.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    let task = document.createElement("li");
    task.innerText = todoInput.value;
    task.addEventListener("click", function () {
      this.classList.toggle("done");
    });
    todoList.appendChild(task);

    todoInput.value = "";
  });
