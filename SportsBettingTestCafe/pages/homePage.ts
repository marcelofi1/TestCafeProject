/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
import { Selector, t } from 'testcafe';
import { getConfig } from '../config/config';
import mainMenu from '../components/mainMenu';
import header from '../components/header';
import footer from '../components/footer';
import casinoPage from './casinoPage';
import contestsPage from './contestsPage';
import eSportsPage from './eSportsPage';
import liveBettingPage from './liveBettingPage';
import pokerPage from './pokerPage';
import promotionsPage from './promotionsPage';
import racebookPage from './racebookPage';
import sportsbookPage from './sportsbookPage';
import mainBanner from '../components/mainBanner';

const config = getConfig();

class HomePage extends Actions {
  constructor() {
    super();

    this.sportsBettingUrl = config.siteUrl;
    this.nflPopularSportsUrl = `${config.siteUrl}/sportsbook/football/nfl`;
    this.mlbPopularSportsUrl = `${config.siteUrl}/sportsbook/baseball/mlb`;
    this.ncaaPopularSportsUrl = `${config.siteUrl}/sportsbook/football/ncaa`;

    // Selectors
    // Popular in Sports
    this.popularSportsTitle = Selector('[id="section-title"]');
    this.popularSportsContainer = Selector('[id="home-cards"]');
    this.popularSportsButton = Selector('[id*="bet-now"]');
    this.popularSportsCards = Selector('[id*="league_anchor_item"]');

    // Carousel Popular Casino
    this.popularCasinoTitle = Selector('[id="carousel-title"]');
    this.popularCasinoContainer = Selector('[id="carousel-container"]');
    this.popularCasinoLinkVisit = Selector('[id="view-casino-button"]');
    this.popularCasinoShadowCarousel = Selector(
      '#carousel-container > games-carousel'
    );

    // SEO 101
    this.seoContainer = Selector(() =>
      document
        .querySelector('body > app-root > div > app-home > universal-101')
        .shadowRoot.querySelector('div')
    );
  }

  // Methods
  async openHomePage() {
    await t.navigateTo(this.sportsBettingUrl);
    await this.containText(this.getUrl(), config.siteUrl, t);
  }

