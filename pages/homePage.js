const { expect } = require('@playwright/test');

class HomePage{

    constructor(page){

        this.page = page;
        this.menu = "//img[@alt='menu']";
        this.logoutButton = "//button[normalize-space()='Sign out']";

        this.manageOption = "//span[normalize-space()='Manage']";
    }

    async verifyManageOption(){

        await expect(this.page.locator(this.manageOption)).toBeVisible();
    }


    async logoutFromApplication(){

        await this.page.click(this.menu);

        await this.page.click(this.logoutButton);
    }
}

module.exports = HomePage;

/*
    1. Export directly:
        If you exported like this:
            module.exports = HomePage;   // exported directly
        Then import like:
            const HomePage = require('../pages/homePage');

    2. Export inside an object:
        If you exported like this:
            module.exports = { HomePage };
        Then import like:
            const { HomePage } = require('../pages/homePage');
*/