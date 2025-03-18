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

// Function to toggle TODO completion and update localStorage
function toggleComplete(event) {
    event.target.classList.toggle("completed");
    updateTodoInLocalStorage(event.target.textContent);
}

// Save TODO to localStorage
function saveTodoToLocalStorage(todo) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Load TODOs from localStorage
function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach(renderTodo);
}

// Update completion state in localStorage
function updateTodoInLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.map(todo => {
        if (todo.text === todoText) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Event listeners
addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
