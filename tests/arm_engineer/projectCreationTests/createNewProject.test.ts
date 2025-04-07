import test from '@lib/BaseTest';
import {expect} from "@playwright/test";

const name = new Date().getTime().toString();


test(`Project creation page`, { tag: '@Smoke'}, async ({ projectPage, page }) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await projectPage.navigateToURL();
        await projectPage.clickOnNewProjectButton();
        // await projectPage.PROJECT_NAME_FIELD_INPUT.fill(name);
        await projectPage.PROJECT_NAME_FIELD_INPUT2.fill(name);
        await projectPage.SELECT_ALL_FB_CHECKBOX.click();
        await projectPage.CREATE_PROJECT_BUTTON.click();
        await page.locator('//div[(text()= "' + name + '")]').click();
        await expect(projectPage.AUTHORIZATION).toBeVisible();

    });
});