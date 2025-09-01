import {test,expect} from '@playwright/test';

test("Handling Checkboxes", async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // Single Checkbox
    await page.locator("//input[@id='sunday']").check();   // await page.locator("//input[@id='sunday' and @type='checkbox']").check();

    await expect(await page.locator("//input[@id='sunday']")).toBeChecked();
    await expect(await page.locator("//input[@id='sunday']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@id='monday']").isChecked()).toBeFalsy();

    // Multiple Checkboxes

    const checkboxLocators = [
        "//input[@id='sunday']",
        "//input[@id='tuesday']",
        "//input[@id='friday']"
    ]

    for(const locator of checkboxLocators){       // select multiple checkboxes
        await page.locator(locator).check();
    }

    // await page.waitForTimeout(3000)

    for(const locator of checkboxLocators){       // unselect multiple checkboxes which are already selected
        
        if(await page.locator(locator).isChecked()){
            await page.locator(locator).uncheck();
        }

    }

    // await page.waitForTimeout(3000)
})