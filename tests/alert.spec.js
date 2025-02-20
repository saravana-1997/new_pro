import {test,expect} from '@playwright/test';

test('alert with ok',async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
//enable the alert 
    page.on("dialog",async (dialog)=>{
    await dialog.accept();
});
await page.click("//a[text()='Alert with OK ']");
await page.click('.btn.btn-danger');
await page.waitForTimeout(7000);
});
test('alert with ok and cancel',async ({page})=>{
    
    await page.goto('https://demo.automationtesting.in/Alerts.html')

    page.on("dialog",async (dialog)=>{
    //    await dialog.accept();

     await dialog.dismiss();
});
await page.click("//a[text()='Alert with OK & Cancel ']");
await page.click('.btn.btn-primary');
await page.waitForTimeout(7000);
});

test('alert with text',async ({page})=>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    page.on("dialog",async (dialog)=>{
       await dialog.accept("new");
    // await dialog.dismiss();
});
await page.click("//a[text()='Alert with Textbox ']");
await page.click('.btn.btn-info');
await page.waitForTimeout(7000);
});