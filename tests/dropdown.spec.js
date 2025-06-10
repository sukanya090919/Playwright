const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test dropdown.spec.js
const { chromium } = require('playwright');

test('dropdownTest-1 ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://testautomationpractice.blogspot.com/')
   
   //Select one Option from dropdown by using label
   await page.locator('#country').selectOption({label:'India'});
   await page.waitForTimeout(5000);

   //Select one Option from dropdown by using visible text
   await page.locator('#country').selectOption('China');
   await page.waitForTimeout(5000);
   await page.selectOption('#country' , 'Brazil');
   await page.waitForTimeout(5000);

   //Select one Option from dropdown by value attribute
   await page.locator('#country').selectOption({value:'uk'});
   await page.waitForTimeout(5000);

   //Select one Option from dropdown by index
   await page.locator('#country').selectOption({index: 6});
   await page.waitForTimeout(5000); 

//Assertion
//1.) check total no.of option in dropdown
    const option = await page.locator('#country option')
    await expect(option).toHaveCount(10);

//2.) check no. of options in dropdown 
    const options = await page.$$('#country option')    //$$ is use to print in array format
    console.log("Number of Options:" , options.length)
    await expect(options.length).toBe(10);

//3.) check presence of value in the dropdown
    const content = await page.locator('#country').textContent()
    await page.waitForTimeout(5000);
    await expect(content.includes('India').toBeTruthy());
    await page.waitForTimeout(5000);

//4.) chech presence the value in the dropdown
    const options1 = await page.$$('#country option')
    let status=false;
    for(const option of options1)
    {
        if(await option.textContent().includes('India'))
        {
            status=true;
            break;
        }
    }

    expect(status).toBeTruthy();

})