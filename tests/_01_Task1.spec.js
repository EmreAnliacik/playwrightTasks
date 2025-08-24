// @ts-check
import {test, expect} from '@playwright/test';

test('task1', async ({page}) => {

    await page.goto("https://demowebshop.tricentis.com/");

    await page.getByText('Books').first().click();
    await page.locator("//ul[@class='top-menu'] //a[@href='/computers']").click();
    await page.locator("ul[class='top-menu'] a[href='/electronics']").click();

    await page.locator("//ul[@class='top-menu'] //a[@href='/computers']").hover();
    await page.getByText('Notebooks').first().click();
    const notebooksPrice = await page.locator('div[class="product-grid"] [class="price actual-price"]');
    const priceString = await notebooksPrice.innerText();
    const priceNumber = parseInt(priceString);
    console.log(priceNumber);
    expect(priceNumber <= 1600)

    await page.locator('[class="header-logo"] a').click();
    await page.locator("ul[class='top-menu'] a[href='/electronics']").hover();
    await page.locator('a[href="/cell-phones"]').first().click();

    const cellPhones = page.locator('div[class="product-grid"] div[class="item-box"] img');
    const count = await cellPhones.count();
    const randomIndex = Math.floor(Math.random() * count);
    await cellPhones.nth(randomIndex).click();
    const validateStock =await page.locator('div[class="stock"] span[class="value"]').innerText();

    console.log(validateStock);
    expect(validateStock.includes("In"));






    await page.waitForTimeout(1000);






})