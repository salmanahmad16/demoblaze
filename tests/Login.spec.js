// const {test, expect} = require ('@playwright/test');
import {test, expect} from '@playwright/test'

test ('Login', async({page})=>{
    await page.goto('https://demoblaze.com/')

// click login button - property

await page.click('id=login2')
// await page.locator('id=login2').click()

// Enter user name
// await page.locator('input[id=loginusername]').fill("Salman Ahmad")
await page.fill('input[id=loginusername]', "Salman Ahmad")

// Enter password
await page.fill('input[id=loginpassword]', "123456")


// Click Login button
await page.click('button[type="button"][onclick="logIn()"]')
await page.waitForTimeout(2000);

})