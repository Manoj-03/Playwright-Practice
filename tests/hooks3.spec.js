import {test,expect} from '@playwright/test';

let page;

test.beforeAll(async ({browser}) => {
    page = await browser.newPage();     // creates a new page

    await page.goto("https://demoblaze.com/");

    // Login
    await page.click("//a[@id='login2']");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("//button[normalize-space()='Log in']");

})

test.afterAll(async () => {

    // Logout
    await page.click("//a[@id='logout2']");

})

test("Home Page Test", async() => {

    // Home Page
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);

})

test("Add to Cart", async() => {

    // Add to Cart
    await page.click("//a[normalize-space()='Samsung galaxy s6']");
    await page.click("//a[normalize-space()='Add to cart']");

    page.on("dialog", async(dialogWindow) => {
        expect(dialogWindow.type()).toContain('alert');
        expect(dialogWindow.message()).toContain('Product added.');
        await dialogWindow.accept()
    })

})

/*
    Using beforeAll & afterAll in Playwright

        beforeAll
            - Runs once before ALL tests in the file.
            - Best for heavy setup (e.g., login, DB connection, test data prep).
            - Here: Login happens only once → faster execution.

        afterAll
            - Runs once after ALL tests are finished.
            - Best for cleanup (e.g., logout, closing connections, clearing data).
            - Here: Logout happens only once at the end.

        Advantages:
            - Faster execution (no repeated login/logout).
            - Less code duplication.
            - Good for scenarios where state can be shared across tests.

        Disadvantages:
            - Tests are not fully independent (one login shared by all tests).
            - If login fails → all tests fail.
            - Can cause "test pollution" (one test affects another if state changes).
            - Parallel test execution is harder with shared state.

        Best Practice:
            - Use beforeEach/afterEach if tests must stay independent.
            - Use beforeAll/afterAll when state can be reused safely for speed.
*/