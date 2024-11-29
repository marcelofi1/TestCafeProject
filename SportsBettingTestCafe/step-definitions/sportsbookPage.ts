import { Given, Then, When } from '@cucumber/cucumber';
import sportsbookPage from '../pages/sportsbookPage';
import { Selector } from 'testcafe';
import login from '../components/login';
import betSlipInfo from '../utils/data/betSlipInfo';

Given('I open sportsbook', async t => {
  await t.wait(5000);
  await sportsbookPage.openSpotsbookPage();
});

When('I login', async t => {
  await sportsbookPage.click(Selector(sportsbookPage.loginButton), t);
  await sportsbookPage.typeText(Selector(sportsbookPage.userNameTxt), 'micisiy149@runqx.com', t);
  await sportsbookPage.typeText(Selector(sportsbookPage.passwordTxt), 'Aa123456', t);
  await sportsbookPage.click(Selector(sportsbookPage.authButton), t);
  await sportsbookPage.openSpotsbookPage();
});

Then('the page shows betslip icon', async t => {
  await sportsbookPage.betslipIconVisible();
});

When('I click on betslip icon', async t => {
  await sportsbookPage.clikBetslipIcon();
});

Then('the betslip page is displayed', async t => {
  await sportsbookPage.betslipPage();
});

When('I logout', async t => {
  await sportsbookPage.click(Selector(sportsbookPage.userIcon), t);
  await t.wait(25000);
  await sportsbookPage.click((sportsbookPage.logOutButton), t);
});

Then('the betslip page not shownd', async t => {
  await sportsbookPage.betslipIconNotVisible();
});

When('I click on betslip close button', async t => {
  await sportsbookPage.clikCloseBetslip();
});

Then('the desktop page shows sportsbook components', async t => {
  await sportsbookPage.componentsPage();
});

Then('the mobile page shows sportsbook components', async t => {
  await sportsbookPage.componentsPageMobile();
});

Given('I open the login page', async t => {
  await login.openLoginPage();
});

Then('I log in successfully', async t => {
  await login.login();
});

When('I click on Money Line', async t => {
  await sportsbookPage.clickMoneyBox();
});

Then('type the value in the win field', async t => {
  await t.wait(1000);
  await sportsbookPage.setWinInputValue(betSlipInfo.winField);
});

Then('type the value in the win field mobile', async t => {
  await t.wait(1000);
  await sportsbookPage.setWinInputValueMobile(betSlipInfo.winField);
});

Then('click on place bet button', async t => {
  await sportsbookPage.clickPlaceBetBtn();
});

Then('the sucess message is displayed', async t => {
  await sportsbookPage.successMessageDisplayed();
});

When('I click on Spread', async t => {
  await sportsbookPage.clickSpreadBox();
});

Then('type the value in the risk field', async t => {
  await t.wait(10000);
  await sportsbookPage.setRiskInputValue(betSlipInfo.riskField);
});

Then('type the value in the risk field mobile', async t => {
  await t.wait(10000);
  await sportsbookPage.setRiskInputValueMobile(betSlipInfo.riskField);
});

Then('the Reuse this Selection button is visible', async t => {
  await sportsbookPage.reuseSectionDisplayed;
});
