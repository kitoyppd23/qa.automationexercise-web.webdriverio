import BaseUrl from "../pageobjects/baseUrl.js";
import clickable from "../pageobjects/cickable.js";
import simpleActions from "../pageobjects/simpleActions.js";
import { expect } from 'chai';

describe('Add Products to Cart', () => {
    it('Test Case 12: Adicionar produtos ao carrinho', async () => {
        // 1. Abrir o navegador e navegar para a URL 'http://automationexercise.com'
        const baseUrl = new BaseUrl();
        await baseUrl.open();

        // 2. Clicar no botão 'Products'
        await clickable.productsButton.click();

        // 3. Passar o mouse sobre o primeiro produto e clicar em 'Add to cart'
        await simpleActions.hoverAndAddToCart(0);

        // 4. Clicar no botão 'Continue Shopping'
        await simpleActions.clickContinueShopping();

        // 5. Passar o mouse sobre o segundo produto e clicar em 'Add to cart'
        await simpleActions.hoverAndAddToCart(1);

        // 6. Clicar no botão 'View Cart'
        await simpleActions.clickViewCart();

        // 7. Verificar se ambos os produtos são adicionados ao carrinho
        // 8. Verificar seus preços, quantidade e preço total
        const areProductsCorrect = await simpleActions.verifyCartProducts();
        expect(areProductsCorrect).to.be.true;
    });
});
