/* tslint:disable no-var-requires */
import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import header from '../components/header';
import mainMenu from '../components/mainMenu';
import footer from '../components/footer';

const { Actions } = require('../utils/actions');
const config = getConfig();

class BankingPage extends Actions {
  constructor() {
    super();
    this.bankingUrl = `${config.siteUrl}/banking`;

    // Help Url
    this.knowledgeBtcPage = `https://help.sportsbetting.ag/en/articles/201057-bitcoin-101`;
    this.withdrawalBtcPage = `https://help.sportsbetting.ag/articles/how-to-request-a-withdrawal-through-cryptocurrency/`;

    // Banking               
    this.bankingContainer = Selector('[id="content-wrapper"]');
    this.bankingBanner = Selector('[id="main-banner"]');
    this.tooltipBox = Selector('[id*="tippy-"]');

    // Banner Mobile
    this.bankingBannerMobile = Selector('[id="banner-image-mobile"]');

    // Deposit Section
    this.depositSection = Selector('[id="payment-options-section"]');
    this.depositContainer = Selector('[id="payment-options-table-container"]');
    this.depositCell = Selector('[class="table-cell"][id="payment-option-0"]');
    this.depositMinCell = Selector('[id*="payment-option-minAmount-0"]');
    this.depositMaxCell = Selector('[id*="payment-option-maxmount-0"]');
    this.depositNowBtn = Selector('[id="deposit-now-button"]');
    this.depositBitcoinInfoIcon = Selector('[id="payment-option-info-icon-0"]');
    this.depositTippyLink = Selector('div[class="tippy-content"] a');


    // Payout Section
    this.withdrawalsSection = Selector('[id="payout-options-section"]');
    this.withdrawalsContainer = Selector('[id="payout-option-table-container"]');
    this.withdrawalsCell = Selector('[class="table-cell"][id="payout-option-0"]');
    this.withdrawalsMinCell = Selector('[id="payout-option-minAmount-0"]');
    this.withdrawalsMaxCell = Selector('[id="payout-option-maxAmount-0"]');
    this.withdrawalBitcoinInfoIcon = Selector('[id="payout-option-info-icon-0"]');
    this.withdrawalTippyLink = Selector('a[href="https://help.sportsbetting.ag/knowledge-base/how-to-request-a-withdrawal-through-cryptocurrency/"]');


    // Safe secure
    this.safeSecureSection = Selector('[id="safe-and-secure-section"]');
    this.safeSecureCard = Selector('[id*="banking-card-"]');
    this.safeSecureIcon = Selector('[id*="banking-card-image-"]');
    this.safeSecureTitle = Selector('[id*="banking-card-title-"]');
    this.safeSecureText = Selector('[id*="banking-card-text-"]');
  }

  // Methods
  async openBankingPage() {
    await t.navigateTo(this.bankingUrl);
    await this.containText(this.getUrl(), config.siteUrl, t);
  }

