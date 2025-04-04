import {expect, test} from '@playwright/test';

test(`POST_CREATE_PROJECT`, {tag: '@API'}, async ({request}) => {

    const form = new FormData();

    const name = new Date().getTime().toString();

    form.append('name', name);
    form.append('linkedPackages', '0195f4e8-410b-78f2-b1b2-86383c0838a6');

    const requestPostProject = await request.post('https://dev114.reglab.ru/summit/api/Project', {
        multipart: form
    });

    expect(requestPostProject.status()).toBe(200);
    const responseBody = await requestPostProject.json();
    console.log('Проекту присвоен ID: ', responseBody);

    const requestProjectAll = await request.get('https://dev114.reglab.ru/summit/api/Project/all');

    expect(requestProjectAll.status()).toBe(200);

    const responseBody2 = await requestProjectAll.json();
    console.log('Тело ответа', responseBody2);

    const responseProjectAll = JSON.stringify(responseBody2);

    expect(responseProjectAll.includes(responseBody)).toBe(true);
    expect(responseProjectAll.includes(name)).toBe(true);
});


