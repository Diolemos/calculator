# calculator
## Over-engineered simple calculator.
live preview: https://diolemos.github.io/calculator/
---

## Project Structure
```bash
/index.html
/style.css
/images/
/script/
├─ calculator.js
├─ state.js
├─ view.js
└─ script.js
```

- **index.html** – The main HTML file with the calculator layout.
- **style.css** – Styles for the calculator, including colors, grid layout, and button effects.
- **/images** – (guess what!) .
- **/script** – JavaScript modules implementing the MVC architecture:
  - `calculator.js` – Contains the calculator logic (arithmetic operations, `calculate` method, and error handling). Uses a Singleton pattern.
  - `state.js` – Holds the application state (current value, previous value, operator) in a centralized object.
  - `view.js` – Responsible for updating the display and providing references to DOM elements.
  - `script.js` – Controller that handles user interactions (button clicks), updates state, calls the calculator, and updates the view.

---

## Architecture: MVC

This project uses the **Model–View–Controller (MVC)** pattern:

- **Model** (`calculator.js` + `state.js`):
  - `calculator.js` contains the business logic: performs arithmetic and handles errors.
  - `state.js` stores the current state of the calculator (current input, previous input, and selected operator).

- **View** (`view.js`):
  - Manages the DOM and display. 
  - Updates the calculator display whenever state changes.
  - Provides references to buttons for the controller to attach event listeners.

- **Controller** (`script.js`):
  - Handles all user interactions (button presses).
  - Updates the state based on input and calls the calculator to perform operations.
  - Updates the view accordingly.

This separation allows:
- Cleaner code and easier maintenance.
- Encapsulation of logic (calculator functions) separate from UI.
- Scalability for adding new features without mixing concerns.

---
Despite being "over-engineered" for a simple calculator, this project is intentionally structured to demonstrate good software architecture. While it currently supports only basic arithmetic operations, its modular design and clear separation of concerns make it:

- **Easily extendable** – New features like keyboard input, memory functions, or scientific operations can be added without rewriting existing logic.  
- **Maintainable** – The MVC pattern ensures that changes to the view, controller, or calculation logic are isolated, reducing the risk of bugs.  
- **Collaborative-friendly** – Other developers can quickly understand the project and contribute, and AI agents or automated tools can interact with individual modules efficiently.  
- **Robust and consistent** – The calculator logic always returns numbers (or a clear error code), and the display layer handles user-friendly messages, preventing unexpected behaviors.  

In short, while it performs simple tasks, the design choices illustrate how even small projects can benefit from scalable, professional engineering practices.


## Technologies

- **HTML5** – Structure of the calculator.
- **CSS3** – Styling, grid layout, button effects.
- **JavaScript (ES6 Modules)** – Logic organized with MVC and singleton patterns.
