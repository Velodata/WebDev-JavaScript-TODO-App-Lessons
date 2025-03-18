// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");
const statusMessage = document.getElementById("status-message");
const loadingIndicator = document.getElementById("loading");

// Function to display messages
function showMessage(message, isError = false) {
    statusMessage.textContent = message;
    statusMessage.style.color = isError ? "red" : "green";
    setTimeout(() => { statusMessage.textContent = ""; }, 3000);
}

// Function to show/hide loading indicator
function setLoading(isLoading) {
    loadingIndicator.style.display = isLoading ? "block" : "none";
}

// Function to add a TODO via API with error handling
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        showMessage("Please enter a valid TODO!", true);
        return;
    }

    const newTodo = {
        title: todoText,
        completed: false,
        userId: 1,
    };

    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to add TODO");
        }
        return response.json();
    })
    .then(todo => {
        renderTodo(todo);
        todoInput.value = "";
        showMessage("TODO added successfully!");
    })
    .catch(error => showMessage(error.message, true))
    .finally(() => setLoading(false));
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
