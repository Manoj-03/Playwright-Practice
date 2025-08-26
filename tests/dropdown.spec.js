const {test, expect} = require('@playwright/test');

test("Select Values From Dropdown", async function({page}) {
    
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    /*
        preferences of using - 1.label, 2.value and 3.index
    */
    await page.locator("#state").selectOption({label:"Goa"}); // highly recommanded here Goa is visible text

    //await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({value:"Bihar"});

    //await page.waitForTimeout(1000);

    await page.locator("#state").selectOption({index:8}); // starts from 0
    
    //await page.waitForTimeout(1000);
    /*
    const value = await page.locator("#state").textContent();
    console.log("The Dropdown Values are: ",value); // prints all the values in dropdown

    await expect(value.includes("Kerala")).toBeTruthy(); // verifies the dropdown contains Kerala or not
    */

    // below is another way to verify a particular value is present or not
    let state = await page.$("#state"); // The method finds an element matching the specified selector within the page
    let allElements = await state.$$("option") // same but returns an array
    let ddStatus = false;
    for(let i=0;i<allElements.length;i++){
        let element = allElements[i];
        let value = await element.textContent();
        console.log("Values from Dropdown using for loop: ", value);
        if(value.includes("Rajasthan")){
            ddStatus = true;
            break;
        }
    }
    await expect(ddStatus).toBeTruthy();

    // to select multiple values
    await page.locator("#hobbies").selectOption(['Playing','Swimming']);
    // await page.waitForTimeout(5000);
});

/*
    Notes:
        1. Using selectOption() (for <select> HTML dropdowns)
            // By value
            await page.selectOption('#dropdown', 'option1');

            // By label (visible text)
            await page.selectOption('#dropdown', { label: 'Option 2' });

            // By index
            await page.selectOption('#dropdown', { index: 2 });

        2. Multi Selection Dropdown
            await page.selectOption('#multi-select', ['option1', 'option3'])

*/