import {test,expect} from '@playwright/test';

test("Hard Assertions", async ({page}) => {

    await page.goto("https://demoblaze.com/");

    // Hard Assertions
    await expect(page).toHaveTitle("STORE123");
    await expect(page).toHaveURL("https://demoblaze.com/");
    await expect(page.locator('.navbar-brand')).toBeVisible();
})

test("Soft Assertions", async ({page}) => {

    await page.goto("https://demoblaze.com/");

    // Soft Assertions
    await expect.soft(page).toHaveTitle("STORE123");
    await expect.soft(page).toHaveURL("https://demoblaze.com/");
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
})

/*
    Notes on Assertions in Playwright

        1. Hard Assertions (await expect)
        - Example: await expect(page).toHaveTitle("STORE123");
        - If this fails, the test execution stops immediately.
        - Best for critical checks like page navigation, login validation, etc.

        2. Soft Assertions (await expect.soft)
        - Example: await expect.soft(page).toHaveTitle("STORE123");
        - Even if this fails, the test continues execution.
        - Useful when you want to collect multiple assertion results in one run.
*/