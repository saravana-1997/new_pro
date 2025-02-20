import{test,expect} from "playwright/test";

test('assertion',async({page})=>{

await page.goto('https://www.demoblaze.com/');

const title=await page.title();
console.log(title);

const url=await page.url();
console.log(url);


await expect.soft(page).toHaveTitle("STRE");
await expect.soft(page).toHaveURL("https://www.demoblaze.com/");

await page.close();
});