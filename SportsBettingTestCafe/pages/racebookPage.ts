import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import carousel from '../components/carousel';
import mainMenu from '../components/mainMenu';
import header from '../components/header';
import footer from '../components/footer';
import mainBanner from '../components/mainBanner';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');

const config = getConfig();

class RacebookPage extends Actions {
  constructor() {
    super();

    // URL
    this.racebookUrl = `${config.siteUrl}/racebook`;

    // Selectors
    // footer URL
    this.kentuckyDerbUrl = `${config.siteUrl}/racebook/kentucky-derby`;
    this.preaknessStakesUrl = `${config.siteUrl}/racebook/preakness-stakes`;
    this.belmontStakesUrl = `${config.siteUrl}/racebook/belmont-stakes`;
    this.breedersCupUrl = `${config.siteUrl}/racebook/breeders-cup`;

    // SEO 101
    this.seoContainer = Selector(() => document.querySelector('body > app-root > div > app-racebook > universal-101').shadowRoot.querySelector('div'));
  }

  // Methods
  async openRacebookPage() {
    await t.navigateTo(this.racebookUrl);
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

  // Mobile
  async componentsPageMobile() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuMobileContainer, t);
    await this.isVisible(mainBanner.bannerSection, t);
    await this.isVisible(carousel.promotionContainerMobile, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }
}

export default new RacebookPage();
