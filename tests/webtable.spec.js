const {test ,expect} = require('@playwright/test')               // npx playwright test webtable.spec.js  
const { chromium } = require('playwright');

test('Table Handling ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://testautomationpractice.blogspot.com/')
   const table = await page.locator('#productTable')

   const column= await table.locator('thead tr th')
   console.log('Number of Columns:' , await column.count())
   expect(await column.count()).toBe(4)

   const row= await table.locator('tbody tr')
   console.log('Number of Columns:' , await row.count())
   expect(await row.count()).toBe(5)

   //select checkbox for product 4
   const matchedRow = row.filter({
    has: page.locator('td'),
    hasText: 'Product 4'
   })
   await matchedRow.locator('input').check()
   await page.waitForTimeout(5000)
})

//Select multiple Product by re-usable function
await selectProduct(row,page,'Product-1')
await selectProduct(row,page,'Product-3')
await selectProduct(row,page,'Product-5')

//Re-Usable Function or Common Method
async function selectProduct(row , page, name)
{
    const matchRow = row.filter({
        has: page.locator('td'),
        hasText: name  

    })
    await matchedRow.locator('input').check()
    await page.waitForTimeout(5000)
}