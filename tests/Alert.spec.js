import{test} from'@playwright/test'
test('Alert handling', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    //simple Alert
    await page.once('dialog', async(dialog)=>{
        await console.log("Simple Alert message:", dialog.message())
        await dialog.accept()
    })
    await page.locator('//button[@class="btn btn-danger"]').click()

    //Confirmation Alert
    await page.once('dialog', async(dialog)=>{
        await console.log('Confirmation Alert message:', dialog.message())
        await dialog.dismiss()
    })
    await page.locator('//a[text()="Alert with OK & Cancel "]').click()
    await page.locator('//button[@class="btn btn-primary"]').click()

    //Prompt Alert
    await page.once('dialog', async(dialog)=>{
        await console.log("Prompt Alert message:", dialog.message())
        await dialog.accept("Hari")
    })
    await page.locator('//a[text()="Alert with Textbox "]').click()
    await page.locator('//button[@class="btn btn-info"]').click()
})