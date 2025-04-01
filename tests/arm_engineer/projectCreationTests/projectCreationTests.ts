import test from '@lib/BaseTest';


test(`Verify Book Store Login`, { tag: '@Smoke'}, async ({ loginPage, webActions }) => {
    await test.step(`Navigate to Application`, async () => {
        await loginPage.navigateToURL();
    });
}); 