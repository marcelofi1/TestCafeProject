/* tslint:disable no-var-requires */
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import casinoPage from '../pages/casinoPage';
import bankingPage from '../pages/bankingPage';

const { Actions } = require('../utils/actions');
const config = getConfig();

class Header extends Actions {
  constructor() {
    super();

    this.headerContainer = Selector('[class="header-container"]');
    this.blackjackIcon = Selector('[id="blackjack-casino-link"]');
    this.bankingButton = Selector('[class="banking link button transparent sm hide-sm"]');
    this.loginButton = Selector('[class="button secondary sm"]');
    this.joinNowButton = Selector('[class="link button primary sm"]');
    this.logoImage = Selector('[id="logo-img"]');
  }

  async clickLogo() {
    await this.click(this.logoImage, t);
  };

  async headerComponentsIsVisible() {
    await this.isVisible(this.logoImage, t)
    await this.isVisible(this.blackjackIcon, t)
    await this.isVisible(this.bankingButton, t)
    await this.isVisible(this.loginButton, t)
    await this.isVisible(this.joinNowButton, t)
  };

  async headerComponentsIsVisibleMobile() {
    await this.isVisible(this.logoImage, t)
    await this.isVisible(this.loginButton, t)
    await this.isVisible(this.joinNowButton, t)
  };

  async clickClassicSite() {
    await t.eval(() => {
      const shadowRoot = document.querySelector("redirect-btn").shadowRoot;
      const classicSite: any = shadowRoot.querySelector("div > button");
      classicSite.click();
    });
  };

  async classicSitePage() {
    await this.containText(this.getUrl(), config.classicSite, t);
  };

  async clickBankingButton() {
    await this.click(this.bankingButton, t)
  };

  async bankingPage() {
    await this.eql(this.getUrl(), bankingPage.bankingUrl, t);
  };

  async clickBlackjackIcon() {
    await this.click(this.blackjackIcon, t)
  };

  async blackjackPage() {
    await this.containText(this.getUrl(), casinoPage.blackjackUrl, t);
  };
}
export default new Header();
