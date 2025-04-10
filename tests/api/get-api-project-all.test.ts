import {expect, test} from "@playwright/test";
import {project} from "../../src/main/data/entity/endpoints/project";

test(`Запросить все проекты (без авторизации)`, {tag: '@API'}, async ({request}) => {

    const response = await request.get(project.all);

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Тело ответа', responseBody);
});