# Lesson 08: Adding a TODO via API

## 🎯 Objectives
By the end of this lesson, you will:
- Learn how to **send data** to an API using a `POST` request.
- Add new TODOs to the **JSONPlaceholder API**.
- Display the newly added TODO in the list.

---

## 📂 **Project Setup**
Continue working from `lesson07/`, or copy your files into `lesson08/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson08/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 📡 **Step 1: Modify `script.js` to Send Data to API**
Update your JavaScript file to **send new TODOs** to the API:
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
```

This script:
✅ Sends a **POST request** to `https://jsonplaceholder.typicode.com/todos`.  
✅ Sends a new TODO **with a title and completion state**.  
✅ Receives and displays the **new TODO from the API response**.  

---

## 🚀 **Your Task**
✅ Type a TODO and click **Add TODO**.  
✅ Verify that the new TODO appears in the list.  
✅ Check the **browser console** to confirm the API request.  

---

## ⚡ **Bonus Challenge**
- Show a **success message** when a TODO is added.
- Display an **error message** if the API request fails.
- Disable the **Add TODO** button while waiting for the response.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Type a TODO and click **Add TODO**.
4. Confirm that the new TODO is added successfully.

---

## 🎯 **Expected Outcome**
By the end of this lesson:
✅ Clicking **Add TODO** sends a request to the API.  
✅ The **new TODO** appears in the list.  
✅ The request completes successfully.  

---

## ✅ **Mark Lesson 08 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 09](LESSON09.md)!

---

Happy Coding! 🚀