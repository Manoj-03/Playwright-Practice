const {test,expect} = require('@playwright/test');

test("Verify Application Title",async function({page}){
    await page.goto("https://www.google.com");  // if we didn't specify correct URL, it will throw error i.e. protocol error
    const url = await page.url();
    console.log("URL : " + url);

    const title = await page.title();
    console.log("Title : " + title);
    
    await expect(page).toHaveTitle("Google");   // assertion to check if the title is "Google"
    await expect(page).toHaveURL("https://www.google.com/"); // assertion to check if the URL is "https://www.google.com/"
});