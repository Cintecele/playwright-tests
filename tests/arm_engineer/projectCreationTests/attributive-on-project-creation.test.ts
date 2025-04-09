import test from '../../../src/main/lib/BaseTest';
import {expect} from "@playwright/test";


test(`Project creation page - Attributive check`, { tag: '@Smoke'}, async ({ projectPage, webActions }) => {
    await test.step(`Проверка отображения контролов на странице создания "Нового проекта"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.NEW_PROJECT_HEADER).toBeVisible();
        await expect(projectPage.ENABLE_CONTENT_PACKAGES_HEADER).toBeVisible();
        await expect(projectPage.IMPORT_PROJECT_DROPZONE).toBeVisible();
        await expect(projectPage.CONTENT_PACKAGES_SEARCH_FIELD).toBeVisible();
        await expect(projectPage.PROJECT_NAME_FIELD_INPUT).toBeVisible();
        await expect(projectPage.CREATE_PROJECT_BUTTON).toBeVisible();
        await expect(projectPage.SELECT_ALL_FB_CHECKBOX).toBeVisible();
        await expect(projectPage.SINGLE_FB_CHECKBOX).toBeVisible();
        await expect(projectPage.MAGNIFIER_SVG).toBeVisible();
        await expect(projectPage.UPLOAD_PROJECT_SVG).toBeVisible();
    });

    await test.step(`Проверка отображения контролов на странице "Все проекты"`, async () => {
        await projectPage.navigateToURL();
        await expect(projectPage.ALL_PROJECTS_HEADER).toBeVisible();
        await expect(projectPage.ALL_PROJECTS_SEARCH_FIELD).toBeVisible();
        await expect(projectPage.AVAILABLE_PROJECTS).toBeVisible();
        await expect(projectPage.AVAILABLE_PROJECTS_SVG).toBeVisible();
        await expect(projectPage.NEW_PROJECT_HEADER).toBeVisible();
    });
});