import { Given, Then, When } from '@cucumber/cucumber';
import { getConfig } from '../config/config';
import carousel from '../components/carousel';

const config = getConfig();

Given('I open {string} page', async (t, [value]) => {
  await carousel.openPage(value);
});

Then('the page shows promotions component in desktop', async t => {
  await carousel.carouselComponentDesktopVisible();
});

Then('the page shows promotions component in mobile', async t => {
  await carousel.carouselComponentMobileVisible();
});

Then('the page shows title {string}', async (t, [value]) => {
  await carousel.showsPageTitle(value);
});

Then('is displayed carousel component', async t => {
  await carousel.carouselComponentVisible();
});

Then('the page shows a right arrow', async t => {
  await carousel.rightArrowVisible();
});

When('I click on right arrow', async t => {
  await carousel.clickRightArrow();
});

Then('the page shows a left arrow', async t => {
  await carousel.leftArrowVisible();
});

When('I click on left arrow', async t => {
  await carousel.clickLeftArrow();
});

Then('I can visualize the cards image {string}', async (t, [value]) => {
  await carousel.cardImages(value);
});

Then('the {string} card shows the title {string}', async (t, [value, title]) => {
  await carousel.cardTitle(value, title);
});

Then('the {string} card shows the button {string}', async (t, [value, texto]) => {
  await carousel.cardButton(value, texto);
});

When('I click on a promotions {string}', async (t, [value]) => {
  await carousel.clickPromotion(value);
});

Then('the pomotions {string} page is displayed', async (t, [value]) => {
  await carousel.promoPageDisplayed(value);
});

Then('I can visualize the cards image {string} in mobile', async (t, [value]) => {
  await carousel.cardImagesMobile(value);
});

Then('the {string} card shows the title {string} in mobile', async (t, [value, title]) => {
  await carousel.cardTitleMobile(value, title);
});

Then('the {string} card shows the button {string} in mobile', async (t, [value, texto]) => {
  await carousel.cardButtonMobile(value, texto);
});

When('I click on a promotions {string} in mobile', async (t, [value]) => {
  await carousel.clickPromotionMobile(value);
});

When('the cards is moved to right position', async t =>{
  await carousel.dragToRight();
})

Then('the right card is displayed', async t =>{
  await carousel.rightCardIsVisible();
})

When('the cards is moved to left position', async t =>{
  await carousel.dragToLeft();
})

Then('the left card is displayed', async t =>{
  await carousel.leftCardIsVisible();
})