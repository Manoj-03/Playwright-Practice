const { expect } = require('@playwright/test');

class LoginPage{

    constructor(page){

        this.page = page;
        this.username = "#email1";
        this.password = "//input[@placeholder='Enter Password']";
        this.loginButton = "//button[@type='submit']";

        this.header = "//h2[text()='Sign In']";
    }

    async loginToApplication(user,pass){

        await this.page.fill(this.username,user);

        await this.page.fill(this.password,pass);

        await this.page.click(this.loginButton);
    }

    async verifySignIn(){

        await expect(this.page.locator(this.header)).toBeVisible();
    }
}

module.exports = LoginPage;

/*
    1. Export directly:
        If you exported like this:
            module.exports = LoginPage;   // exported directly
        Then import like:
            const LoginPage = require('../pages/loginPage');

    2. Export inside an object:
        If you exported like this:
            module.exports = { LoginPage };
        Then import like:
            const { LoginPage } = require('../pages/loginPage');
*/