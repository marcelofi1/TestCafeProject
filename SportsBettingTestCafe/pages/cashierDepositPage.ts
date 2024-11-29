/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';

const config = getConfig();
class DepositPage extends Actions {
  constructor() {
    super();
    // Selectors

    this.number = config.cardNumber;

    this.depositButton = Selector('[id="header-deposit-button"]');
    this.creditCardPayment = Selector('[class="payment-method-item-method"]').withText('Credit Card');
    this.cardNumber = Selector('[id="CardNumber"]', { timeout: 10000 });
    this.cardExpiry = Selector('[id="CardExpiry"]');
    this.cardCVC = Selector('[id="CardCVC"]');
    this.amount25 = Selector('button[value="50"]');
    this.continueDepositButton = Selector('[id="cc-amount-submit"]');
    this.titleHeaderDepositModal = Selector(`[class="cashier-success-amount-creditcard-content"]`, { timeout: 50000 }).withText('Deposit Was Successful!');
  }

  // Methods
  async clickOnDepositButton() {
    await this.click(this.depositButton, t);
  };

  async selectCreditCardOption() {
    await this.click(this.creditCardPayment, t);
  };

  async completeCreditCardRegistration(expiry, cvc) {
    await this.typeText(this.cardNumber, this.number, t);
    await this.typeText(this.cardExpiry, expiry, t);
    await this.typeText(this.cardCVC, cvc, t);
    await this.click(this.amount25, t);
  };

  async clickOnContinueDeposit() {
    await this.click(this.continueDepositButton, t);
    await t.wait(120000);
  };

  async validateDepositWasSuccessful() {
    await this.isVisible(this.titleHeaderDepositModal, t);
  };
};

export default new DepositPage();
