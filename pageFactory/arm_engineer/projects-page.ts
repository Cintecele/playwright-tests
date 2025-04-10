import {BrowserContext, Locator, Page} from '@playwright/test';
import {WebActions} from "../../src/main/lib/WebActions";
import {LocatorHelper} from "src/main/helpers/LocatorHelper";
import {constants} from '../../src/main/utils/constants';


let webActions: WebActions;
const locatorHelper = new LocatorHelper();

export class ProjectsPage {
    private projectName: string;
    readonly page: Page;
    readonly context: BrowserContext;
    readonly ALL_PROJECTS_HEADER: Locator;
    readonly NEW_PROJECT_HEADER: Locator;
    readonly NEW_PROJECT_BUTTON: Locator;
    readonly ALL_PROJECTS_SEARCH_FIELD: Locator;
    readonly ENABLE_CONTENT_PACKAGES_HEADER: Locator;
    readonly AVAILABLE_PROJECTS: Locator;
    readonly AVAILABLE_PROJECTS_SVG: Locator;
    readonly IMPORT_PROJECT_DROPZONE: Locator;
    readonly CONTENT_PACKAGES_SEARCH_FIELD: Locator;
    readonly CREATE_PROJECT_BUTTON: Locator;
    readonly SELECT_ALL_FB_CHECKBOX: Locator;
    readonly SINGLE_FB_CHECKBOX: Locator;
    readonly MAGNIFIER_SVG: Locator;
    readonly UPLOAD_PROJECT_SVG: Locator;
    readonly PROJECT_NAME_FIELD_INPUT: Locator;
    readonly AUTHORIZATION: Locator;
    readonly LOGIN: Locator;
    readonly PASSWORD: Locator
    readonly CONTINUE_BUTTON: Locator;
    readonly MENU_BUTTON: Locator;
    readonly ACCEPT_BUTTON: Locator;
    readonly CREATED_PROJECT_IN_TREE: Locator;
    readonly PROJECT_654: Locator;
    readonly IMPORTED_PROJECT_IN_DROPZONE: Locator;
    readonly DROPZONE_INPUT: Locator;
    readonly ALL_GENERATED_PROJECTS: Locator;



    private static NEW_PROJECT_BUTTON: Locator;

    public setProjectName(name: string) {
        this.projectName = name;
    }

    public getProjectName(): string {
        return this.projectName;
    }

    constructor(page: Page, context: BrowserContext) {
        this.projectName = new Date().getTime().toString();
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.NEW_PROJECT_HEADER = page.locator('h2', {hasText: "Новый проект"});
        this.ALL_PROJECTS_HEADER = page.locator('h2', {hasText: "Все проекты"});
        this.ENABLE_CONTENT_PACKAGES_HEADER = page.locator(locatorHelper.getHeaderByName(constants.Headers.enable_content_packages).getXpath());
        this.ALL_PROJECTS_SEARCH_FIELD = page.getByPlaceholder('Название проекта');
        this.NEW_PROJECT_BUTTON = page.locator('//svg-icon[@name="add"]');
        this.AVAILABLE_PROJECTS = page.locator('div.project-list-group-title');
        this.AVAILABLE_PROJECTS_SVG = page.locator('svg-icon:is([name="folder"])');
        this.IMPORT_PROJECT_DROPZONE = page.locator('div.project-create-form-dropzone');
        this.CONTENT_PACKAGES_SEARCH_FIELD = page.locator(locatorHelper.getFormInputByRlInputPlaceholder("Название пакета или компонента").getXpath());
        this.PROJECT_NAME_FIELD_INPUT = page.locator(locatorHelper.getFormInputByRlInputPlaceholder("Название проекта").getXpath());
        this.CREATED_PROJECT_IN_TREE = page.locator(locatorHelper.getDivByName(this.projectName).getXpath());
        this.PROJECT_654 = page.locator(locatorHelper.getDivByName('new').getXpath());
        this.CREATE_PROJECT_BUTTON = page.locator('div.dx-button-content');
        this.SELECT_ALL_FB_CHECKBOX = page.locator('svg.svg--default--off');
        this.SINGLE_FB_CHECKBOX = page.locator('dx-check-box.dx-checkbox').first();
        this.MAGNIFIER_SVG = page.locator('//svg-icon[@name="upload_file"]');
        this.UPLOAD_PROJECT_SVG = page.locator('//svg-icon[@name="upload_file"]');
        this.AUTHORIZATION = page.locator('h2', {hasText: "Авторизация"});
        this.LOGIN = page.getByPlaceholder('Логин');
        this.PASSWORD = page.getByPlaceholder('Пароль');
        this.CONTINUE_BUTTON = page.locator(locatorHelper.getButtonByName("Продолжить").getXpath());
        this.MENU_BUTTON = page.locator(locatorHelper.getButtonByName("Меню").getXpath());
        this.ACCEPT_BUTTON = page.locator(locatorHelper.getDivByClassAndName("Принять", "dx-button-content").getXpath());
        this.IMPORTED_PROJECT_IN_DROPZONE = page.locator(locatorHelper.getDivByName('new.project').getXpath());
        this.DROPZONE_INPUT = page.locator(locatorHelper.getInputByClassXpath('dropzone-input').getXpath());
        this.ALL_GENERATED_PROJECTS = page.locator(locatorHelper.getDivByClassAndName('1744', 'link link--light-theme').getXpath()).first();
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("https://dev114.reglab.ru/arm-engineer/index.html#/main/projects");
    }

    async clickOnNewProjectButton(): Promise<void> {
        await this.NEW_PROJECT_BUTTON.click();
    }

    static async clickOnNewProjectButton() {
        await this.NEW_PROJECT_BUTTON.click();
    }
}