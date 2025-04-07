export class LocatorHelper {
    private xpath: string;

    // Метод для получения текущего XPath (если нужно)
    public getXpath(): string {
        return this.xpath;

    }
    constructor() {
        this.xpath = "";
    }

    public getFormInputByPlaceholder(inputPlaceholder: string): LocatorHelper {
        this.xpath = `//rl-input-placeholder[(.)='${inputPlaceholder}']//ancestor::rl-input/input`;
        return this;
    }
}