const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test radioAndcheckbox.spec.js
const { chromium } = require('playwright');

test('Radio Button ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.locator('#female').check()
   await page.waitForTimeout(3000)
   //await page.check('#female')
   //await expect(await page.locator('#female')).toBeChecked();
   await expect(await page.locator('#female')).toBeChecked().toBeTruthy();
})

 test('checkbox Button ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.locator('#sunday').check()
   
   await page.waitForTimeout(3000)
   
   
   
 })