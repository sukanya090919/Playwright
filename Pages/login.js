exports.LoginPage=
class LoginPage{
    constructor(page){
        this.page = page               //this.page representing the class
        this.AcceptAllCookies="//button[text()= 'Accept all cookies']";
        this.EnterUsername='#username';
        this.NextButton="//button[@data-hook ='login']";
        this.EnterPassword='#password'
        this.LoginButton="//button[@data-hook ='login']";
        this.AcceptAllCookies="//button[text()= 'Accept all cookies']";
        this.closePopup="//button[@data-id ='close-walkthrough']";
    }

    async gotoLoginPage(){
        await this.page.goto('https://login.lifeworks.com/')
    }

    async login(username,password)
    {
        await this.page.locator(this.AcceptAllCookies).click()
        await this.page.locator(this.EnterUsername).fill(username)
        await this.page.locator(this.NextButton).click()
        await this.page.locator(this.EnterPassword).fill(password)
        await this.page.locator(this.LoginButton).click()
        await this.page.locator(this.AcceptAllCookies).click()
        await this.page.locator(this.closePopup).click()
        
    }

}