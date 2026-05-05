# Job Application Tracker

A clean, responsive job application tracker built with HTML, CSS, JavaScript, and Tailwind CSS v4. The app lets you manage a small set of job cards, mark them as Interview or Rejected, filter the list by status, and remove entries from the board.


<img width="1620" height="696" alt="image" src="https://github.com/user-attachments/assets/ebf3866e-0fc1-467a-a106-9d162fab5389" />










## Features

- Browse 8 prebuilt job cards with company, role, location, salary, and description details.
- Mark any job as `Interview` or `Rejected`.
- Filter the board by `All`, `Interview`, or `Rejected`.
- Track live totals for all jobs, interview jobs, and rejected jobs.
- Delete job cards from the list.
- Show an empty state when a filtered view has no results.
- Responsive layout built with Tailwind utility classes.

## Tech Stack

- HTML5
- CSS3
- JavaScript (DOM manipulation)
- Tailwind CSS v4

## Project Structure

```text
Assignment-4/
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── index.html
    ├── input.css
    ├── output.css
    ├── script.js
    ├── style.css
    └── img/
```

## How It Works

- The main UI is defined in [src/index.html](src/index.html).
- The interaction logic lives in [src/script.js](src/script.js).
- Tailwind is imported through [src/input.css](src/input.css), and the generated styles are served from [src/output.css](src/output.css).
- The app keeps two in-memory lists for interview and rejected jobs, then re-renders the filtered view based on the active tab.

## Getting Started

This project is a static front-end app, so there is no `npm run dev` script configured in `package.json`.

### 1. Install dependencies

```bash
npm install
```

### 2. Open the app

Open [src/index.html](src/index.html) directly in your browser, or use a local static server such as VS Code Live Server.

### 3. Rebuild Tailwind CSS after style changes

If you edit Tailwind classes or [src/input.css](src/input.css), regenerate [src/output.css](src/output.css) with the Tailwind CLI:

```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## Usage

1. Click `Interview` or `Rejected` on any job card to update its status.
2. Use the filter buttons at the top to switch between all jobs and status-specific views.
3. Click the delete icon on a card to remove it from the board.
4. Watch the counters update as you manage the list.

## Notes

- Job data is currently hard-coded in the HTML file for simplicity.
- All state is managed in the browser, so reloading the page resets the tracker.
- The empty-state UI appears when a filtered list has no items.

## License

No license has been specified for this project.
















































## 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :

 **getElementById()** – Selects **one element** by its unique ID.  
 **getElementsByClassName()** – Selects **all elements** with the same class name, returns an HTMLCollection.  
 **querySelector()** – Selects the **first matching element** using CSS selectors (id, class, tag, etc.).  
 **querySelectorAll()** – Selects **all matching elements** using CSS selectors, returns a NodeList.

---

## 2. How do you create and insert a new element into the DOM?
Ans →

To add a new element to the DOM:  
1. Create the element using `document.createElement()`.  
2. Add content or attributes to it.  
3. Insert it into a parent element using methods like `appendChild()` or `append()`.

---

## 3.What is Event Bubbling? And how does it work?

Event Bubbling is when an event starts on the element that was clicked** and then moves **upward through its parent elements.  
For example, if you click a button inside a div, the event first triggers on the button, then on the div, and continues to higher elements like the body or document.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where a parent element handles events for its child elements.  
**Why it’s useful:**  
- Improves **performance** by reducing the number of event listeners.  
- Works for **dynamically added elements**.

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans →

- preventDefault() – Stops the **default browser action**, like form submission or link navigation.  
- stopPropagation() – Stops the **event from bubbling up** to parent elements.



