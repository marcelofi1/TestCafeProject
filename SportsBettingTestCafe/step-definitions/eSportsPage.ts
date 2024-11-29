import { Given, Then, When } from '@cucumber/cucumber';
import eSportsPage from '../pages/eSportsPage';

Given('I open eSports', async t => {
  await eSportsPage.openESportsPage();
});

Then('the desktop page shows eSports components', async t => {
  await t.wait(45000);
  await eSportsPage.componentsPage();
});

Then('the mobile page shows eSports components', async t => {
  await t.wait(45000);
  await eSportsPage.componentsPageMobile();
});