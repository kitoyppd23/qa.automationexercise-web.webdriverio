import BaseUrl from "../pageobjects/baseUrl.js";
import simpleActions from "../pageobjects/simpleActions.js";
import { expect } from 'chai';

describe('Cart Quantity Verification', () => {
    it('Test Case 13: Verificar quantidade no carrinho', async () => {
        // 1. Abrir o navegador e navegar para a URL 'http://automationexercise.com'
        const baseUrl = new BaseUrl();
        await baseUrl.open();

        // 2. Clicar em 'View Product' para qualquer produto na página inicial
        await simpleActions.clickViewProduct();

        // 3. Aumentar a quantidade para 4
        await simpleActions.setQuantityToFour();

        // 4. Clicar no botão 'Add to cart'
        await simpleActions.addToCart();

        // 5. Clicar no botão 'View Cart'
        await simpleActions.clickViewCart();

        // 6. Verificar se o produto é exibido na página do carrinho com a quantidade exata
        const isQuantityCorrect = await simpleActions.verifyCartQuantityIsFour();
        expect(isQuantityCorrect).to.be.true;
    });
});
