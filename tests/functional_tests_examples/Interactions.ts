import test from '../../src/main/lib/BaseTest';

test(`Verify Interactions Page`, { tag: '@Smoke'}, async ({ loginPage, interactionsPage, webActions }) => {
    await loginPage.navigateToURL();
    await webActions.clickByText('Interactions'); // Click on Interactions Icon identified via text selector
    await webActions.clickByText('Droppable');
    await interactionsPage.verifyDragandDrop();
});