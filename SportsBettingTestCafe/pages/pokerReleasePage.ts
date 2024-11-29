import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import mainMenu from '../components/mainMenu';
import header from '../components/header';
import footer from '../components/footer';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');

const config = getConfig();

class PokerRelease extends Actions {
  constructor() {
    super();

    // URL
    this.pokerReleaseUrl = `${config.siteUrl}/poker-new-releases`;

    // Selectors
    // Banner
    this.mainBanner = Selector('[id="new-releases-picture-desktop"]');       
  }

  // Methods
  
}

export default new PokerRelease();
