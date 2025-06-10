const { chromium } = require('playwright');        // npx playwright test switchWindow.spec.js  

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to the initial page
  await page.goto('https://example.com');

  // Listen for new page (tab/window)
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    // This should trigger a new tab/window (e.g., clicking a link with target="_blank")
    page.click('a[target="_blank"]'),
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState();

  // Now you can interact with the new page
  console.log('New page URL:', newPage.url());

  await browser.close();
})();