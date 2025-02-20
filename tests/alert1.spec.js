import{test,expect} from "playwright/test";

test.skip("simplealert",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog",async(page)=>{
    
        await dialog.accept();
});

await page.click("//button[text()='Simple Alert']");

await page.waitForTimeout(5000);

});

test.skip("conform alert",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async(page)=>{

  //await dialog.accept();

  await dialog.dismiss();

    });
    await  page.click("//button[text()='Confirmation Alert']");
 await page.waitForTimeout(5000);
});

test.only("prompt alert",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    

     page.on("dialog",async(dialog)=>{

  await dialog.accept("new text");

});
   await page.click("//button[text()='Prompt Alert']");
   await page.waitForTimeout(5000);
});