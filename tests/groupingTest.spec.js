const {test ,expect} = require('@playwright/test')            


test.describe('Group-1', async()=>{
test.beforeAll('Test-1 ',async ({page}) =>{
    console.log("Test-1");
})
test('Test-2 ',async ({page}) =>{
    console.log("Test-2");
})
test.afterAll('Test-3 ',async ({page}) =>{
    console.log("Test-3");
})
})

test.describe.skip('Group-2', async()=>{
    test.only('Test-4 ',async ({page}) =>{
        console.log("Test-4");
    })
    test.beforeEach('Test-5 ',async ({page}) =>{
        console.log("Test-5");
    })
    test.afterEach('Test-6 ',async ({page}) =>{
        console.log("Test-6");
    })
    })

    test.describe.only('Group-3', async()=>{
        test('Test-A ',async ({page}) =>{
            console.log("Test-A");
        })
        test('Test-B ',async ({page}) =>{
            console.log("Test-B");
        })
        test('Test-C ',async ({page}) =>{
            console.log("Test-C");
        })
        })