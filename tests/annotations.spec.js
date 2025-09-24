import {test,expect} from '@playwright/test';

// only
/* test.only("test 1", async({page}) => {
    console.log("This is test 1");
})
*/

// skip
test.skip("test 2", async({page}) => {
    console.log("This is test 2");
})

test("test 3", async({page, browserName}) => {
    console.log("This is test 3");
    if(browserName === "chromium"){
        test.skip();
    }
})

// fixme
test("test 4", async({page}) => {
    test.fixme();
    console.log("This is test 4");
})

// fail
// If both expected and actual is failed then test will pass
test("test 5", async({page}) => {
    test.fail(); // expected
    console.log("This is test 5");
    expect(1).toBe(2); // actual
})

test("test 6", async({page, browserName}) => {
    console.log("This is test 6");
    if(browserName === "chromium"){
        test.fail(); // expected
    }
})

test("test 7", async({page, browserName}) => {
    console.log("This is test 7");
    if(browserName === "firefox"){
        test.fail(); // expected
    }
})

// slow
test("test 8", async({page}) => {
    test.slow();
    test.setTimeout(3000); // for specific this test only 
    await page.goto("https://demoblaze.com/index.html");
    console.log("This is test 8");
})

/*
    Notes: 
        1) test.only
            - Runs ONLY this test (ignores others).
            - Usage: test.only("test name", async() => {...})

        2) test.skip
            - Skips the test (won’t run).
            - Can be conditional (e.g., skip only in Chromium).
            - Usage:
                    test.skip("test name", async() => {...})
                    if (browserName === "chromium") test.skip();
        3) test.fixme
            - Marks test as not working yet.
            - Test will be skipped automatically.
            - Usage: test.fixme();
        4) test.fail
            - Marks test as expected to fail.
            - If test fails → reported as PASS (since expected).
            - If test passes → reported as FAIL (unexpected).
            - Can be conditional per browser.
        5) test.slow
            - Marks test as "slow".
            - Increases default timeout x3.
            - Can combine with test.setTimeout(ms) for custom timeout.

        Use Cases:
        - only → Debugging a single test.
        - skip → Known issues / irrelevant for certain browsers.
        - fixme → Temporary placeholder for failing tests.
        - fail → Document known failures (so CI doesn’t break).
        - slow → Long-running tests (e.g., complex workflows).
*/