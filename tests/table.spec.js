import {test,expect} from '@playwright/test';

test("Handling table", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table = await page.locator("#productTable");

    // 1) find numbers of rows and cols
    const cols = await table.locator("thead tr th");        // locate column headers
    console.log("No.of Columns:",await cols.count());
    expect(await cols.count()).toBe(4);

    const rows = await table.locator("tbody tr");           // locate table body rows
    console.log("No.of Rows:",await rows.count());
    expect(await rows.count()).toBe(5);

    // 2) Select check box for product Smartwatch (to select single product)
    /* 
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Smartwatch'           // Finds the row containing 'Smartwatch'
    })
    await matchedRow.locator("input").check();
    */

    // 3) Select multiple products by re-usable function (to select multiple products)
    /* 
    await selectProduct(rows,page,'Smartphone');
    await selectProduct(rows,page,'Tablet');
    await selectProduct(rows,page,'Wireless Earbuds');
    */

    // 4) print all product details using loop 
    /* 
    for(let i=0;i<await rows.count();i++){
        const row = rows.nth(i);                            // pick one row
        const tds = row.locator('td')                       // all cells (columns) in that row

        for(let j=0; j<await tds.count()-1;j++){            // skip last col (checkbox)
            console.log(await tds.nth(j).textContent());    // print cell value
        }
    }
    */

    // 5) Read data from all the pages in the table (pagination handling)
    const pages = await page.locator('.pagination li a');
    console.log("Number of pages in the table:",await pages.count());

    for(let p=0;p<await pages.count();p++){
        if(p>0){
            await pages.nth(p).click();                 // Navigate to next page
        }
        for(let i=0;i<await rows.count();i++){
            const row = rows.nth(i);
            const tds = row.locator('td')

            for(let j=0; j<await tds.count()-1;j++){
                console.log(await tds.nth(j).textContent());    // print each cell text
            }
        }
        // await page.waitForTimeout(3000);
    }
})

async function selectProduct(rows,page,name) {
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator("input").check();
}


/*
    Notes:
        Handling Tables in Playwright

        1. Count rows & columns
        - Use locator().count() on thead (columns) and tbody (rows).
        - Example: table.locator("thead tr th").count()

        2. Select a row by text
        - Use rows.filter({ hasText: 'Smartwatch' }) to find row.
        - Then click/check element inside that row.

        3. Select multiple rows (Reusable function)
        - Write helper function to pass row name dynamically.

        4. Read all table data
        - Nested loop: iterate rows → iterate cells.
        - Use .textContent() to get cell values.

        5. Handle pagination
        - Locate pagination links.
        - Loop through each page, click link, then read rows again.

        Always use reusable functions for repeated actions.
        Filter rows by unique text to target specific products.
        Use loops + pagination handling to extract full table data.

        Key Methods:
            - page.locator(selector) → find element(s) (lazy evaluation).
            - locator.count() → returns total number of matching elements.
            - locator.nth(index) → picks element at given index.
            - locator.textContent() → gets inner text of element.
            - locator.allTextContents() → gets array of all texts.
            - locator.filter({ hasText }) → filter locators by text content.
            - locator.check() → check a checkbox (only works if input[type="checkbox"]).
            - locator.click() → click on element.
            - expect(locator).toHaveCount(n) → assertion on number of elements.
            - expect(locator).toBeVisible() → verify element is visible.
*/