const { chromium } = require('playwright'); // Import Playwright
const { test, expect } = require('@playwright/test');

test('Login Into Application', async () => {
  test('Login Into Application', async ({ page }) => {
  setTimeout(60000) // Increase timeout to 60 seconds
})});
  // Step 1: Launch the browser
  const browser = await chromium.launch({ headless: false }); // headless: false to see the browser window
  const context = await browser.newContext({
    recordVideo: { dir: 'Videos/' } // Enable video recording
  });

  const page = await context.newPage(); // Create a new page (tab)

  const Enter_Username = 'lifeworkstesting+pro_user442bbd2@workivate.com';
  const Enter_Password = 'Telu$he@ltH2024!';

  // Step 2: Go to a website
  await page.goto('https://login.lifeworks.com/');
  await page.setViewportSize({ width: 1500, height: 800 }); // Maximize window
  await page.waitForTimeout(2000);
  
  await page.click("//button[text()= 'Accept all cookies']");
  await page.waitForTimeout(3000);

  // Enter username correctly
  await page.fill("#username", Enter_Username);

  await page.click("//button[@data-hook ='login']");

  // Enter password correctly
  await page.fill("#password", Enter_Password);

  await page.click("//button[text() ='Log In']");
  await page.waitForTimeout(2000);


  // Retrieve video path
  const videoPath = await page.video().path();
  console.log('Video saved at:', videoPath);

  await context.close(); // Close context to finalize the video recording
