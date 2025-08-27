# 🎭 Playwright Practice

This repository is a **practice project** for learning and implementing **end-to-end testing** with **Playwright** using **JavaScript**.  

It focuses on:
- Page Object Model (POM) implementation  
- Data-driven testing with JSON files  
- Configurable Playwright setup for reliable test automation  

---

## 🧪 What’s Inside

- `pages/` – Contains Page Object Model classes representing different pages of the application.  
- `tests/` – Contains test scripts using Playwright test runner.  
- `uploads/` – Sample files for file upload tests.  
- `testdataPOM.json` & other JSON files – Test data for data-driven testing.  
- `playwright.config.js` – Playwright configuration file for browsers, test timeout, reporters, etc.  
- `package.json` – Node.js dependencies and scripts.  

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Manoj-03/Playwright-Practice.git
cd Playwright-Practice
```

Install dependencies:
```bash
npm install
```

---

## ▶️ Running Tests

- Run all tests (headless):
```bash
npx playwright test
```
- Run tests in headed mode (browser visible):
```bash
npx playwright test --headed
```
- Run a specific test file:
```bash
npx playwright test tests/example.spec.js
```
- Run tests with a specific browser:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```
- Generate and view HTML report:
```bash
npx playwright show-report
```

---

## 📝 Example Test Data

- Example testdataPOM.json:
```bash
{
    "username": "example@email.com",
    "password": "pass@123"
}
```
Test scripts will import this JSON and use it to drive test scenarios.

---

## 📂 Project Structure Overview

```bash
Playwright-Practice/
├── pages/             # Page Object Model classes
├── tests/             # Test scripts
├── uploads/           # Sample files for upload testing
├── testdataPOM.json   # Test data for POM-based tests
├── package.json       # Node.js dependencies
└── playwright.config.js # Playwright configuration
```

---

## 💡 Notes
- Tests are structured using Page Object Model (POM) for maintainability and reusability.

- Test data is stored in JSON files for data-driven testing.

- Playwright configuration can be adjusted in playwright.config.js for browser, timeout, and reporter settings.

- Supports multiple browsers: Chromium, Firefox, and WebKit.

- Provides a solid foundation to expand test coverage and implement real-world scenarios.
