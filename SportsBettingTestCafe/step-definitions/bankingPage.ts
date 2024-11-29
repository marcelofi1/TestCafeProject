import { Given, Then, When } from '@cucumber/cucumber';
import { getConfig } from '../config/config';
import bankingPage from '../pages/bankingPage';

const config = getConfig();

Given('I open banking page', async t => {
  await bankingPage.openBankingPage();
});

Then('the desktop page shows banking components', async t => {
  await bankingPage.componentsPageDesktop();
});

Then('the mobile page shows banking components', async t => {
  await bankingPage.componentsPageMobile();
});

Then('the image of {string} is displayed', async (t, [value]) => {
  await bankingPage.imageVisible(value);
});

Then('the title of {string} shows {string}', async (t, [value, title]) => {
  await bankingPage.titleValidation(value, title);
});

Then('the description of {string} contains {string}', async (t, [value, desc]) => {
  await bankingPage.descriptionValidation(value, desc);
});

Then('I can visualize the bitcoin cell in {string}', async (t, [section])=>{
  await bankingPage.btcCell(section);
});

Then('the min amount of bitcoin in {string} is {string}', async (t,[section, min]) => {
  await bankingPage.minBtcCellAmount(section, min);
});

Then('the max amount of bitcoin in {string} is {string}', async (t,[section, max]) => {
  await bankingPage.maxBtcCellAmount(section, max);
});

Then('I can visualize the withdrawals option cell {string}', async (t, [text])=>{
  await bankingPage.withdrawalOptionCell(text);
});

Then('the {string} withdrawal min amount is {string}', async (t,[text, min]) => {
  await bankingPage.withdrawalMinCellAmount(text, min);
});

Then('the {string} withdrawal max amount is {string}', async (t,[text, max]) => {
  await bankingPage.withdrawalMaxCellAmount(text, max);
});

When('I click on the bitcoin info icon in the {string} section', async (t, [section]) => {
  await bankingPage.clickTooltip(section);
});

Then('the info bitcoin is displayed', async t=> {
  await bankingPage.toolTipDisplayed();
});

When('I click on the link of the bitcoin info from {string} section', async (t, [section]) =>{
  await bankingPage.clickOnBtcHelp(section);
})

Then('the {string} bitcoin help is displayed', async (t, [section]) => {
  await bankingPage.helpPageBtc(section)
})