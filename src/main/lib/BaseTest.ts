import {test as baseTest, TestInfo} from '@playwright/test';
import {LoginPage} from '@pages/LoginPage';
import {ElementsPage} from '@pages/ElementsPage';
import {AlertsFrameWindowsPage} from '@pages/AlertsFrameWindowsPage';
import {WidgetsPage} from '@pages/WidgetsPage';
import {InteractionsPage} from '@pages/InteractionsPage';
import {WebActions} from './WebActions';
import AxeBuilder from '@axe-core/playwright';
import {ProjectsPage} from "../../../pageFactory/arm_engineer/projects-page";
import {LocatorHelper} from "../helpers/LocatorHelper";
import {constants} from '../utils/constants';
import {CanvasPage} from '../../../pageFactory/arm_engineer/canvas-page';

const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
    elementsPage: ElementsPage;
    alertsFrameWindowsPage: AlertsFrameWindowsPage;
    widgetsPage: WidgetsPage;
    interactionsPage: InteractionsPage;
    makeAxeBuilder: AxeBuilder;
    testInfo: TestInfo;
    projectPage: ProjectsPage;
    locatorHelper: LocatorHelper;
    constants: constants;
    canvasPage: CanvasPage;
}>({
    webActions: async ({page, context}, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({page, context}, use) => {
        await use(new LoginPage(page, context));
    },
    elementsPage: async ({page, context}, use) => {
        await use(new ElementsPage(page, context));
    },
    alertsFrameWindowsPage: async ({page, context}, use) => {
        await use(new AlertsFrameWindowsPage(page, context));
    },
    widgetsPage: async ({page, context}, use) => {
        await use(new WidgetsPage(page, context));
    },
    interactionsPage: async ({page, context}, use) => {
        await use(new InteractionsPage(page, context));
    },
    makeAxeBuilder: async ({page}, use) => {
        await use(new AxeBuilder({page})
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .exclude('#commonly-reused-element-with-known-issue'));
    },
    projectPage: async ({page, context}, use) => {
        await use(new ProjectsPage(page, context));
    },
    locatorHelper: async ({}, use) => {
        await use(new LocatorHelper());
    },
    constants: async ({}, use) => {
        await use(new constants());
    },
    canvasPage: async ({page, context}, use) => {
        await use(new CanvasPage(page, context));
    }
})

export default test;