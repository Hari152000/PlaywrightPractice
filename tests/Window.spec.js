import{test} from'@playwright/test'
test('Window Handling', async({ browser })=>{
    const context= await browser.newContext()
    const page= await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')

    const [newpage]= await Promise.all([context.waitForEvent('page'),
    // page.click('//div[text()="Apple iPhone 17 Pro (Cosmic Orange, 256 GB)"]')
   ])
   
    await newpage.waitForLoadState()
    const title= await newpage.title()
    console.log(title)
 })