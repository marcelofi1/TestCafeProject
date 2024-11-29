import { Given, Then, When } from '@cucumber/cucumber';
import referAFriendPage from '../pages/referAFriendPage';
import logIn from '../components/login';

Given('I open Refer a Friend page', async t => {
  await referAFriendPage.openReferAFriendPage();
});

Then('I should see the components', async t => {
  await referAFriendPage.referAFriendComponents();
});

Then('I click over Refer Now button', async t => {
  await referAFriendPage.clickOnReferNowBtn();
});

Then('the Login page is displayed', async t => {
  await referAFriendPage.loginPageDisplayed();
});

Then('I login', async t => {
  await logIn.clickLogin();
  await logIn.login();
});

Then('the refer a friend pop up is displayed', async t => {
  await referAFriendPage.referAFriendModalVisible();
})
