# Lesson 04: Marking TODOs as Complete

## 🎯 Objectives
By the end of this lesson, you will:
- Allow users to mark TODOs as complete.
- Toggle the completed state by clicking on a TODO.
- Use CSS to visually differentiate completed TODOs.

---

## 📂 **Project Setup**
Continue working from `lesson03/`, or copy your files into `lesson04/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson04/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 🖌 **Step 1: Update `style.css`**
Modify the CSS file to style completed TODOs:
```css
.completed {
    text-decoration: line-through;
    color: gray;
    opacity: 0.7;
}
```
This ensures that completed TODOs are visually different from active ones.

---

## 🎯 **Step 2: Modify `script.js` to Toggle Completion**
Update your JavaScript file with the following changes:
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
    li.addEventListener("click", toggleComplete);
    todoList.appendChild(li);
    
    todoInput.value = ""; // Clear input field
}

// Function to toggle TODO completion
function toggleComplete(event) {
    event.target.classList.toggle("completed");
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
✅ Adds a `click` event listener to each TODO.  
✅ Toggles the `.completed` class when a TODO is clicked.  
✅ Uses `classList.toggle()` to switch the completed state.

---

## 🚀 **Your Task**
✅ Click on a TODO to mark it as complete.  
✅ Click again to unmark it.  
✅ Ensure completed TODOs have a strikethrough effect.  

---

## ⚡ **Bonus Challenge**
- Add a **double-click event** that removes a TODO completely.
- Add a **Clear Completed** button to remove all completed TODOs.
- Store the completion state in `localStorage` so completed TODOs persist after a page refresh.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Test clicking TODOs to toggle completion.

---

## 🎯 **Expected Outcome**
By the end of this lesson:
✅ Clicking a TODO will mark it as complete.  
✅ Clicking again will unmark it.  
✅ Completed TODOs will have a strikethrough effect.

---

## ✅ **Mark Lesson 04 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 05](LESSON05.md)!

---

Happy Coding! 🚀