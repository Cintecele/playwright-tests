import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class ProjectsPage {
        readonly page: Page;
        readonly context: BrowserContext;
        readonly ALL_PROJECTS_HEADER: Locator;
        readonly NEW_PROJECT_HEADER: Locator;
        readonly NEW_PROJECT_BUTTON: Locator;
        readonly SEARCH_FIELD: Locator;
        readonly PROJECT_TREE: Locator;
    
        constructor(page: Page, context: BrowserContext) {
            this.page = page;
            this.context = context;
            webActions = new WebActions(this.page, this.context);
            this.ALL_PROJECTS_HEADER = page.locator('xpath=//h2[contains((.), "Новый проект")]');
            this.NEW_PROJECT_HEADER = page.locator('xpath=//h2[contains((.), "Все проекты")]');
            this.NEW_PROJECT_BUTTON = page.locator('//svg-icon[@name="add"]');
            this.SEARCH_FIELD = page.getByPlaceholder('Type to search');
        }
    
        async navigateToURL(): Promise<void> {
            await this.page.goto("/");
        }
    
        async clickOnNewProjectButton(): Promise<void> {
            await this.NEW_PROJECT_BUTTON.click();
        }
}