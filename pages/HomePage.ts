import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
     readonly addToListButton: Locator;
    readonly shoppingList: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addToListButton = page.getByTestId('adicionarNaLista');
        this.shoppingList = page.getByTestId('shopping-cart-product-name');
    }

    async clickAddToListButton() {
        await this.addToListButton.first().click();
    }
}