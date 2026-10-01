import { test, expect } from '@playwright/test';

test('Drag slider to 95', async ({ page }) => {
  await page.goto('https://www.testmuai.com/selenium-playground/');
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();

const slider = page.getByRole('slider').nth(2);

await slider.focus();
await slider.press('End');

for (let step = 0; step < 5; step++) {
  await slider.press('ArrowLeft');
}

await expect(slider).toHaveValue('95');
});