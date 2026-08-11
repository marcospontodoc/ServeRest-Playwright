import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly name: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly admCheckbox: Locator;
    readonly registerButton: Locator;
    readonly successMessage: Locator;
    readonly nameMissing: Locator;
    readonly emailMissing: Locator;
    readonly passwordMissing: Locator;

    constructor(page: Page) {
        this.page = page;

        this.name = page.locator('#nome');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.admCheckbox = page.locator('#administrador');
        this.registerButton = page.locator('button[type="submit"]');
        this.successMessage = page.getByText('Cadastro realizado com sucesso');
        this.nameMissing = page.getByText('Nome é obrigatório');
        this.emailMissing = page.getByText('Email é obrigatório');
        this.passwordMissing = page.getByText('Password é obrigatório');
    }

    async goToRegisterPage() {
        await this.page.goto('https://front.serverest.dev/cadastrarusuarios');
    }

    async isEmailInvalid() {
    return await this.email.evaluate((element: HTMLInputElement) => {
    return element.validity.typeMismatch;
    });
    }

    async register(name: string, email: string, password: string) {
    await this.name.fill(name);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.admCheckbox.check();
    await this.registerButton.click();
  }

}
