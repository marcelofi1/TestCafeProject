/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import header from '../components/header';
import carousel from '../components/carousel';
import footer from '../components/footer';
import mainMenu from '../components/mainMenu';
import mainBanner from '../components/mainBanner';

const config = getConfig();
class ContestsPage extends Actions {
  constructor() {
    super();

    // URL
    this.contestsUrl = `${config.siteUrl}/contests`;

    // Selectors
    // Carousel
    this.cardImage = '[id="promotion-card-desktop-0-image"]';
    this.cardTitle = '[id="promotion-card-desktop-0-title"]';
    this.cardButton = '[id="promotion-card-desktop-0-button"]';

    // SEO 101
    this.seoContainer = Selector(() => document.querySelector('body > app-root > div > app-contests > universal-101').shadowRoot.querySelector('div'));
  }

  // Methods
  async openContestskPage() {
    await t.navigateTo(this.contestsUrl);
    await this.containText(this.getUrl(), config.siteUrl, t);
  }

  async componentsPage() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(mainBanner.bannerSection, t);
    await this.isVisible(carousel.promotion, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async componentsPageMobile() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuMobileContainer, t);
    await this.isVisible(mainBanner.bannerSection, t);
    await this.isVisible(carousel.promotionContainerMobile, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }
}

export default new ContestsPage();
