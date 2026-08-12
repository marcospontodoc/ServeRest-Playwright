import { test, expect } from '../fixture/test';
import { generateProduct } from '../utils/dataGenerator';
import { LoginPage } from '../pages/LoginPage';
import { RegisterProductPage } from '../pages/RegisterProductPage';

test.describe('Register Product Tests', () => {

    let loginPage: LoginPage;
    let registerProductPage: RegisterProductPage;
    let product: ReturnType<typeof generateProduct>;

    test.beforeEach(async ({ page, testUser }) => {
        loginPage = new LoginPage(page);
        registerProductPage = new RegisterProductPage(page);

        await loginPage.goToLoginPage();
        await loginPage.login(testUser.email, testUser.password);

        product = generateProduct();
    });

    test('should register a new product', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            product.nome,
            product.preco,
            product.descricao,
            product.quantidade
        );

        await expect(page).toHaveURL(/listarprodutos/);
    });

    test('should not register a product with missing name', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            '',
            product.preco,
            product.descricao,
            product.quantidade
        );

        await expect(registerProductPage.missingNameError).toBeVisible();
    });

    test('should not register a product with missing price', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            product.nome,
            '',
            product.descricao,
            product.quantidade
        );
        await expect(registerProductPage.missingPriceError).toBeVisible();
    });

    test('should not register a product with missing description', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            product.nome,
            product.preco,
            '',
            product.quantidade
        );
        await expect(registerProductPage.missingDescriptionError).toBeVisible();
    });

    test('should not register a product with missing quantity', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            product.nome,
            product.preco,
            product.descricao,
            ''
        );
        await expect(registerProductPage.missingQuantityError).toBeVisible();
    });

    test('should not register a product with negative price', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            product.nome,
            '-10',
            product.descricao,
            product.quantidade
        );
        await expect(registerProductPage.negativePriceError).toBeVisible();
    })

    test('should not register a product with negative quantity', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            product.nome,
            product.preco,
            product.descricao,
            '-5'
        );
        await expect(registerProductPage.negativeQuantityError).toBeVisible();
    });

    test('should not register a product with zero price', async ({ page }) => {
        await registerProductPage.goToRegisterProductPage();
        await registerProductPage.registerProduct(
            product.nome,
            '0',
            product.descricao,
            product.quantidade
        );
        await expect(registerProductPage.zeroPriceError).toBeVisible();
    })
});