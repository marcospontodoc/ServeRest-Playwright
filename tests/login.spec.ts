import { test, expect } from '../fixture/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
    });

    test('should login successfully with valid credentials', async ({ testUser, page }) => {

        await loginPage.login( testUser.email, testUser.password);
        await expect(page).toHaveURL(/home/);
    });

    test('should show error message with non registered email', async ({ testUser, page }) => {
        await loginPage.login('nonregistered@example.com', testUser.password);
        await expect(loginPage.errorMessage).toBeVisible();
    });

    test('should show error message with non registered password', async ({ testUser, page }) => {
        await loginPage.login(testUser.email, 'wrongpassword');
        await expect(loginPage.errorMessage).toBeVisible();
    });

});