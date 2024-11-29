import { Given, Then } from "@cucumber/cucumber";
import { getEnv } from "../config/config";
import redirectPage from "../pages/redirectPage";

const env = getEnv();

Given('I open {string} page', async (t, [value]) => {
  await redirectPage.openRedirect(value)
});

Then('the page is displayed', async t => {
  await redirectPage.pageDisplayed();
});
