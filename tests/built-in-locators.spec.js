import {test,expect} from "@playwright/test";

test(("built "),async({page})=>{

    await page.goto("https://www.facebook.com/");

    const title= await page.title();
    console.log(title);

    const url= await page.url();
    console.log(url);
    

    await expect(page).toHaveTitle("Facebook – log in or sign up");

    await expect(page).toHaveURL("https://www.facebook.com/");


    await  page.getByPlaceholder("Email address or phone number").fill("1234");

    await page.getByPlaceholder("Password").fill("12345");

    await page.getByTestId("royal-login-button").click();


    
}); 