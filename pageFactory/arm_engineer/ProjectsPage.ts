import {BrowserContext, Locator, Page} from '@playwright/test';
import {WebActions} from "@lib/WebActions";

let webActions: WebActions;

export class ProjectsPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly ALL_PROJECTS_HEADER: Locator;
    readonly NEW_PROJECT_HEADER: Locator;
    readonly NEW_PROJECT_BUTTON: Locator;
    readonly SEARCH_FIELD: Locator;
    readonly ENABLE_CONTENT_PACKAGES_HEADER: Locator;
    readonly AVAILABLE_PROJECTS: Locator;
    readonly AVAILABLE_PROJECTS_SVG: Locator;

    private static NEW_PROJECT_BUTTON: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.NEW_PROJECT_HEADER = page.locator('h2', { hasText: "Новый проект" });
        this.ALL_PROJECTS_HEADER = page.locator('h2', { hasText: "Все проекты" });
        this.ENABLE_CONTENT_PACKAGES_HEADER = page.locator('h2', { hasText: "Включить контент пакеты"});
        this.SEARCH_FIELD = page.getByPlaceholder('Название проекта');
        this.NEW_PROJECT_BUTTON = page.locator('//svg-icon[@name="add"]');
        this.AVAILABLE_PROJECTS = page.locator('div.project-list-group-title');
        this.AVAILABLE_PROJECTS_SVG = page.locator('svg-icon:is([name="folder"])');
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