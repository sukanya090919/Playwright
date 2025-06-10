const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test assertion.spec.js
const { chromium } = require('playwright');

test('AssertionTest',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  
   await page.goto('https://demo.nopcommerce.com/register')
      
   //1)expect(page).toHaveURL()
   const url = await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
   console.log(url);

   //2)expect(page).toHaveTitle()
   const title = await expect(page).toHaveTitle('nopCommerce demo store. Register')
   console.log(title);

   //3)expect(locator).toBeVisible()
   const logoElement=await page.locator('.header-logo')     //css locater "Use '.' before the class value"
   await expect(logoElement).toBeVisible()

   //4)expect(locator).toBeEnabled()  , expect(locator).toBeDisabled()
   const searchStoreBox =await page.locator('#small-searchterms')     //css locater "Use '#' before the ID value"
   await expect(searchStoreBox).toBeEnabled()

   //5) expect(locator).toBeChecked()
   const maleRadioButton = await page.locator('#gender-male')
   await maleRadioButton.click()
   await expect(maleRadioButton).toBeChecked()

   //check box
   const newsletter = await page.locator('#Newsletter')
   await expect(newsletter).toBeChecked()

   //6)expect(locator).toHaveAttribute()
   const regButton= await page.toHaveAttribute('type','submit')

   //7)expect(locator).toHaveText()  , .toContainText
   await expect(await page.locator('.page-title h1')).toHaveText('Register')
   await expect(await page.locator('.page-title')).toContainText('Reg')

//8) expect(locator).toHaveValue(value)
const emailInput = await page.locator('#Email')
await emailInput.fill('test.@demo.com');
expect(emailInput).toHaveValue('test@demo.com')

//10) expect(locator).toHaveCount() ----Use for get the count of data from dropdown
const options = await page.locator('select[name="DateOfBirthMonth"]option')
await expect(options).toHaveCount(options)






}) 
   