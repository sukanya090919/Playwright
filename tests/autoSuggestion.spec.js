const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test autoSuggestion.spec.js
const { chromium } = require('playwright');

test('Auto Suggestion ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://www.flipkart.com/')

   await page.getByPlaceholder('Search for Products, Brands and More').fill('iphone');
   await page.waitForTimeout(2000)
   
   const elements =await page.$$("//li[@data-locationtype='CITY']")
   
   for(let option of elements)
   {
    const value = await option.textContent()
    console.log(value);
   }

   await page.waitForTimeout(5000);
})