/* tslint:disable no-var-requires */
import { Selector, t } from 'testcafe';
import { getConfig } from '../config/config';
import pokerPage from './pokerPage';

const { Actions } = require('../utils/actions');
const config = getConfig();

class DownloadPage extends Actions {
  constructor() {
    super();
    this.downloadUrl = `${config.siteUrl}/poker/download`;

    // Selectors
    // Download Sub-Nav
    this.downloadMainBanner = Selector('[id="main-banner"]');
    this.downloadInfoCont = Selector('[id="info-container"]');
    this.downloadMacBtn = Selector('[id="button-1-apple-desktop"]');
    this.downloadWinBtn = Selector('[id="button-1-windows-desktop"]');
    this.downloadSteps = Selector('[id="stepper"]');
    this.downloadSecondBanner = Selector('[id="secondary-banner"]');
    this.downloadSecMacBtn = Selector('[id="button-2-apple-desktop"]');
    this.downloadSecWinBtn = Selector('[id="button-2-windows-desktop"]');
    this.downloadMobilIosBtn = Selector('[id="button-1-ios-mobile"]');
    this.downloadMobilAndBtn = Selector('[id="button-1-android-mobile"]');
    this.downloadMobilSecIosBtn = Selector('[id="button-2-ios-mobile"]');
    this.downloadMobilSecAndBtn = Selector('[id="button-2-android-mobile"]');

    // Download pop-up
    this.helpSportsBettingUrl = `https://help.sportsbetting.ag/en/collections/497689-poker`;
    this.popupWindow = Selector('[id="modal"]');
    this.popupTitle = Selector('[id="title"]');
    this.popupSubTitle = Selector('[id="subtitle"]');
    this.popupPersonIcon = Selector('[id="image-icon-1"]');
    this.popupGiftIcon = Selector('[id="image-icon-2"]');
    this.popupHandsIcon = Selector('[id="image-icon-3"]');
    this.popupDownloadDesc = Selector('[id="row-1-text"]');
    this.popupAccountDesc = Selector('[id="row-2-text"]');
    this.popupDepositDesc = Selector('[id="row-3-text"]');
    this.popupHelpBtn = Selector('[id="help-button-link"]');
  }

  // Methods
  async openDownloadPage() {
    await t.navigateTo(this.downloadUrl);
    this.containText(this.getUrl(), config.siteUrl, t);
  }

  async componentsDisplayed() {
    await this.isVisible(this.downloadMainBanner, t);
    await this.isVisible(this.downloadInfoCont, t);
    await this.isVisible(this.downloadMacBtn, t);
    await this.isVisible(this.downloadWinBtn, t);
    await this.isVisible(this.downloadSteps, t);
    await this.isVisible(this.downloadSecondBanner, t);
    await this.isVisible(this.downloadSecMacBtn, t);
    await this.isVisible(this.downloadSecWinBtn, t);
  }

  async componentDisplayedMobile() {
    await this.isVisible(this.downloadMainBanner, t);
    await this.isVisible(this.downloadInfoCont, t);
    await this.isVisible(this.downloadMobilIosBtn, t);
    await this.isVisible(this.downloadMobilAndBtn, t);
    await this.isVisible(this.downloadSteps, t);
    await this.isVisible(this.downloadSecondBanner, t);
    await this.isVisible(this.downloadMobilSecIosBtn, t);
    await this.isVisible(this.downloadMobilSecAndBtn, t);
  }

  async clickDownloadBtn(value: string) {
    switch (value) {
      case 'mac':
        await this.click(this.downloadMacBtn, t);
        break;
      case 'windows':
        await this.click(this.downloadWinBtn, t);
        break;
      case 'macSecond':
        await this.click(this.downloadSecMacBtn, t);
        break;
      case 'windowsSecond':
        await this.click(this.downloadSecWinBtn, t);
        break;
      case 'ios':
        await this.click(this.downloadMobilIosBtn, t);
        break;
      case 'android':
        await this.click(this.downloadMobilAndBtn, t);
        break;
      case 'iosSecond':
        await this.click(this.downloadMobilSecIosBtn, t);
        break;
      case 'androidSecond':
        await this.click(this.downloadMobilSecAndBtn, t);
        break;
      default:
        console.log(`It doesn't exist` + value);
        break;
    }
  }

  async popupPageDisplyed() {
    await this.isVisible(this.popupWindow, t);
    await this.isVisible(this.popupTitle, t);
    await this.isVisible(this.popupSubTitle, t);
    await this.isVisible(this.popupPersonIcon, t);
    await this.isVisible(this.popupGiftIcon, t);
    await this.isVisible(this.popupHandsIcon, t);
    await this.isVisible(this.popupDownloadDesc, t);
    await this.isVisible(this.popupAccountDesc, t);
    await this.isVisible(this.popupDepositDesc, t);
    await this.isVisible(this.popupHelpBtn, t);
  }

  async pageDisplayed(value: string) {
    switch (value) {
      case 'ios':
        await this.eql(this.getUrl(), pokerPage.playPokerUrl, t);
        break;
      case 'iosSecond':
        await this.eql(this.getUrl(), pokerPage.playPokerUrl, t);
        break;
      default:
        console.log(`It doesn't exist ` + value);
        break;
    }
  }

  async clickNeedMoreHelp() {
    await this.click(this.popupHelpBtn, t);
  }

  async helpPageIsDisplayed() {
    await this.containText(this.getUrl(), this.helpSportsBettingUrl, t);
  }
}
export default new DownloadPage();
