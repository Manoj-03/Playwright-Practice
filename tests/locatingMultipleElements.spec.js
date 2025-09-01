const { test, expect} = require('@playwright/test');

test("Locating Multiple Elements", async ({page}) => {

    await page.goto("https://demoblaze.com/");

    /* 
    fetching all the links
    const links = await page.$$('a');

    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);
    }
    */

    // locating all the products displayed on home page
    await page.waitForSelector("//div[@id='tbodyid']//div//h4//a")

    const products = await page.$$("//div[@id='tbodyid']//div//h4//a");

    for(const product of products){
        const productName = await product.textContent();
        console.log(productName);
    }
})

/*
    NOTES (Multiple Elements in Playwright)

        1. page.$$(selector)
        → Returns an array of element handles matching the selector.
        → Use when you want ALL elements (not just first one).

        Example: 
        const links = await page.$$('a');  
        console.log(links.length);   // Total count of <a> tags

        2. waitForSelector(selector)
        → Ensures element(s) are present before fetching.
        → Prevents "element not found" errors if page loads slowly.

        3. Locators vs $$
        - page.locator(selector) → Recommended, auto-wait + more powerful.
        - page.$$(selector) → Quick snapshot, no auto-waiting.

        4. In this script:
        - Example 1: Collected ALL <a> links and printed text.
        - Example 2: Collected ALL product titles from homepage and printed them.
        - Used XPath: //div[@id='tbodyid']//div//h4//a
            (h4 > a contains product name in DemoBlaze site)
*/
