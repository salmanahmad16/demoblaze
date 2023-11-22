import {test, expect} from '@playwright/test'

test ("Locating Multiple Elements", async({page})=>{

await page.goto('https://demoblaze.com/')

await page.waitForTimeout(2000);
//page.waitForSelector('#tbodyid>div>div>div>h4>a');
const products = await page.$$('#tbodyid>div>div>div>h4>a')
for (const product of products){
    const prodName = await product.textContent();
    console.log(prodName)
}


})