import { Given, Then, When } from '@cucumber/cucumber';
import racebookPage from '../pages/racebookPage';

Given('I open Racebook page', async t => {
  await racebookPage.openRacebookPage();
});

Then('the desktop page shows racebook components', async t => {
  await racebookPage.componentsPage();
});

Then('the mobile page shows racebook components', async t => {
  await racebookPage.componentsPageMobile();
});