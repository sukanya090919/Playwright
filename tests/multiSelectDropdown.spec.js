const {test ,expect} = require('@playwright/test')               // npx playwright test multiSelectDropdown.spec.js  
const { chromium } = require('playwright');

test('dropdownTest-1 ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.selectOption('#colors',['Red','Yellow'])

   await page.waitForTimeout(5000);

   //Assertion
    //1) Check number of options in dropdown
      const options = await page.locator('#colors option')
      await expect (options).toHaveCount(7)
})