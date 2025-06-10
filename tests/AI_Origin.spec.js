const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test AI_Origin.spec.js 
const { chromium } = require('playwright');

test('Origin List ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://ai.beta.cheapcaribbean.com/')

   await page.locator('#mui-17').click()
   await page.waitForTimeout(5000);

   await page.locator('')
})