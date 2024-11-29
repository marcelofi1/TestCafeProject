import { Given, Then, When } from '@cucumber/cucumber';
import footer from '../components/footer';
import homePage from '../pages/homePage';
import { getConfig } from '../config/config';

const config = getConfig();

Given('I open home page', async t => {
  await t.navigateTo(homePage.sportsBettingUrl);
});

When('I click on a {string} link', async (t, [value]) => {
  await footer.quickLinks(value);
});

Then('the {string} page is displayed', async (t, [value]) => {
  await footer.quickLinksValidations(value);
});

When('I click on a Casino {string} link', async (t, [value]) => {
  await footer.casinoLinks(value);
});

Then('the Casino {string} page is displayed', async (t, [value]) => {
  await footer.casinoValidations(value);
});

When('I click on a Sports {string} link', async (t, [value]) => {
  await footer.sportsLinks(value);
});

Then('the Sports {string} page is displayed', async (t, [value]) => {
  await footer.sportsValidations(value);
});

When('I click on a Poker {string} link', async (t, [value]) => {
  await footer.pokerLinks(value);
});

Then('the Poker {string} page is displayed', async (t, [value]) => {
  await footer.pokerValidations(value);
});

When('I click on a Racebook {string} link', async (t, [value]) => {
  await footer.racebookLinks(value);
});

Then('the Racebook {string} page is displayed', async (t, [value]) => {
  await footer.racebookValidations(value);
});

When('I click on a Promos {string} link', async (t, [value]) => {
  await footer.promoLinks(value);
});

Then('the Promos {string} page is displayed', async (t, [value]) => {
  await footer.promoValidations(value);
});

When('I click on Need help', async t => {
  await footer.clickNeedHelpBtn();
});

Then('the pop up is displayed', async t => {
  await footer.needHelpPopUpDisplayed();
});

When('I click on Casino', async t => {
  await footer.casinoMenuClick();
});

When('I click on Sports', async t => {
  await footer.sportMenuClick();
});

When('I click on Poker', async t => {
  await footer.pokerMenuClick();
});

When('I click on Racebook', async t => {
  await footer.racebookMenuClick();
});

When('I click on {string} social media icon', async (t, [value]) => {
  await footer.socialmediaIcon(value);
});

Then('the {string} social media page is displayed', async (t, [value]) => {
  await footer.socialMediaValidations(value);
});