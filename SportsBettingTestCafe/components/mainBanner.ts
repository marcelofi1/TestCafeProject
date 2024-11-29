import { Selector } from 'gherkin-testcafe';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');

class MainBanner extends Actions {
  constructor() {
    super();

    this.bannerSection = Selector('[class="swiper-wrapper"]');
    this.bullet = Selector('[class="swiper-pagination-bullet"]');
  }
}

export default new MainBanner();
