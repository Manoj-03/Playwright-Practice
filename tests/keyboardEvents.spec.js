const{test,expect} = require("@playwright/test");

test("Keyboard Events in Playwright", async ({page}) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[title='Search']").focus; // Focus on the search textarea

    await page.keyboard.type("Mahesh Babu"); // Type "Mahesh Babu"

    await page.keyboard.press("ArrowLeft"); // Move cursor one step left (before the "!")

    await page.keyboard.down("Shift"); // Hold Shift key (to start text selection)

    for(let i=0;i<4;i++){        // Move cursor left 4 times while holding Shift (selecting last 4 characters)
        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift");  // Release Shift key after selection
 
    await page.keyboard.press("Backspace"); // Delete the selected text


    /*
    Type ‘Mahesh Babu’, select all, copy-paste it in the search box, and press Enter to search

    await page.locator("textarea[title='Search']").type("Mahesh Babu"); // Type text
    await page.keyboard.press("Meta+A"); // Select all
    await page.keyboard.press("Meta+C"); // Copy
    await page.keyboard.press("Backspace"); // Delete
    await page.keyboard.press("Meta+V"); // Paste
    await page.keyboard.press("Enter"); // Submit
    */
})


/*
    Notes:
        In Playwright, the keyboard object lets you simulate real keyboard actions such as typing, pressing keys, 
        holding modifiers (Shift, Ctrl, etc.), and shortcuts.

        Accessing Keyboard: page.keyboard
        Methods:
        type() → simulates human typing.
        insertText() → instantly inserts text. // Directly inserts text (does not simulate per-character typing).
        press() → key press (with optional modifiers).
        down() / up() → hold/release keys.
*/