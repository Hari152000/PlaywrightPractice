import{test} from '@playwright/test'
test('Frame handling', async({page})=>{

    await page.goto('https://vinothqaacademy.com/iframe/')
    const frame= await page.frameLocator('//iframe[@src="https://vinothqaacademy.com/alert-and-popup/"]')
    await page.once('dialog', async(dialog)=>{
        await console.log("Simple Alert message:", dialog.message())
        await dialog.accept()
    })
    await frame.locator('//button[@name="alertbox"]').click()

    //Confirmation Alert
    await page.once('dialog', async(dialog)=>{
        await console.log('Confirmation Alert message:', dialog.message())
        await dialog.dismiss()
    })
    await frame.locator('//button[@name="confirmalertbox"]').click()
    
     //Prompt Alert
    await page.once('dialog', async(dialog)=>{
        await console.log("Prompt Alert message:", dialog.message())
        await dialog.accept("Yes")
    })
    await frame.locator('//button[@name="promptalertbox1234"]').click()
})