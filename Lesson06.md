# Lesson 06: Editing & Deleting TODOs

## 🎯 Objectives
By the end of this lesson, you will:
- Add the ability to **edit** existing TODOs.
- Implement a **delete** button to remove TODOs.
- Ensure changes persist in `localStorage`.

---

## 📂 **Project Setup**
Continue working from `lesson05/`, or copy your files into `lesson06/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson06/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 🖌 **Step 1: Update `script.js` to Support Editing & Deleting**
Modify `script.js` to allow users to **edit** and **delete** TODOs:
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
    
    // Add Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");
    editButton.addEventListener("click", () => editTodo(todo.text, li));
    
    // Add Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteTodo(todo.text, li));
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.addEventListener("click", toggleComplete);
    todoList.appendChild(li);
}

// Function to edit a TODO
function editTodo(oldText, li) {
    const newText = prompt("Edit your TODO:", oldText);
    if (newText && newText.trim() !== "") {
        li.firstChild.textContent = newText;
        updateTodoInLocalStorage(oldText, newText);
    }
}

// Function to delete a TODO
function deleteTodo(todoText, li) {
    li.remove();
    removeTodoFromLocalStorage(todoText);
}

// Function to toggle TODO completion
function toggleComplete(event) {
    if (!event.target.classList.contains("edit-btn") && !event.target.classList.contains("delete-btn")) {
        event.target.classList.toggle("completed");
        updateCompletionInLocalStorage(event.target.firstChild.textContent);
    }
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
function updateCompletionInLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.map(todo => {
        if (todo.text === todoText) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Update TODO text in localStorage
function updateTodoInLocalStorage(oldText, newText) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.map(todo => {
        if (todo.text === oldText) {
            todo.text = newText;
        }
        return todo;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Remove TODO from localStorage
function removeTodoFromLocalStorage(todoText) {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos = todos.filter(todo => todo.text !== todoText);
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
✅ Allows users to **edit** TODOs via a prompt.  
✅ Adds a **Delete** button to remove TODOs.  
✅ Ensures changes persist in `localStorage`.  
✅ Prevents accidental completion when clicking Edit/Delete buttons.

---

## 🚀 **Your Task**
✅ Click the **Edit** button to modify a TODO.  
✅ Click the **Delete** button to remove a TODO.  
✅ Ensure edits and deletions persist after refresh.

---

## ⚡ **Bonus Challenge**
- Replace the `prompt()` edit method with an inline text input.
- Animate the removal of a TODO with a fade-out effect.
- Add a confirmation before deleting a TODO.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Test editing and deleting TODOs.
4. Refresh the page to confirm persistence.

---

## 🎯 **Expected Outcome**
By the end of this lesson:
✅ Clicking **Edit** modifies the TODO text.  
✅ Clicking **Delete** removes the TODO.  
✅ Changes persist across page refreshes.

---

## ✅ **Mark Lesson 06 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 07](LESSON07.md)!

---

Happy Coding! 🚀

