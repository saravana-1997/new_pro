import{test,expect} from "@playwright/test";

test("mouse actions",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const pointme=page.locator("//button[text()='Point Me']");
    await pointme.hover();

    const laptop=page.locator("//a[text()='Laptops']");
    await laptop.hover();

   //click
   await page.click("//button[@name='start']")

   await page.waitForTimeout(5000);
   //doubleclick
   await page.dblclick("#field1");
   
 //  await page.waitForTimeout(5000);
   
   
   await page.locator("//div[@id='draggable']").dragTo(page.locator("//div[@id='draggable']"))

 //  await page.waitForTimeout(5000);

});