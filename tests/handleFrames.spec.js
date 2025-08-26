const {test,expect} = require('@playwright/test');

test("Handle Frame", async ({page}) => {
    
    await page.goto("https://docs.oracle.com/javase/8/docs/api/");

    const iframe = await page.frameLocator("//frame[@name='packageListFrame']"); // Using frameLocator() - is recommended (auto-handles waiting).

    // const iframe = await page.frame({ name: 'packageListFrame'}) // Using frame() with name or url

    await iframe.locator("//a[text()='java.applet']").click();

    // await page.pause(); for debugging purpose
})

/*
  Notes: Handling Frames in Playwright

  - Frames (iframes) are separate HTML documents inside a page.
  - Ways to access:
      page.frame({ name: 'frameName' }) → switch by name/url.
      page.frameLocator('selector') → recommended, auto-waits, stable.
  - Nested frames:
      page.frameLocator('#outerFrame')
          .frameLocator('#innerFrame')
          .locator('button#submit')
          .click();
  - page.frames() → returns all frames on the page.
*/