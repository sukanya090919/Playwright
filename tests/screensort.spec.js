const {test ,expect} = require('@playwright/test')               // npx playwright test screensort.spec.js  
const { chromium } = require('playwright');

test('Page Screensort ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://login.lifeworks.com/')
   await page.waitForTimeout(5000)
   await page.screenshot({path:'screenshots/'+Date.now()+'Homepage.png'})
})

test('Full Page Screensort ',async () =>{
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(); 
    const page = await context.newPage();  
  
     await page.goto('https://beachfinder.cheapcaribbean.com/')
     await page.waitForTimeout(5000)
     await page.screenshot({path:'screenshots/'+Date.now()+'Fullpage.png' , fullPage:true})
  })

  test('Element Screensort ',async () =>{
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(); 
    const page = await context.newPage();  
  
     await page.goto('https://login.lifeworks.com/')
     await page.waitForTimeout(5000)
     await page.click("//button[text()= 'Accept all cookies']");
     await page.locator("//img[@alt='Home Page']").screenshot({path:'tests/screenshots/'+Date.now()+'Element.png'})
  })