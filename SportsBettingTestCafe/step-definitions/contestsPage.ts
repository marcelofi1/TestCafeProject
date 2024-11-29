import { Given, Then, When } from '@cucumber/cucumber';
import contestsPage from '../pages/contestsPage';

Given('I open contests', async t => {
  await contestsPage.openContestskPage();
});

Then('the desktop page shows contests components', async t => {
  await contestsPage.componentsPage();
});

Then('the mobile page shows contests components', async t => {
  await contestsPage.componentsPageMobile();
});