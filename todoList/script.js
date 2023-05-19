document
  .getElementById("todo-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var todoInput = document.getElementById("todo-input");
    var todoList = document.getElementById("todo-list");

    if (todoInput.value.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    var task = document.createElement("li");
    task.innerText = todoInput.value;
    task.addEventListener("click", function () {
      this.classList.toggle("done");
    });
    todoList.appendChild(task);

    todoInput.value = "";
  });
