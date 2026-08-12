import { test, expect } from '../fixture/test';
import { RegisterPage } from '../pages/ResisterPage';
import { generateUser } from '../utils/dataGenerator';

test.describe('Register Tests', () => {

    let registerPage: RegisterPage;
    let user: ReturnType<typeof generateUser>;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        user = generateUser();
        await registerPage.goToRegisterPage();
    });

    test('should register successfully with valid data', async () => {
        await registerPage.register(user.nome, user.email, user.password);
        await expect(registerPage.successMessage).toBeVisible();
    });

    test('should show error message when name is missing', async () => {
        await registerPage.register('', user.email, user.password);
        await expect(registerPage.nameMissing).toBeVisible();
    });

    test('should show error message when email is missing', async () => {
        await registerPage.register(user.nome, '', user.password);
        await expect(registerPage.emailMissing).toBeVisible();
    });

    test('should show error message when password is missing', async () => {
        await registerPage.register(user.nome, user.email, '');
        await expect(registerPage.passwordMissing).toBeVisible();
    });

    test('should show error message when email is invalid', async () => {
        await registerPage.register(user.nome, 'invalidemail', user.password);
        expect(await registerPage.isEmailInvalid()).toBe(true);
    });

});