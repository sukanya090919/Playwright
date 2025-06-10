const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');       //To run the test:  npx playwright test demo.spec.js
const Enter_Username = 'lifeworkstesting+pro_user442bbd2@workivate.com';

test.describe('Playwright Example Test', () => {
    test('Test 1 - Launch CC', async ({ page }) => {
      await page.goto('https://beachfinder.cheapcaribbean.com/');
      const title = await page.title();
      expect(title).toBe('CheapCaribbean Budget Beach Finder');
    });
  
    test('Test 2 - Launch Lifeworks', async ({ page }) => {
      await page.goto('https://login.lifeworks.com');
      await page.waitForTimeout(5000);
      const title = await page.title();
      expect(title).toBe('Login page - Page to login into TELUS Health One App - TELUS Health One -');
    });
    test('Test 3 - Login Into Application', async ({ page }) => {
      await page.goto('https://login.lifeworks.com');
      await page.waitForTimeout(5000);
      const title = await page.title();
      expect(title).toBe('Login page - Page to login into TELUS Health One App - TELUS Health One -');
      await page.waitForTimeout(5000);
      await page.click("//button[text()= 'Accept all cookies']");
  
    await page.locator("#username");
   for (let i = 0; i < Enter_Username.length; i++) {
    const char = Enter_Username[i];
    await page.type('#username', char, { delay: 200 });
  }

  Click_Next_Button = await page.click("//button[@data-hook ='login']");
  await page.fill('#password', 'Telu$he@ltH2024!');
  Click_Login = await page.click("//button[text() ='Log In']");
  await page.waitForTimeout(5000);
     });
  });

