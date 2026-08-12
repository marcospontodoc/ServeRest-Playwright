import { test, expect } from '../fixture/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

test.describe('Shopping List Tests', () => {

    let loginPage: LoginPage;
    let homePage: HomePage;

    test.beforeEach(async ({ page, commonUser }) => {

        loginPage = new LoginPage(page);
        homePage = new HomePage(page);

        await loginPage.goToLoginPage();

        await loginPage.login(
            commonUser.email,
            commonUser.password
        );
    });

    test('should add product to shopping list', async ({ page }) => {

        await homePage.clickAddToListButton();
        await expect(page).toHaveURL(/minhaListaDeProdutos/);
    });

});