# 🎭 Playwright Practice

A comprehensive **practice project** for learning and implementing **end-to-end testing** with **Playwright** using **JavaScript**. This repository demonstrates various Playwright testing concepts, patterns, and best practices.

## ✨ Features

- **Page Object Model (POM)** implementation for maintainable test code
- **Data-driven testing** with JSON files
- **Comprehensive test coverage** including UI interactions, API testing, and browser automation
- **Multiple reporting options** (HTML reports, Allure reports)
- **Cross-browser testing** support (Chromium, Firefox, WebKit)
- **Advanced Playwright features** like handling dialogs, frames, multiple tabs, and more
- **Configurable test environment** with flexible Playwright configuration

## 🧪 Test Coverage

This project includes **30+ test files** covering

### Core Playwright Concepts
- **Locators & Elements**: Built-in locators, multiple element handling, hidden elements
- **User Interactions**: Mouse hover, keyboard events, click actions
- **Form Elements**: Text inputs, checkboxes, radio buttons, dropdowns, date pickers
- **File Operations**: File uploads and downloads
- **Navigation**: Page navigation, multiple tabs, browser context

### Advanced Scenarios
- **Dialog Handling**: Alerts, confirms, prompts
- **Frame Management**: Iframe interactions and switching
- **Auto-suggestions**: Dynamic dropdown handling
- **Table Operations**: Data extraction and validation
- **Error Handling**: Error message verification
- **Wait Strategies**: Load state management and custom waits

### Testing Patterns
- **Page Object Model**: Structured page classes (`loginPage.js`, `homePage.js`)
- **Data-driven Testing**: JSON-based test data management
- **Assertions**: Various assertion types and validation methods
- **Code Generation**: Playwright's built-in code generation tools

---

## 🧩 Playwright Configuration Highlights

- `testDir`: `./tests`
- `fullyParallel`: `true`
- `forbidOnly`: Enabled on CI
- `retries`: `2` on CI, `0` locally
- `workers`: `1` on CI, default locally
- `reporter`: HTML and `allure-playwright`
- `use` defaults:
  - `trace`: `on-first-retry`
  - `screenshot`: `only-on-failure`
  - `video`: `retain-on-failure`
- Project `chromium` uses `Desktop Chrome` with viewport `{ width: 1463, height: 748 }`

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
 - (Optional) **Allure Commandline** for viewing Allure reports
   - macOS (Homebrew): `brew install allure`
   - npm (global): `npm i -g allure-commandline`

### Installation Steps

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd practice-playwright
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install Playwright browsers:**
```bash
npx playwright install
```

4. **Verify installation:**
```bash
npx playwright --version
```

### Dependencies
- `@playwright/test` - Core Playwright testing framework
- `@types/node` - TypeScript definitions for Node.js
- `allure-playwright` - Allure reporting integration

---

## ▶️ Running Tests

### Basic Test Execution

**Run all tests (headless mode):**
```bash
npx playwright test
```

**Run tests in headed mode (browser visible):**
```bash
npx playwright test --headed
```

**Run tests in debug mode:**
```bash
npx playwright test --debug
```

### Specific Test Execution

**Run a specific test file:**
```bash
npx playwright test tests/login.spec.js
npx playwright test tests/checkboxes.spec.js
```

**Run tests matching a pattern:**
```bash
npx playwright test --grep "login"
npx playwright test --grep "dropdown"
```

**Run a specific test by name:**
```bash
npx playwright test --grep "should handle file upload"
```

### Browser-Specific Testing

**Run tests with specific browsers:**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

**Run tests in parallel (default):**
```bash
npx playwright test --workers=4
```

**Run tests sequentially:**
```bash
npx playwright test --workers=1
```

### Advanced Options

**Run tests with retries:**
```bash
npx playwright test --retries=2
```

**Run tests with specific timeout:**
```bash
npx playwright test --timeout=60000
```

**Run tests in UI mode:**
```bash
npx playwright test --ui
```

**Generate test code:**
```bash
npx playwright codegen https://example.com
```

---

## 📊 Test Reports & Debugging

### HTML Reports
**View HTML test report:**
```bash
npx playwright show-report
```

**Generate report without running tests:**
```bash
npx playwright show-report playwright-report
```

### Allure Reports
**Generate Allure report:**
```bash
npx allure generate allure-results --clean
npx allure open
```

