import { Given, Then, When } from '@cucumber/cucumber';
import homePage from '../pages/homePage';
import mainMenu from '../components/mainMenu';
import login from '../components/login';
import header from '../components/header';

Given('I open SportsBetting', async t => {
  await homePage.openHomePage();
});

Then('I should see the components desktop', async t => {
  await homePage.homeComponentsDesktop();
});

Then('I should see the components mobile', async t => {
  await homePage.homeComponentsMobile();
});

Then('the page shows {string} title {string}',
  async (t, [component, texto]) => {
    await homePage.showsComponentTitle(component, texto);
  }
);

Then('the {string} text is displayed in the buttons', async (t, texto) => {
  await homePage.buttonTextDisplayed(texto.toString());
});

Then('the {string} text is displayed', async (t, texto) => {
  await homePage.textDisplayed(texto.toString());
});

Then('is displayed {string} cards', async (t, int) => {
  await homePage.countDisplayedCards(int);
});

When('I click on {string} card of Popular in Sports', async (t, [value]) => {
  await homePage.clickOnPopularSportsCards(value.toString());
});

When('I click on {string} component from the main menu', async (t, [value]) => {
  await homePage.clickComponentMainMenu(value);
});

Then('the {string} page is displayed', async (t, [value]) => {
  await homePage.pageDisplayed(value);
});

When('I click on first card image from the carousel', async t => {
  await homePage.clickPopularCasinoCards();
});

When(
  'I click on {string} link from quick links section in mobile',
  async (t, [value]) => {
    await homePage.clickCasinoMobileLink(value);
  }
);

Then('I should see the mobile components', async t => {
  await homePage.homeMobileComponents();
});

When('I click on burger button', async t => {
  await mainMenu.clickOnBurger();
});

When('I click on {string} icon from the hamburger menu', async (t, [value]) => {
  await homePage.clickMobilePages(value);
});

When('I click on right arrow', async t => {
  await homePage.clickOnRightArrow();
});

Then('the page shows a left arrow', async t => {
  await homePage.carouselLeftArrowisVisble();
});

When('I click on left arrow', async t => {
  await homePage.clickOnLeftArrow();
});

When('I click on visit casino link', async t => {
  await homePage.clickCasinoVisitLnk();
});

When('I swipe left and rigth the popular casino carousel', async t => {
  await homePage.swipeLeftandRight();
});

Then('the casino page is displayed', async t => {
  await homePage.casinoPageDisplayed();
});

Then('I click on play now button', async t => {
  await homePage.playNow();
});

Given('I open the login page', async t => {
  await login.openLoginPage();
});

Then('I log in successfully', async t => {
  await login.login();
});

Then('I click on Sports Betting logo', async t => {
  await header.clickLogo();
});

Then('the play page is displayed', async t => {
  await homePage.casinoPageDisplayed();
});
