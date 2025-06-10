const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test alert.spec.js
const { chromium } = require('playwright');

test('Alert with OK Button ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://testautomationpractice.blogspot.com/')

   //Dailog window handler  or Enabling alert handling
   page.on('dailog', async dailog=>{
    expect('dailog',type()).toContain('alert')
    expect(dailog.message()).toContain('I am an alert box!')
    await dailog.accept();
   })

   await page.locator("#alertBtn").click()
   page.waitForTimeout(5000)

})

   test('Alert with Confirmation Button ',async () =>{
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext(); 
    const page = await context.newPage();  
  
     await page.goto('https://testautomationpractice.blogspot.com/')
  
     //Dailog window handler  or Enabling alert handling
     page.on('dailog', async dailog=>{
      expect('dailog',type()).toContain('confirm')
      expect(dailog.message()).toContain('Press a button!')
      await dailog.accept();
      //await dailog.dismiss();
     })
  
     await page.locator("#confirmBtn").click()
     page.waitForTimeout(2000)


    })

    test.skip('Alert with Prompt with OK/Cancel Button ',async () =>{
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext(); 
        const page = await context.newPage();  
      
         await page.goto('https://testautomationpractice.blogspot.com/')
      
         //Dailog window handler  or Enabling alert handling
         page.on('dailog', async dailog=>{
          expect('dailog',type()).toContain('prompt')
          expect(dailog.message()).toContain('Please enter your name:')
          expect(dailog.defaultValue().toContain('Harry Potter'))
          await dailog.accept('John');
         })
      
         await page.locator("#promptBtn").click()
         page.waitForTimeout(5000)
        })