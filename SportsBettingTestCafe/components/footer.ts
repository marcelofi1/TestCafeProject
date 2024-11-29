import { Selector, t } from 'gherkin-testcafe';
import { getConfig } from '../config/config';
import casinoPage from '../pages/casinoPage';
import sportsbookPage from '../pages/sportsbookPage';
import pokerPage from '../pages/pokerPage';
import downloadPage from '../pages/downloadPage';
import racebookPage from '../pages/racebookPage';
import promotionsPage from '../pages/promotionsPage';

/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
const config = getConfig();

class Footer extends Actions {
  constructor() {
    super();
    // URLs
    // QUICK LINKS
    this.aboutUsUrl = `https://help.sportsbetting.ag/articles/about-us/`;
    this.referUrl = `${config.siteUrl}/refer-a-friend`;
    this.rulesUrl = `https://help.sportsbetting.ag/articles/sportsbetting-rules/`;
    this.privicyPoliceUrl = `https://help.sportsbetting.ag/articles/privacy-policy/`;
    this.affiliatesUrl = `https://www.commissionkings.ag/`;
    this.tearmsUrl = `https://help.sportsbetting.ag/articles/terms-and-conditions/`;
    this.responsibleUrl = `https://help.sportsbetting.ag/articles/responsible-gaming/`;
    this.faqUrl = `https://help.sportsbetting.ag/articles/frequently-asked-questions/`;
    this.helpCenterUrl = `https://help.sportsbetting.ag/`;

    // Selectors
    this.footerSection = Selector(() => document.querySelector('body > app-root > div > app-footer > universal-footer').shadowRoot.querySelector('div'));

    // Need Help
    this.needHelpPopup = Selector(() => document.querySelector('body > app-root > app-footer > need-help-popup').shadowRoot.querySelector('div > div.modal.svelte-bu7xb6 > div > div'));

    // Social Media
    this.instagramUrl = `https://www.instagram.com/sportsbettingag/`;
    this.xUrl = `https://www.x.com/sportsbettingag/`;

  }

