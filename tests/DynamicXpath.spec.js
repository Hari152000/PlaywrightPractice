import{test} from'@playwright/test'
test('Window Handling', async({ browser })=>{
    const context= await browser.newContext()
    const page= await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@class="nw1UBF v1zwn25"])[1]').fill('iphone 17 pro')
    await page.keyboard.press('Enter')

    const [newpage]= await Promise.all([context.waitForEvent('page'),
    page.click('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[text()="Apple iPhone 17 Pro (Deep Blue, 256 GB)"]')
    ])
   
    await newpage.waitForLoadState()
    const title= await newpage.title()
    console.log(title)
 })