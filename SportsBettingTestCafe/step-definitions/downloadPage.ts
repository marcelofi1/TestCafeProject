import { Given, Then, When } from '@cucumber/cucumber';
import { Selector } from 'testcafe';
import pokerPage from '../pages/pokerPage';
import downloadPage from '../pages/downloadPage';

Given('I open download page', async t => {
  await downloadPage.openDownloadPage();
});

Then('the page components are displayed', async t => {
  await downloadPage.componentsDisplayed();
});

Then('the page components are displayed in mobile', async t => {
  await downloadPage.componentDisplayedMobile();
});

When('I click on {string}', async (t, [value]) => {
  await downloadPage.clickDownloadBtn(value);
});

Then('the pop-up components are displayed', async t => {
  await downloadPage.popupPageDisplyed();
});

When('I click on Need More Help button', async t => {
  await downloadPage.clickNeedMoreHelp();
});

Then('is redirected to help page', async t => {
  await downloadPage.helpPageIsDisplayed();
});

Then('the Poker page is displayed when {string} is clicked', async (t, [value]) => {
  await downloadPage.pageDisplayed(value);
});
