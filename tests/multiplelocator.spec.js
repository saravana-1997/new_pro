
import{test,expect} from "playwright/test";

test(("multiple locator") ,async({page})=>{

    await page.goto("https://www.facebook.com/");

    const links =await page.$$("a");


    for(let link of links)
    {
        const a= await link.textContent();
        console.log(a);

        await page.waitForTimeout(5000);
    }


});