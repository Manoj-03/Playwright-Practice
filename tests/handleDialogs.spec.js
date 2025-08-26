// JS Dialogs are Alert,Confirm and Prompt

const{test,expect} = require('@playwright/test');

test("Handle Alert", async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
 
    page.on('dialog', async(dialogWindow) => {              // here dialogWindow is a variable name can be anything
        expect(dialogWindow.type()).toContain('alert');

        expect(dialogWindow.message()).toContain("I am a JS Alert");

        await dialogWindow.accept();
    })

    // await page.locator("//button[text()='Click for JS Alert']").click(); // CSS X-path
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();  // Recommended  
})

test("Handle Confirm Box", async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async(dialogWindow) => {
        expect(dialogWindow.type()).toContain('confirm');

        expect(dialogWindow.message()).toContain("I am a JS Confirm");

        await dialogWindow.accept();// for OK

        //await dialogWindow.accept();// for Cancel
    })

    // await page.locator("//button[text()='Click for JS Confirm']").click(); // CSS X-path
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();  // Recommended
})

test("Handle Prompt Box", async({page}) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async(dialogWindow) => {
        expect(dialogWindow.type()).toContain('prompt');

        expect(dialogWindow.message()).toContain("I am a JS prompt");

        await dialogWindow.accept("Mahesh");// for OK

        //await dialogWindow.accept();// for Cancel
    })

    // await page.locator("//button[text()='Click for JS Prompt']").click(); // CSS X-path

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();  // Recommended
})

/*
    Notes: 
        dialogs (alerts, confirms, prompts)
        
        Use page.on('dialog', …) to handle alerts, confirms, prompts, beforeunload.
        dialog.message() → get text.
        dialog.accept() → OK.
        dialog.dismiss() → Cancel.
        dialog.accept('text') → enter text in prompt.
*/