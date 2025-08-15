import Page from './page.js';
import inputForms from './inputForms.js';
import clickable from './cickable.js';

class SimpleActions extends Page {
    async clickButton(element) {
        await this.waitForDisplayed(element);
        await element.click();
    }

    async searchProduct(productName) {
        await inputForms.searchProduct.setValue(productName);
        
        try {
            // Tenta clicar no botão de busca principal
            await this.clickButton(clickable.searchButton);
        } catch (error) {
            console.log('Botão #submit_search não encontrado, tentando alternativa...');
            try {
                // Tenta botão alternativo
                await this.clickButton(clickable.searchButtonAlt);
            } catch (error2) {
                console.log('Botão alternativo não encontrado, usando Enter...');
                // Se não encontrar nenhum botão, usa Enter
                await browser.keys('Enter');
            }
        }
    }

    /**
     * Verifica se o título "SEARCHED PRODUCTS" está visível
     * @returns {Promise<boolean>} true se o título estiver visível
     */
    async verifySearchedProductsTitle() {
        try {
            await this.waitForDisplayed(clickable.searchedProductsTitle);
            const titleText = await clickable.searchedProductsTitle.getText();
            return titleText.includes('SEARCHED PRODUCTS');
        } catch (error) {
            console.log('Título "SEARCHED PRODUCTS" não encontrado');
            return false;
        }
    }

    /**
     * Verifica se todos os produtos relacionados à busca são visíveis
     * @returns {Promise<boolean>} true se os 3 produtos estiverem visíveis
     */
    async verifySearchedProducts() {
        try {
            // Aguarda um pouco para os produtos carregarem
            await browser.pause(2000);
            
            // Busca todos os produtos na página
            const products = await clickable.searchedProducts;
            const addToCartButtons = await clickable.addToCartButtons;
            
            console.log(`Produtos encontrados: ${products.length}`);
            console.log(`Botões "Add to cart" encontrados: ${addToCartButtons.length}`);
            
            if (products.length === 0) {
                console.log('Nenhum produto encontrado na busca');
                return false;
            }
            
            // Verifica se exatamente 3 produtos estão visíveis 
            if (products.length !== 3) {
                console.log(`Esperado 3 produtos, encontrado: ${products.length}`);
                return false;
            }
            
            // Verifica se todos os 3 produtos estão visíveis
            for (let i = 0; i < 3; i++) {
                try {
                    await this.waitForDisplayed(products[i], 5000);
                    console.log(`Produto ${i + 1} está visível`);
                    
                    // Verifica se o botão "Add to cart" está presente
                    if (addToCartButtons[i]) {
                        await this.waitForDisplayed(addToCartButtons[i], 3000);
                        console.log(`Botão "Add to cart" do produto ${i + 1} está visível`);
                    }
                } catch (error) {
                    console.log(`Produto ${i + 1} não está visível: ${error.message}`);
                    return false;
                }
            }
            
            console.log('✅ Todos os 3 produtos da busca estão visíveis');
            return true;
            
        } catch (error) {
            console.log('Erro ao verificar produtos da busca:', error.message);
            return false;
        }
    }
}

const simpleActions = new SimpleActions();
export default simpleActions;
