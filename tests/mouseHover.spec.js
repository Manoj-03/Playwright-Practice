const{test,expect} = require("@playwright/test");

test("Valid Login and Mouse Hover",async ({page}) => {
    
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter Email").type("admin@email.com");

    await page.getByPlaceholder("Enter Password").type("admin@123");

    await page.getByRole("button", {name: "Sign in"}).click();

    await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/");

    await page.locator("//span[text()='Manage']").hover(); // we have mutliple arguments for hover metho

    await page.locator("//a[normalize-space()='Manage Courses']").click();
});

/*
    Notes:
        the hover() method is used to simulate moving the mouse pointer over an element (like hovering your mouse over a button, menu, or image). 
        This is especially useful when an element reveals a dropdown, tooltip, or submenu only on hover.

        Parameters:
            1. selector → A string (CSS/XPath/other Playwright selector) that identifies the element.

            2. options (optional):

                force (boolean) → If set to true, Playwright will hover even if the element is not visible or is covered.

                timeout (number) → Maximum waiting time in milliseconds (default: 30 seconds).

                trial (boolean) → If true, checks if the hover is possible but does not perform it.
        Ex:
            // Hover on a hidden element by force
            await page.hover('#hidden-button', { force: true }); // Hovers even if the element is hidden or covered.

            // Wait only 5 seconds for the element to appear
            await page.hover('#menu-button', { timeout: 5000 }); // waits 5s

            // Trial hover (no actual hover happens)
            await page.hover('#menu-button', { trial: true });

            // If selector is wrong, Playwright throws an error,
            // but if correct, the test just continues without hovering.
*/