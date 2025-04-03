import {HttpHeaders} from '@angular/common/http';

import {expect, test} from "@playwright/test";


// test(`About`, {tag: '@API'}, async ({request}) => {
//     const response = await request.get(`summit/api/About`);
//     await apiActions.verifyStatusCode(response);
//
//     //* Body Response Params and Body Response Headers are stored in single text file separated by #
//     const responseBodyParams = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[0];
//     await apiActions.verifyResponseBody(responseBodyParams, await response.json(), `Response Body`);
//
//     const responseBodyHeaders = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[1];
//     await apiActions.verifyResponseHeader(responseBodyHeaders, response.headersArray(), `Response Headers`);
// });

test(`Get_About`, {tag: '@API'}, async ({request}) => {
    const response = await request.get(`https://dev114.reglab.ru/summit/api/About`);
    expect(response.status()).toBe(200);
    console.log(`Статус код: ${response.status()}`);
    console.log('Ответ: ', response.headersArray());
    console.log('Тело ответа', response.text())
});

test(`POST_CREATE_PROJECT`, {tag: '@API'}, async ({request}) => {
  //  let url_ = 'https://dev114.reglab.ru/summit' + "/api/Project";

    const name = 'yuyuyuy';
    const content_ = new FormData();
    if (name !== null && name !== undefined)
        content_.append("name", name.toString());
    // if (linkedPackages !== null && linkedPackages !== undefined)
    //     linkedPackages.forEach(item_ => content_.append("linkedPackages", item_.toString()));

    let options_: any = {
        body: content_,
        observe: "response",
        responseType: "blob",
        headers: new HttpHeaders({
            "Accept": "application/json"
        })
    };
    const response = await request.post('https://dev114.reglab.ru/summit/api/Project', options_);
    expect(response.status()).toBe(200);
});

//     const form = new FormData();
//     form.append('name', new Date().getTime().toString());
//     form.append('linkedPackages', '0195f4e8-410b-78f2-b1b2-86383c0838a6');
//     console.log(form);
//     // // Получаем заголовки из формы, чтобы использовать правильный boundary
//     // const headers = form.getHeaders();
//     //
//     // // Добавляем другие заголовки
//     // headers['Host'] = 'dev114.reglab.ru';
//     // headers['Content-Length'] = form.getLengthSync().toString();
//
//  //   const size = form.getLengthSync().toString();
//     const headers = {
//         "Accept": "application/json",
//         "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundarytm6isrvP32YxXkud",
//         "Host": "dev114.reglab.ru",
//         "Content-Length": "318"
//     };
//
//     let options_ : any = {
//         headers,
//         body: form
//     };
//
//     console.log('Параметры запроса: ', options_);
//     // Отправляем запрос с multipart/form-data
//     const response = await request.post('https://dev114.reglab.ru/summit/api/Project', options_);
//  await expect(response.status()).toBe(200);
//
//    console.log(`Статус код: ${response.status()}`);
//     console.log('Ответ: ', response.headersArray());
//     console.log('Тело ответа', response.text())
// });

//* In Case you application has token system, Please use the below code

// test(`@API getUsersToken`, async ({ playwright, baseURL }) => {
//     const apiContext = await playwright.request.newContext({
//         baseURL: baseURL,
//         extraHTTPHeaders: {
//             'Authorization': `Your App Token`
//         }
//     });
//     const response = await apiContext.get(`/api/users?per_page=1`);
//     await apiActions.verifyStatusCode(response.status(), 200);

//     //* Body Response Params and Body Response Headers are stored in single text file separated by #
//     const responseBodyParams = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[0];
//     await apiActions.verifyResponseBody(responseBodyParams, await response.json(), `Response Body`);

//     const responseBodyHeaders = (await apiActions.readValuesFromTextFile(`getUsers`)).split(`#`)[1];
//     await apiActions.verifyResponseHeader(responseBodyHeaders, response.headersArray(), `Response Headers`);
// });

