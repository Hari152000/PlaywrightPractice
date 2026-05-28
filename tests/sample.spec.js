import{test}from '@playwright/test'
test('validate automation site',async({page})=>{
    await page.goto('https://www.instagram.com/')
    await page.locator('//input[@name="email"]').fill('hariharan')
    await page.locator('//input[@name="pass"]').fill('Password123')
    await page.locator('//span[text()="Log in"]').click()
})