  async homeComponentsDesktop() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(mainBanner.bannerSection, t);
    // await this.isVisible(this.popularSportsContainer, t);
    await this.isVisible(this.popularCasinoContainer, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async homeComponentsMobile() {
    // await this.isVisible(header.headerContainer, t);
    // await this.isVisible(mainMenu.mainMenuContainer, t);
    await this.isVisible(mainBanner.bannerSection, t);
    // await this.isVisible(this.popularSportsContainer, t);
    await this.isVisible(this.seoContainer, t);
    await this.isVisible(footer.footerSection, t);
  }

  async countDisplayedCards(num) {
    await this.count(this.popularSportsCards, num.toString(), t);
  }

  async clickOnPopularSportsCards(value: string) {
    switch (value) {
      case 'nfl':
        await this.click(this.popularSportsCards, t);
        break;
      case 'mlb':
        await this.click(this.popularSportsCards.nth(1), t);
        break;
      case 'ncaa':
        await this.click(this.popularSportsCards.nth(2), t);
        break;
      default:
        console.log(`Doesn't exist ` + value);
        break;
    }
  }

  async showsComponentTitle(component: string, title: string) {
    switch (component) {
      case 'popular in sports':
        await this.eql(this.popularSportsTitle.innerText, title.toString(), t);
        break;
      case 'Popular in Casino carousel':
        await this.eql(this.popularCasinoTitle.innerText, title.toString(), t);
        break;
      default:
        console.log(`Doesn't exist ` + component);
        break;
    }
  }

  async buttonTextDisplayed(texto: string) {
    await this.eql(this.popularSportsButton.innerText, texto.toString(), t);
  }

  async textDisplayed(texto: string) {
    await this.containText(
      this.popularCasinoLinkVisit.innerText,
      texto.toString(),
      t
    );
  }

  async clickComponentMainMenu(value: string) {
    switch (value) {
      case 'sports':
        await this.click(mainMenu.sports, t);
        break;
      case 'liveBetting':
        await this.click(mainMenu.liveBetting, t);
        break;
      case 'casino':
        await this.click(mainMenu.casino, t);
        break;
      case 'racebook':
        await this.click(mainMenu.raceBook, t);
        break;
      case 'poker':
        await this.click(mainMenu.poker, t);
        break;
      case 'eSports':
        await this.click(mainMenu.eSports, t);
        break;
      case 'contest':
        await this.click(mainMenu.contests, t);
        break;
      case 'promos':
        await this.click(mainMenu.promo, t);
        break;
      default:
        console.log(`Doesn't exist ` + value);
        break;
    }
  }

  async pageDisplayed(value: string) {
    switch (value) {
      case 'sports':
        await this.eql(this.getUrl(), sportsbookPage.sportsbookgUrl, t);
        break;
      case 'liveBetting':
        await this.containText(this.getUrl(), liveBettingPage.liveBettingUrl, t);
        break;
      case 'casino':
        await this.containText(this.getUrl(), casinoPage.playCasinoUrl, t);
        break;
      case 'racebook':
        await this.eql(this.getUrl(), racebookPage.racebookUrl, t);
        break;
      case 'poker':
        await this.eql(this.getUrl(), pokerPage.pokerUrl, t);
        break;
      case 'contest':
        await t.wait(35000);
        await this.eql(this.getUrl(), contestsPage.contestUrl, t);
        break;
      case 'horse':
        await this.eql(this.getUrl(), racebookPage.racebookUrl, t);
        break;
      case 'eSports':
        await this.eql(this.getUrl(), eSportsPage.eSportsUrl, t);
        break;
      case 'promos':
        await this.eql(this.getUrl(), promotionsPage.depositUrl, t);
        break;
      case 'nfl':
        await this.eql(this.getUrl(), this.nflPopularSportsUrl, t);
        break;
      case 'mlb':
        await this.eql(this.getUrl(), this.mlbPopularSportsUrl, t);
        break;
      case 'ncaa':
        await this.eql(this.getUrl(), this.ncaaPopularSportsUrl, t);
        break;
      case 'play casino':
        await this.eql(this.getUrl(), casinoPage.casinoUrl, t);
        break;
      default:
        console.log(`Doesn't exist ` + value);
        break;
    }
  }

  async clickPopularCasinoCards() {
    await t.eval(() => {
      const carouselCasinoCard: any = document.querySelector('#carousel-container > games-carousel')
        .shadowRoot.querySelectorAll('section > div > div > div > .game-img')[1];
      carouselCasinoCard.click();
    });
  }

  async clickMobilePages(value: string) {
    switch (value) {
      case 'sports':
        await this.click(mainMenu.sports.nth(1), t);
        break;
      case 'liveBetting':
        await this.click(mainMenu.liveBetting.nth(1), t);
        break;
      case 'casino':
        await this.click(mainMenu.casino.nth(1), t);
        break;
      case 'racebook':
        await this.click(mainMenu.raceBook.nth(1), t);
        break;
      case 'poker':
        await this.click(mainMenu.poker.nth(1), t);
        break;
      case 'eSports':
        await this.click(mainMenu.eSports.nth(1), t);
        break;
      case 'contest':
        await this.click(mainMenu.contests.nth(1), t);
        break;
      case 'promos':
        await this.click(mainMenu.promo.nth(1), t);
        break;
      default:
        console.log(`Doesn't exist ` + value);
        break;
    }
  }

  async clickOnRightArrow() {
    await t.wait(2000);
    await t.scrollIntoView(this.popularCasinoShadowCarousel);
    await t.eval(() => {
      const carouselRightArrow = document
        .querySelector('#carousel-container > games-carousel')
        .shadowRoot.querySelector(
          'button[class="custom-button-arrow button-next"]'
        ) as HTMLElement;
      carouselRightArrow.click();
    });
  }

  async carouselLeftArrowisVisble() {
    await t.wait(2000);
    await t.scrollIntoView(this.popularCasinoShadowCarousel);
    await t.eval(() => {
      const carouselLeftArrow = document
        .querySelector('#carousel-container > games-carousel')
        .shadowRoot.querySelector(
          'button[class="custom-button-arrow button-prev"]'
        ) as HTMLElement;
      carouselLeftArrow.focus();
    });
  }

  async clickOnLeftArrow() {
    await t.scrollIntoView(this.popularCasinoShadowCarousel);
    await t.eval(() => {
      const carouselLeftArrow = document
        .querySelector('#carousel-container > games-carousel')
        .shadowRoot.querySelector(
          'button[class="custom-button-arrow button-prev"]'
        ) as HTMLElement;
      carouselLeftArrow.click();
    });
  }

  async clickCasinoVisitLnk() {
    await this.click(this.popularCasinoLinkVisit, t);
  }

  async casinoPageDisplayed() {
    await this.containText(this.getUrl(), casinoPage.playCasinoUrl, t);
  }

  async playNow() {
    await t.wait(30000);
    await t.eval(() => {
      const shadowRoot = document.querySelector(
        'universal-prelaunch-modal'
      ).shadowRoot;
      const playNowButton: any = shadowRoot.querySelector('#playBtn');
      playNowButton.click();
    });
  }

  async swipeLeftandRight() {
    await t.wait(10000);
    for (let i = 0; i < 3; i++) {
      await t.eval(() => {
        const cardRight = document
          .querySelector('#carousel-container > games-carousel')
          .shadowRoot.querySelector(
            'li[id="popular-game-The Haunted Inn"]'
          ) as HTMLElement;

        if (cardRight) {
          const startX =
            cardRight.getBoundingClientRect().left + cardRight.offsetWidth / 2;
          const startY =
            cardRight.getBoundingClientRect().top + cardRight.offsetHeight / 2;
          const dragDistance = -5000;
          const endX = startX + dragDistance;
          const endY = startY;

          const mouseDownEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: startX,
            clientY: startY,
          });

          const mouseMoveEvent = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: endX,
            clientY: endY,
          });

          const mouseUpEvent = new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: endX,
            clientY: endY,
          });

