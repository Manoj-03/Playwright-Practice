import {test,expect} from '@playwright/test';

let page;

test.beforeEach(async ({browser}) => {
    page = await browser.newPage();     // creates a new page

    await page.goto("https://demoblaze.com/");

    // Login
    await page.click("//a[@id='login2']");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("//button[normalize-space()='Log in']");

})

test.afterEach(async () => {

    // Logout
    await page.click("//a[@id='logout2']");

})

test("Home Page Test", async() => {

    // Home Page
    const products = await page.locator(".hrefch");
    await expect(products).toHaveCount(9);

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
    Using Hooks in Playwright

        1) beforeEach
            - Runs before every test.
            - Good for common setup → e.g., opening page, login, test data.
            - Example: create page + login before each test.

        2) afterEach
            - Runs after every test.
            - Good for cleanup → e.g., logout, closing page, clearing session.
            - Example: logout after each test.

        3) Advantages of Hooks
            - Removes duplicate login/logout code.
            - Easier maintenance → change once, applies everywhere.
            - Cleaner test cases → test only focuses on actual validation.
            - Ensures consistent setup/cleanup across tests.
            - Reduces chances of skipping important steps.

        4) Common Hooks in Playwright
            - beforeAll() → runs once before all tests (e.g., DB setup).
            - afterAll() → runs once after all tests (e.g., DB cleanup).
            - beforeEach() → runs before every test (e.g., login).
            - afterEach() → runs after every test (e.g., logout).
    
        For beforeAll(), afterAll() refer hooks3.spec.js
*/
