const{test,expect} = require("@playwright/test");

test.use({viewport:{width:1300,height:700}}) // browser window size for this spec file

test("Valid Login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.viewportSize().width);

    console.log(await page.viewportSize().height);

    await page.getByPlaceholder("Username").type("Admin",{delay: 200}); // delay is optional, it simulates human typing
    
    await page.locator("input[name='password']").type("admin123", {delay: 100});

    await page.locator("//button[@type='submit']").click();

    // await page.waitForTimeout(5000); // for debugging purposes it will wait for 5 seconds after login

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click();

    await page.getByText("Logout").click();

    // await page.waitForTimeout(3000); // for debugging purposes it will wait for 3 seconds after logout

    await expect(page).toHaveURL(/login/);
})

