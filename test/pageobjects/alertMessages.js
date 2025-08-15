import Page from './page.js';

class AlertMessages extends Page {
    get accountDeleted() { return $('h2[data-qa="account-deleted"]'); }

    async showAccountDeleted() {
        await this.waitForDisplayed(this.accountDeleted);
        const text = await this.getElementText(this.accountDeleted);
        return text.includes('ACCOUNT DELETED!');
    }
}

const alertMessages = new AlertMessages();
export default alertMessages;