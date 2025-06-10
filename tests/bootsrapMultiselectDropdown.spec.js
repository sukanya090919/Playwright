const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test bootsrapMultiselectDropdown.spec.js
const { chromium } = require('playwright');

test('dropdownTest-1 ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')
   await page.locator('.multiselect').click()

   const options = await page.locator("//ul[@class='multiselect-container dropdown-menu']//input")   //checkbox
   await expect(options).toHaveCount(11);

   //select options from dropdown
   const opt = await page.$$("//ul[@class='multiselect-container dropdown-menu']/li")  //checkbox include heading
   for(let option of opt)
   {
    const value = await option.textContent();
    if(value.includes('Angular') || value.includes('Java'))
    {
        await option.click()
    }
   }

   await page.waitForTimeout(5000);


})