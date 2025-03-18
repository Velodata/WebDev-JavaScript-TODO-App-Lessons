// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Function to add a TODO item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a valid TODO!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = todoText;
    li.addEventListener("click", toggleComplete);
    todoList.appendChild(li);

    todoInput.value = ""; // Clear input field
}

// Function to toggle TODO completion
function toggleComplete(event) {
    event.target.classList.toggle("completed");
}

// Event listeners
addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
