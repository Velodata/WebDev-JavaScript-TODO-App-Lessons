# Lesson 07: Fetching TODOs from an API

## 🎯 Objectives
By the end of this lesson, you will:
- Learn how to **fetch data** from an external API.
- Retrieve **TODOs** from the JSONPlaceholder API.
- Display the fetched TODOs in the app.

---

## 📂 **Project Setup**
Continue working from `lesson06/`, or copy your files into `lesson07/`:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson07/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

---

## 📡 **Step 1: Fetch TODOs from JSONPlaceholder**
Modify `script.js` to fetch TODOs from an external API:
```js
// Select elements
const todoList = document.getElementById("todo-list");
const fetchTodosButton = document.createElement("button");
fetchTodosButton.textContent = "Fetch API TODOs";
fetchTodosButton.addEventListener("click", fetchTodos);
document.body.insertBefore(fetchTodosButton, todoList);

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
```

This script:
✅ **Fetches TODOs** from `https://jsonplaceholder.typicode.com/todos`.
✅ Limits the fetched TODOs to **5 items**.
✅ Displays the fetched TODOs in the list.
✅ Adds a "Fetch API TODOs" button to trigger the request.

---

## 🚀 **Your Task**
✅ Click the "Fetch API TODOs" button to retrieve TODOs.  
✅ Ensure the fetched TODOs are displayed in the list.  
✅ Test multiple fetch attempts to see how new TODOs are appended.

---

## ⚡ **Bonus Challenge**
- Disable the fetch button after clicking it once.
- Show a **loading spinner** while fetching TODOs.
- Display an error message if the API request fails.

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Run **Live Server**.
3. Click the "Fetch API TODOs" button and observe the results.

---

## 🎯 **Expected Outcome**
By the end of this lesson:
✅ Clicking **Fetch API TODOs** retrieves and displays TODOs.  
✅ Completed TODOs are styled with a strikethrough.  
✅ API data is displayed dynamically.

---

## ✅ **Mark Lesson 07 as Complete!**
Once you have successfully completed the tasks:

- Move on to [Lesson 08](LESSON08.md)!

---

Happy Coding! 🚀

