import{test,expect} from "playwright/test";

test("assertions",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

const title =await page.title();
console.log(title);
const url=await page.url();
console.log(url);
await expect(page).toHaveTitle("Automation Testing Practice")
await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/  ");

//to enabled
const enable=await page.locator("#name");
await expect(enable).toBeEnabled();

//to be checked
const checked= await page.locator("#male");
await checked.click();
await expect(checked).toBeChecked();

//to be have attribute value
const attribute=await page.locator("#email");
await expect(attribute).toHaveAttribute("class","form-control");

//to have Text

await expect(await page.locator("//label[text()='Phone:']")).toHaveText("Phone:");

//to contains Text
await expect(await page.locator("//label[text()='Gender:']")).toContainText("Gender:");

// to have value
const value= await page.locator("#textarea")
await value.fill("new");
await expect(value).toHaveValue("new");
});