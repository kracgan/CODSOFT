// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const themeSwitchButton = document.getElementById("theme-switch");

// Variables to hold the current expression and result
let currentInput = "";
let currentOperator = "";
let currentResult = 0;

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.getAttribute("data-value");

        // Handle numbers and decimal points
        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.value = currentInput;
        }

        // Handle operators
        else if (value === '+' || value === '-' || value === '*' || value === '/') {
            if (currentInput !== "") {
                currentResult = parseFloat(currentInput);
                currentInput = "";
                currentOperator = value;
            }
        }
    });
});

// Handle equal button press
equalsButton.addEventListener("click", () => {
    if (currentInput !== "") {
        switch (currentOperator) {
            case "+":
                currentResult += parseFloat(currentInput);
                break;
            case "-":
                currentResult -= parseFloat(currentInput);
                break;
            case "*":
                currentResult *= parseFloat(currentInput);
                break;
            case "/":
                if (parseFloat(currentInput) !== 0) {
                    currentResult /= parseFloat(currentInput);
                } else {
                    currentResult = "Error";
                }
                break;
        }
        display.value = currentResult;
        currentInput = "";
        currentOperator = "";
    }
});

// Clear button functionality
clearButton.addEventListener("click", () => {
    currentInput = "";
    currentResult = 0;
    currentOperator = "";
    display.value = "";
});

// Dark mode toggle functionality
themeSwitchButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");  // Toggle between light and dark mode
    document.querySelectorAll(".btn").forEach(button => {
        button.classList.toggle("dark-mode");
    });
    display.classList.toggle("dark-mode");

    // Change theme switch button text
    if (document.body.classList.contains("dark-mode")) {
        themeSwitchButton.textContent = "🌕";  // Moon icon for dark mode
    } else {
        themeSwitchButton.textContent = "🌙";  // Sun icon for light mode
    }
});
