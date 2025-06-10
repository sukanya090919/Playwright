const { test, expect, chromium } = require('@playwright/test');
const data = require("C:/My Documents/Playwright_Demo/tests/login.json"); // Load JSON data

test.describe("Data Driven Login", () => {
  testdata.forEach((data) => {
    test(`Login with user: ${data.username}`, async () => {
      // Step 1: Launch the browser
      const browser = await chromium.launch({ headless: false });
      const context = await browser.newContext();
      const page = await context.newPage();

      // Step 2: Login Into Application
      await page.goto('https://login.lifeworks.com/');
      await page.waitForSelector("//button[text()= 'Accept all cookies']");
      await page.click("//button[text()= 'Accept all cookies']");

      await page.locator("#username").fill(data.username); // Correct JSON data access
      await page.click("//button[@data-hook ='login']");
      await page.fill('#password', data.password); // Correct data reference
    });
  });
});
