const {test,expect} = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require('../testdata.json')));       // Import test data from external JSON file

test("Login to Application(Read data from JSON)", async({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("//input[@name='email1']").fill(testdata.username);      // Fill email field with data from JSON file

    await page.locator("//input[@name='password1']").fill(testdata.password);   // Fill password field with data from JSON file
})