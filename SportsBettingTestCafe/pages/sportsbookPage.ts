/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import header from '../components/header';
import carousel from '../components/carousel';
import footer from '../components/footer';
import mainMenu from '../components/mainMenu';

const config = getConfig();
class SportsbookPage extends Actions {
  constructor() {
    super();

    const shadowBetslip = Selector('div[class*="betslip-container"]').find('betslip-widget').shadowRoot().find('bet-slip').shadowRoot();

    // URL
    this.sportsbookgUrl = `${config.sportsbookUrl}/sportsbook`;

    // Selectors
    // This login must be modified in the WEBSISTES-5527
    this.loginButton = '[class="button secondary sm"]';
    this.userNameTxt = '[id="username"]';
    this.passwordTxt = '[id="password"]';
    this.authButton = '[id="kc-login"]';

    // This logout must be modified
    this.userIcon = '[class="icon-user-account amb-trackeable-event"]';
    const logOutButton = Selector(() => document.querySelector("amb-universal-balance").shadowRoot.querySelector("footer svelte-1ljn50f").querySelector(".button logout sportsbetting svelte-1bwu6s1"));
    const shadowRoot = Selector('div').withAttribute('id', 'balance-menu').shadowRoot();
    this.logOutButton = shadowRoot.child('.button logout sportsbetting svelte-1bwu6s1');

    // BetSlip - Mobile
    this.betslipUrl = `${config.siteUrl}/betslip`;
    this.betslipIcon = Selector('[id="betslipButton"]');
    this.betslipButton = Selector('[class="betslipButton"]');
    this.betslipCloseButton = Selector('[class*="mobile-btn__background"]');

    // Sportsbook container
    this.moneyLine = Selector('[data-testid="vertical-market-type"]').withText('Money Line').find('[data-testid*="odd-component"]').nth(0);
    this.spread = Selector('[data-testid="vertical-market-type"]').withText('Spread').find('[data-testid*="odd-component"]').nth(0);
    this.winField = shadowBetslip().find('[class*="bet-pick__container"]').find('[class*="risk__amount"]').nth(1).find('input[inputmode="decimal"]');
    this.riskField = shadowBetslip().find('[class*="bet-pick__container"]').find('[class*="risk__amount"]').nth(0).find('input[inputmode="decimal"]');
    this.placeBetBtn = shadowBetslip().find('div[class*="bet-summary__buttons"]>button[class*="place-bet__button"]').withText('Place Bet');
    this.successMsg = shadowBetslip().find('span').withText('SUCCESS!');
    this.reuseSectionBtn = shadowBetslip().find('[id="bet-success-keep-selections-close-button"]');

    // footer URL
    this.nflUrl = `${config.sportsbookUrl}/sportsbook/football/nfl`;
    this.nbaUrl = `${config.sportsbookUrl}/sportsbook/basketball/nba`;
    this.mlbUrl = `${config.sportsbookUrl}/sportsbook/baseball/mlb`;
    this.nhlUrl = `${config.sportsbookUrl}/sportsbook/hockey/nhl`;
    this.ncaaFUrl = `${config.sportsbookUrl}/sportsbook/football/ncaa`;
    this.ncaaBUrl = `${config.sportsbookUrl}/sportsbook/basketball/ncaa`;
    this.superBowlUrl = `${config.sportsbookUrl}/sportsbook/futures-and-props/super-bowl`;
    this.ufcUrl = `${config.sportsbookUrl}/sportsbook/martial-arts/mma`;
    this.boxingUrl = `${config.sportsbookUrl}/sportsbook/boxing/bouts`;

    // SEO 101
    this.seoContainer = Selector(() => document.querySelector('body > app-root > div > app-sportsbook > universal-101').shadowRoot.querySelector('div'));
  }

  // Methods
  async openSpotsbookPage() {
    await t.navigateTo(this.sportsbookgUrl);
    await this.containText(this.getUrl(), this.sportsbookgUrl, t);
  }

  async betslipIconVisible() {
    await this.isVisible((this.betslipIcon), t);
  }

  async clikBetslipIcon() {
    await this.click((this.betslipButton), t);
  }

  async betslipPage() {
    await this.eql(this.getUrl(), this.betslipUrl, t);
  }

  async betslipIconNotVisible() {
    await this.isNotVisible(this.betslipIcon(), t);
  }

  async clikCloseBetslip() {
    await this.click((this.betslipCloseButton), t);
  }

  async componentsPage() {
    await this.isVisible(header.headerContainer, t);
    await this.isVisible(mainMenu.mainMenuContainer, t);
    // await this.isVisible(carousel.promotion, t);  El carrusel solo va a estar en Live Betting y  Prematch/Sports va a quedar el Most Popular
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async componentsPageMobile() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuMobileContainer, t);
    await this.isVisible(carousel.promotionContainerMobile, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async clickMoneyBox() {
    await this.click(this.moneyLine, t);
  }

  async setWinInputValue(value) {
    await this.typeText(this.winField, value, t);
  }

  async setWinInputValueMobile(value) {
    await this.click((this.betslipButton), t);
    await this.typeText(this.winField, value, t);
  }

  async clickPlaceBetBtn() {
    await this.click(this.placeBetBtn, t);
  }

  async successMessageDisplayed() {
    await this.isVisible(this.successMsg, t);
  }

  async setRiskInputValue(value) {
    await this.typeText(this.riskField, value, t);
  }

  async setRiskInputValueMobile(value) {
    await this.click((this.betslipButton), t);
    await this.typeText(this.riskField, value, t);
  }

  async clickSpreadBox() {
    await this.click(this.spread, t);
  }

  async reuseSectionDisplayed() {
    await this.isVisible(this.reuseSectionBtn, t);
  }
}

export default new SportsbookPage();
