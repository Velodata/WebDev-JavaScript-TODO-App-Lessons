// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Load TODOs from localStorage on page load
document.addEventListener("DOMContentLoaded", loadTodos);

// Function to add a TODO item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a valid TODO!");
        return;
    }

    const todo = { text: todoText, completed: false };
    saveTodoToLocalStorage(todo);
    renderTodo(todo);
    todoInput.value = "";
}

// Function to render a TODO item
function renderTodo(todo) {
    const li = document.createElement("li");
    li.textContent = todo.text;
    if (todo.completed) {
        li.classList.add("completed");
    }
    li.addEventListener("click", toggleComplete);
    todoList.appendChild(li);
}

// Insert Advanced Code here....

// Event listeners
addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
