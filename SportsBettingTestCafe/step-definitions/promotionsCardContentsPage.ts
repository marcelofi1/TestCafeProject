import { Given, Then, When } from '@cucumber/cucumber';
import promotionsCardContentsPage from '../pages/promotionsCardContentsPage';

Given('I open promotions {string} page', async (t, [value]) => {
  await promotionsCardContentsPage.openPromoPage(value);
});

Given('I open promotions card {string} contents page', async (t, [value]) => {
  await promotionsCardContentsPage.openPromoContentPage(value);
});

Then('I click over first card', async t => {
  await promotionsCardContentsPage.clickOnFirstCard();
});

Then('I can visualize the components in desktop', async t => {
  await promotionsCardContentsPage.componentsVisibleDesktop();
});

Then('I can visualize the components in mobile', async t => {
  await promotionsCardContentsPage.componentsVisibleMobile();
});

Then('the promotions contents page shows the title {string}', async (t, texto) => {
  await promotionsCardContentsPage.showPageTitle(texto);
});

Then('the promotions contents page shows the cta button {string}', async (t, texto) => {
  await promotionsCardContentsPage.showCtaBtn(texto);
});

Then('the promotions contents page shows the promo button {string}', async (t, texto) => {
  await promotionsCardContentsPage.showTextBtn(texto);
});

Then('the promotions contents page shows the table prizes {string}', async (t, texto) => {
  await promotionsCardContentsPage.showTablePrize(texto);
});

Then('the promotions contents page shows the terms and condition details {string}', async (t, texto) => {
  await promotionsCardContentsPage.showTermsCondition(texto);
});

When('I click on terms and condition', async t => {
  await promotionsCardContentsPage.clickTermsBtn();
});

When('I click on back button', async t => {
  await promotionsCardContentsPage.clickBackBtn();
});

Then('the promotions {string} page is displayed', async (t, [value]) => {
  await promotionsCardContentsPage.promotionPageDisplayed(value);
});

When('I click on cta button', async t => {
  await promotionsCardContentsPage.clickCtaBtn();
});

When('I click on promo button', async t => {
  await promotionsCardContentsPage.clickPromoBtn();
});

Then('the {string} page is displayed', async (t, [value]) => {
  await promotionsCardContentsPage.ctaPageDisplayed(value);
});
