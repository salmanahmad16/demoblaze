const {test, expect} = require ('@playwright/test');


test('Assertions', async ({ page }) => {
  await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
  
  // expect(page).toHaveURL()               page has url
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

  // expect(page).toHaveTitle()             page has title
  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  // expect(page).toBeVisible()             Element is visible
  const logoElement = await page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  // expect(page).toBeEnabled()
  const searchBox = await page.locator('#small-searchterms')
  await expect(searchBox).toBeEnabled()

  // expect(page).toBeChecked()              Radio button check
  const maleRadioButton = await page.locator('#gender-male')
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()

  //expect(page).toHaveAttribute()              Element has attribute
  const regbutton = await page.locator('#register-button')
  await expect(regbutton).toHaveAttribute('type', 'submit')


  // expect(page).toHaveText()                  Element matches text
  await expect(await page.locator('.page-title h1')).toHaveText('Register') // full text


  // expect(page).toContainText()               Element contain text
  await expect(await page.locator('.page-title h1')).toContainText('Reg')      // partial text


  await page.waitForTimeout(4000);

});