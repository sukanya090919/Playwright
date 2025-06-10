const {test ,expect} = require('@playwright/test')              //TO run  ==   npx playwright test hiddenDropdown.spec.js

test.beforeEach(async ({browser}) =>{                                          //BeforeAll, BeforeEacg
  //browser = await chromium.launch({ headless: false });
  //context = await browser.newContext(); 
  page = await page.newPage();
  await page.goto('https://login.lifeworks.com/')
  
});

test('Test-1' ,async()=> {
    //Test1
})
test('Test-2' ,async()=>{
    //Test2
})
test('Test-3' ,async()=>{
    //Test3
})

test.afterEach(async()=>{                                                     //AfterAll , BeforeAll
    //logout code
});
