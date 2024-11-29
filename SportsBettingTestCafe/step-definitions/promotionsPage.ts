import { Given, Then, When } from '@cucumber/cucumber';
import { getConfig } from '../config/config';
import promotionsPage from '../pages/promotionsPage';

const config = getConfig();

Given('I open Promotions', async t => {
  await promotionsPage.openPromotionPage();
});

Then('the components are displayed in desktop', async t => {
  await promotionsPage.showComponentsDesktop();
});

Then('the components are displayed in mobile', async t => {
  await promotionsPage.showComponentsMobile();
});

When('I click on {string} subnav', async (t, [value]) => {
  await promotionsPage.clickSubNav(value);
});

Then('I can visualize the cards', async t => {
  await promotionsPage.showCards();
});

When('I click on a promotions', async t => {
  await promotionsPage.clickPromotions();
});

Then('is displayed {string} page', async (t, [value]) => {
  await promotionsPage.promoPageDisplayed(value);
});

Then('I can visualize the cards image', async t => {
  await promotionsPage.showsCardImage();
});

Then('the card shows the title {string}', async (t, title) => {
  await promotionsPage.showCardTitle(title);
});

Then('the card shows the button {string}', async (t, texto) => {
  await promotionsPage.showCardButton(texto);
});

Given('I open Promotions {string}', async (t, [value]) => {
  await promotionsPage.openPromoPage(value);
});

Then('the pomotions {string} page is displayed', async (t, [value]) => {
  await promotionsPage.promoContentPageDisplay(value);
});

Then('title {string} is displayed', async (t, [value]) => {
  await promotionsPage.pageTitle(value);
});
