import { test, expect } from '@playwright/test';


// View port adjustments : npx playwright codegen --viewport-size "1280, 720"



test('Add to cart', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Salman Ahmad');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.waitForTimeout(4000);

});