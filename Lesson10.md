# Lesson 10: Error Handling & User Feedback

## 🎯 Objectives
By the end of this lesson, you will:
- Learn how to handle **API errors** and **network failures**.
- Provide **user feedback** for successful and failed actions.
- Improve the **user experience** with loading indicators.

---

## 📂 **Project Setup**
Continue working from `lesson09/`, or copy your files into `lesson10/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson10/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 🖌 **Step 1: Update `index.html` to Include a Feedback Section**
Modify your HTML file to add a **loading spinner** and an **error message**:
```html
<body>
    <h1>TODO App</h1>
    <p id="status-message"></p>
    <div id="loading" style="display: none;">Loading...</div>
    <input type="text" id="todo-input" placeholder="Enter a new TODO">
    <button id="add-todo">Add TODO</button>
    <ul id="todo-list"></ul>
    <script src="script.js"></script>
</body>
```

---

## 📡 **Step 2: Modify `script.js` to Handle Errors and Show Feedback**
Update `script.js` to display **loading states** and **error messages**:
```js
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

// Function to add a TODO via API
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
        headers: { "Content-Type": "application/json" }
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
```

This script:
✅ Shows a **status message** for successful and failed actions.  
✅ Displays a **loading indicator** while waiting for the API response.  
✅ Catches **errors** if the API request fails and displays an error message.

---

## 🚀 **Your Task**
✅ Add a TODO and verify that success and error messages appear.  
✅ Simulate an API failure (e.g., by disconnecting from the internet) and check if an error message is displayed.  
✅ Confirm that the loading indicator appears while waiting for a response.

---

## ⚡ **Bonus Challenge**
- Add a **retry button** if the API request fails.
- Show a different **color message** for warnings.
- Store and display error logs for debugging.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Try adding TODOs and observe the feedback messages.
4. Simulate an error and confirm that it is handled correctly.

---

## 🎯 **Expected Outcome**
By the end of this lesson:
✅ Success and error messages appear when needed.  
✅ A loading indicator shows while fetching data.  
✅ API failures are handled properly.

---

## ✅ **Mark Lesson 10 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 11](LESSON11.md)!

---

Happy Coding! 🚀

