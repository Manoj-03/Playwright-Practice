const {test,expect} = require('@playwright/test');

const testdata = require('../testlogin.json');

test("Handling Hidden Dropdown", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Login
    await page.fill("//input[@placeholder='Username']", testdata[3].username);
    await page.fill("//input[@placeholder='Password']", testdata[3].password);
    await page.click("//button[normalize-space()='Login']");

    // after login

    await page.click("//span[normalize-space()='PIM']");

    await page.click("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]"); // locating Job title dropdown

    /*
    const options = await page.$$("//div[@role='option']//span");
    for(let option of options){
        const jobTitile = await option.textContent();
        // console.log(jobTitile);
        if(jobTitile.includes('Automation Tester')){
            await option.click();
            break;
        }
    }
     */
    const optionsLocator = page.locator("//div[@role='option']//span");
    const optionTexts = await optionsLocator.allTextContents();  // returns array of text

    // Find index of desired option
    const index = optionTexts.findIndex(text => text.includes('Automation Tester'));

    if (index !== -1) {
        await optionsLocator.nth(index).click();  // Click directly by index
    }
})

/*
    Notes:
        Handling Hidden Dropdown in Playwright

            1. Two common ways to select dropdown options:

                ✅ Loop Method
                    - Use page.$$() → returns array of locators.
                    - Loop through each option.
                    - Compare textContent().
                    - Click when match is found.
                    - Example:
                        const options = await page.$$("//div[@role='option']//span");
                        for (let option of options) {
                            const text = await option.textContent();
                            if (text.includes("Automation Tester")) {
                                await option.click();
                                break;
                            }
                        }

                ✅ Index Method (Efficient)
                    - Use locator().allTextContents() → returns array of texts.
                    - Use findIndex() to get matching option’s position.
                    - Use locator.nth(index).click() to select.
                    - Example:
                        const optionsLocator = page.locator("//div[@role='option']//span");
                        const texts = await optionsLocator.allTextContents();
                        const index = texts.findIndex(t => t.includes("Automation Tester"));
                        if (index !== -1) {
                            await optionsLocator.nth(index).click();
                        }

            2. Why Index Method?
                - Cleaner & faster (no manual loop).
                - Prevents error if option not found (check with index !== -1).
                - Works best when you just need one matching option.

            3. Always use `await page.click(...)` to open dropdown before selecting.
*/