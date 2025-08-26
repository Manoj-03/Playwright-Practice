const {test,expect} = require('@playwright/test');

test("Working with Load State", async({page}) => {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByText("New user? Signup").click();

    await page.waitForLoadState("networkidle");         // Wait until network is idle (no requests)

    const count = await page.locator("//input[@type='checkbox']").count();  // Count number of checkboxes

    expect(count).toBe(3);
})

/*
    Notes: Handling Load State in Playwright

    page.waitForLoadState(state) 
    → Tells Playwright to wait until the page reaches a certain "ready" state.

    ✔ Types of states you can wait for:
    1. "load"              → Wait until page is fully loaded (like window.onload in JS).
    2. "domcontentloaded"  → Wait until only HTML is loaded (faster, ignores images/styles).
    3. "networkidle"       → Wait until no network calls are happening (best for SPAs / dynamic pages).

    Why use it?
    - Prevents errors like "element not found" when page is still loading.
    - Very useful when dealing with forms, dynamic content, or API-driven pages.
*/
