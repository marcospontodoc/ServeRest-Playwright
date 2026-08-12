import { Page, Locator } from '@playwright/test';

export class RegisterProductPage {
    readonly page: Page;
    readonly productName: Locator;
    readonly productPrice: Locator;
    readonly productDescription: Locator;
    readonly productQuantity: Locator;
    readonly registerButton: Locator;
    readonly registerProductButton: Locator;
    readonly missingNameError: Locator;
    readonly missingPriceError: Locator;
    readonly missingDescriptionError: Locator;
    readonly missingQuantityError: Locator;
    readonly negativePriceError: Locator;
    readonly negativeQuantityError: Locator;
    readonly zeroPriceError: Locator;

    constructor(page: Page) {
        this.page = page;

        this.registerProductButton = page.getByTestId('cadastrarProdutos');
        this.productName = page.locator('#nome');
        this.productPrice = page.locator('#price');
        this.productDescription = page.locator('#description');
        this.productQuantity = page.locator('#quantity');
        this.registerButton = page.locator('button[type="submit"]');
        this.missingNameError = page.getByText('Nome é obrigatório');
        this.missingPriceError = page.getByText('Preco é obrigatório');
        this.missingDescriptionError = page.getByText('Descricao é obrigatório');
        this.missingQuantityError = page.getByText('Quantidade é obrigatório');
        this.negativePriceError = page.getByText('Preco deve ser um número positivo');
        this.negativeQuantityError = page.getByText('Quantidade deve ser maior ou igual a 0');
        this.zeroPriceError = page.getByText('Preco deve ser um número positivo');
    }

    async goToRegisterProductPage() {
        await this.registerProductButton.click();
    }

    async registerProduct(name: string, price: string, description: string, quantity: string) {
        await this.productName.fill(name);
        await this.productPrice.fill(price);
        await this.productDescription.fill(description);
        await this.productQuantity.fill(quantity);
        await this.registerButton.click();
    }
}