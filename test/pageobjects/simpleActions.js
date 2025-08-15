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

    /**
     * Clica em "View Product" do primeiro produto disponível
     */
    async clickViewProduct() {
        try {
            const viewProductLinks = await clickable.viewProductLinks;
            if (viewProductLinks.length > 0) {
                await this.clickButton(viewProductLinks[0]);
                console.log('✅ Clicou em "View Product" do primeiro produto');
            } else {
                throw new Error('Nenhum link "View Product" encontrado');
            }
        } catch (error) {
            console.log('Erro ao clicar em View Product:', error.message);
            throw error;
        }
    }

    /**
     * Define a quantidade do produto para 4
     */
    async setQuantityToFour() {
        try {
            await this.waitForDisplayed(clickable.quantityInput);
            await clickable.quantityInput.clearValue();
            await clickable.quantityInput.setValue('4');
            // Aguarda um pouco para garantir que o valor foi definido
            await browser.pause(1000);
            console.log('✅ Quantidade definida para 4');
        } catch (error) {
            console.log('Erro ao definir quantidade:', error.message);
            throw error;
        }
    }

    /**
     * Adiciona o produto ao carrinho
     */
    async addToCart() {
        try {
            await this.clickButton(clickable.addToCartButton);
            // Aguarda a modal aparecer
            await browser.pause(2000);
            console.log('✅ Produto adicionado ao carrinho');
        } catch (error) {
            console.log('Erro ao adicionar ao carrinho:', error.message);
            throw error;
        }
    }

    /**
     * Clica em "View Cart" na modal
     */
    async clickViewCart() {
        try {
            // Aguarda a modal aparecer completamente
            await this.waitForDisplayed(clickable.cartModal, 10000);
            console.log('✅ Modal do carrinho apareceu');
            
            // Aguarda um pouco mais para garantir que a modal está totalmente carregada
            await browser.pause(1000);
            
            // Aguarda o link "View Cart" estar visível e clicável
            await this.waitForDisplayed(clickable.viewCartLink, 5000);
            
            // Tenta clicar usando JavaScript para evitar problemas de interceptação
            await browser.execute((element) => {
                element.click();
            }, await clickable.viewCartLink);
            
            // Aguarda a página do carrinho carregar
            await browser.pause(3000);
            console.log('✅ Clicou em "View Cart"');
        } catch (error) {
            console.log('Erro ao clicar em View Cart:', error.message);
            throw error;
        }
    }

    /**
     * Verifica se a quantidade no carrinho é 4
     * @returns {Promise<boolean>} true se a quantidade for 4
     */
    async verifyCartQuantityIsFour() {
        try {
            // Aguarda um pouco para a página carregar completamente
            await browser.pause(2000);
            
            // Tenta encontrar o elemento da quantidade
            await this.waitForDisplayed(clickable.cartQuantityButton, 15000);
            
            const quantityText = await clickable.cartQuantityButton.getText();
            const isQuantityFour = quantityText === '4';
            console.log(`Quantidade no carrinho: ${quantityText}`);
            
            if (!isQuantityFour) {
                console.log(`❌ Quantidade esperada: 4, encontrada: ${quantityText}`);
            } else {
                console.log('✅ Quantidade correta (4) encontrada no carrinho');
            }
            
            return isQuantityFour;
        } catch (error) {
            console.log('Erro ao verificar quantidade no carrinho:', error.message);
            return false;
        }
    }
}

const simpleActions = new SimpleActions();
export default simpleActions;
