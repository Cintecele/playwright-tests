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
        await expect(projectPage.ALL_PROJECTS_SEARCH_FIELD).toBeVisible();
    });
    await test.step(`Проверка отображения заголовка "Доступные" в блоке "Все проекты"`, async () => {
        await projectPage.navigateToURL();
        await expect(projectPage.AVAILABLE_PROJECTS).toBeVisible();
    });
    await test.step(`Проверка отображения иконки папки "Доступные" в блоке "Все проекты""`, async () => {
        await projectPage.navigateToURL();
        await expect(projectPage.AVAILABLE_PROJECTS_SVG).toBeVisible();
    });
    await test.step(`Проверка отображения зоны загрузки проекта`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.IMPORT_PROJECT_DROPEZONE).toBeVisible();
    });
    await test.step(`Проверка отображения строки поиска в блоке "Включить контент пакеты" по плэйсхолдеру`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.CONTENT_PACKAGES_SEARCH_FIELD).toBeVisible();
    });
    await test.step(`Проверка отображения текстового поля "Название проекта" в блоке "Новый проект"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.PROJECT_NAME_FIELD).toBeVisible();
    });
    await test.step(`Проверка отображения кнопки "Создать проект" в блоке "Новый проект"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.CREATE_PROJECT_BUTTON).toBeVisible();
    });
    await test.step(`Проверка отображения чекбокса "Выбрать все функциональные блоки" в блоке "Включить контент пакеты"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.SELECT_ALL_FB_CHECKBOX).toBeVisible();
    });
    await test.step(`Проверка отображения чекбокса "Выбрать функциональный блок" в блоке "Включить контент пакеты"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.SINGLE_FB_CHECKBOX).toBeVisible();
    });
    await test.step(`Проверка отображения пиктограммы "Лупа" в блоке "Включить контент пакеты"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.MAGNIFIER_SVG).toBeVisible();
    });
    await test.step(`Проверка отображения пиктограммы загрузки в блоке "Новый проект"`, async () => {
        await projectPage.navigateToURL();
        await  projectPage.clickOnNewProjectButton();
        await expect(projectPage.UPLOAD_PROJECT_SVG).toBeVisible();
    });

}); 