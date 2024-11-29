/* tslint:disable no-var-requires */
const { Actions } = require('../utils/actions');
import { getConfig } from '../config/config';
import { Selector, t } from 'testcafe';
import sportsbookPage from '../pages/sportsbookPage';
import contestsPage from '../pages/contestsPage';
import eSportsPage from '../pages/eSportsPage';
import pokerPage from '../pages/pokerPage';
import racebookPage from '../pages/racebookPage';
import promotionsCardContentsPage from '../pages/promotionsCardContentsPage';

const config = getConfig();
class Carousel extends Actions {
  constructor() {
    const promoCarousel = '"promotions-carousel-';    
    const promoCardMobile = '"promotion-card-mobile-';
    const promosCard = '[id^="promotion-card-"]'     

    super();

    // Selectors
    // Carousel
    this.promotion = Selector(`[id="promotions-carousel"]`);
    this.title = Selector(`[id=${promoCarousel}title"]`);
    this.link = Selector(`[id=${promoCarousel}link"]`);
    this.carouselContainer = Selector('[id="promotions-carousel"]');
    this.rightArrow = Selector(`[id=${promoCarousel}d-arrow-right"]`);
    this.leftArrow = Selector(`[id=${promoCarousel}d-arrow-left"]`);
    this.bannerContainer = Selector(`[id=${promoCarousel}d-item-"]`);    
    this.cardsTitle = Selector(`${promosCard}[id$="0-title"]`).nth(0);   
    this.cardsImage = Selector(`${promosCard}[id$="0-image"]`).nth(0);       
    this.cardsButton = Selector(`${promosCard}[id$="0-button"]`).nth(0);    
    this.cardsImage1 = Selector(`${promosCard}[id$="0-image"]`).nth(1);   
    this.cardsTitle1 = Selector(`${promosCard}[id$="0-title"]`).nth(1);    
    this.cardsButton1 = Selector(`${promosCard}[id$="0-button"]`).nth(1);    

    // Mobile Selectors
    this.promotionContainerMobile = Selector(`[id=${promoCarousel}m-container"]`);
    this.cardMobileImage = Selector(`[id=${promoCardMobile}0-image"]`);
    this.cardMobileTitle = Selector(`[id=${promoCardMobile}0-title"]`);
    this.cardMobileButton = Selector(`[id=${promoCardMobile}0-button"]`);
    this.rightCard = Selector(`[id=${promoCardMobile}1"]`);
    this.leftCard = Selector(`[id=${promoCardMobile}0"]`);
  }
  
