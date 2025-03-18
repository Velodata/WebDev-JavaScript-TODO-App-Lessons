# Lesson 05: Saving TODOs in Local Storage

## 🎯 Objectives
By the end of this lesson, you will:
- Learn how to store TODOs in `localStorage`.
- Persist TODOs across page refreshes.
- Save the completed state of each TODO.

---

## 📂 **Project Setup**
Continue working from `lesson04/`, or copy your files into `lesson05/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson05/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 🖌 **Step 1: Modify `script.js` to Use Local Storage**
Update `script.js` to save and retrieve TODOs from `localStorage`:
```js
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

// Function to toggle completion and update localStorage
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
```

This script:
✅ Saves TODOs to `localStorage`.  
✅ Loads TODOs from `localStorage` when the page refreshes.  
✅ Toggles and updates completion state in `localStorage`.  

---

## 🚀 **Your Task**
✅ Refresh the page and confirm that TODOs persist.  
✅ Ensure completed TODOs remain completed after refresh.  
✅ Verify that clicking a TODO updates `localStorage`.

---

## ⚡ **Bonus Challenge**
- Add a **Delete** button next to each TODO.
- Ensure deleting a TODO also removes it from `localStorage`.
- Add a **Clear All** button to reset `localStorage`.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Add TODOs and refresh the page.
4. Confirm that TODOs persist and maintain their completed state.

---

## 🎯 **Expected Outcome**
By the end of this lesson:
✅ TODOs remain even after refreshing the page.  
✅ Completed TODOs maintain their state after refresh.  
✅ Clicking TODOs updates their completion status in `localStorage`.

---

## ✅ **Mark Lesson 05 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 06](LESSON06.md)!

---

Happy Coding! 🚀