  // Methods
  async quickLinks(value: string) {
    switch (value) {
      case 'About Us':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const aboutUsLink: any = shadowRoot.querySelector("#quick-link-0 > span");
            aboutUsLink.click();
          });
        });
        break;
      case 'Refer a Friend':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector('body > app-root > app-footer > universal-footer').shadowRoot;
            const referLink: any = shadowRoot.querySelector("#quick-link-1 > a");
            referLink.click();
          });
        });
        break;
      case 'Rules':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const rulesLink: any = shadowRoot.querySelector("#quick-link-2 > span");
            rulesLink.click();
          });
        });
        break;
      case 'Privacy Policy':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const privacyLink: any = shadowRoot.querySelector("#quick-link-3 > span");
            privacyLink.click();
          });
        });
        break;
      case 'Affiliates':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const affiliatesLink: any = shadowRoot.querySelector("#quick-link-4 > a");
            affiliatesLink.click();
          });
        });
        break;
      case 'Terms & Conditions':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const conditionsLink: any = shadowRoot.querySelector("#quick-link-5 > span");
            conditionsLink.click();
          });
        });
        break;
      case 'Responsible Gaming':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const gamingLink: any = shadowRoot.querySelector("#quick-link-6 > span");
            gamingLink.click();
          });
        });
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async quickLinksValidations(value: string) {
    switch (value) {
      case 'About Us':
        await this.eql(this.getUrl(), this.aboutUsUrl, t);
        break;
      case 'Refer a Friend':
        await this.eql(this.getUrl(), this.referUrl, t);
        break;
      case 'Rules':
        await this.eql(this.getUrl(), this.rulesUrl, t);
        break;
      case 'Privacy Policy':
        await this.eql(this.getUrl(), this.privicyPoliceUrl, t);
        break;
      case 'Affiliates':
        await this.eql(this.getUrl(), this.affiliatesUrl, t);
        break;
      case 'Terms & Conditions':
        await this.eql(this.getUrl(), this.tearmsUrl, t);
        break;
      case 'Responsible Gaming':
        await this.eql(this.getUrl(), this.responsibleUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async casinoLinks(value: string) {
    switch (value) {
      case 'Play Casino':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const casinoLink: any = shadowRoot.querySelector("#casino-link-0-0 > a");
            casinoLink.click();
          });
        });
        break;
      case 'Blackjack':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector('body > app-root > app-footer > universal-footer').shadowRoot;
            const blackjackLink: any = shadowRoot.querySelector("#casino-link-1-0 > a");
            blackjackLink.click();
          });
        });
        break;
      case 'Baccarat':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const baccaratLink: any = shadowRoot.querySelector("#casino-link-2-0 > a");
            baccaratLink.click();
          });
        });
        break;
      case 'Craps':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const privacyLink: any = shadowRoot.querySelector("#casino-link-3-0 > a");
            privacyLink.click();
          });
        });
        break;
      case 'Roulette':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const rouletteLink: any = shadowRoot.querySelector("#casino-link-4-0 > a");
            rouletteLink.click();
          });
        });
        break;
      case 'Keno':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const kenoLink: any = shadowRoot.querySelector("#casino-link-5-0 > a");
            kenoLink.click();
          });
        });
        break;
      case 'Slots':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const slotsLink: any = shadowRoot.querySelector("#casino-link-6-0 > a");
            slotsLink.click();
          });
        });
        break;
      case 'Video Poker':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const videoLink: any = shadowRoot.querySelector("#casino-link-7-0 > a");
            videoLink.click();
          });
        });
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async casinoValidations(value: string) {
    switch (value) {
      case 'Play Casino':
        await this.eql(this.getUrl(), casinoPage.playCasinoUrl, t);
        break;
      case 'Blackjack':
        await this.eql(this.getUrl(), casinoPage.blackjackUrl, t);
        break;
      case 'Baccarat':
        await this.eql(this.getUrl(), casinoPage.baccaratUrl, t);
        break;
      case 'Craps':
        await this.eql(this.getUrl(), casinoPage.crapsUrl, t);
        break;
      case 'Roulette':
        await this.eql(this.getUrl(), casinoPage.rouletteUrl, t);
        break;
      case 'Keno':
        await this.eql(this.getUrl(), casinoPage.kenoUrl, t);
        break;
      case 'Slots':
        await this.eql(this.getUrl(), casinoPage.slotsUrl, t);
        break;
      case 'Video Poker':
        await this.eql(this.getUrl(), casinoPage.videoPokerUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async sportsLinks(value: string) {
    switch (value) {
      case 'Sportsbook':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const sportsbookLink: any = shadowRoot.querySelector("#sports-link-0-1 > a");
            sportsbookLink.click();
          });
        });
        break;
      case 'NFL Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector('body > app-root > app-footer > universal-footer').shadowRoot;
            const nflLink: any = shadowRoot.querySelector("#sports-link-1-1 > a");
            nflLink.click();
          });
        });
        break;
      case 'NBA Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const nbaLink: any = shadowRoot.querySelector("#sports-link-2-1 > a");
            nbaLink.click();
          });
        });
        break;
      case 'MLB Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const mblLink: any = shadowRoot.querySelector("#sports-link-3-1 > a");
            mblLink.click();
          });
        });
        break;
      case 'NHL Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const nhlLink: any = shadowRoot.querySelector("#sports-link-4-1 > a");
            nhlLink.click();
          });
        });
        break;
      case 'NCAAF Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const ncaafLink: any = shadowRoot.querySelector("#sports-link-5-1 > a");
            ncaafLink.click();
          });
        });
        break;
      case 'NCAAB Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const ncaabLink: any = shadowRoot.querySelector("#sports-link-6-1 > a");
            ncaabLink.click();
          });
        });
        break;
      case 'Super Bowl Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const spLink: any = shadowRoot.querySelector("#sports-link-7-1 > a");
            spLink.click();
          });
        });
        break;
      case 'UFC / MMA Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const ufcLink: any = shadowRoot.querySelector("#sports-link-8-1 > a");
            ufcLink.click();
          });
        });
        break;
      case 'Boxing Betting Odds':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const boxingLink: any = shadowRoot.querySelector("#sports-link-9-1 > a");
            boxingLink.click();
          });
        });
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async sportsValidations(value: string) {
    switch (value) {
      case 'Sportsbook':
        await this.eql(this.getUrl(), sportsbookPage.sportsbookgUrl, t);
        break;
      case 'NFL Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.nflUrl, t);
        break;
      case 'NBA Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.nbaUrl, t);
        break;
      case 'MLB Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.mlbUrl, t);
        break;
      case 'NHL Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.nhlUrl, t);
        break;
      case 'NCAAF Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.ncaaFUrl, t);
        break;
      case 'NCAAB Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.ncaaBUrl, t);
        break;
      case 'Super Bowl Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.superBowlUrl, t);
        break;
      case 'UFC / MMA Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.ufcUrl, t);
        break;
      case 'Boxing Betting Odds':
        await this.eql(this.getUrl(), sportsbookPage.boxingUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async pokerLinks(value: string) {
    switch (value) {
      case 'Play Poker':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const playLink: any = shadowRoot.querySelector("#poker-link-0-2 > a");
            playLink.click();
          });
        });
        break;
      case 'Download':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector('body > app-root > app-footer > universal-footer').shadowRoot;
            const downloadLink: any = shadowRoot.querySelector("#poker-link-1-2 > a");
            downloadLink.click();
          });
        });
        break;
      case 'Texas Holdem':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const texasLink: any = shadowRoot.querySelector("#poker-link-2-2 > a");
            texasLink.click();
          });
        });
        break;
      case 'Omaha Poker':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const omahaLink: any = shadowRoot.querySelector("#poker-link-3-2 > a");
            omahaLink.click();
          });
        });
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async pokerValidations(value: string) {
    switch (value) {
      case 'Play Poker':
        await this.eql(this.getUrl(), pokerPage.pokerUrl, t);
        break;
      case 'Download':
        await this.eql(this.getUrl(), downloadPage.downloadUrl, t);
        break;
      case 'Texas Holdem':
        await this.eql(this.getUrl(), pokerPage.texasUrl, t);
        break;
      case 'Omaha Poker':
        await this.eql(this.getUrl(), pokerPage.omahaUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async racebookLinks(value: string) {
    switch (value) {
      case 'Horse Betting':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const horseLink: any = shadowRoot.querySelector("#racebook-link-0-3 > a");
            horseLink.click();
          });
        });
        break;
      case 'Kentucky Derby':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector('body > app-root > app-footer > universal-footer').shadowRoot;
            const derbyLink: any = shadowRoot.querySelector("#racebook-link-1-3 > a");
            derbyLink.click();
          });
        });
        break;
      case 'Preakness Stakes':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const preaknessLink: any = shadowRoot.querySelector("#racebook-link-2-3 > a");
            preaknessLink.click();
          });
        });
        break;
      case 'Belmont Stakes':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const belmontLink: any = shadowRoot.querySelector("#racebook-link-3-3 > a");
            belmontLink.click();
          });
        });
        break;
      case 'Breeders Cup':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const breedersLink: any = shadowRoot.querySelector("#racebook-link-4-3 > a");
            breedersLink.click();
          });
        });
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async racebookValidations(value: string) {
    switch (value) {
      case 'Horse Betting':
        await this.eql(this.getUrl(), racebookPage.racebookUrl, t);
        break;
      case 'Kentucky Derby':
        await this.eql(this.getUrl(), racebookPage.kentuckyDerbUrl, t);
        break;
      case 'Preakness Stakes':
        await this.eql(this.getUrl(), racebookPage.preaknessStakesUrl, t);
        break;
      case 'Belmont Stakes':
        await this.eql(this.getUrl(), racebookPage.belmontStakesUrl, t);
        break;
      case 'Breeders Cup':
        await this.eql(this.getUrl(), racebookPage.breedersCupUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async promoLinks(value: string) {
    switch (value) {
      case 'Promos':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const promosLink: any = shadowRoot.querySelector("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > a:nth-child(1)");
            promosLink.click();
          });
        });
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async promoValidations(value: string) {
    switch (value) {
      case 'Promos':
        await this.eql(this.getUrl(), promotionsPage.depositUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async casinoMenuClick() {
    await t.eval(() => {
      customElements.whenDefined('universal-footer').then(() => {
        const footerCasino = document.querySelector('body > app-root > app-footer > universal-footer');
        const shadowRoot = footerCasino.shadowRoot;
        const casinoMenuLink: any = shadowRoot.querySelector("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)");
        casinoMenuLink.click();
      });
    });
  };

  async sportMenuClick() {
    await t.eval(() => {
      customElements.whenDefined('universal-footer').then(() => {
        const footerCasino = document.querySelector('body > app-root > app-footer > universal-footer');
        const shadowRoot = footerCasino.shadowRoot;
        const sportoMenuLink: any = shadowRoot.querySelector("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)");
        sportoMenuLink.click();
      });
    });
  };

  async pokerMenuClick() {
    await t.eval(() => {
      customElements.whenDefined('universal-footer').then(() => {
        const footerCasino = document.querySelector('body > app-root > app-footer > universal-footer');
        const shadowRoot = footerCasino.shadowRoot;
        const pokerMenuLink: any = shadowRoot.querySelector("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1)");
        pokerMenuLink.click();
      });
    });
  };

  async racebookMenuClick() {
    await t.eval(() => {
      customElements.whenDefined('universal-footer').then(() => {
        const footerCasino = document.querySelector('body > app-root > app-footer > universal-footer');
        const shadowRoot = footerCasino.shadowRoot;
        const racebookMenuLink: any = shadowRoot.querySelector("div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > span:nth-child(1)");
        racebookMenuLink.click();
      });
    });
  };

  async casinoOptionClick() {
    await t.eval(() => {
      customElements.whenDefined('universal-footer').then(() => {
        const footerCasino = document.querySelector('body > app-root > app-footer > universal-footer');
        const shadowRoot = footerCasino.shadowRoot;
        const casinoMenuLink: any = shadowRoot.querySelector('#casino-link-0-0 > a');
        casinoMenuLink.click();
      });
    });
  };

  async needHelpPopUpDisplayed() {
    await this.isVisible(this.needHelpPopup, t);
  };

  async clickNeedHelpBtn() {
    await t.eval(() => {
      customElements.whenDefined('universal-footer').then(() => {
        const footerElement = document.querySelector('body > app-root > app-footer > universal-footer');
        const shadowRoot = footerElement.shadowRoot;
        const button: any = shadowRoot.querySelector('#need-help-button-desktop');
        button.click();
      });
    });
  };

  async socialmediaIcon(value: string) {
    switch (value) {
      case 'Instagram':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const instagramIcon: any = shadowRoot.querySelector("#Instagram-sn");
            instagramIcon.click();
          });
        });
        break;
      case 'X':
        await t.eval(() => {
          customElements.whenDefined('universal-footer').then(() => {
            const shadowRoot = document.querySelector("universal-footer").shadowRoot;
            const xIcon: any = shadowRoot.querySelector("#X-sn");
            xIcon.click();
          });
        });
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };

  async socialMediaValidations(value: string) {
    switch (value) {
      case 'Instagram':
        await this.eql(this.getUrl(), this.instagramUrl, t);
        break;
      case 'X':
        await this.eql(this.getUrl(), this.xUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    };
  };
};

export default new Footer();
