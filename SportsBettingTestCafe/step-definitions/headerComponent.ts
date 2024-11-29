import { Given, Then, When } from '@cucumber/cucumber';
import homePage from '../pages/homePage';
import header from '../components/header';

Given('I open home page', async t => {
  await t.navigateTo(homePage.sportsBettingUrl);
});

Then('the page shows header components desktop', async t => {
  await header.headerComponentsIsVisible();
});

Then('the page shows header components mobile', async t => {
  await header.headerComponentsIsVisibleMobile();
});

When('I click on classicSite', async t => {
  await header.clickClassicSite();
});

Then('the classicSite is displayed', async t => {
  await header.classicSitePage();
});

When('I click on blackjackIcon', async t => {
  await header.clickBlackjackIcon();
});

Then('the casino page is displayed', async t => {
  await header.blackjackPage();
});

When('I click on banking', async t => {
  await header.clickBankingButton();
});

Then('the banking page is displayed', async t => {
  await header.bankingPage();
});
