import {expect, test} from "@playwright/test";

test(`Get_About`, {tag: '@API'}, async ({request}) => {
    const response = await request.get(`https://dev114.reglab.ru/summit/api/About`);
    expect(response.status()).toBe(200);
    console.log(`Статус код: ${response.status()}`);
    console.log('Ответ: ', response.headersArray());
    console.log('Тело ответа', response.text())
});

test(`GET_PROJECT`, {tag: '@API'}, async ({request}) => {

    const response = await request.get('https://dev114.reglab.ru/summit/api/Project/all');

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Тело ответа', responseBody);
});

