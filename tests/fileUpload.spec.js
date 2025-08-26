const {test,expect} = require('@playwright/test');

test("Verify file upload",async ({page}) => {
    
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./uploads/image1.png");

    await page.locator("#file-submit").click();

    await expect(page.locator("//h3")).toHaveText("File Uploaded!");
})

/*
    Notes: 
        Used to upload files into <input type="file">.
        Works with single, multiple, empty (reset), or virtual files.
        Ex;
        await page.setInputFiles('input[type="file"]', 'tests/sample.pdf'); // uploads single file

        await page.setInputFiles('input[type="file"]', ['tests/file1.png',tests/file2.jpg']); // Upload multiple files

        await page.setInputFiles('input[type="file"]', []); // Remove uploaded files (reset input)

        // Upload a virtual file from memory (no disk file)
        await page.setInputFiles('input[type="file"]', {
        name: 'example.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('Hello Playwright!')
        });
*/