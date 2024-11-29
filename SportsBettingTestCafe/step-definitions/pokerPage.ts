import { Given, Then, When } from '@cucumber/cucumber';
import { getConfig } from '../config/config';
import pokerPage from '../pages/pokerPage';

const config = getConfig();

Given('I open poker page', async t => {
  await pokerPage.openPokerPage();
});

Then('the desktop page shows poker components', async t => {
  await pokerPage.pokerPageComponents();
});

Then('the mobile page shows poker components', async t => {
  await pokerPage.pokerPageComponentsMobile();
});

Then('I should see the main banner desktop', async t => {
  await pokerPage.mainBannerContainerDeskVisible();
});

Then('I should see the titles container desktop', async t => {
  await pokerPage.titlesMainBannerDeskVisible();
});

Then('I should see the download button desktop', async t => {
  await pokerPage.downloadBtnDeskDisplayed();
});

Then('I should see the playonline button desktop', async t => {
  await pokerPage.playOnlineBtnDeskDisplayed();
});

Then('I should see the main banner mobile', async t => {
  await pokerPage.mainBannerContainerMobVisible();
});

Then('I should see the titles container mobile', async t => {
  await pokerPage.titlesMainBannerMobVisible();
});

Then('I should see the download button mobile', async t => {
  await pokerPage.downloadBtnMobDisplayed();
});

Then('I should see the playonline button mobile', async t => {
  await pokerPage.playOnlineBtnMobDisplayed();
});

When('I click on {string} button desktop', async (t, [text]) => {
  await pokerPage.clickMainBannerBtnsDesk(text);
});

Then('the {string} page is displayed', async (t, [text]) => {
  await pokerPage.pageDisplayed(text);
});

When('I click on {string} button mobile', async (t, [text]) => {
  await pokerPage.clickMainBannerBtnsMob(text);
});

Then('is displayed {string} cards desktop', async (t, int) => {
  await pokerPage.countTournamentCardsDesk(int);
});

When('I click on first card desktop', async t => {
  await pokerPage.clickTournamenFirstCardDesk();
});

Then('the close button is displayed', async t => {
  await pokerPage.closeBtnDisplayed();
});

Then('the week days table is displayed', async t => {
  await pokerPage.weekDaysTableDisplyed();
});

Then('is displayed {string} cards mobile', async (t, int) => {
  await pokerPage.countTournamentCardsMob(int);
});

When('I click on first card mobile', async t => {
  await pokerPage.clickTournamenFirstCardMob();
});

Then('the {string} feature shows the title {string}', async (t, [value, title]) => {
  await pokerPage.featureCardsTitle(value, title);
});

Then('the {string} feature shows the button {string}', async (t, [value, texto]) => {
  await pokerPage.featureDisplayBtn(value, texto);
});

When('I click on {string} feature', async (t, [value]) => {
  await pokerPage.learnMoreBtn(value);
});

Then('the container {string} contains {string} in the title', async (t, [value, title]) => {
  await pokerPage.bannerTitles(value, title);
});

When('I click on Poker 101 subnav icon', async t => {
  await pokerPage.click101Icon();
});

Then('the poker help center page is displayed', async t => {
  await pokerPage.helpCenterPageDisplyed();
})

