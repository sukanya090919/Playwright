const {test ,expect} = require('@playwright/test')               // npx playwright test rightClick.spec.js  
const { chromium } = require('playwright');

test('Mouse Right Click ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
   const button = await page.locator('//span[normalize-space()="right click me"]')
   await button.click({button: 'right'});
   await page.waitForTimeout(5000)
   
})