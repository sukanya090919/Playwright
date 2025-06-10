const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test hiddenDropdown.spec.js
const { chromium } = require('playwright');

test('Hidden Dropdown Options',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   await page.waitForTimeout(2000);

   await page.getByPlaceholder('Username').fill('Admin');
   await page.getByPlaceholder('Password').fill('admin123');
   await page.locator("//button[@type='submit']").click();
   await page.waitForTimeout(2000);
   await page.locator("//a//span[normalize-space()='PIM']").click();
   await page.waitForTimeout(3000);

   await page.locator("//label[normalize-space()='Job Title']/parent::div/parent::div//i").click();
   await page.waitForTimeout(5000);

   const options = await page.$$("//div[@role='listbox']//span");
   console.log('Number of options:', options.length);
  
   //Approach-1 print 5 elements from hidden dropdown options
   /*let count = 0;
   const lim = 5;
   for (let option of options) {
    if (count >= lim) break; 

    const jobTitle = await option.textContent(); 
    console.log(jobTitle);

    count++; */

    
  //Approach-2 Print all the dropdown hidden elements
    for(let option of options)
    {
      const jobTitle = await option.textContent();

      console.log(jobTitle);


 //Approach-3 Print only 14 options from list
   /* const limit = 14;
  
  for (let i = 0; i < Math.min(options.length, limit); i++) {
    const option = options[i]; 
    const jobTitle = await option.textContent();

    console.log(jobTitle); */


      if(jobTitle.includes('QA Engineer'))
      {
        await option.click();
        break;
      }
    }

  

    await page.waitForTimeout(3000);

   
    
})