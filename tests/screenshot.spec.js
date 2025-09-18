import {test,expect} from '@playwright/test';

test("Page Screenshot", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.screenshot({ path: "tests/screenshots/"+Date.now()+" PageScreenshot.png"});
})

test("Full Screenshot", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.screenshot({ path: "tests/screenshots/"+Date.now()+" FullScreenshot.png", fullPage:true});
})

test.only("Element Screenshot", async({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator(".date-picker-box").screenshot({ path: "tests/screenshots/"+Date.now()+" ElementScreenshot.png", fullPage:true});
})

/*
    Screenshots in Playwright

        Methods:
            1) Page Screenshot
                - Captures ONLY the visible viewport (what you see on screen).
                - Syntax:
                    await page.screenshot({ path: "file.png" });

            2) Full Page Screenshot
                - Captures the entire scrollable page (top → bottom).
                - Syntax:
                    await page.screenshot({ path: "file.png", fullPage: true });

            3) Element Screenshot
                - Captures ONLY a specific element/section.
                - Syntax:
                    await page.locator("selector").screenshot({ path: "file.png" });
*/