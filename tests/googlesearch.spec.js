import {test,expect} from "@playwright/test";

test(("googlesearch"),async ({page})=>{

    await page.goto("https://www.google.co.in/");

    const title= await page.title();
    console.log(title);

    const url= await page.url();
    console.log(url);

    await page.fill("#APjFqb","amazon");
    await page.waitForTimeout(5000);


});