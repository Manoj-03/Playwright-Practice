const {test,expect} = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require('../testlogin.json')));       // Read array of user login data from JSON file

test.describe("Data Driven Login Test", function(){                              // Group all login tests

    for(const data of testdata){                                                 // Loop through each user in JSON
                                                  
        test.describe(`Login with users ${data.id}`,function(){                  // Sub-group for each user (id shown in report)

            test('Login to Application', async({page}) => {

                await page.goto("https://freelance-learn-automation.vercel.app/login");

                await page.locator("//input[@name='email1']").fill(data.username);      

                await page.locator("//input[@name='password1']").fill(data.password);   
            })
        })
    }
})

/*
    Notes:
        ✔ Data Driven Testing in Playwright
        ✔ Data Driven Testing = run same test with multiple sets of data.

        1. Store multiple test credentials in JSON file (testlogin.json):
        [
            { "id": 1, "username": "admin@gmail.com", "password": "admin123" },
            { "id": 2, "username": "user@gmail.com", "password": "user123" }
        ]

        2. Load JSON in test:
        const testdata = require('../testlogin.json');

        3. Use for-loop to iterate each data set:
        for(const data of testdata) { ... }

        4. Benefits:
        - One test runs for multiple users.
        - Easy to add/update test data without changing test code.
        - Supports large test scenarios (data-driven automation).

        test.describe() → groups tests for better reporting
*/
