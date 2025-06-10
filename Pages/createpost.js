exports.CreatePost=
class CreatePost{
    constructor(page){
        this.page = page               //this.page representing the class
        this.Click_Newsfeed="//span[text()='News Feed']";
       
    }

    async CreateAndLikePost(post)
    {
        await this.page.locator(this.Click_Newsfeed).click()
        
        
    }
}