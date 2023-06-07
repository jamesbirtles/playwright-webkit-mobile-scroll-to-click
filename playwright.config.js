// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
	testDir: './tests',
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? 'html' : undefined,
	fullyParallel: true,
	use: {
		baseURL: 'http://localhost:3000',
		trace: 'retain-on-failure',
	},
	projects: [
		{
			name: 'Desktop Safari',
			use: { ...devices['Desktop Safari'] },
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] },
		},
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] },
		},
	],

	/* Run your local dev server before starting the tests */
	webServer: {
		command: 'npm run start',
		url: 'http://localhost:3000',
		reuseExistingServer: !process.env.CI,
	},
});
