# Lesson 02: Adding & Displaying TODOs

## 🎯 Objectives
By the end of this lesson, you will:
- Create a basic input form for adding TODO items.
- Dynamically display TODOs in the browser.
- Use JavaScript to manipulate the DOM.

---

## 📂 **Project Setup**
Make sure your folder structure is set up correctly:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson02/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

If you are continuing from Lesson 01, copy your existing files into `lesson02/`.

---

## 🛠 **Step 1: Modify `index.html`**
Add an input field and a button inside the `<body>`:
```html
<body>
    <h1>TODO App</h1>
    <input type="text" id="todo-input" placeholder="Enter a new TODO">
    <button id="add-todo">Add TODO</button>
    <ul id="todo-list"></ul>
    <script src="script.js"></script>
</body>
```

This form will allow users to type a new TODO item and add it to the list.

---

## 🖌 **Step 2: Style the TODO List**
Update `style.css` to improve the appearance:
```css
#todo-input {
    padding: 10px;
    width: 250px;
    margin-right: 10px;
}

#add-todo {
    padding: 10px 15px;
    cursor: pointer;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background: #f4f4f4;
    padding: 10px;
    margin-top: 5px;
}
```

---

## 🎯 **Step 3: Add TODO Items with JavaScript**
Open `script.js` and replace the content with the following code:
```js
// Select elements
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Function to add a TODO item
function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText === "") return;
    
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);
    
    todoInput.value = ""; // Clear input field
}

// Event listener for button click
addTodoButton.addEventListener("click", addTodo);
```

This script:
✅ Selects the input field, button, and list.
✅ Defines `addTodo()` to create a new `<li>` element and append it to the list.
✅ Clears the input field after adding a TODO.
✅ Adds an event listener to the button.

---

## 🚀 **Your Task**
✅ Ensure that clicking the "Add TODO" button creates a new item in the list.
✅ If the input field is empty, prevent empty TODOs from being added.

---

## ⚡ **Bonus Challenge**
- Add an event listener for pressing `Enter` so users can add a TODO without clicking the button.
- Style the TODO list to improve its appearance.
- Add a simple animation effect when a new TODO is added.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Test adding TODOs using the input field and button.

---

## 🎯 **Expected Outcome**
By the end of this lesson, when you type a TODO and click **Add TODO**, it should appear below in the list:
```
TODO App
[ input field ] [ Add TODO button ]
----------------------
• Buy groceries
• Finish homework
• Call a friend
```

---

## ✅ **Mark Lesson 02 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 03](LESSON03.md)!

---

Happy Coding! 🚀

