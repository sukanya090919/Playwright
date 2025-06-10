const { chromium } = require('playwright');        // Import Playwright
const {test ,expect} = require('@playwright/test') 



test('Login Into Application', async () => {

  // Step 1: Launch the browser
  const browser = await chromium.launch({ headless: false });   // headless: false to see the browser window
  const context = await browser.newContext();
  const page = await context.newPage();    // Create a new page (tab)
 
  const Enter_Username = 'lifeworkstesting+pro_user442bbd2@workivate.com';
  const Enter_Password = 'Telu$he@ltH2024!'

  // Step 2: Go to a website
  await page.goto('https://login.lifeworks.com/');
  await page.setViewportSize({ width: 1500, height: 800 });       //maximize
  await page.waitForTimeout(2000);
  await page.click("//button[text()= 'Accept all cookies']");
  await page.waitForTimeout(3000);

  await page.locator("#username");
   for (let i = 0; i < Enter_Username.length; i++) {
    const char = Enter_Username[i];
    await page.type('#username', char, { delay: 20 });
  }

  await page.click("//button[@data-hook ='login']");

  await page.fill('#password', 'Telu$he@ltH2024!');

  /*await page.locator("#password");
  for (let i = 0; i < Enter_Password.length; i++) {
   const char = Enter_Password[i];
   await page.type('#username', char, { delay: 200 });
  }*/

  await page.click("//button[text() ='Log In']");
  await page.waitForTimeout(2000);
  await page.click("//button[text()= 'Accept all cookies']");
  await page.click("//button[@data-id ='close-walkthrough']");

})