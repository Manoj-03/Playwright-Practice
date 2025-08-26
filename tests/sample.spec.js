const {test,expect} = require('@playwright/test');

test('First test',async function({page}) {
    expect(12).toBe(12)
;})

test.skip('Second test',async function({page}) {
    expect(100).toBe(101);
})

test('Third test',async function({page}) {
    expect(2.0).toBe(2.0);
})

test('Fourth test',async function({page}) {
    expect("manoj").toContain("manoj");
    expect(true).toBeTruthy();
});

test('Fifth test',async function({page}) {
    expect(false).toBeFalsy();
});

