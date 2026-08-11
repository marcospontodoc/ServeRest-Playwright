import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;
    readonly missingEmailErrorMessage: Locator;
    readonly missingPasswordErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailInput = page.locator('#email');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.errorMessage = page.getByText('Email e/ou senha inválidos');
        this.missingEmailErrorMessage = page.getByText('Email é obrigatório');
        this.missingPasswordErrorMessage = page.getByText('Password é obrigatório');
    }

    async goToLoginPage() {
        await this.page.goto('https://front.serverest.dev/login');
    }

    async isEmailInvalid() {
    return await this.emailInput.evaluate((element: HTMLInputElement) => {
    return element.validity.typeMismatch;
  });
}

    async login(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}