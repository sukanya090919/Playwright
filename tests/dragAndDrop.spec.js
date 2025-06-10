const {test ,expect} = require('@playwright/test')               // npx playwright test dragAndDrop.spec.js  
const { chromium } = require('playwright');

test('Mouse Right Click ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
   const source = await page.locator('#box6')
   const target = await page.locator('#box106')

   //Approach 1
   /*await source.hover()
   await page.mouse.down()

   await target.hover() 
   await page.mouse.up()  */

   //Approach -2
   await source.dragTo(target)
   await page.waitForTimeout(5000)


})