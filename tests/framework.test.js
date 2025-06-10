const { chromium } = require('playwright');                      // to run the Test : npx mocha framework.test.js
const assert = require('assert');  // Assertion library
const fs = require('fs');  // To check and create directories
const path = require('path');

const Enter_Username = 'lifeworkstesting+pro_user442bbd2@workivate.com';
const Enter_Password = 'Telu$he@ltH2024!'


// Ensure the 'screenshots' directory exists before running the tests
const screenshotsDir = path.join(__dirname, 'screenshots');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir);  // Create the 'screenshots' directory if it doesn't exist
}

// Mocha's "describe" block defines a suite of tests
 describe('Playwright Example Test', function() {
  this.timeout(50000);  // Set timeout to 10 seconds for this entire suite
  let browser;
  let page;

  before(async function() {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ recordVideo: { dir: 'videos/' } });
    page = await browser.newPage();
  });

  after(async function() {
    await browser.close();
  });

  // After each test, capture screenshot if the test fails
  afterEach(async function() {
    if (this.currentTest.state === 'failed') {
      const screenshotPath = path.join(__dirname, 'screenshots', `${this.currentTest.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`);
      //const screenshotPath = path.join(__dirname, 'screenshots', `${this.currentTest.title}.png`);
      console.log(`Test failed. Taking screenshot: ${screenshotPath}`);
      await page.screenshot({ path: screenshotPath });
    }
  });

  
  it('verify Title Example 0', async function() {
    await page.goto('https://example.com'); 
    const title = await page.title(); 
    assert.strictEqual(title, 'Examples Domain');
  });

  it('Browser Launch-Lifeworks', async function() {
    await page.goto('https://login.lifeworks.com'); 
    await page.waitForTimeout(2000);
    const title = await page.title(); 
    assert.strictEqual(title, 'Lifeworks');
  });

  it('verify Title Example 1', async function() {
    await page.goto('https://example.com'); 
    const title = await page.title(); 
    assert.strictEqual(title, 'Example Domain');
  });

  it('Lifeworks Homepage', async function() {
    await page.goto('https://login.lifeworks.com');
          //await page.waitForTimeout(2000);
          await page.waitForLoadState('load');  // Wait for the page to fully load

          acceptAllCokies = await page.click("//button[text()= 'Accept all cookies']");
          await page.waitForTimeout(5000);

          await page.locator("#username");
          for (let i = 0; i < Enter_Username.length; i++) {
          const char = Enter_Username[i];
          await page.type('#username', char, { delay: 200 });
         }
          Click_Next_Button = await page.click("//button[@data-hook ='login']");
          await page.fill('#password', 'Telu$he@ltH2024!');
          Click_Login = await page.click("//button[text() ='Log In']");
          await page.waitForTimeout(5000);
          acceptAllCokies = await page.click("//button[text()= 'Accept all cookies']");
          await page.click("//button[@data-id ='close-walkthrough']");
    });
});