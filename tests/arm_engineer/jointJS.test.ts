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


test(`Переместить ПЛК при работе c jointJS`, {tag: '@Smoke'}, async ({projectPage: projectPage, page}) => {
    await test.step(`Создание и загрузка нового проекта`, async () => {
        await expect(projectPage.PLC_BOX).toBeVisible();

        // Получаем исходные координаты элемента до перетаскивания
        const initialBoundingBox = await projectPage.PLC_BOX.boundingBox();
        const initialX = initialBoundingBox.x;
        const initialY = initialBoundingBox.y;

        console.log('Initial Position:', initialX, initialY);

        // Перетаскиваем элемент на новые координаты
        await projectPage.PLC_BOX.dragTo(projectPage.CANVAS_EDITOR, {targetPosition: {x: 0, y: 0}});

        // Получаем новые координаты элемента после перетаскивания
        const newBoundingBox = await projectPage.PLC_BOX.boundingBox();
        const newX = newBoundingBox.x;
        const newY = newBoundingBox.y;

        console.log('New Position:', newX, newY);

        // Проверяем, что элемент был перемещен на ожидаемое расстояние
        expect(newX).toBeCloseTo(396.5, 1);
        expect(newY).toBeCloseTo(32, 1);
    });
});