/* tslint:disable no-var-requires */
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';

const { Actions } = require('../utils/actions');
const config = getConfig();

class JoinPage extends Actions {
  constructor() {
    super();

    this.joinPageUrl = `${config.siteUrl}/join`;

    // Form

    this.firtsNameInput = Selector('#FirstName');
    this.lastNameInput = Selector('#LastName');
    this.password = Selector('#PasswordJ');
    this.emailInput = Selector('#EMail');
    this.country = Selector('#Country');
    this.zipCodeInput = Selector('#Zip');
    this.phoneNumberInput = Selector('#HomePhone');
    this.dateBirthInput = Selector('#BirthDate');
    this.createAccountButton = Selector('#btnsubmit');
    this.footerSection = Selector('footer');
    this.contentTermsPolicy = Selector('.template__footer__content__terms');
    this.contentBadges = Selector('.template__footer__content__badges');
    this.submitButton = Selector('#btnsubmit');
    this.selectCountry = Selector(`option[value='US']`);

    // validation Page

    this.container = Selector('#kc-content');
    this.icon = Selector('.redirect-success-icon');
    this.joinCenterTitleModal = Selector('.join__redirect__center__title');
    this.joinCenterTitleBrand = Selector('.join__redirect__center__title__brand');
    this.span = Selector('span');
    this.success = Selector('#kc-content .redirect-success-icon');
  };

  // Methods

  async gotoJoinPage() {
    await t.navigateTo(this.joinPageUrl);
  };

  async joinRegistration(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    zipCode: string,
    phoneNumber: string,
    birthDate: string
  ) {
    await this.typeText(this.firtsNameInput(), firstName, t);
    await this.typeText(this.lastNameInput(), lastName, t);
    await this.typeText(this.emailInput(), email, t);
    await this.click(this.country(), t);
    await this.click(this.selectCountry(), t);
    await this.typeText(this.password(), password, t);
    await this.click(this.zipCodeInput(), t);
    await this.typeText(this.zipCodeInput(), zipCode, t);
    await this.typeText(this.phoneNumberInput(), phoneNumber, t);
    await this.typeText(this.dateBirthInput(), birthDate, t);
  };

  async clickOnSubmitButton() {
    await this.click(this.submitButton(), t);
  };

  async verifySuccessMessage(userFirstName: string) {
    await this.isVisible(this.icon(), t);
    await this.isVisible(this.container(), t);
    await this.isVisible(this.span().withText(`Welcome ${userFirstName}!`), t);
    await this.isVisible(this.success(), t);
  };
};

export const joinPage = new JoinPage();
