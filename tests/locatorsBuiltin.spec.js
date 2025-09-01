const { test, expect} = require('@playwright/test');

test("Built-in Locators", async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // 1. getByRole() → locate elements by ARIA role
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    // 2. getByText() → locate elements by visible text
    await expect(page.getByText('Forgot your password?')).toBeVisible();

    // 3. getByLabel() → locate input using its label
    await page.getByLabel('Username').fill('Admin');

    // 4. getByPlaceholder() → locate input using placeholder
    await page.getByPlaceholder('Password').fill('admin123');

    // 5. getByAltText() → locate images by alt text
    await expect(page.getByAltText('company-branding')).toBeVisible();

    // 6. getByTitle() → locate element by title attribute
    // (e.g. footer link with title="OrangeHRM, Inc")
    await expect(page.getByTitle('OrangeHRM, Inc')).toBeVisible();

})

/*
    Notes:
        These are the recommended built-in locators.

            1. page.getByRole() to locate by explicit and implicit accessibility attributes.
            2. page.getByText() to locate by text content.
            3. page.getByLabel() to locate a form control by associated label's text.
            4. page.getByPlaceholder() to locate an input by placeholder.
            5. page.getByAltText() to locate an element, usually image, by its text alternative.
            6. page.getByTitle() to locate an element by its title attribute.
            7. page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/