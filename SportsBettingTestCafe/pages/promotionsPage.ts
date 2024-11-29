import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import promotionsCardContentsPage from './promotionsCardContentsPage';
import footer from '../components/footer';
import mainMenu from '../components/mainMenu';
import header from '../components/header';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
const config = getConfig();

class PromotionPage extends Actions {
  constructor() {
    super();
    this.promotionUrl = `${config.siteUrl}/promotions/`;

    // Selectors
    // Promotions Sub-Nav
    this.subnavContainer = Selector('[id="promotions-sub-nav"]');
    this.deposit = Selector('[id="subnavigation_tab_0"]');
    this.sports = Selector('[id="subnavigation_tab_1"]');
    this.casino = Selector('[id="subnavigation_tab_2"]');
    this.poker = Selector('[id="subnavigation_tab_3"]');
    this.racebook = Selector('[id="subnavigation_tab_4"]');
    this.referFriend = Selector('[id="subnavigation_tab_5"]');
    this.eSport = Selector('[id="subnavigation_tab_6"]');
    this.contests = Selector('[id="subnavigation_tab_7"]');
    this.bannerDesktop = Selector('[id="slide-img-desktop"]');

    // Mobile
    this.bannerMobile = Selector('[id="slide-img-mobile"]');


    // URLs
    this.depositUrl = `${this.promotionUrl}deposit`;
    this.sportsUrl = `${this.promotionUrl}sports`;
    this.casinoUrl = `${this.promotionUrl}casino`;
    this.pokerUrl = `${this.promotionUrl}poker`;
    this.racebookUrl = `${this.promotionUrl}racebook`;
    this.referFriendUrl = `${this.promotionUrl}refer-a-friend`;
    this.eSportUrl = `${this.promotionUrl}esports`;
    this.contestsUrl = `${this.promotionUrl}contests`;

    // Promotions Carousel
    this.promotions = Selector('[id="promotions-list"]');
    this.cardContainer = Selector('[id="promotions-cards-wrapper"]');
    this.promotionsContainer = Selector('[id="promotions-list-m-container"]');

    // Selector FirstCard
    this.cardTitle = Selector('[id="promotion-card-0-title"]');
    this.cardImage = Selector('[id="promotion-card-0-image"]');
    this.cardButton = Selector('[id="promotion-card-0-button"]');

    // Promotions deposit card
    this.depositTitle = Selector('[id="deposit-title"]');

    // Promotions e-sport card
    this.esportsTitle = Selector('[id="esports-title"]');

    // Promotions contets card
    this.contestTitle = Selector('[id="contests-title"]');

    // Promotions racebook card
    this.racebookTitle = Selector('[id="racebook-title"]');

    // Promotions refer a friend card
    this.referFriendTitle = Selector('[id="refer a friend-title"]');

    // Promotions sports
    this.sportsTitle = Selector('[id="sports-title"]');

    // Promotions Casino
    this.casinoTitle = Selector('[id="casino-title"]');

    // Promotions Poker
    this.pokerTitle = Selector('[id="poker-title"]');
  }

  // Methods
  async openPromotionPage() {
    await t.navigateTo(this.promotionUrl);
    this.containText(this.getUrl(), config.siteUrl, t);
  }

