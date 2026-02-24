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



