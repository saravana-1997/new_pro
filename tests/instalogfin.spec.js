import{test,expect} from "@playwright/test";
test(("insta login"),async({page})=>{
    await page.goto("https://www.instagram.com/accounts/login/");
        const title =await page.title();
        console.log(title);
        const url= await page.url();
        console.log(url);
//  await expect(page).toHaveTitle("Login • Instagram")
// await expect(page).toHaveUrl("https://www.instagram.com/accounts/login/ ")
  await page.fill("//input[@type='text']","8248569810");
  await page.fill("//input[@type='password']","newpass123");
  await page.click("//button[@class=' _acan _acap _acas _aj1- _ap30']");
  await page.waitForTimeout(5000);
});

