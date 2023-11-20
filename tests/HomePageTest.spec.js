const {test, expect} = require ('@playwright/test');

test ('Home Page', async({page})=>{
    await page.goto('https://demoblaze.com/');

    const pageTitle = page.title();
    console.log('page title is ', pageTitle);

    await expect(page).toHaveTitle('STORE');

    await page.close();
})