import { test, expect } from '@playwright/test';

test('Simple Form Demo displays the entered message', async ({ page }) => {
  
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.getByRole('link', { name: 'Simple Form Demo', exact: true }).click();

  await expect(page).toHaveURL(/simple-form-demo/);
  await page.waitForLoadState('networkidle');

  const message = 'Welcome to TestMu AI';
  const inputField = page.getByPlaceholder("Please enter your Message");
  await inputField.click();
  await inputField.pressSequentially(message);
  await page.locator("#showInput").click();
  
  await expect(page.locator('#message')).toContainText(message, { timeout: 13_000 });
 

});