import { Selector, t } from 'gherkin-testcafe';
import { getEnv, getConfig } from '../config/config';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
const config = getConfig();
const env = getEnv();

class MainMenu extends Actions {
  constructor() {
    super();

    this.mainMenuContainer = Selector('[class="bottom-container"]');

    // Menu
    // Selectors
    this.sports = Selector('[id="sports-icon"]');
    this.liveBetting = Selector('[id="live betting-icon"]');
    this.casino = Selector('[id="casino-icon"]');
    this.raceBook = Selector('[id="racebook-icon"]');
    this.poker = Selector('[id="poker-icon"]');
    this.eSports = Selector('[id="esports-icon"]');
    this.contests = Selector('[id="contests-icon"]');
    this.promo = Selector('[id="promos-icon"]');

    // Mobile
    this.mainMenuMobileContainer = Selector('[id="burger-button"]');
    this.betslipButton = Selector('[id="betslipButton"]');
  }

  // Methods
  async clickOnBurger() {
    await this.click(this.mainMenuMobileContainer, t);
  }
}

export default new MainMenu();
