import{test,expect} from "playwright/test";

test('multiple',async({page})=>{

    await page.goto("https://www.demoblaze.com/");

   const products = await page.$$("//div[@id='tbodyid']//h4/a");

   for(let product of products)
   {
      const productname= await product.textContent();
      console.log(productname);

      await page.waitForTimeout(5000);
      
   }

   await page.click("//a[@id='login2']");

   await page.fill("//input[@id='loginusername']","saravana1997");

   await page.fill("//input[@id='loginpassword']","newpass123");
   
   await page.click("//button[text()='Log in']");

   const logout=await page.locator("//a[text()='Log out']");

   await expect(logout).toBeVisible();
});

