import {expect} from "@playwright/test";
import test from 'src/main/lib/BaseTest';
import locatorHelper from 'src/main/helpers/LocatorHelper';

test(`Переместить ПЛК при работе c jointJS`, {tag: '@Smoke'}, async ({projectPage: projectPage, locatorHelper, canvasPage}) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await projectPage.navigateToURL();
        const elements = locatorHelper.getDivByClassAndName('1744', 'link link--light-theme').getXpath();
        console.log(elements);
        if (elements.length > 0) {
            for (const element of elements) {
        await projectPage.ALL_GENERATED_PROJECTS.click({button: "right"});
        await canvasPage.DELETE_CONTEXT_ACTION.click();
        await projectPage.ACCEPT_BUTTON.click();
        await expect(projectPage.AUTHORIZATION).toBeVisible();
        await projectPage.LOGIN.fill("1");
        await projectPage.PASSWORD.fill("1");
        await projectPage.CONTINUE_BUTTON.click();
        await projectPage.navigateToURL();
            }
        } else {
            console.log("Все сгенерированные проекты удалены");
        }
    })
});