**Serve Allure report:**
```bash
npx allure serve allure-results
```

### Debugging Tools

**Trace Viewer:**
```bash
npx playwright show-trace trace.zip
```

**Screenshots & Videos:**
- Screenshots are automatically captured on test failures
- Videos are recorded for failed tests
- Files are stored in `test-results/` directory

**Debug Mode:**
```bash
npx playwright test --debug
```

---

## 📝 Test Data Management

### Available Test Data Files
- `testdata.json` - General test data
- `testdataPOM.json` - Page Object Model test data
- `testlogin.json` - Login-specific test data

### Example testdataPOM.json:
```json
{
    "username": "example@email.com",
    "password": "pass@123"
}
```

### Example testdata.json:
```json
{
    "testData": [
        {
            "name": "John Doe",
            "email": "john@example.com",
            "phone": "1234567890"
        }
    ]
}
```

Test scripts import these JSON files to drive data-driven test scenarios.

---

## 📂 Project Structure

```
practice-playwright/
├── 📁 pages/                    # Page Object Model classes
│   ├── homePage.js             # Home page object
│   └── loginPage.js            # Login page object
├── 📁 tests/                    # Test scripts (30+ test files)
│   ├── assertions.spec.js      # Assertion examples
│   ├── checkboxes.spec.js      # Checkbox interactions
│   ├── codegen.spec.js         # Code generation examples
│   ├── dataDrivenTest.spec.js  # Data-driven testing
│   ├── dropdown.spec.js        # Dropdown handling
│   ├── fileUpload.spec.js      # File upload scenarios
│   ├── handleDialogs.spec.js   # Dialog management
│   ├── handleFrames.spec.js    # Iframe interactions
│   ├── login.spec.js           # Login functionality
│   ├── loginApplicationPOM.spec.js # POM-based login tests
│   └── ... (20+ more test files)
├── 📁 uploads/                  # Sample files for testing
│   └── image1.png              # Test upload file
├── 📁 allure-results/          # Allure test results
├── 📁 allure-report/           # Generated Allure reports
├── 📁 playwright-report/       # HTML test reports
├── 📁 test-results/            # Test artifacts (screenshots, videos)
├── 📄 testdata.json            # General test data
├── 📄 testdataPOM.json         # POM test data
├── 📄 testlogin.json           # Login test data
├── 📄 playwright.config.js     # Playwright configuration
├── 📄 package.json             # Project dependencies
└── 📄 README.md                # Project documentation
```

### Key Directories

- **`pages/`** - Contains Page Object Model classes for reusable page interactions
- **`tests/`** - All test files organized by functionality and testing concepts
- **`uploads/`** - Sample files used for file upload testing scenarios
- **`allure-results/`** - Raw test results for Allure reporting
- **`allure-report/`** - Generated Allure HTML reports
- **`playwright-report/`** - Standard Playwright HTML reports
- **`test-results/`** - Test artifacts including screenshots, videos, and traces

---

## 💡 Best Practices & Notes

### Testing Patterns
- **Page Object Model (POM)** - Tests are structured using POM for maintainability and reusability
- **Data-driven Testing** - Test data is stored in JSON files for flexible test scenarios
- **Separation of Concerns** - Page objects separate test logic from page interactions

### Configuration
- **Flexible Setup** - Playwright configuration can be adjusted in `playwright.config.js` for browsers, timeouts, and reporters
- **Cross-browser Support** - Supports Chromium, Firefox, and WebKit (configurable)
- **Parallel Execution** - Tests run in parallel by default for faster execution
- **Retry Logic** - Automatic retries on CI environments

### Reporting & Debugging
- **Multiple Reporters** - HTML reports and Allure integration for comprehensive test reporting
- **Visual Debugging** - Screenshots, videos, and traces captured on failures
- **Trace Viewer** - Detailed step-by-step test execution analysis

### Development Workflow
- **Code Generation** - Use `npx playwright codegen` to generate test code interactively
- **UI Mode** - Use `--ui` flag for interactive test development and debugging
- **Hot Reload** - Tests automatically re-run when files change during development

### Extensibility
- **Modular Design** - Easy to add new test files and page objects
- **Scalable Structure** - Foundation for expanding test coverage and implementing real-world scenarios
- **CI/CD Ready** - Configured for continuous integration with proper retry and reporting setup