// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Function to add a TODO via API
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a valid TODO!");
        return;
    }

    const newTodo = {
        title: todoText,
        completed: false,
        userId: 1,
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(todo => {
        renderTodo(todo);
        todoInput.value = "";
    })
    .catch(error => console.error("Error adding TODO:", error));
}

// Function to render a TODO item
function renderTodo(todo) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    if (todo.completed) {
        li.classList.add("completed");
    }
    todoList.appendChild(li);
}

// Event listener for adding TODO
addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
