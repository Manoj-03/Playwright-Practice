import {test,expect} from '@playwright/test';

test("Date Picker 1", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill("//input[@id='datepicker']", "09/20/2025") // fill directly instead of picking from calender

    // date picker
    const year = '2025';
    const month = 'December';
    const date = '31';

    await page.click("//input[@id='datepicker']");  // opens calendar

    while (true){
        const currentMonth = await page.locator(".ui-datepicker-month").textContent();
        const currentYear = await page.locator(".ui-datepicker-year").textContent();
        
        if(currentMonth == month && currentYear == year){
            break;
        }

        await page.getByTitle("Next").click();  // for next
        // await page.getByTitle("Prev").click();  // for previous years,months
    }

    /* 
    // date selection with loop
    const dates = await page.$$("//a[@class='ui-state-default']");
    for(const dt of dates){
        if(await dt.textContent() == date){
            await dt.click();
            break;
        }
    }
    */

    // date selection without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

    // await page.waitForTimeout(5000)
})

test("Date Picker 2", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.click("//input[@id='txtDate']")

    await page.locator(".ui-datepicker-month").selectOption({ label: 'Dec'})

    await page.locator(".ui-datepicker-year").selectOption({ label: '2026'})

    const date = '31'
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

    //await page.waitForTimeout(5000)
})