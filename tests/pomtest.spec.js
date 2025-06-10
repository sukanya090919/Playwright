import {test,expect} from '@playwright/test';
import {LoginPage} from '../Pages/login';
import {CreatePost} from '../Pages/createpost';

test('Login Test-1',async ({page}) =>{
    //Login Page
   const login = new LoginPage(page);
   await login.gotoLoginPage();
   await login.login('lifeworkstesting+pro_user442bbd2@workivate.com','Telu$he@ltH2024!')
   await page.waitForTimeout(3000)
    
   //Create Post
    const createpost = new CreatePost(page);
    await createpost.CreateAndLikePost()
    await page.waitForTimeout(3000)
 })
