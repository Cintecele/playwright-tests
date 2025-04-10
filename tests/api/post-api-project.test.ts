import {expect, test} from '@playwright/test';
import {project} from "../../src/main/data/entity/endpoints/project";

test(`Создать новый проект (без авторизации)`, {tag: '@API'}, async ({request}) => {

    const form = new FormData();

    const name = new Date().getTime().toString();

    form.append('name', name);
    form.append('linkedPackages', '0195f4e8-410b-78f2-b1b2-86383c0838a6');

    const requestPostProject = await request.post(project.project, {
        multipart: form
    });

    expect(requestPostProject.status()).toBe(200);
    const responseBody = await requestPostProject.json();
    console.log('Проекту присвоен ID: ', responseBody);

    const requestProjectAll = await request.get(project.all);

    expect(requestProjectAll.status()).toBe(200);

    const responseBody2 = await requestProjectAll.json();
    console.log('Тело ответа', responseBody2);

    const responseProjectAll = JSON.stringify(responseBody2);

    expect(responseProjectAll.includes(responseBody)).toBe(true);
    expect(responseProjectAll.includes(name)).toBe(true);
});


