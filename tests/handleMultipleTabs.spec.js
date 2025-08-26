const {test,expect} = require('@playwright/test');

test("Handle multiple windows", async ({browser}) => {
    
        const context = await browser.newContext(); // Create a new browser context

        const page = await context.newPage(); // Open a new page in that context

        await page.goto("https://freelance-learn-automation.vercel.app/login"); 

        const [newPage] = await Promise.all(                // Wait for a new page (tab) to open
            [
                context.waitForEvent("page"),               // Listen for 'page' event

                page.locator("(//a[contains(@href, 'facebook')])[1]").click() // Click link that opens Facebook in new tab
            ]
        );
        await newPage.locator("(//input[@name='email'])[2]").fill("test@gmail.com"); // Fill email field in new tab
       
        await newPage.close();      // Close the new tab

        await page.locator("#email1").fill("admin@gmail.com");  // Continue working on original page
})

/*
  Notes: Handling Multiple Windows / Tabs in Playwright

  - Each new tab/window is a "page" inside a browser "context".
  - Steps:
      1. Create a context → const context = await browser.newContext()
      2. Open initial page → const page = await context.newPage()
      3. Use Promise.all() to:
            - Wait for context.waitForEvent('page')
            - Trigger the action that opens a new tab
      4. Interact with newPage just like normal page
      5. Close newPage when done → await newPage.close()
      6. Switch back to original page → continue actions
  - context.pages() → gets all open pages (tabs) in that context
  - page.bringToFront() → makes a specific tab active
*/