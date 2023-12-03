function saveCalculatorState() {
    const displayValue = getDisplayValue(); 
    const history = getCalculationHistory(); 

    // Create an object that represents the current state
    const calculatorState = {
        displayValue: displayValue,
        history: history
    };

    // Save this state object to localStorage as a JSON string
    localStorage.setItem('calculatorState', JSON.stringify(calculatorState));
}


function getDisplayValue() { // retrieve current display value
    return currentInput;
}

function getCalculationHistory() { // retrieve history of calculations
    return equationHistory; 
}

function loadCalculatorState() { // update display and history on calculator
    const savedState = localStorage.getItem('calculatorState');
    if (savedState) {
        const state = JSON.parse(savedState);
        currentInput = state.displayValue; // Set the current input
        equationHistory = state.history; // Set the equation history
        
        updateDisplay();
        updateHistoryDisplay();
    }
}

