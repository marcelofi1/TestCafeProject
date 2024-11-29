/* tslint:disable no-var-requires */
import { getConfig, getEnv, getUser } from '../config/config';
import { Selector, t } from 'testcafe';
import footer from '../components/footer';
import header from '../components/header';
import logIn from '../components/login'
import mainMenu from '../components/mainMenu';

const { Actions } = require('../utils/actions');
const config = getConfig();
const env = getEnv();
const usr = getUser();

class ReferAFriend extends Actions {
  constructor() {
    super();

    // Selectors    
    this.referAFriendUrl = `${config.siteUrl}/refer-a-friend`;

    this.referAFriendBannerSection = Selector('[class="section-hero"]');
    this.referAFriendBtn = Selector('[class="refer-now-btn"]');
    this.referAFriendHowSection = Selector('[class="section-how-it-works"]');
    this.referAFriendCardsSection = Selector('[class="section-cards-container"]');
    this.referAFriendStepSection = Selector('[class="section-steps-container"]');
    this.referAFriendPromoSection = Selector('[class="section-promotions"]');

    // Refer a Friend modal
    this.referAFriendPopUp = Selector('[id="gotoRafModal"]');
  }

  // Methods
  async openReferAFriendPage() {
    await t.navigateTo(this.referAFriendUrl);
  }

  async referAFriendComponents() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(this.referAFriendBannerSection, t);
    await this.isVisible(this.referAFriendHowSection, t);
    await this.isVisible(this.referAFriendCardsSection, t);
    await this.isVisible(this.referAFriendStepSection, t);
    await this.isVisible(this.referAFriendPromoSection, t);
    await this.isVisible(footer.footerSection, t);
  }

  async clickOnReferNowBtn() {
    await this.click(this.referAFriendBtn, t)
  }

  async loginPageDisplayed() {
    await this.containText(this.getUrl(), logIn.loginUrl, t);
  }

  async referAFriendModalVisible() {
    await this.isVisible(this.referAFriendPopUp, t);
  }
}
export default new ReferAFriend();
