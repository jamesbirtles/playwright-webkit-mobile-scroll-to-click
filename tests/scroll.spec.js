// @ts-check
const { test, expect } = require('@playwright/test');

test('can click link at bottom of page', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('link', { name: 'Playwright' }).click();
	await expect(page).toHaveURL('https://playwright.dev');
});
