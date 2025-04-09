import {BrowserContext, Locator, Page} from '@playwright/test';
import {LocatorHelper} from "src/main/helpers/LocatorHelper";
import {constants} from '../../src/main/utils/constants';

const locatorHelper = new LocatorHelper();

export class CanvasPage {
    private projectName: string;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly PLC_R500_BOX: Locator;
    readonly PLC_R500_9_BOX: Locator;
    readonly PLC_VPLC_BOX: Locator;
    readonly CANVAS_EDITOR: Locator;
    readonly DELETE_CONTEXT_ACTION: Locator;
    readonly PROPERTY_CONTEXT_ACTION: Locator;
    readonly ADD_DEVICE_CONTEXT_ACTION: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.projectName = new Date().getTime().toString();
        this.page = page;
        this.context = context;
        this.PLC_R500_BOX = page.locator(locatorHelper.getPlcByNameXpath("R500_PLC_10").getXpath()).first();
        this.PLC_R500_9_BOX = page.locator(locatorHelper.getPlcByNameXpath("R500_PLC_9").getXpath()).first();
        this.PLC_VPLC_BOX = page.locator(locatorHelper.getPlcByNameXpath("VPLC").getXpath()).first();
        this.CANVAS_EDITOR = page.locator(locatorHelper.getCanvas().getCss());
        this.DELETE_CONTEXT_ACTION = page.locator(locatorHelper.getDivByName("Удалить").getXpath());
        this.PROPERTY_CONTEXT_ACTION = page.locator(locatorHelper.getDivByName("Свойства...").getXpath());
        this.ADD_DEVICE_CONTEXT_ACTION = page.locator(locatorHelper.getDivByName("Добавить устройство...").getXpath());
    }
}