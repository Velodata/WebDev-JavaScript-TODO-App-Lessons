// Select elements
const todoList = document.getElementById("todo-list");
const fetchTodosButton = document.getElementById("fetch-todos");

// Function to fetch TODOs from an API
function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => renderTodo(todo));
        })
        .catch(error => console.error("Error fetching TODOs:", error));
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

// Event listener for button click
fetchTodosButton.addEventListener("click", fetchTodos);
