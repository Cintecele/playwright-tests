


class checkboxHelper {
    public async setStatusForCheckbox(page: any, status: boolean): Promise<void> {
        const activeCheckbox = await this.isCheckedCheckBox(page);

        if (activeCheckbox !== status) {  // Используем XOR (исключающее ИЛИ)
            const checkboxWrapper = await page.locator('.your-checkbox-wrapper');  // Пример CSS локатора
            await checkboxWrapper.click();

            if (activeCheckbox) {
                await this.checkNotActivateCheckBox(page);
            } else {
                await this.checkActivateCheckBox(page);
            }
        }
    }

    private async isCheckedCheckBox(page: any): Promise<boolean> {
        const checkbox = await page.locator('.your-checkbox');  // Пример CSS локатора для чекбокса
        return await checkbox.isChecked();  // Проверяем, выбран ли чекбокс
    }

    private async checkNotActivateCheckBox(page: any): Promise<void> {
        const checkbox = await page.locator('.your-checkbox');  // Пример CSS локатора для чекбокса
        await checkbox.uncheck();  // Деактивируем чекбокс
    }

    private async checkActivateCheckBox(page: any): Promise<void> {
        const checkbox = await page.locator('.your-checkbox');  // Пример CSS локатора для чекбокса
        await checkbox.check();  // Активируем чекбокс
    }
}