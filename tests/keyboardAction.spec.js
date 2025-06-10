const {test ,expect} = require('@playwright/test')               // npx playwright test keyboardAction.spec.js  
const { chromium } = require('playwright');

test('Keyboard Action ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://gotranscript.com/text-compare')
   //await page.locator('[name="text1"]').fill("Welcome to the world of Automation")
   await page.type('[name="text1"]', "Welcome to the world of Automation")

   //Ctrl+A
   await page.keyboard.press('Control+A')   //Use Press for press 2 button at a time  And Meta+A for MAC

   //Ctrl+C
   await page.keyboard.press('Control+C')

   //TAB
   await page.keyboard.down('Tab')
   await page.keyboard.up('Tab')  //To Release the key

   //Ctrl+V
   await page.keyboard.press('Control+V')

   await page.waitForTimeout(5000)

})