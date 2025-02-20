import {test,expect} from "@playwright/test";
test("frames",async ({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frame2=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_2.html"});

    await frame2.fill("//input[@name='mytext2']","name2");

   const frame1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    
    await frame1.fill("//input[@name='mytext1']","name1");

    const frame3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

    await frame3.fill("//input[@name='mytext3']","name3");

    const frame4=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_4.html"});

    await frame4.fill("//input[@name='mytext4']","name4");

    const frame5=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_5.html"});

    await frame5.fill("//input[@name='mytext5']","name5");

});