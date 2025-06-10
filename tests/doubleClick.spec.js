const {test ,expect} = require('@playwright/test')               // npx playwright test doubleClick.spec.js  
const { chromium } = require('playwright');

test('Mouse DoubleClick ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://testautomationpractice.blogspot.com/')

   const btnCopy = await page.locator('//button[normalize-space()="Copy Text"]')

   //double click
   await btnCopy.dblclick()

   const f2 = await page.locator("#field2")
   await expect(f2).toHaveValue('Hello World!')
   await page.waitForTimeout(5000)

})