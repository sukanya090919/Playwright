const { chromium } = require('playwright');

(async () => {
  // Launch the browser (set headless: false to see the browser)
  const browser = await chromium.launch({ headless: false });

  // Create a new browser context
  const context = await browser.newContext();

  // Open a new page
  const page = await context.newPage();

  // Navigate to a website
  await page.goto('https://login.lifeworks.com/');
   

  //Take Screensort
  await page.screenshot({ path: 'C:\My Documents\ALG\screensort\Homepage.png' });


  // Wait for 5 seconds to keep the browser open
  await page.waitForTimeout(5000);

 
  // Close the browser
  await browser.close();
})();
