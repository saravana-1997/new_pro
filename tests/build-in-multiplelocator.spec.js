import{test,expect} from "playwright/test";

test("multiple ",async({page})=>{
await page.goto("https://www.demoblaze.com/");

//const links =await page.$$("a");

//for(let link of links){

 //  const a= await link.textContent();
 //  console.log(a);
//}
   await page.waitForSelector("//div[@id='tbodyid']//h4/a");
 const products=await page.$$("//div[@id='tbodyid']//h4/a");

 for(const product of products)
 {
     const new1= await product.textContent();
     console.log(new1);
     
 }
/*
await page.click("//a[@id='login2']");


await page.locator("#loginusername").fill("saravana1997");

await page.locator("#loginpassword").fill("newpass123");

await page.click("//button[text()='Log in']");

await page.waitForTimeout(5000);

*/
});
