/* tslint:disable no-var-requires */
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import header from '../components/header';
import carousel from '../components/carousel';
import footer from '../components/footer';
import downloadPage from './downloadPage';
import pokerReleasePage from './pokerReleasePage';
import pokerSixPlusPage from './pokerSixPlusPage';

const { Actions } = require('../utils/actions');
const config = getConfig();

class PokerPage extends Actions {
  constructor() {
    super();
    this.pokerUrl = `${config.siteUrl}/poker`;
    this.playPokerUrl = 'https://poker.sportsbetting.ag/mobilepoker/index.htm';
    this.playOnlineUrl =
      'https://poker.sportsbetting.ag/desktoppoker/index.htm';
    this.helpCenterPokerUrl =
      'https://help.sportsbetting.ag/categories/poker/';
    this.playPokerUrl = 'https://poker.sportsbetting.ag/mobilepoker/index.htm';

    // Main Banner
    this.mainBannerContainer = Selector('[id="main-banner-desktop"]');
    this.titlesContainer = Selector('[id="content-container"]');
    this.firstTitle = Selector('[id="poker-title-1"]');
    this.secondTitle = Selector('[id="poker-title-2"]');
    this.thirdTitle = Selector('[id="poker-title-3"]');
    this.footerTitleMainBanner = Selector('[id="poker-title-4"]');
    this.downloadButton = Selector('[id="button-download"]');
    this.playOnlineDeskButton = Selector('[id="button-play"]');
    this.playOnLineMobButton = Selector('[id="button-play-mobile"]');
    this.mainBannerContainerMobile = Selector('[id="main-banner-mobile"]');

    // Subnav
    this.icon101 = Selector('[id="subnavigation_tab_4"]');

    // Tournaments
    this.tournamentContainer = Selector(
      '[id="poker-tournaments-grid-wrapper"]'
    );
    this.tournamentCardsDesk = Selector(
      '[id^="poker-tournaments"] [id$="desktop"]'
    );
    this.tournamentFirstCard = Selector('[id="poker-tournaments0-desktop"]');
    this.tournamentCardCloseBtn = Selector('[id="poker-tournaments0-overlay"]');
    this.weekDaysTable = Selector('[class="details-table"]');
    this.tournamentCardsMob = Selector(
      '[id^="poker-tournaments"] [id$="mobile"]'
    );
    this.tournamentFirstCardMob = Selector('[id="poker-tournaments0-mobile"]');

    // Features
    this.featuresContainer = Selector('[id="features-wrapper"]');
    this.pokerReleaseButton = Selector('[id="learn-more-button-0"]');
    this.sixPlusButton = Selector('[id="learn-more-button-1"]');
    this.pokerReleaseTitle = Selector('[id="card-title-0"]');
    this.sixPlusTitle = Selector('[id="card-title-1"]');

    // SEO 101
    this.seoContainer = Selector(() =>
      document
        .querySelector(
          'body > app-root > div > app-poker > section > universal-101'
        )
        .shadowRoot.querySelector('div')
    );

    // footer URL
    this.texasUrl = `${config.siteUrl}/poker/texas-holdem`;
    this.omahaUrl = `${config.siteUrl}/poker/omaha`;
  }

  // Methods
  async openPokerPage() {
    await t.navigateTo(this.pokerUrl);
    await this.containText(this.getUrl(), config.siteUrl, t);
  }