  // Methods
  async openPage(value: string) {
    switch (value) {
      case 'sportsbook':
        await t.navigateTo(sportsbookPage.sportsbookgUrl);
        break;
      case 'racebook':
        await t.navigateTo(racebookPage.racebookUrl);
        break;
      case 'poker':
        await t.navigateTo(pokerPage.pokerUrl);
        break;
      case 'contests':
        await t.navigateTo(contestsPage.contestsUrl);
        break;
      case 'eSport':
        await t.navigateTo(eSportsPage.eSportsUrl);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async showsPageTitle(value: string) {
    switch (value) {
      case 'SPORTSBOOK PROMOTIONS':
        await this.eql(this.title.innerText, value.toString(), t);
        break;
      case 'RACEBOOK PROMOTIONS':
        await this.eql(this.title.innerText, value.toString(), t);
        break;
      case 'CONTEST PROMOTIONS':
        await this.eql(this.title.innerText, value.toString(), t);
        break;
      case 'ESPORTS PROMOTIONS':
        await this.eql(this.title.innerText, value.toString(), t);
        break;
      case 'POKER PROMOTIONS':
        await this.eql(this.title.innerText, value.toString(), t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async cardImages(value: string) {
    switch (value) {
      case 'sportsbook':
        await this.isVisible(this.cardsImage, t);
        break;
      case 'racebook':
        await this.isVisible(this.cardsImage1, t);
        break;
      case 'poker':
        await this.isVisible(this.cardsImage, t);
        break;
      case 'contests':        
        await this.isVisible(this.cardsImage, t);       
        break;
      case 'eSport':
        await this.isVisible(this.cardsImage1, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async cardImagesMobile(value: string) {
    switch (value) {
      case 'sportsbook':
        await this.isVisible(this.cardMobileImage, t);
        break;
      case 'racebook':
        await this.isVisible(this.cardMobileImage, t);
        break;
      case 'poker':
        await this.isVisible(this.cardMobileImage, t);
        break;
      case 'contests':
        await this.isVisible(this.cardMobileImage, t);
        break;
      case 'eSport':
        await this.isVisible(this.cardMobileImage, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async cardTitle(value: string, title: string) {
    switch (value) {
      case 'sportsbook':
        await this.eql(this.cardsTitle.innerText, title.toString(), t);
        break;
      case 'racebook':
        await this.eql(this.cardsTitle1.innerText, title.toString(), t);
        break;
      case 'poker':
        await this.eql(this.cardsTitle.innerText, title.toString(), t);
        break;
      case 'contests':
        await this.eql(this.cardsTitle.innerText, title.toString(), t);
        break;
      case 'eSport':
        await this.eql(this.cardsTitle1.innerText, title.toString(), t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async cardTitleMobile(value: string, title: string) {
    switch (value) {
      case 'sportsbook':
        await this.eql(this.cardMobileTitle.innerText, title.toString(), t);
        break;
      case 'racebook':
        await this.eql(this.cardMobileTitle.innerText, title.toString(), t);
        break;
      case 'poker':
        await this.eql(this.cardMobileTitle.innerText, title.toString(), t);
        break;
      case 'contests':
        await this.eql(this.cardMobileTitle.innerText, title.toString(), t);
        break;
      case 'eSport':
        await this.eql(this.cardMobileTitle.innerText, title.toString(), t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async cardButton(value: string, texto: string) {
    switch (value) {
      case 'sportsbook':
        await this.eql(this.cardsButton.innerText, texto.toString(), t);
        break;
      case 'racebook':
        await this.eql(this.cardsButton1.innerText, texto.toString(), t);
        break;
      case 'poker':
        await this.eql(this.cardsButton.innerText, texto.toString(), t);
        break;
      case 'contests':
        await this.eql(this.cardsButton.innerText, texto.toString(), t);
        break;
      case 'eSport':
        await this.eql(this.cardsButton1.innerText, texto.toString(), t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async cardButtonMobile(value: string, texto: string) {
    switch (value) {
      case 'sportsbook':
        await this.eql(this.cardMobileButton.innerText, texto.toString(), t);
        break;
      case 'racebook':
        await this.eql(this.cardMobileButton.innerText, texto.toString(), t);
        break;
      case 'poker':
        await this.eql(this.cardMobileButton.innerText, texto.toString(), t);
        break;
      case 'contests':
        await this.eql(this.cardMobileButton.innerText, texto.toString(), t);
        break;
      case 'eSport':
        await this.eql(this.cardMobileButton.innerText, texto.toString(), t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async clickPromotion(value: string) {
    switch (value) {
      case 'sportsbook':
        await this.click(this.cardsTitle, t);
        break;
      case 'racebook':
        await this.click(this.cardsTitle1, t);
        break;
      case 'poker':
        await this.click(this.cardsTitle, t);
        break;
      case 'contests':        
        await this.click(this.cardsTitle, t);        
        break;
      case 'eSport':
        await this.click(this.cardsTitle1, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async clickPromotionMobile(value: string) {
    switch (value) {
      case 'sportsbook':
        await this.click(this.cardMobileTitle, t);
        break;
      case 'racebook':
        await this.click(this.cardMobileTitle, t);
        break;
      case 'poker':
        await this.click(this.cardMobileTitle, t);
        break;
      case 'contests':        
          await this.click(this.cardMobileTitle, t);
        break;
      case 'eSport':
        await this.click(this.cardMobileTitle, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async promoPageDisplayed(value: string) {
    switch (value) {
      case 'sportsbook':
        await this.containText(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionSportsUrl, t);
        break;
      case 'racebook':
        await this.containText(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionRacebookUrl, t);
        break;
      case 'poker':
        await this.containText(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionsPokerUrl, t);
        break;
      case 'contests':        
        await this.containText(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionContestUrl, t);        
        break;
      case 'eSport':
        await this.containText(promotionsCardContentsPage.getUrl(), promotionsCardContentsPage.promotionEsportUrl, t);
        break;
      default:
        console.log(`Doesn't exist` + value);
        break;
    }
  }

  async clickRightArrow() {
    await this.click(this.rightArrow, t);
  }

  async clickLeftArrow() {
    await this.click(this.leftArrow, t);
  }

  async numberOfComponents(value) {
    await sportsbookPage.eql(this.carouselTitle.count, value.toString(), t);
  }

  async promotionComponentVisible() {
    await this.isVisible(this.promotion, t);
  }

  async carouselComponentDesktopVisible() {    
    await this.isVisible(this.carouselContainer, t);    
  }

  async carouselComponentMobileVisible() {    
    await this.isVisible(this.promotionContainerMobile, t);    
  }

  async rightArrowVisible() {    
    await this.isVisible(this.rightArrow, t);    
  }

  async leftArrowVisible() {
    await this.isVisible(this.leftArrow, t);
  }

  async dragToRight() {    
    await t.dragToElement(this.leftCard, this.rightCard);    
  }

  async rightCardIsVisible() {
    await this.isVisible(this.rightCard, t);
  }

  async dragToLeft() {
    await t.dragToElement(this.rightCard, this.leftCard);
  }

  async leftCardIsVisible() {
    await this.isVisible(this.leftCard, t);
  }
}

export default new Carousel();
