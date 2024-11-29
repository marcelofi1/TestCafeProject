import { Given, Then } from "@cucumber/cucumber";
import login from "../components/login";

Given('I open the login page', async t => {
  await login.openLoginPage();
});

Then('I can log in successfully', async t => {
  await login.login();
});

Then('I can see the universal balance', async t => {
  await login.universalBalanceIsVisible();
});