const {test,expect} = require('@playwright/test');

const testdata = require('../testdataPOM.json');                                // Import test data from JSON file

const LoginPage = require('../pages/loginPage');                                // Import LoginPage POM class
const HomePage = require('../pages/homePage');                                  // Import HomePage POM class

test("Login to Application using POM", async({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const loginPage = new LoginPage(page);                                      // Create LoginPage object with current page
    
    await loginPage.loginToApplication(testdata.username,testdata.password);    // Call login method with test data

    const homePage = new HomePage(page);                                        // Create HomePage object with current page

    await homePage.verifyManageOption();                                        // Verify "Manage" option exists (assertion)

    await homePage.logoutFromApplication();                                     // Perform logout action

    await loginPage.verifySignIn();                                             // Verify Sign In option after logout
})


/* 
    NOTES:

        POM (Page Object Model)
        - Page Object Model (POM) = A design pattern in test automation.
        - Keeps locators + actions (methods) in separate classes (not inside test).
        - Tests only call methods → cleaner, reusable, and maintainable.

        Benefits
        - Separation of concerns (tests ≠ locators).
        - Reusable methods (e.g., loginToApplication()).
        - Easy maintenance (update locator only once).
        - Improves readability of tests.

        Setup
        1. Test data in `testdataPOM.json` (username/password).
        2. Page classes:
        - loginPage.js → login, verify sign in.
        - homePage.js → verify manage option, logout.
        3. Test file:
        - Open login → LoginPage.loginToApplication()
        - HomePage.verifyManageOption()
        - HomePage.logoutFromApplication()
        - LoginPage.verifySignIn()
        4. Folder Structure:
        ├── tests/login.spec.js  
        ├── pages/loginPage.js  
        ├── pages/homePage.js  
        ├── testdataPOM.json  

        Flow: Go to login → LoginPage methods → HomePage methods → Verify → Logout
*/
