# Node.js Calculator

A GUI-based JavaScript calculator with **Helmet.js** for security, **Winston & Morgan** for logging, and a responsive user interface.

## Overview

This project is a fully functional calculator web application built using **Node.js, Express, and JavaScript** with a clean, modern UI. The app allows users to perform basic arithmetic operations while preserving calculator state across navigation.

### Features

- **Secure**: Helmet.js is used for setting HTTP headers to enhance security.
- **Logging**: Winston and Morgan handle logging for better debugging and request tracking.
- **State Persistence**: Calculator state, including the running total, is saved and restored upon navigation.
- **Dark Mode Support**: Theme selection is remembered when navigating between pages.
- **Improved Navigation**: Active page highlighting provides a better user experience.

---

## Recent Revisions and Fixes

### Added Navigation Link Styles
- Improved the user experience by adding navigation link styles that indicate the current active page.
- The active page is now visually highlighted for better accessibility.

### Fixed Dark Theme Issue
- Resolved an issue where changing the page in dark theme mode did not apply the active navigation link styling after navigating back to the index.

### Introduced 'calculatorState' File
- Added a new `calculatorState.js` file that includes functions to save the current state of the calculator and running total.
- The calculator state is now preserved when navigating away from the index page and returning.

---

## Installation and Usage

### Prerequisites
- Node.js (version 16 or later)
- npm (Node Package Manager)

### Clone the Repository

1. **Clone the repository:**
    ```sh
    git clone https://github.com/dcan-tech/node-js-calculator.git
    cd node-js-calculator
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Run the application:**
    ```sh
    npm start
    ```

---

## Project Structure
```
node-js-calculator/
│── public/              # Frontend assets (CSS, JavaScript, images)
│── src/
│   ├── routes/          # Express route handlers
│   ├── middleware/      # Security and logging middleware
│   ├── views/           # HTML templates (if using templating engines)
│   ├── utils/           # Utility functions such as calculator state management
│   ├── calculatorState.js # Manages calculator state persistence
│   ├── server.js        # Main application entry point
│── .gitignore           # Ignored files
│── package.json         # Project metadata and dependencies
│── README.md            # Documentation
```
Planned Enhancements

History Feature: Implement a history log of previous calculations.
Scientific Mode: Extend functionality with additional mathematical operations.
Improved UI: Refine the interface with better responsiveness and animations.

## Contributing

Contributions are welcome. If you have suggestions for improvements, feel free to submit a pull request.

## Author

Dylan Canfield
