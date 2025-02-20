const{test,expect} =require("@playwright/test");

test("inner frame",async ({page})=>{


    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

    await frame3.childFrames();


});