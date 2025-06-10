const { test, chromium } = require('@playwright/test');

test('Download a file', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/download');

  // Wait for the download event
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), // waits for the download to start
    page.click('a[href^="/download/"]') // clicks the download link
  ]);

  // Save the downloaded file to a desired location
  const path = await download.path();
  console.log('File downloaded to:', path);

  await download.saveAs('downloads/my-file.txt'); // Save with a custom name/location
  console.log('Saved as downloads/my-file.txt');

  await browser.close();
});