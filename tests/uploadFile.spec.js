const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test uploadFile.spec.js
const { chromium } = require('playwright');

test('Single File Upload ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://the-internet.herokuapp.com/upload')
   await page.setInputFiles('#file-upload', 'tests/UploadFile/Curacao.jpg');
   await page.waitForTimeout(5000)
 })


test.only('Multiple File Upload ',async () =>{
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext(); 
  const page = await context.newPage();  

   await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
   await page.locator('#filesToUpload').setInputFiles([
                     'tests/UploadFile/Curacao.jpg',
                     'tests/UploadFile/butterfly.avif',
                     'C:\\Users\\Sukanya\\OneDrive - Motivity Labs\\Pictures\\Saved Pictures\\SMDD.png']);
   await page.waitForTimeout(5000)

   expect(await page.locator('#fileList li:nth-ChildProcess(1)')).toHaveText('Curacao.jpg')
 

})