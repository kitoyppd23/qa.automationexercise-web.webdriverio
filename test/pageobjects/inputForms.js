import Page from './page.js';

class InputForms extends Page {
    get signupInputName() { return $('input[data-qa="signup-name"]'); }
    get signupInputEmail() { return $('input[data-qa="signup-email"]'); }
    get enterAccountInputName() { return $('#name'); }
    get enterAccountInputEmail() { return $('#email'); }
    get enterAccountInputpassword() { return $('#password'); }
    get adressInformationfirstName() { return $('#first_name'); }
    get adressInformationlastName() { return $('#last_name'); }
    get adressInformationcompany() { return $('#company'); }
    get mainAdress() { return $('#address1'); }
    get secondAdress() { return $('#address2'); }
    get state() { return $('#state'); }
    get city() { return $('#city'); }
    get zipcode() { return $('#zipcode'); }
    get mobileNumber() { return $('#mobile_number'); }
}

const inputForms = new InputForms();
export default inputForms;