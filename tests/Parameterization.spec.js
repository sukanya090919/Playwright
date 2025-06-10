const { test, expect, chromium } = require('@playwright/test');
const testdata = require("C:/My Documents/Playwright_Demo/tests/testdata.json"); // Load JSON data

test('Login Into Application', async () => {
  // Step 1: Launch the browser
  const browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 2: Login Into Application
  await page.goto('https://login.lifeworks.com/');
  await page.waitForTimeout(2000);
  await page.click("//button[text()= 'Accept all cookies']");
  await page.waitForTimeout(3000);

  await page.locator("#username").fill(testdata.username); // Correct JSON data access
  await page.click("//button[@data-hook ='login']");
  await page.fill('#password', testdata.password[0]); // Correct data reference
  await page.pause();
});