import { test, expect } from '@playwright/test';

test('mock API response', async ({page}) => {
    // Мокаем API запрос
    await page.route('https://dev114.reglab.ru/summit/api/Project/all', async route => {
        const jsonResponse = [{
            "Id": "0195ffe1-70d3-7dce-9f00-1e39e74d5c11",
                "Name": "1234567890",
                "CreationDate": "2025-04-04T08:18:39.429522+00:00"
        }];
        await route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(jsonResponse),
        });
    });

    // Переходим на страницу, которая делает запрос к API
    await page.goto('https://dev114.reglab.ru/arm-engineer/index.html#/main/projects');

    // Проверяем, что данные отобразились корректно
    const divSelector = page.locator('//div[(text()= "1234567890")]');
    await expect(divSelector).toBeVisible();
});