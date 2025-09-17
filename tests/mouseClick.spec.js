import {test,expect} from '@playwright/test';

test("Mouse Right Click", async({page}) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    const button = await page.locator("//span[normalize-space()='right click me']");

    await button.click({button: 'right'}); // right click action
})

test("Mouse Double Click", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const copyBtn = await page.locator("//button[normalize-space()='Copy Text']");

    await copyBtn.dblclick(); // double click

    const f2 = page.locator("//input[@id='field2']");

    await expect(f2).toHaveValue("Hello World!");
})

test("Drag and Drop", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const sourceEle = await page.locator("//div[@id='draggable']");

    const destEle = await page.locator("//div[@id='droppable']");

    /* 
    // Approach 1

    await sourceEle.hover();
    await page.mouse.down();

    await destEle.hover();
    await page.mouse.up();
    */

    // Approach 2
    await sourceEle.dragTo(destEle);
    
})

/*
    Notes:
        Mouse Actions in Playwright

            1. Right Click
            await locator.click({ button: 'right' });

            2. Double Click
            await locator.dblclick();

            3. Hover (move mouse over element)
            await locator.hover();

            4. Drag & Drop
            await locator.dragTo(targetLocator);

            // OR low-level
            const box = await source.boundingBox();
            await page.mouse.move(box.x, box.y);
            await page.mouse.down();
            await page.mouse.move(targetX, targetY);
            await page.mouse.up();

            5. Mouse API (coordinate-based) (x and y are pixel coordinates relative to the page viewport)
            await page.mouse.click(x, y);                    // single click 
            await page.mouse.click(x, y, { clickCount: 2 }); // double click
            await page.mouse.click(x, y, { button: 'right' });// right click
            await page.mouse.move(x, y);                     // move mouse
            await page.mouse.down();                         // press mouse
            await page.mouse.up();                           // release mouse
*/