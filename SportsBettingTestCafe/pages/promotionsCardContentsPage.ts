/* tslint:disable no-var-requires */
import { getConfig } from '../config/config';
import { RequestLogger, Selector, t } from 'testcafe';
import promotionsPage from './promotionsPage';
import footer from '../components/footer';
import header from '../components/header';
import mainMenu from '../components/mainMenu';

const { Actions } = require('../utils/actions');
const config = getConfig();
let logger;

class PromotionsCardContentsPage extends Actions {
  constructor() {
    super();

    // Selectors
    this.promotionDepositUrl = `${config.siteUrl}/promotions/deposit/promo-auto-no-borrar`;
    this.promotionEsportUrl = `${config.siteUrl}/promotions/esports/promo-auto-no-borrar`;
    this.promotionContestUrl = `${config.siteUrl}/promotions/contests/promo-auto-no-borrar`;
    this.promotionRacebookUrl = `${config.siteUrl}/promotions/racebook/promo-auto-no-borrar`;
    this.promotionReferFriendUrl = `${config.siteUrl}/promotions/refer-a-friend/promo-auto-no-borrar`;
    this.promotionSportsUrl = `${config.siteUrl}/promotions/sports/promo-auto-no-borrar`;
    this.promotionCasinosUrl = `${config.siteUrl}/promotions/casino/promo-auto-no-borrar`;
    this.promotionsPokerUrl = `${config.siteUrl}/promotions/poker/promo-auto-no-borrar`;
    this.referAFriendUrl = `${config.siteUrl}/refer-a-friend`;

    this.bannerDesktop = Selector('[id="details-banner-desktop"]');
    this.backButton = Selector('[id="back-btn"]');
    this.title = Selector('[id="details-title"]');
    this.links = Selector('[id="details-links"]');
    this.termsAndConditionsContainer = Selector('[id="terms-and-conditions"]');
    this.table = Selector('[id="table-prizes"]');
    this.ctaButton = Selector('[id="btn-cta"]');
    this.promoButton = Selector('[id="btn-promo"]');
    this.loginBtn = Selector('[id="kc-login"]')

    // Mobile
    this.bannerMobile = Selector('[id="details-banner-mobile"]');

    // Agreement
    this.termsAndConditionsArrow = Selector('[id="accordion-toggle"]');
    this.termsAndConditionsDetails = Selector('[id="promotions-agreement"]');
  }

  // Methods
  async openPromoPage(value: string) {
    switch (value) {
      case 'deposit':
        await t.navigateTo(promotionsPage.depositUrl);
        break;
      case 'eSport':
        await t.navigateTo(promotionsPage.eSportUrl);
        break;
      case 'contests':
        await t.navigateTo(promotionsPage.contestsUrl);
        break;
      case 'racebook':
        await t.navigateTo(promotionsPage.racebookUrl);
        break;
      case 'referFriend':
        await t.navigateTo(promotionsPage.referFriendUrl);
        break;
      case 'sports':
        await t.navigateTo(promotionsPage.sportsUrl);
        break;
      case 'casino':
        await t.navigateTo(promotionsPage.casinoUrl);
        break;
      case 'poker':
        await t.navigateTo(promotionsPage.pokerUrl);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }

  async openPromoContentPage(value: string) {
    switch (value) {
      case 'deposit':
        await t.navigateTo(this.promotionDepositUrl);
        break;
      case 'eSport':
        await t.navigateTo(this.promotionEsportUrl);
        break;
      case 'contests':
        await t.navigateTo(this.promotionContestUrl);
        break;
      case 'racebook':
        await t.navigateTo(this.promotionRacebookUrl);
        break;
      case 'referFriend':
        await t.navigateTo(this.promotionReferFriendUrl);
        break;
      case 'sports':
        await t.navigateTo(this.promotionSportsUrl);
        break;
      case 'casino':
        await t.navigateTo(this.promotionCasinosUrl);
        break;
      case 'poker':
        await t.navigateTo(this.promotionsPokerUrl);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }

  async clickOnFirstCard() {
    await this.click(promotionsPage.cardImage, t)
  }

  async componentsVisibleDesktop() {
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(this.backButton, t);
    await this.isVisible(this.links, t);
    await this.isVisible(this.ctaButton, t);
    await this.isVisible(this.title, t);
    await this.isVisible(this.bannerDesktop, t);
    // await this.isVisible(header.headerContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async componentsVisibleMobile() {
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(this.backButton, t);
    await this.isVisible(this.links, t);
    await this.isVisible(this.ctaButton, t);;
    await this.isVisible(this.title, t);
    await this.isVisible(this.bannerMobile, t);
    // await this.isVisible(header.headerContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async showPageTitle(title) {
    await this.eql(this.title.innerText, title.toString(), t);
  }

  async showCtaBtn(cta) {
    await this.eql(this.ctaButton.innerText, cta.toString(), t);
  }

  async showTextBtn(texto) {
    await this.eql(this.promoButton.innerText, texto.toString(), t);
  }

  async showTablePrize(prizes) {
    await this.containText(this.table.innerText, prizes.toString(), t);
  }

  async showTermsCondition(terms) {
    await this.containText(this.termsAndConditionsDetails.innerText, terms.toString(), t);
  }

  async clickTermsBtn() {
    await this.click(this.termsAndConditionsArrow, t);
  }

  async clickBackBtn() {
    await this.click(this.backButton, t);
  }

  async promotionPageDisplayed(value) {
    switch (value) {
      case 'deposit':
        await this.eql(this.getUrl(), promotionsPage.depositUrl, t);
        break;
      case 'eSport':
        await this.eql(this.getUrl(), promotionsPage.eSportUrl, t);
        break;
      case 'contests':
        await this.eql(this.getUrl(), promotionsPage.contestsUrl, t);
        break;
      case 'racebook':
        await this.eql(this.getUrl(), promotionsPage.racebookUrl, t);
        break;
      case 'referFriend':
        await t.wait(30000);
        await this.eql(this.getUrl(), promotionsPage.referFriendUrl, t);
        break;
      case 'sports':
        await this.eql(this.getUrl(), promotionsPage.sportsUrl, t);
        break;
      case 'casino':
        await this.eql(this.getUrl(), promotionsPage.casinoUrl, t);
        break;
      case 'poker':
        await this.eql(this.getUrl(), promotionsPage.pokerUrl, t);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }

  async clickCtaBtn() {
    logger = RequestLogger(this.getUrl());
    await this.click(this.ctaButton, t).addRequestHooks(logger);
  }

  async clickPromoBtn() {
    await this.click(this.promoButton, t);
  }

  async ctaPageDisplayed(value) {
    switch (value) {
      case 'deposit':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      case 'eSport':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      case 'contests':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      case 'racebook':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      case 'referFriend':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      case 'sports':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      case 'casino':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      case 'poker':
        await t.expect(logger.contains(r => r.response.statusCode === 200)).ok();
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }
}
export default new PromotionsCardContentsPage();
