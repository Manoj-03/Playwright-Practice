import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.waitForTimeout(5000);
  
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();

  await page.getByRole('menuitem', { name: 'Logout' }).click();

  await page.waitForTimeout(3000);

});

/*
  Notes:
    Purpose: Records user actions on a webpage and generates Playwright test code automatically.

    Command -  
    npx playwright codegen https://opensource-demo.orangehrmlive.com/web/index.php/auth/login -o ./tests/codegen.spec.js

    The above command will open the link and -o is create a file automatically in the directory  ./tests with name as codegen.spec.js

    npx playwright codegen --help.    ---- helps in knowing the commands for codegen
*/