  async pokerPageComponents() {
    // await this.isVisible(header.headerContainer, t);
    await this.isVisible(this.mainBannerContainer, t);
    await this.isVisible(this.tournamentContainer, t);
    await this.isVisible(this.featuresContainer, t);
    await this.isVisible(carousel.promotion, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async pokerPageComponentsMobile() {
    // await this.isVisible(header.headerContainer, t);
    await this.isVisible(this.mainBannerContainerMobile, t);
    await this.isVisible(this.tournamentContainer, t);
    await this.isVisible(this.featuresContainer, t);
    await this.isVisible(carousel.promotionContainerMobile, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async mainBannerContainerDeskVisible() {
    await this.isVisible(this.mainBannerContainer, t);
  }

  async titlesMainBannerDeskVisible() {
    await this.isVisible(this.titlesContainer, t);
    await this.isVisible(this.firstTitle, t);
    await this.isVisible(this.secondTitle, t);
    await this.isVisible(this.footerTitleMainBanner, t);
  }

  async downloadBtnDeskDisplayed() {
    await this.isVisible(this.downloadButton, t);
  }

  async playOnlineBtnDeskDisplayed() {
    await this.isVisible(this.playOnlineDeskButton, t);
  }

  async mainBannerContainerMobVisible() {
    await this.isVisible(this.mainBannerContainerMobile, t);
  }

  async titlesMainBannerMobVisible() {
    await this.isVisible(this.titlesContainer.nth(1), t);
    await this.isVisible(this.firstTitle.nth(1), t);
    await this.isVisible(this.secondTitle.nth(1), t);
    await this.isVisible(this.footerTitleMainBanner.nth(1), t);
  }

  async downloadBtnMobDisplayed() {
    await this.isVisible(this.downloadButton.nth(1), t);
  }

  async playOnlineBtnMobDisplayed() {
    await this.isVisible(this.playOnLineMobButton.nth(1), t);
  }

  async clickMainBannerBtnsDesk(text) {
    switch (text) {
      case 'playonline':
        await this.click(this.playOnlineDeskButton, t);
        break;
      case 'download':
        await this.click(this.downloadButton, t);
        break;
      case 'poker 101':
        await this.click(this.icon101, t);
        break;
      default:
        console.log(`Doesn't exist `);
        break;
    }
  }

  async pageDisplayed(value: string) {
    switch (value) {
      case 'playonline':
        await this.eql(this.getUrl(), this.playOnlineUrl, t);
        break;
      case 'playonlinemob':
        await this.eql(this.getUrl(), this.playPokerUrl, t);
        break;
      case 'download':
        await this.eql(this.getUrl(), downloadPage.downloadUrl, t);
        break;
      case 'pokerRelease':
        await this.eql(this.getUrl(), pokerReleasePage.pokerReleaseUrl, t);
        break;
      case 'sixplus':
        await this.eql(this.getUrl(), pokerSixPlusPage.pokerSixPlusUrl, t);
        break;
      case 'poker 101':
        await this.eql(this.getUrl(), this.helpCenterPokerUrl, t);
        break;
      default:
        console.log(`Doesn't exist `);
        break;
    }
  }

  async clickMainBannerBtnsMob(text) {
    switch (text) {
      case 'playonlinemob':
        await this.click(this.playOnLineMobButton.nth(1), t);
        break;
      case 'download':
        await this.click(this.downloadButton.nth(1), t);
        break;
      case 'poker 101':
        await this.click(this.icon101, t);
        break;
      default:
        console.log(`Doesn't exist `);
        break;
    }
  }

  async countTournamentCardsDesk(num) {
    await this.count(this.tournamentCardsDesk, num.toString(), t);
  }

  async clickTournamenFirstCardDesk() {
    await this.click(this.tournamentFirstCard, t);
  }

  async closeBtnDisplayed() {
    await this.isVisible(this.tournamentCardCloseBtn, t);
  }

  async weekDaysTableDisplyed() {
    await this.isVisible(this.weekDaysTable, t);
  }

  async countTournamentCardsMob(num) {
    await this.count(this.tournamentCardsMob, num.toString(), t);
  }

  async clickTournamenFirstCardMob() {
    await this.click(this.tournamentFirstCardMob, t);
  }

  async featureCardsTitle(value, title) {
    switch (value) {
      case 'pokerRelease':
        await this.containText(
          this.pokerReleaseTitle.innerText,
          title.toString(),
          t
        );
        break;
      case 'sixplus':
        await this.containText(
          this.sixPlusTitle.innerText,
          title.toString(),
          t
        );
        break;
      default:
        console.log(`Doesn't exist `);
        break;
    }
  }

  async featureDisplayBtn(value, texto) {
    switch (value) {
      case 'pokerRelease':
        await this.containText(
          this.pokerReleaseButton.innerText,
          texto.toString(),
          t
        );
        break;
      case 'sixplus':
        await this.containText(
          this.sixPlusButton.innerText,
          texto.toString(),
          t
        );
        break;
      default:
        console.log(`Doesn't exist `);
        break;
    }
  }

  async learnMoreBtn(value) {
    switch (value) {
      case 'pokerRelease':
        await this.click(this.pokerReleaseButton, t);
        break;
      case 'sixplus':
        await this.click(this.sixPlusButton, t);
        break;
      default:
        console.log(`Doesn't exist `);
        break;
    }
  }

  async bannerTitles(text, title) {
    switch (text) {
      case 'one':
        await this.containText(this.firstTitle.innerText, title.toString(), t);
        break;
      case 'two':
        await this.containText(this.secondTitle.innerText, title.toString(), t);
        break;
      case 'three':
        await this.containText(this.thirdTitle.innerText, title.toString(), t);
        break;
      case 'four':
        await this.containText(
          this.footerTitleMainBanner.innerText,
          title.toString(),
          t
        );
        break;
      default:
        console.log(`Doesn't exist `);
        break;
    }
  }
}
export default new PokerPage();
