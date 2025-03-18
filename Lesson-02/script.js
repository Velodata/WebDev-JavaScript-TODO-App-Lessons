// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Function to add a TODO item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;
    
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    
    todoInput.value = ""; // Clear input field
}

// Event listener for button click
addTodoButton.addEventListener("click", addTodo);
