const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test multiplewindow.spec.js
const { chromium } = require('playwright');

test('Multiple Pages/Window',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page1 = await context.newPage();
  const page2 = await context.newPage();
  const page3 = await context.newPage();  

  const allPages = context.pages()
  console.log("No of Pages:", allPages)

  await page1.goto("https://ai.beta.cheapcaribbean.com/")
  await expect(page1).toHaveTitle('CheapCaribbean Vacation Planning Assistant')

  await page2.goto('https://login.lifeworks.com');
  await page2.waitForTimeout(3000);
  const title = await page2.title();
  expect(title).toBe('Login page - Page to login into TELUS Health One App - TELUS Health One -');
    
})
test.('Multiple Pages/Window Test',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page1 = await context.newPage();
  const page2 = await context.newPage();
  const page3 = await context.newPage();  

  const allPages = context.pages()
  console.log("No of Pgese:", allPages)

  await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  const promise=context.waitForEvent('page1')
  await page1.locator('//a[normalize-space()="OrangeHRM, Inc"').click()
  const newPage = await promise;
  await page1.waitForLoadState(newPage)


})