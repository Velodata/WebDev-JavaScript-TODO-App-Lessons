# Lesson 09: Updating & Deleting TODOs via API

## 🎯 Objectives
By the end of this lesson, you will:
- Learn how to **update** a TODO using a `PUT` request.
- Learn how to **delete** a TODO using a `DELETE` request.
- Ensure the API correctly processes updates and deletions.

---

## 📂 **Project Setup**
Continue working from `lesson08/`, or copy your files into `lesson09/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson09/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 🔄 **Step 1: Modify `script.js` to Update & Delete TODOs**
Update your JavaScript file to **update and delete TODOs** via API:
```js
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
        headers: { "Content-Type": "application/json" }
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
    
    // Add Update button
    const updateButton = document.createElement("button");
    updateButton.textContent = "Mark Complete";
    updateButton.classList.add("update-btn");
    updateButton.addEventListener("click", () => updateTodo(todo.id, li));
    
    // Add Delete button
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
        headers: { "Content-Type": "application/json" }
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

// Event listener for adding TODO
addTodoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
```

This script:
✅ **Marks a TODO as completed** using a `PUT` request.  
✅ **Deletes a TODO** using a `DELETE` request.  
✅ **Displays buttons** to update and delete TODOs.

---

## 🚀 **Your Task**
✅ Click **Mark Complete** to update a TODO.  
✅ Click **Delete** to remove a TODO.  
✅ Check the **browser console** to confirm API requests.  

---

## ⚡ **Bonus Challenge**
- Disable the **Mark Complete** button after clicking it.
- Show a confirmation **before deleting** a TODO.
- Display a message when there are **no TODOs left**.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Click **Mark Complete** or **Delete** on a TODO.
4. Confirm that updates and deletions are handled correctly.

---

## 🎯 **Expected Outcome**
By the end of this lesson:
✅ Clicking **Mark Complete** updates the TODO in the API.  
✅ Clicking **Delete** removes the TODO.  
✅ API requests are handled smoothly.

---

## ✅ **Mark Lesson 09 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 10](LESSON10.md)!

---

Happy Coding! 🚀

