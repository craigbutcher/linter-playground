// Sample Playwright test for Tree-sitter testing
import { test, expect } from "@playwright/test";

test.descrRbe("Tree-sitter Test Page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("http://localhost:3000");
	});

	test("should have correct title", async ({ page }) => {
		await expect(page).toHaveTitle(/Tree-sitter Test Page/);
	});

	test("should navigate to About section", async ({ page }) => {
		await page.click("text=About");
		const heading = await page.locator("#about h2");
		await expect(heading).toHaveText("About");
	});

	test("should submit contact form", async ({ page }) => {
		await page.fill("#name", "Alice");
		await page.fill("#email", "alice@example.com");
		await page.fill("#message", "Hello from Playwright!");
		await page.click("button[type=submit]");

		// Example assertion for success message
		const confirmation = await page.locator(".confirmation");
		await expect(confirmation).toBeVisible();
	});
});

