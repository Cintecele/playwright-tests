import {expect} from "@playwright/test";
import test from 'src/main/lib/BaseTest';
import {y} from "@angular/common/common_module.d-Qx8B6pmN";

test.beforeEach(async ({projectPage: projectPage}): Promise<void> => {
    await projectPage.navigateToURL();
    await projectPage.PROJECT_654.click();
    await expect(projectPage.AUTHORIZATION).toBeVisible();
    await projectPage.LOGIN.fill("1");
    await projectPage.PASSWORD.fill("1");
    await projectPage.CONTINUE_BUTTON.click();
    await expect(projectPage.MENU_BUTTON).toBeVisible();
})


test(`Переместить ПЛК при работе c jointJS`, {tag: '@Smoke'}, async ({projectPage: projectPage, page, canvasPage}) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await expect(canvasPage.PLC_R500_9_BOX).toBeVisible();

        // Получаем исходные координаты элемента до перетаскивания
        const initialBoundingBox = await canvasPage.PLC_R500_9_BOX.boundingBox();
        const initialX = initialBoundingBox.x;
        const initialY = initialBoundingBox.y;

        console.log('Initial Position:', initialX, initialY);

        // Перетаскиваем элемент на новые координаты
        await canvasPage.PLC_R500_9_BOX.dragTo(canvasPage.CANVAS_EDITOR, {targetPosition: {x: 500, y: 500}});

        // Получаем новые координаты элемента после перетаскивания
        const newBoundingBox = await canvasPage.PLC_R500_9_BOX.boundingBox();
        const newX = newBoundingBox.x;
        const newY = newBoundingBox.y;

        console.log('New Position:', newX, newY);

        // Проверяем, что элемент был перемещен на ожидаемое расстояние
        expect(newX).toBeCloseTo(900.5, 1);
        expect(newY).toBeCloseTo(536, 1);
    });
});

test(`Проверка пунктов контекстного меню на ПЛК при работе c jointJS`, {tag: '@Smoke'}, async ({projectPage: projectPage, page, canvasPage}) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await expect(canvasPage.PLC_R500_9_BOX).toBeVisible();
        await canvasPage.PLC_R500_9_BOX.click({button: "right"})
        await expect (canvasPage.DELETE_CONTEXT_ACTION).toBeVisible();
        await expect (canvasPage.PROPERTY_CONTEXT_ACTION).toBeVisible();
    });
});

test(`Проверка пунктов контекстного меню на канве при работе c jointJS`, {tag: '@Smoke'}, async ({projectPage: projectPage, page, canvasPage}) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await expect(canvasPage.CANVAS_EDITOR).toBeVisible();
        await canvasPage.CANVAS_EDITOR.click({button: "right"})
        await expect (canvasPage.ADD_DEVICE_CONTEXT_ACTION).toBeVisible();
    });
});