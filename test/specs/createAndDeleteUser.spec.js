import BaseUrl from "../pageobjects/baseUrl.js";
import clickable from "../pageobjects/cickable.js";
import inputForms from "../pageobjects/inputForms.js";
import genericData from "../pageobjects/genericData.js";
import alertMessages from "../pageobjects/alertMessages.js";
import { expect } from 'chai';

describe('Register a user', () => {
    it('Test Case 1: Registrar um usuário', async () => {
        // 1. Abrir o navegador e Navegar para a URL 'http://automationexercise.com'
        const baseUrl = new BaseUrl();
        await baseUrl.open();

        //Clicar no botão 'Signup / Login'
        await clickable.signupLogin.click();

        //Inserir nome e endereço de e-mail
        await inputForms.signupInputName.setValue(genericData.name);
        await inputForms.signupInputEmail.setValue(genericData.email);

        //Clicar no botão 'Signup'
        await clickable.signupButton.click();

        // Preencher os detalhes: Título, Nome, 
        await clickable.titleMr.click();
        await inputForms.enterAccountInputName.setValue(genericData.name);
        
        // Validar que o email já está preenchido corretamente (não precisa preencher novamente)
        const emailValue = await inputForms.enterAccountInputEmail.getValue();
        expect(emailValue).to.equal(genericData.email);
        
        await inputForms.enterAccountInputpassword.setValue(genericData.password);
        
        // Selecionar data de nascimento usando scroll
        await clickable.daysBirthScroll.selectByVisibleText(genericData.dayOfBirth);
        await clickable.monthBirthScroll.selectByVisibleText(genericData.monthOfBirth);
        await clickable.yearsBirthScroll.selectByVisibleText(genericData.yearOfBirth);

        //Selecionar a caixa de seleção 'Sign up for our newsletter!'
        await clickable.newsletterCheckbox.click();

        //Selecionar a caixa de seleção 'Receive special offers from our partners!'
        await clickable.specialOffersCheckbox.click();

        //Preencher os detalhes: Nome, Sobrenome, Empresa, Endereço, Endereço 2, Cidade, Estado, Código postal, Número de telefone
        await inputForms.adressInformationfirstName.setValue(genericData.firstName);
        await inputForms.adressInformationlastName.setValue(genericData.lastName);
        await inputForms.adressInformationcompany.setValue(genericData.company);
        await inputForms.mainAdress.setValue(genericData.address1);
        await inputForms.secondAdress.setValue(genericData.address2);
        await inputForms.city.setValue(genericData.city);


        //País, Estado, Cidade, CEP, Número do celular
        await clickable.countryScroll.selectByVisibleText(genericData.country);
        await inputForms.state.setValue(genericData.state);
        await inputForms.city.setValue(genericData.city);
        await inputForms.zipcode.setValue(genericData.zipcode);
        await inputForms.mobileNumber.setValue(genericData.mobileNumber);

        //Clicar no botão 'Create Account'
        await clickable.createAccountButton.click();

        //Clicar no botão 'Continue'
        await clickable.continueButton.click();

        //Clicar no botão 'Delete Account'
        await clickable.deleteAccountLink.click();

        //Verifique se 'ACCOUNT DELETED!' é visível e clicar no botão 'Continue'
        expect(await alertMessages.showAccountDeleted()).to.be.true;
    });
});
