import {test,expect} from '@playwright/test';

test("Home Pgae Test", async({page}) => {

    await page.goto("https://demoblaze.com/");

    // Login
    await page.click("//a[@id='login2']");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("//button[normalize-space()='Log in']");

    // Home Page
    const products = await page.$$(".hrefch");
    await expect(products).toHaveLength(9);

    // Logout
    await page.click("//a[@id='logout2']");
})

test("Add to Cart", async({page}) => {
    await page.goto("https://demoblaze.com/");

    // Login
    await page.click("//a[@id='login2']");
    await page.fill("#loginusername","pavanol");
    await page.fill("#loginpassword","test@123");
    await page.click("//button[normalize-space()='Log in']");

    // Add to Cart
    await page.click("//a[normalize-space()='Samsung galaxy s6']");
    await page.click("//a[normalize-space()='Add to cart']");

    page.on("dialog", async(dialogWindow) => {
        expect(dialogWindow.type()).toContain('alert');
        expect(dialogWindow.message()).toContain('Product added.');
        await dialogWindow.accept()
    })

    // Logout
    await page.click("//a[@id='logout2']");
})

/*
    Notes on Not Using Hooks:
        1) Code duplication → login/logout steps repeated in every test.
        2) Hard maintenance → if locator changes, need to update in all tests.
        3) Tests become lengthy & less readable.
        4) Debugging harder → same error repeated in multiple places.
        5) No reusability of common steps.

    Why Use Hooks (beforeEach / afterEach)?
        - Write login once → applies to all tests automatically.
        - Logout handled in afterEach → no need to repeat.
        - Cleaner tests → focus only on test logic (e.g., Add to Cart).
        - Easier updates → change in one place reflects everywhere.
    
    For beforeEach / afterEach - refer hooks2.spc.js
*/
