import { Given, When, Then } from '@cucumber/cucumber';
import UdemyPage from '../pageobjects/udemy.page';

Given('User on Udemy home page', async () => {
  await UdemyPage.navigateToLogin();
});

When('User tap button login', async () => {
  await UdemyPage.btnLoginn();
});

When('User directed to Udemy login page', async () => {
  await UdemyPage.showLoginPage();
});

When('User search Selenium Webdriver class', async () => {
  await UdemyPage.searchClass();
});

When('Verify the results class', async () => {
  await UdemyPage.validateSearchClass();
});

When('User buying to product', async () => {
  await UdemyPage.tapOnThumbnail();
});

When('Verify study class on Checkout page', async () => {
  await UdemyPage.checkoutPage();
});

When('User Payment this class', async () => {
  await UdemyPage.paymentClass();
});

Then('Verify the error messages', async () => {
  await UdemyPage.validateErrorMessage();
});
