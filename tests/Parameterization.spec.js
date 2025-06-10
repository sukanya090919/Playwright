const{test,expect} = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("C:\Users\Sukanya\OneDrive - Motivity Labs\Desktop\Playwright_Demo\tests\testdata.json")))  

  //Stringify Method convert javascript to JSON  And JSON Parse convert JSON string into JSON Object

test('Login Into Application', async () => {
  // Step 1: Launch the browser
  const browser = await chromium.launch({ headless: false });   // headless: false to see the browser window
  const context = await browser.newContext();
  const page = await context.newPage();    // Create a new page (tab)
 
  
  // Step 2: Login Into Application
  await page.goto('https://login.lifeworks.com/');
  await page.waitForTimeout(2000);
  await page.click("//button[text()= 'Accept all cookies']");
  await page.waitForTimeout(3000);

  await page.locator("#username").fill("testdata.username");
  await page.click("//button[@data-hook ='login']");
  await page.fill('#password', 'testdata.password[0]');
  await page.pause();
})