  async showComponentsDesktop() {
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    // await this.isVisible(header.headerContainer, t);
    await this.isVisible(this.bannerDesktop, t);
    await this.isVisible(this.cardContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async showComponentsMobile() {
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    // await this.isVisible(header.headerContainer, t);
    await this.isVisible(this.bannerMobile, t);
    await this.isVisible(this.cardContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async clickSubNav(value) {
    switch (value) {
      case 'deposit':
        await this.click(this.deposit, t);
        break;
      case 'eSport':
        await this.click(this.eSport, t);
        break;
      case 'contests':
        await this.click(this.contests, t);
        break;
      case 'racebook':
        await this.click(this.racebook, t);
        break;
      case 'referFriend':
        await this.click(this.referFriend, t);
        break;
      case 'sports':
        await this.click(this.sports, t);
        break;
      case 'casino':
        await this.click(this.casino, t);
        break;
      case 'poker':
        await this.click(this.poker, t);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }

  async showCards() {
    await this.isVisible(this.cardContainer, t);
  }

  async clickPromotions() {
    await this.click(this.cardTitle, t);
  }

  async promoPageDisplayed(value) {
    switch (value) {
      case 'deposit':
        await this.eql(this.getUrl(), this.depositUrl, t);
        break;
      case 'eSport':
        await this.eql(this.getUrl(), this.eSportUrl, t);
        break;
      case 'contests':
        await this.eql(this.getUrl(), this.contestsUrl, t);
        break;
      case 'racebook':
        await this.eql(this.getUrl(), this.racebookUrl, t);
        break;
      case 'referFriend':
        await this.eql(this.getUrl(), this.referFriendUrl, t);
        break;
      case 'sports':
        await this.eql(this.getUrl(), this.sportsUrl, t);
        break;
      case 'casino':
        await this.eql(this.getUrl(), this.casinoUrl, t);
        break;
      case 'poker':
        await this.eql(this.getUrl(), this.pokerUrl, t);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }

  async showsCardImage() {
    await this.isVisible(this.cardImage, t);
  }

  async showCardTitle(title) {
    await this.eql(this.cardTitle.innerText, title.toString(), t);
  }

  async showCardButton(texto) {
    await this.eql(this.cardButton.innerText, texto.toString(), t);
  }

  async openPromoPage(value) {
    switch (value) {
      case 'deposit':
        await t.navigateTo(this.depositUrl);
        break;
      case 'eSport':
        await t.navigateTo(this.eSportUrl);
        break;
      case 'contests':
        await t.navigateTo(this.contestsUrl);
        break;
      case 'racebook':
        await t.navigateTo(this.racebookUrl);
        break;
      case 'referFriend':
        await t.navigateTo(this.referFriendUrl);
        break;
      case 'sports':
        await t.navigateTo(this.sportsUrl);
        break;
      case 'casino':
        await t.navigateTo(this.casinoUrl);
        break;
      case 'poker':
        await t.navigateTo(this.pokerUrl);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }

  async promoContentPageDisplay(value) {
    switch (value) {
      case 'deposit':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionDepositUrl, t);
        break;
      case 'eSport':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionEsportUrl, t);
        break;
      case 'contests':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionContestUrl, t);
        break;
      case 'racebook':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionRacebookUrl, t);
        break;
      case 'referFriend':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionReferFriendUrl, t);
        break;
      case 'sports':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionSportsUrl, t);
        break;
      case 'casino':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionCasinosUrl, t);
        break;
      case 'poker':
        await this.eql(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionsPokerUrl, t);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }

  async pageTitle(value) {
    switch (value) {
      case 'DEPOSIT PROMOTIONS':
        await this.eql(this.depositTitle.innerText, value.toString(), t);
        break;
      case 'CONTESTS PROMOTIONS':
        await this.eql(this.contestTitle.innerText, value.toString(), t);
        break;
      case 'REFER A FRIEND PROMOTIONS':
        await this.eql(this.referFriendTitle.innerText, value.toString(), t);
        break;
      case 'SPORTS PROMOTIONS':
        await this.eql(this.sportsTitle.innerText, value.toString(), t);
        break;
      case 'CASINO PROMOTIONS':
        await this.eql(this.casinoTitle.innerText, value.toString(), t);
        break;
      case 'POKER PROMOTIONS':
        await this.eql(this.pokerTitle.innerText, value.toString(), t);
        break;
      case 'RACEBOOK PROMOTIONS':
        await this.eql(this.racebookTitle.innerText, value.toString(), t);
        break;
      case 'ESPORTS PROMOTIONS':
        await this.eql(this.esportsTitle.innerText, value.toString(), t);
        break;
      default:
        console.log(`Doesn't exist`);
        break;
    }
  }
}
export default new PromotionPage();
