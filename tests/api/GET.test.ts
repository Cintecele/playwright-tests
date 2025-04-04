import {expect, test} from "@playwright/test";
import FormData from 'form-data';

test(`Get_About`, {tag: '@API'}, async ({request}) => {
    const response = await request.get(`https://dev114.reglab.ru/summit/api/About`);
    expect(response.status()).toBe(200);
    console.log(`Статус код: ${response.status()}`);
    console.log('Ответ: ', response.headersArray());
    console.log('Тело ответа', response.text())
});

test(`POST_CREATE_PROJECT`, {tag: '@API'}, async ({request}) => {

    const form = new FormData();
    console.log('до', form);
    form.append('name', new Date().getTime().toString());
    form.append('linkedPackages', '0195f4e8-410b-78f2-b1b2-86383c0838a6');
    console.log('после', form);

    // Получаем заголовки из формы, чтобы использовать правильный boundary
    const headers = form.getHeaders();

    // Добавляем другие заголовки
    headers['Host'] = 'dev114.reglab.ru';
    //   headers['Content-Length'] = form.getLengthSync().toString();

    let options_: any = {
        body: form,
        observe: "response",
        responseType: "blob",
        headers: headers
    };
    const response = await request.post('https://dev114.reglab.ru/summit/api/Project', options_);

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

