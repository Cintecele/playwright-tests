import {expect, test} from "@playwright/test";
import {about} from "../../src/main/data/entity/endpoints/about";

test(`Получить информацию о RegulSummit`, {tag: '@API'}, async ({request}) => {
    const response = await request.get(about.about);
    expect(response.status()).toBe(200);
    console.log(`Статус код: ${response.status()}`);
    console.log('Тело ответа', response.text())
});



