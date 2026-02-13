import test, { chromium, webkit } from "@playwright/test";

test('Launch Redbus in Edge Browser',async()=>{
    const Browser=await chromium.launch({channel:"msedge",headless:false})
    const context=await Browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(5000)
    console.log("The Page title is " +await page.title())
    console.log(" The Page URL is " +page.url())

   const Browser1=await webkit.launch({channel:"webkit", headless:false})
   const context1=await Browser1.newContext()
    const page1=await context1.newPage()
    await page1.goto("https://www.flipkart.com/")
    await page1.waitForTimeout(5000)
    console.log("The Page title is " +await page1.title())
    console.log(" The Page URL is " +page1.url())
})

