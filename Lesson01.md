# Lesson 01: Project Setup & Structure

## 🎯 Objectives
By the end of this lesson, you will:
- Set up the folder structure for the TODO App.
- Link JavaScript and CSS files to the HTML file.
- Display a simple "TODO App" heading in the browser.
- Use Live Server to preview changes.

---

## 📂 Project Setup
### 1️⃣ **Create the Folder Structure**
Ensure your project folder is structured as follows:
```
/todo-app-lessons
  ├── lesson-files/
  │   ├── lesson01/
  │   │   ├── index.html
  │   │   ├── style.css
  │   │   ├── script.js
```

### 2️⃣ **Create & Link Files**
1. **Open `index.html`** and add the basic HTML structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>TODO App</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <h1>TODO App</h1>
       <script src="script.js"></script>
   </body>
   </html>
   ```

2. **Open `style.css`** and add a simple style:
   ```css
   body {
       font-family: Arial, sans-serif;
       text-align: center;
   }
   ```

3. **Open `script.js`** and add a simple test script:
   ```js
   console.log("TODO App is loaded!");
   ```

---

## 🚀 **Your Task**
✅ Ensure that:
- `index.html` displays "TODO App" in the browser.
- `script.js` logs a message in the browser console.
- The page uses `style.css` for basic styling.

---

## ⚡ **Bonus Challenge**
- Change the background color using CSS.
- Add a paragraph (`<p>`) below the heading with a short description of the app.
- Style the text using Bootstrap (optional).

---

## 👀 **Previewing Your Work**
1. Open **Visual Studio Code**.
2. Right-click `index.html` and select **Open with Live Server**.
3. Open the **Developer Console** (Press `F12` or `Ctrl + Shift + I`) and check for the message `TODO App is loaded!`.

---

## 🎯 **Expected Outcome**
By the end of this lesson, your browser should display:
```
TODO App
```
And the browser console should log:
```
TODO App is loaded!
```

---



Happy Coding! 🚀

