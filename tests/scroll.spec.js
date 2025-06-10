const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test scroll.spec.js 
const { chromium } = require('playwright');

test('Origin List ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://play1.automationcamp.ir/')

   //Approach - 1 : page.mouse.wheel()
   await page.mouse.wheel(0, 100); 

   //Approach-2 :
   await page.evaluate(() => {
    window.scrollTo(0, 500); // Scroll to 500px from the top
  });

   //Approach-3
   await page.keyboard.press('PageDown');

   //Approrach-4 : 
   for (let i = 0; i < 10; i++) { 
    await page.mouse.wheel(0, 1000); // Scroll down by 1000px each time
    await page.waitForTimeout(1000); // Wait for 1 second to let content load
  }
  
   //Approach-5 
   const element = await page.$("//h5[normalize-space()='Advanced UI Features']"); // Select an element by its text
  await element.scrollIntoViewIfNeeded();


   await page.waitForTimeout(5000);

})