          cardRight.dispatchEvent(mouseDownEvent);
          cardRight.dispatchEvent(mouseMoveEvent);
          cardRight.dispatchEvent(mouseUpEvent);
        }
      });
      await t.wait(500);
    }

    for (let i = 0; i < 3; i++) {
      await t.eval(() => {
        const cardLeft = document
          .querySelector('#carousel-container > games-carousel')
          .shadowRoot.querySelector(
            'li[id="popular-game-The Haunted Inn"]'
          ) as HTMLElement;

        if (cardLeft) {
          const startX =
            cardLeft.getBoundingClientRect().left + cardLeft.offsetWidth / 2;
          const startY =
            cardLeft.getBoundingClientRect().top + cardLeft.offsetHeight / 2;
          const dragDistance = 5000;
          const endX = startX + dragDistance;
          const endY = startY;

          const mouseDownEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: startX,
            clientY: startY,
          });

          const mouseMoveEvent = new MouseEvent('mousemove', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: endX,
            clientY: endY,
          });

          const mouseUpEvent = new MouseEvent('mouseup', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: endX,
            clientY: endY,
          });

          cardLeft.dispatchEvent(mouseDownEvent);
          cardLeft.dispatchEvent(mouseMoveEvent);
          cardLeft.dispatchEvent(mouseUpEvent);
        }
      });
      await t.wait(500);
    }
  }
}
export default new HomePage();
