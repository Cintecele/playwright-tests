export class LocatorHelper {
    private xpath: string;

    // Метод для получения текущего XPath
    public getXpath(): string {
        return this.xpath;

    }

    constructor() {
        this.xpath = "";
    }

    public getFormInputByRlInputPlaceholder(inputPlaceholder: string): LocatorHelper {
        this.xpath = `//rl-input-placeholder[(.)='${inputPlaceholder}']//ancestor::rl-input/input`;
        return this;
    }

    public getHeaderByName(headerName: string): LocatorHelper {
        this.xpath = `//h2[(.)='${headerName}']`;
        return this;
    }

    public getButtonByName(buttonName: string): LocatorHelper {
        this.xpath = `//div[normalize-space(.)='${buttonName}']//ancestor::button`;
        return this;
    }

    public getDivByName(divName: string): LocatorHelper {
        this.xpath = `//div[(text()= '${divName}')]`;
        return this;
    }
}