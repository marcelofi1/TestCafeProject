import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import mainMenu from '../components/mainMenu';
import header from '../components/header';
import footer from '../components/footer';
import carousel from '../components/carousel';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');

const config = getConfig();

class PokerSixPlus extends Actions {
  constructor() {
    super();

    // URL
    this.pokerSixPlusUrl = `${config.siteUrl}/promotions/six-plus-holdem`;

    // Selectors
    // Banner
    this.mainBanner = Selector('[class="picture-wrapper"]');    
      
  }

  // Methods
  
}

export default new PokerSixPlus();
