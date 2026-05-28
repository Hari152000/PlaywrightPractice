import{test}from '@playwright/test'
import { LoginPage } from '../page/LoginPage.js'
test('Page object model',async({page})=>{
    const login=new LoginPage(page)
    await login.urlLaunch()
    await login.enterUsername()
    await login.enterPassword()
    await login.clickButton()
})