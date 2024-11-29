/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import header from '../components/header';
import carousel from '../components/carousel';
import footer from '../components/footer';
import mainMenu from '../components/mainMenu';

const config = getConfig();
class ESportsPage extends Actions {
  constructor() {
    super();

    // URL
    this.eSportsUrl = `${config.siteUrl}/esports`;

    // SEO 101
    this.seoContainer = Selector(() => document.querySelector('body > app-root > div > app-esports > universal-101').shadowRoot.querySelector('div'));
  }

  // Methods
  async openESportsPage() {
    await t.navigateTo(this.eSportsUrl);
    await this.containText(this.getUrl(), config.siteUrl, t);
  }

  async componentsPage() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(carousel.promotion, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t)
  }

  async componentsPageMobile() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuMobileContainer, t);
    await this.isVisible(carousel.promotionContainerMobile, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t)
  }
}

export default new ESportsPage();
