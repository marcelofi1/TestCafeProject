import { Given, Then, When } from '@cucumber/cucumber';
import joinUser from '../utils/data/joinUser';
import { joinPage } from '../pages/joinPage';

const firstName = joinUser.firstName;

Given('I open Join page', async t => {
  await joinPage.gotoJoinPage();
});

When('I complete registration form', async t => {
  await joinPage.joinRegistration(
    firstName,
    joinUser.lastName,
    joinUser.email,
    joinUser.password,
    joinUser.zipCode,
    joinUser.phoneNumber,
    joinUser.birthday
  );
  await joinPage.clickOnSubmitButton();
});

Then('I joined success', async t => {
  await joinPage.verifySuccessMessage(firstName);
});