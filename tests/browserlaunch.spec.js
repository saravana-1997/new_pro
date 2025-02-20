import{ test,expect} from "@playwright/test";
test("browserlaunch",async ({page})=>{
    
   await page.goto("https://www.flipkart.com/");

   const title= await page.title();
   console.log(title);

   await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');

   const url=await page.url();
   console.log(url);

   await expect(page).toHaveURL('https://www.flipkart.com/');
   });

