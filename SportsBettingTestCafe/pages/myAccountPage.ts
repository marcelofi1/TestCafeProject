
/* tslint:disable no-var-requires */
import { Selector, t } from 'testcafe';

const { Actions } = require('../utils/actions');

class MyAccountPage extends Actions {
  constructor() {
    super();

    // Selectors
    this.myAccount = Selector('[id="button-my-balance"]');
    this.depositNowButton = Selector('a[href="/cashier"]');
  };

  // Methods
  async clickOnMyAccountButton() {
    await this.click(this.myAccount, t);
  };

  async clickOnDepositNowButton() {
    await t.eval(() => {
      const shadowRoot = document.querySelector("balance-widget").shadowRoot;
      const depositNowButton: any = shadowRoot.querySelector('a[href*="/cashier/deposit"]');
      depositNowButton.click();
    });
  };
};

export default new MyAccountPage();