/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
import { Selector, t } from 'gherkin-testcafe';
import { getEnv } from "../config/config";
import redirect from "../redirect/url";

const env = getEnv();
class Redirect extends Actions {
  constructor() {
    super(); 
  }

  // Methods
  async openRedirect(value) {
    switch (value) {
      case 'login':
        await t.navigateTo(redirect.loginUrl);
        break;
      case 'join':
        await t.navigateTo(redirect.joinUrl);
        break;
      default:
        console.log('Does no exist' + value);
        break;
    }
  }

  async pageDisplayed() {
    if (env === 'qa' || env === 'dev') {
      await redirect.containText(redirect.getUrl(), redirect.urlAPI, t);
    } else if (env === 'ppd') {
      await redirect.containText(redirect.getUrl(), redirect.ppdUrlAPI, t);
    } else if (env === 'prod') {
      await redirect.containText(redirect.getUrl(), redirect.prodUrlAPI, t);
    }
  }  
}

export default new Redirect();
