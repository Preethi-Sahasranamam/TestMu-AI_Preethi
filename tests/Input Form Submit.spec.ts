import { test, expect } from '@playwright/test';

test('Input form validation and submission', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.click("text=Input Form Submit");
    const submit = page.getByRole('button', { name: 'Submit' });

  await expect(page).toHaveURL(/input-form-demo/);
  await page.getByPlaceholder('Name', { exact: true }).fill('Preethi');
  await page.getByPlaceholder('Email', { exact: true }).fill('preethi.tester@example.com');
  await page.getByPlaceholder('Password', { exact: true }).fill('Test@1234');
  await page.getByPlaceholder('Company', { exact: true }).fill('Test Company');
  await page.getByPlaceholder('Website', { exact: true }).fill('https://example.com');
  await page.getByRole('combobox').selectOption({ label: 'United States' });
  await page.getByPlaceholder('City', { exact: true }).fill('Seattle');
  await page.getByPlaceholder('Address 1', { exact: true }).fill('123 Main Street');
  await page.getByPlaceholder('Address 2', { exact: true }).fill('Suite 100');
  await page.getByPlaceholder('State', { exact: true }).fill('Washington');
  await page.getByPlaceholder('Zip code', { exact: true }).fill('98101');

  await submit.click();

 await expect(page.getByText('Thanks for contacting us, we will get back to you shortly.'),
).toBeVisible({ timeout: 15_000 });
});