// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Insert Advanced Code here...


// Event listeners
addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
