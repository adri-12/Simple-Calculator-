React Calculator App

This is a simple calculator app built using React. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division. The app uses useReducer to manage state and updates the display whenever a user enters a number or an operation.

How to use the app

Clone the repository or download the code
Install dependencies by running npm install
Run the app with npm start
Use the calculator to perform basic arithmetic operations

Available actions
The app supports the following actions:

ADD_DIGIT: Adds a digit to the current operand

CHOOSE_OPERATION: Chooses an operation (+, -, *, /) to perform

CLEAR: Clears the current operand, previous operand, and operation

DELETE_DIGIT: Deletes the last digit of the current operand

EVALUATE: Evaluates the expression and updates the display with the result

Available components

The app has two components: DigitButton and OperationButton. 
The DigitButton component renders a button with a digit on it and dispatches the ADD_DIGIT action when clicked. 
The OperationButton component renders a button with an operation on it (+, -, *, /) and dispatches the CHOOSE_OPERATION action when clicked.

Other files

App.css: Contains the styling for the app
index.js: Renders the App component to the DOM
