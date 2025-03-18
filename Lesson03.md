# Lesson 03: Handling User Input

## 🎯 Objectives
By the end of this lesson, you will:
- Improve user input handling for the TODO app.
- Prevent empty TODOs from being added.
- Allow users to press `Enter` to add a TODO.

---

## 📂 **Project Setup**
Continue working from `lesson02/`, or copy your files into `lesson03/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson03/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 🖌 **Step 1: Update `index.html`**
Ensure you have an input field, button, and list:
```html
<body>
    <h1>TODO App</h1>
    <input type="text" id="todo-input" placeholder="Enter a new TODO">
    <button id="add-todo">Add TODO</button>
    <ul id="todo-list"></ul>
    <script src="script.js"></script>
</body>
```

---

## 🎯 **Step 2: Improve Input Handling in `script.js`**
Replace your `script.js` content with the following updated version:
```js
// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Function to add a TODO item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") {
        alert("Please enter a valid TODO!");
        return;
    }
    
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    
    todoInput.value = ""; // Clear input field
}

// Event listener for button click
addTodoButton.addEventListener("click", addTodo);

// Event listener for 'Enter' key
todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTodo();
    }
});
```

This script:
✅ Prevents users from adding empty TODOs.  
✅ Displays an alert if the input is empty.  
✅ Allows users to press `Enter` instead of clicking the button.  

---

## 🚀 **Your Task**
✅ Ensure that pressing `Enter` works just like clicking the **Add TODO** button.  
✅ Ensure that empty TODOs **cannot** be added.  
✅ Display an **alert** if the input is empty.  

---

## ⚡ **Bonus Challenge**
- Disable the **Add TODO** button when the input field is empty.
- Change the button color when it's disabled.
- Add a character limit (e.g., 50 characters) for TODOs.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Try adding TODOs using both the button and `Enter` key.
4. Ensure empty TODOs **do not** get added.

---

## 🎯 **Expected Outcome**
By the end of this lesson, the TODO app should:
✅ Prevent users from adding empty TODOs.  
✅ Allow pressing `Enter` to add a TODO.  
✅ Display an alert if the input is empty.  

---

## ✅ **Mark Lesson 03 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 04](LESSON04.md)!

---

Happy Coding! 🚀