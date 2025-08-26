const {test, expect} = require('@playwright/test');

test("Verify Error Message", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").type("Admin");

    await page.getByPlaceholder("Password").type("abadvyv");

    await page.locator("//button[normalize-space()='Login']").click();

    const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent(); // get the error message text based on the locator

    console.log("Error Message:", errorMessage);

    expect(errorMessage.includes("Invalid")).toBeTruthy(); // checks partially if the error message contains "Invalid"

    expect(errorMessage).toBe("Invalid credentials"); // checks if the error message is exactly "Invalid credentials"

    expect(errorMessage === "Invalid credentials").toBeTruthy(); // another way to check if the error message is exactly "Invalid credentials"
})