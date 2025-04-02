import test from '@lib/BaseTest';
import {expect} from "@playwright/test";


test(`Project creation page - Attributive check`, { tag: '@Smoke'}, async ({ projectPage, webActions }) => {
    await test.step(`Проверка отображения заголовка "Новый проект"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.NEW_PROJECT_HEADER).toBeVisible();
    });
    await test.step(`Проверка отображения заголовка "Включить контент пакеты"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.ENABLE_CONTENT_PACKAGES_HEADER).toBeVisible();
    });
    await test.step(`Проверка отображения заголовка "Все проекты"`, async () => {
        await projectPage.navigateToURL();
        await expect(projectPage.ALL_PROJECTS_HEADER).toBeVisible();
    });
    await test.step(`Проверка отображения строки поиска в блоке "Все проекты" по плэйсхолдеру`, async () => {
        await projectPage.navigateToURL();
        await expect(projectPage.SEARCH_FIELD).toBeVisible();
    });
    await test.step(`Проверка отображения заголовка "Доступные" в блоке "Все проекты"`, async () => {
        await projectPage.navigateToURL();
        await expect(projectPage.AVAILABLE_PROJECTS).toBeVisible();
    });
    await test.step(`Проверка отображения иконки папки "Доступные" в блоке "Все проекты""`, async () => {
        await projectPage.navigateToURL();
        await expect(projectPage.AVAILABLE_PROJECTS_SVG).toBeVisible();
    });
}); 