import { Selector, t } from 'testcafe';
import { getConfig, getEnv, getUser } from '../config/config';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
const config = getConfig();
const usr = getUser();
const env = getEnv();

class Login extends Actions {
  constructor() {
    super();

    // Login Url
    if (env === "prod") {
      this.loginUrl = `https://api.sportsbetting.ag/`;
    } else if (env === "ppd") {
      this.loginUrl = `https://${env}api.sportsbetting.ag/`;
    } else {
      this.loginUrl = `https://sb-api.${env}.pposervices.local/`;
    }

    this.loginPath = `${config.siteUrl}/login`;

    // Selctors
    // This login should only be used for critical tests. 
    // For other tests we must use the ticket login WEBSISTES-5527
    this.loginButton = Selector('[class="button secondary sm"]');
    this.userName = Selector('[id="username"]');
    this.password = Selector('[id="password"]');
    this.loginButtonPage = Selector('[id="kc-login"]');
    this.universalBalance = Selector('[id="button-my-balance"]');
  }

  // Methods

  async openLoginPage() {
    await t.navigateTo(this.loginPath);
    await this.containText(this.getUrl(), this.loginUrl, t);
  };

  async clickLogin() {
    await this.click(this.loginButton, t);
  };

  async login() {
    await this.typeText(this.userName, usr.username, t);
    await this.typeText(this.password, atob(usr.password), t);
    await this.click(this.loginButtonPage, t);
  };

  async universalBalanceIsVisible() {
    await this.isVisible(this.universalBalance, t);
  };
};

export default new Login();
