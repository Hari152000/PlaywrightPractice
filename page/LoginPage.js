export class LoginPage{
    constructor(page){
        this.page=page
        this.username= page.locator('//input[@id="username"]')
        this.password= page.locator('//input[@id="password"]')
        this.button= page.locator('//input[@id="login"]')
    }

    async urlLaunch(){
        await this.page.goto('https://adactinhotelapp.com/')
    }
    async enterUsername(){
        await this.username.fill('Hari1502')
    }
    async enterPassword(){
        await this.password.fill('Hari@123')
    }
    async clickButton(){
        await this.button.click()
    }
}