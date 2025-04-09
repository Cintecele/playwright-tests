export class LocatorHelper {
    private xpath: string;
    private css: string;
    private locatorType: 'xpath' | 'css'; // Тип локатора, 'xpath' или 'css'

    constructor() {
        this.xpath = "";
        this.css = "";
        this.locatorType = 'xpath'; // По умолчанию используем XPath
    }

    // Метод для получения текущего XPath
    public getXpath(): string {
        if (this.locatorType === 'xpath') {
            return this.xpath;
        }
        throw new Error("Current locator type is not XPath.");
    }

    // Метод для получения текущего CSS локатора
    public getCss(): string {
        if (this.locatorType === 'css') {
            return this.css;
        }
        throw new Error("Current locator type is not CSS.");
    }

    public getHeaderByName(headerName: string): LocatorHelper {
        this.locatorType = 'xpath';
        this.xpath = `//h2[(.)="${headerName}"]`;
        return this;
    }

    public getButtonByName(buttonName: string): LocatorHelper {
        this.locatorType = 'xpath';
        this.xpath = `//div[normalize-space(.)="${buttonName}"]//ancestor::button`;
        return this;
    }

    public getDivByName(divName: string): LocatorHelper {
        this.locatorType = 'xpath';
        this.xpath = `//div[(text()= "${divName}")]`;
        return this;
    }

    // Метод для установки локатора по XPath
    public getFormInputByRlInputPlaceholder(inputPlaceholder: string): LocatorHelper {
        this.locatorType = 'xpath';
        this.xpath = `//rl-input-placeholder[normalize-space(.)="${inputPlaceholder}"]//ancestor::rl-input/input`;
        return this;
    }

    // Метод для установки локатора по CSS
    public getFormInputByRlInputPlaceholderCss(inputPlaceholder: string): LocatorHelper {
        this.locatorType = 'css';
        this.css = `rl-input-placeholder:has-text("${inputPlaceholder}")`; // Пример CSS локатора
        return this;
    }

    public getPlcByNameCss(name: string): LocatorHelper {
        this.locatorType = 'css';
        this.css = `.plс-box:has-text("${name}")`;
        return this;
    }

    public getCanvas(): LocatorHelper {
        this.locatorType = 'css';
        this.css = `.canvas-editor`;
        return this;
    }

    // Метод для установки локатора по XPath
    public getPlcByNameXpath(name: string): LocatorHelper {
        this.locatorType = 'xpath';
        this.xpath = `//span[normalize-space(.)="${name}"]//ancestor::*[@class= 'plc-box']`;
        return this;
    }

    // Метод для установки локатора ПЛК по ID (XPath)
    public getPlcByIdXpath(id: string): LocatorHelper {
        this.locatorType = 'xpath';
        this.xpath = `//*[@id="${id}"]`;
        return this;
    }
}