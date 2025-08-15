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
}

const clickable = new Clickable();
export default clickable;
