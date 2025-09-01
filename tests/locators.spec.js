// const { test, expect } = require('@playwright/test');
import {test,expect} from '@playwright/test';

test("Locators", async ({page}) => {

    await page.goto("https://demoblaze.com/");

    // click on login button - using property
    // await page.locator("id=login2").click();
    await page.click("id=login2");

    // provide username - using css
    // await page.locator("#loginusername").fill("pavanol");
    // await page.type("#loginusername","pavanol");
    await page.fill("#loginusername","pavanol");

    // provide password - using css
    await page.fill("input[id='loginpassword']","test@123");

    //click on login button - using X-path
    await page.click("//button[normalize-space()='Log in']");

    //verify presence of Logout link
    const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]");
    await expect(logoutLink).toBeVisible();
})

/*
    NOTES:
        1. ID Selector → "id=elementID" or "#elementID"
        Example: "id=login2" , "#loginusername"

        2. CSS Selector → "tag[attr='value']", ".class", "#id"
        Example: "input[id='loginpassword']"

        3. XPath Selector → "//tag[@attr='value']"
        Example: "//button[normalize-space()='Log in']"

        4. Direct Methods (shortcut, less reusable):
        - page.click(selector)
        - page.fill(selector, value)
        - page.type(selector, value)

        5. Locator (more powerful, reusable):
        - page.locator(selector).click()
        - page.locator(selector).fill(value)
*/