const{test,expect} = require('@playwright/test');

/* Test 1: Searches "Mahesh Babu" on Google, navigates suggestions using Arrow keys, 
and selects a suggestion with Enter. */

test("Verify Application Title Using Keyboard", async({page}) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").type("Mahesh Babu");

    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Enter");

})

/* Test 2: Searches "mahesh babu" on Google, loops through all suggestions, 
and clicks the one containing "movies". */

test("Verify Application Title Using Loop", async({page}) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").type("mahesh babu");

    await page.waitForSelector("//li[@role='presentation']");

    const elements = await page.$$("//li[@role='presentation']");

    for(let i=0;i<elements.length;i++){

        const text = await elements[i].textContent();

        if(text.includes('movies')){
            await elements[i].click();
            break;
        }
    }
})


/*
    Notes:
        To handle auto complete:
            Use fill()/type() → enter query.
            Use waitForSelector() → wait for dropdown.
            Use click() (by text) OR keyboard.press() → select suggestion.  
*/