  async componentsPageDesktop() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(this.bankingBanner, t);
    await this.isVisible(this.bankingContainer, t);
    await this.isVisible(this.depositSection, t);
    await this.isVisible(this.depositContainer, t);
    await this.isVisible(this.withdrawalsSection, t);
    await this.isVisible(this.withdrawalsContainer, t);
    await this.isVisible(this.safeSecureSection, t);
    await this.isVisible(footer.footerSection, t);
  }

  async componentsPageMobile() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(this.bankingBannerMobile, t);
    await this.isVisible(this.bankingContainer, t);
    await this.isVisible(this.depositSection, t);
    await this.isVisible(this.depositContainer, t);
    await this.isVisible(this.withdrawalsSection, t);
    await this.isVisible(this.withdrawalsContainer, t);
    await this.isVisible(this.safeSecureSection, t);
    await this.isVisible(footer.footerSection, t);
  }

  async imageVisible(value: string) {
    switch (value) {
      case 'fastDeposit':
        await this.isVisible(this.safeSecureIcon.nth(0), t)
        break;
      case 'safeSecure':
        await this.isVisible(this.safeSecureIcon.nth(1), t)
        break;
      case 'depoAssist':
        await this.isVisible(this.safeSecureIcon.nth(2), t)
        break;
      case 'quickEasy':
        await this.isVisible(this.safeSecureIcon.nth(3), t)
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async titleValidation(value: string, title: string) {
    switch (value) {
      case 'fastDeposit':
        await this.eql(this.safeSecureTitle.nth(0).innerText, title.toString(), t)
        break;
      case 'safeSecure':
        await this.eql(this.safeSecureTitle.nth(1).innerText, title.toString(), t)
        break;
      case 'depoAssist':
        await this.eql(this.safeSecureTitle.nth(2).innerText, title.toString(), t)
        break;
      case 'quickEasy':
        await this.eql(this.safeSecureTitle.nth(3).innerText, title.toString(), t)
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async descriptionValidation(value: string, desc: string) {
    switch (value) {
      case 'fastDeposit':
        await this.containText(this.safeSecureText.nth(0).innerText, desc.toString(), t)
        break;
      case 'safeSecure':
        await this.containText(this.safeSecureText.nth(1).innerText, desc.toString(), t)
        break;
      case 'depoAssist':
        await this.containText(this.safeSecureText.nth(2).innerText, desc.toString(), t)
        break;
      case 'quickEasy':
        await this.containText(this.safeSecureText.nth(3).innerText, desc.toString(), t)
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }
  async btcCell(section: string) {
    switch (section) {
      case 'deposit':
        await this.isVisible(this.depositCell, t);
        break;
      case 'withdrawal':
        await this.isVisible(this.withdrawalsCell, t);
        break;
      default:
        console.log(`Doesn't exist ` + section);
        break;
    }

  }

  async minBtcCellAmount(section: string, minamount: string) {
    switch (section) {
      case 'deposit':
        await this.containText(this.depositMinCell.nth(1).innerText, minamount.toString(), t);
        break;
      case 'withdrawal':
        await this.containText(this.withdrawalsMinCell.innerText, minamount.toString(), t);
        break;
      default:
        console.log(`Doesn't exist ` + section);
        break;
    }
  }

  async maxBtcCellAmount(section: string, maxAmount: string) {
    switch (section) {
      case 'deposit':
        await this.containText(this.depositMaxCell.nth(1).innerText, maxAmount.toString(), t)
        break;
      case 'withdrawal':
        await this.containText(this.withdrawalsMaxCell.innerText, maxAmount.toString(), t)
        break;
      default:
        console.log(`Doesn't exist ` + section);
        break;
    }
  }

  async clickTooltip(section: string) {
    switch (section) {
      case 'deposit':
        await this.click(this.depositBitcoinInfoIcon, t);
        break;
      case 'withdrawal':
        await this.click(this.withdrawalBitcoinInfoIcon, t);
        break;
      default:
        console.log(`Doesn't exist ` + section);
        break;
    }
  }

  async toolTipDisplayed() {
    await this.isVisible(this.tooltipBox, t);
  }

  async clickOnBtcHelp(section: string) {
    switch (section) {
      case 'deposit':
        await this.click(this.depositTippyLink, t);
        break;
      case 'withdrawal':
        await this.click(this.withdrawalTippyLink, t);
        break;
      default:
        console.log(`Doesn't exist ` + section);
        break;
    }
  }

  async helpPageBtc(section: string) {
    switch (section) {
      case 'deposit':
        await this.eql(this.getUrl(), this.knowledgeBtcPage, t);
        break;
      case 'withdrawal':
        await this.eql(this.getUrl(), this.withdrawalBtcPage, t);
        break;
      default:
        console.log(`Doesn't exist ` + section);
        break;
    }
  }
}
export default new BankingPage();