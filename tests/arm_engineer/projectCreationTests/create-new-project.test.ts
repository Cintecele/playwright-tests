import test from '../../../src/main/lib/BaseTest';
import {expect} from "@playwright/test";
import fs from 'fs';


test(`Project creation page`, {tag: '@Smoke'}, async ({projectPage, page}) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await projectPage.navigateToURL();
        await projectPage.clickOnNewProjectButton();
        await projectPage.PROJECT_NAME_FIELD_INPUT.fill(projectPage.getProjectName());
        await projectPage.SELECT_ALL_FB_CHECKBOX.click();
        await projectPage.CREATE_PROJECT_BUTTON.click();
        await projectPage.CREATED_PROJECT_IN_TREE.click();
        await expect(projectPage.AUTHORIZATION).toBeVisible();
        await projectPage.LOGIN.fill("1");
        await projectPage.PASSWORD.fill("1");
        await projectPage.CONTINUE_BUTTON.click();
        await expect(projectPage.MENU_BUTTON).toBeVisible();
    });
});

test(`Project creation from snapshot`, {tag: '@Smoke'}, async ({projectPage, page}) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await projectPage.navigateToURL();
        await page.route('https://dev114.reglab.ru/summit/api/ContentPackage/all', async route => {
            const jsonResponse = JSON.parse(fs.readFileSync('src/main/utils/Files/ContentPackage-all.json', 'utf-8'));
            await route.fulfill({
                contentType: 'application/json',
                body: JSON.stringify(jsonResponse),
            });
        });
        await projectPage.clickOnNewProjectButton();
        await projectPage.PROJECT_NAME_FIELD_INPUT.fill(projectPage.getProjectName());
        await projectPage.DROPZONE_INPUT.setInputFiles('src/main/utils/Files/new.project')
        await expect(projectPage.IMPORTED_PROJECT_IN_DROPZONE).toBeVisible()
        await projectPage.CREATE_PROJECT_BUTTON.click();
        await projectPage.CREATED_PROJECT_IN_TREE.click();
        await expect(projectPage.AUTHORIZATION).toBeVisible();
        await projectPage.LOGIN.fill("1");
        await projectPage.PASSWORD.fill("1");
        await projectPage.CONTINUE_BUTTON.click();
        await expect(projectPage.MENU_BUTTON).toBeVisible();
    });
});
