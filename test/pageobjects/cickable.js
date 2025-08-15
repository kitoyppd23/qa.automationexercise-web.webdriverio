import Page from './page.js';

class Clickable extends Page {
    get signupLogin() { return $('a[href="/login"]'); }
    get signupButton() { return $('button[data-qa="signup-button"]'); }
    get titleMr() { return $('#id_gender1'); }
    get daysBirthScroll() { return $('#days'); }
    get monthBirthScroll() { return $('#months'); }
    get yearsBirthScroll() { return $('#years'); }
    get newsletterCheckbox() { return $('#newsletter'); }
    get specialOffersCheckbox() { return $('#optin'); }
    get countryScroll() { return $('#country'); }
    get stateScroll() { return $('#state'); }
    get createAccountButton() { return $('button[data-qa="create-account"]'); }
    get continueButton() { return $('a[data-qa="continue-button"]'); }
    get deleteAccountLink() { return $('a[href="/delete_account"]'); }
    get productsButton() { return $('a[href="/products"]'); }
    get searchButton() { return $('#submit_search'); }
    get searchButtonAlt() { return $('button[type="submit"]'); }
    get searchedProductsTitle() { return $('h2.title.text-center'); }
    get searchedProducts() { return $$('.features_items .col-sm-4 .product-image-wrapper'); }
    get addToCartButtons() { return $$('.btn.btn-default.add-to-cart'); }
    get viewProductLinks() { return $$('a[href*="/product_details/"]'); }
    get quantityInput() { return $('#quantity'); }
    get addToCartButton() { return $('button.btn.btn-default.cart'); }
    get viewCartLink() { return $('a[href="/view_cart"]'); }
    get cartModal() { return $('#cartModal'); }
    get cartQuantityButton() { return $('button.disabled'); }
    get continueShoppingButton() { return $('button.btn.btn-success.close-modal.btn-block'); }
    get productCards() { return $$('.features_items .col-sm-4'); }
    get cartItems() { return $$('#cart_info_table tbody tr'); }
    get cartTotalPrice() { return $('.cart_total_price'); }
}

const clickable = new Clickable();
export default clickable;
