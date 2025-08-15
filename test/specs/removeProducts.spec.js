import BaseUrl from "../pageobjects/baseUrl.js";
import clickable from "../pageobjects/cickable.js";
import simpleActions from "../pageobjects/simpleActions.js";
import { expect } from 'chai';

describe('Remove Products from Cart', () => {
    it('Test Case 17: Remover produtos do carrinho', async () => {
        // 1. Abrir o navegador e navegar para a URL 'http://automationexercise.com'
        const baseUrl = new BaseUrl();
        await baseUrl.open();

        // 2. Adicionar produtos ao carrinho
        await simpleActions.hoverAndAddToCart(0);

        // 3. Clicar no botão 'Continue Shopping'
        await simpleActions.clickContinueShopping();

        // 4. Clicar no botão 'Cart'
        await simpleActions.clickCartButton();

        // 5. Clicar no botão 'X' correspondente a um produto específico
        await simpleActions.removeProductFromCart(0);

        // 6. Verificar se o produto é removido do carrinho
        const isProductRemoved = await simpleActions.verifyProductRemoved();
        expect(isProductRemoved).to.be.true;
    });
});
