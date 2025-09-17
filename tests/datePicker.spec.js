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

/*
    NOTES: 
        Handling Date Pickers in Playwright
            1. Direct Fill (Fastest & Simplest)
                - Instead of interacting with the calendar widget,you directly type the date into the input box.
            Syntax:
                await page.fill("//input[@id='datepicker']", "MM/DD/YYYY");

            Example:
                await page.fill("#datepicker", "09/20/2025");

            Works only if:
                - The input allows manual typing.
                - The format matches expected date format.

            2. Manual Navigation with Prev/Next Buttons
                - Useful when the input box is readonly (can’t type).
                - Strategy:
                    1. Click date input → opens calendar.
                    2. Read current month/year → compare with target.
                    3. Keep clicking "Next" or "Prev" until target is found.
                    4. Once reached → select date.
            Syntax:
                const currentMonth = await page.locator(".ui-datepicker-month").textContent();
                const currentYear  = await page.locator(".ui-datepicker-year").textContent();

                while (currentMonth !== targetMonth || currentYear !== targetYear) {
                    await page.getByTitle("Next").click();   // or Prev if needed
                }

            Date Selection (2 Ways):
                a) Loop through all dates:
                    const dates = await page.$$("//a[@class='ui-state-default']");
                    for(const dt of dates){
                        if(await dt.textContent() == date){
                            await dt.click();
                            break;
                        }
                    }

                b) Direct XPath (faster):
                    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

            3. Dropdown Selection for Month & Year
                - Some date pickers provide dropdowns for month/year.
                - Faster than navigating with Prev/Next.

            Syntax:
                await page.locator(".ui-datepicker-month").selectOption({ label: "Dec" });
                await page.locator(".ui-datepicker-year").selectOption({ label: "2026" });

                // Pick day after selecting month & year
                await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

            4. Best Practices
                - Parameterize Date → don’t hardcode.
                    Example: create a helper function:
                        async function selectDate(page, year, month, date) { ... }

                - Prefer Dropdown Method if available → more stable & efficient.

                - Fallback to Prev/Next Loop if no dropdown is present.

                - Always open the date picker before interacting:
                    await page.click("//input[@id='datepicker']");

                - Avoid relying on fixed wait(like waitForTimeout).
                Instead, wait for calendar element:
                    await page.waitForSelector(".ui-datepicker-calendar");

            5. Key Methods Used
                - page.fill(selector, value) → type text directly.
                - page.click(selector) → click input or date cell.
                - locator.textContent() → get visible text (month/year).
                - getByTitle("Next") / getByTitle("Prev") → navigate calendar.
                - locator.selectOption({ label: "..." }) → select from dropdown.
                - page.$$() → fetch all matching elements into an array.
                - nth(index) → pick element by position.
                - Template Literal (`${value}`) → dynamic XPath/CSS selection.
*/