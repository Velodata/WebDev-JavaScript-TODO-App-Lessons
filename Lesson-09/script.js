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
    li.dataset.id = todo.id;
    if (todo.completed) {
        li.classList.add("completed");
    }

    const updateButton = document.createElement("button");
    updateButton.textContent = "Mark Complete";
    updateButton.classList.add("update-btn");
    updateButton.addEventListener("click", () => updateTodo(todo.id, li));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteTodo(todo.id, li));

    li.appendChild(updateButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}

// Function to update a TODO via API
function updateTodo(todoId, li) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: "PUT",
        body: JSON.stringify({ completed: true }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(() => {
        li.classList.add("completed");
    })
    .catch(error => console.error("Error updating TODO:", error));
}

// Function to delete a TODO via API
function deleteTodo(todoId, li) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: "DELETE"
    })
    .then(() => {
        li.remove();
    })
    .catch(error => console.error("Error deleting TODO:", error));
}

// Event listeners
addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
