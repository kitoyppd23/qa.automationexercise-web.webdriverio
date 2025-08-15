import BaseUrl from "../pageobjects/baseUrl.js";
import clickable from "../pageobjects/cickable.js";
import simpleActions from "../pageobjects/simpleActions.js";
import { expect } from 'chai';

describe('Search Product', () => {
    it('Test Case 9: Procurar produto', async () => {
        //Abrir o navegador para a URL 'http://automationexercise.com'
        const baseUrl = new BaseUrl();
        await baseUrl.open();

        //Clicar no botão 'Products'
        await clickable.productsButton.click();

        // 3. Inserir o nome do produto no campo de busca e clicar no botão de busca
        await simpleActions.searchProduct('jeans');

        // 4. Verificar se 'SEARCHED PRODUCTS' é visível
        const isTitleVisible = await simpleActions.verifySearchedProductsTitle();
        expect(isTitleVisible).to.be.true;
        

    });
});

//Inserir o nome do produto no campo de busca e clicar no botão de busca
//Verificar se 'SEARCHED PRODUCTS' é visível
//Verificar se todos os produtos relacionados à busca são visíveis
