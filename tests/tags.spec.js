import {test,expect} from '@playwright/test';

test("test1@sanity", async({page}) => {
    console.log("This is test 1...")
})

test("test2@sanity", async({page}) => {
    console.log("This is test 2...")
})

test("test3@reg", async({page}) => {
    console.log("This is test 3...")

})

test("test4@reg", async({page}) => {
    console.log("This is test 4...")
})

test("test5@sanity@reg", async({page}) => {
    console.log("This is test 5...")
})

/*
    Notes: Tags in Paywright

        1) Purpose:
            - Tags (like @sanity, @regression) help categorize tests.
            - Allows selective test execution based on tags.
            - Makes large test suites easier to manage.

        2) How to use:
            - Append tags in test name string using @.
                Example:
                    test("test1@sanity", async ({page}) => { ... })
            - Multiple tags can be added:
                    test("test5@sanity@reg", async ({page}) => { ... })

        3) Running tests by tag:
            - Use Playwright CLI with --grep to filter tests:
                    npx playwright test --grep @sanity       → runs tests with @sanity
                    npx playwright test --grep @reg          → runs tests with @reg
                    npx playwright test --grep @sanity@reg   → runs tests with both tags

        4) Benefits:
            - Run subsets of tests (sanity, regression, smoke, etc.).
            - Improve CI/CD pipeline efficiency.
            - Easy test management in large projects.

        5) Best Practices:
            - Use meaningful tags.
            - Avoid spaces in tags; use `@tag`.
            - Maintain consistent tagging conventions across the project.
*/
