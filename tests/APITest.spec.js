const {test ,expect} = require('@playwright/test');        //npx playwright test APITest.spec.js
//var userid;                                              // for parellel execution change the config.js

test("Get Request", async({request})=>
{
    const response = await request.get('https://cheapcaribbeansurveyapidev.cheapcaribbean.com/api/Header')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("Post Request", async({request})=>
    {
        const response = await request.post('https://cheapcaribbeansurveyapidev.cheapcaribbean.com/api/Header/PostHeader',
            {
                data:{
                    "id": 0,
                    "type": "Plarwright12345",
                    "name": "Playwright@12345",
                    "align": "string",
                    "orderId": 99,
                    "link": "string",
                    "makeItActive": true,
                    "applyForBB": true,
                    "applyForCC": true,
                    "applyForAV": true,
                    "createdBy": "string",
                    "createdDate": "2025-03-21T10:04:02.389Z",
                    "modifyBy": "string",
                    "modifyDate": "2025-03-21T10:04:02.389Z"},
                headers:{"Accept":"application/json"}
             });
        
        console.log(await response.json())
        expect(response.status()).toBe(200)

       /* var res=await response.json()
        userid=res.id
        console.log(userid);*/    //=======This is use to store dyanic value
    })

    test("Put Request", async({request})=>
        {
            const response = await request.post('https://cheapcaribbeansurveyapidev.cheapcaribbean.com/api/ChatSuggestions/PutChatSuggestions/53',
                {
                    data:{
                        "sugessionText": "MY TRIP1122",
                        "suggestionCode": "MY TRIP@1223344",
                        "suggestionPrompt": "Choose your Ticket",
                        "counterPrompt": "Happy to assist you",
                        "numberOfSelection": 78,
                        "componentType": "string",
                        "order": 78,
                        "status": true,
                        "isBB": true,
                        "isCC": true,
                        "isAV": true,
                        "createdBy": "string",
                        "createdDate": "2025-02-24T07:18:16.795Z",
                        "modifyBy": "string",
                        "modifyDate": "2025-02-24T07:18:16.796Z"},
                    headers:{"Accept":"application/json"}
                 });

                 const responseBody = await response.text(); // Get the raw response as a string
                 console.log(responseBody); // Inspect the response body

                if (responseBody) {
                 const jsonData = JSON.parse(responseBody);
                 console.log(jsonData);
                } else {
                console.log("No content in response.");
                }
            })

         test("Delete Request", async({request})=>
            {
                const response = await request.get('https://cheapcaribbeansurveyapidev.cheapcaribbean.com/api/ChatSuggestions/55')
                console.log(await response.json())
                expect(response.status()).toBe(200)
         })


        
