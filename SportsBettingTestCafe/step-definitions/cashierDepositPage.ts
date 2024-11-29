import { Given, Then } from '@cucumber/cucumber';
import login from '../components/login';
import myAccountPage from '../pages/myAccountPage';
import depositPage from '../pages/cashierDepositPage';
import creditCard from '../utils/data/creditCard';

Given('I open the login page', async t => {
  await login.openLoginPage();
});

Then('I log in successfully', async t => {
  await login.login();
});

Then('I click on Deposit button', async t => {
  await depositPage.clickOnDepositButton();
});

Then('I select a CC method', async t => {
  await depositPage.selectCreditCardOption();
});

Then('Complete the credit card form', async t => {
  await depositPage.completeCreditCardRegistration(creditCard.expiry, creditCard.cvc);
});

Then('Click on Deposit Now', async t => {
  await depositPage.clickOnContinueDeposit();
});

Then('A success message is displayed', async t => {
  await depositPage.validateDepositWasSuccessful();
});

Then('I click on My Account', async t => {
  await myAccountPage.clickOnMyAccountButton();
});

Then('I click on Deposit Now Button', async t => {
  await myAccountPage.clickOnDepositNowButton();
});
