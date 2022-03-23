/* eslint-env jquery */
require('dotenv').config();

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

// homepage
const btnUdemyBusiness = $('//*[@id="u426-popper-trigger--27"]');
const btnUdemy = $('//*[@id="udemy"]/div[2]/div[1]/div[3]/a/img');
const btnLogin = $('//*[@id="udemy"]/div[2]/div[1]/div[3]/div[6]/a');

// login
const loginFacebook = $('//*[@id="udemy"]/div[1]/div[2]/div[1]/div[3]/span/div/div[1]/a');
const loginGoogle = $('//*[@id="udemy"]/div[1]/div[2]/div[1]/div[3]/span/div/div[2]/a');
const loginApple = $('//*[@id="udemy"]/div[1]/div[2]/div[1]/div[3]/span/div/div[3]/a');
const fieldEmail = $('#email');
const fieldPassword = $('#password');

// searchPage
const searchClassLearn = $('//*[@id="u760-search-form-autocomplete--3"]');
const clickValue = $('//*[@id="udemy"]/div[2]/div[1]/div[3]/div[2]/form/button/svg');

// validateClass
const txtExplore = $('//*[@id="udemy"]/div[2]/div[3]/div/div/header/div/h3');
const btnFilter = $('//*[@id="udemy"]/div[2]/div[3]/div/div/div/div[1]/div[1]/div/button');
const thumbnailCard = $('//*[@id="u1061-popper-trigger--133"]/div[2]/h3/a');

// thumbnailPage
const thumbnailPage = $('//*[@id="udemy"]/div[2]/div[3]/div[1]/div[2]/div/div/div[1]/div/div[1]/div[1]/div/div/button/span[4]');
const btnBuy = $('//*[@id="udemy"]/div[2]/div[3]/div[1]/div[2]/div/div/div[1]/div/div[1]/div[2]/div/div[1]/div/div[5]/div/button');

// checkoutPage
const txtCheckout = $('//*[@id="udemy"]/div[1]/div[2]/div/div/div/div[2]/form/div[1]/div/div[1]/div');
const filterCountry = $('//*[@id="billingAddressCountry"]');
const toggleCreditCard = $('//*[@id="udemy"]/div[1]/div[2]/div/div/div/div[2]/form/div[1]/div/div[3]/div/div[1]/div/label');
const togglePayPal = $('//*[@id="udemy"]/div[1]/div[2]/div/div/div/div[2]/form/div[1]/div/div[3]/div/div[12]/div/label/span');
const errorMsg = $('//*[@id="udemy"]/div[1]/div[2]/div/div/div/div[2]/form/div[1]/div/div[3]/div/div[14]/div/div/div[1]/div/div');

// payment
const btnPayment = $('//*[@id="udemy"]/div[1]/div[2]/div/div/div/div[2]/form/div[2]/div/div[4]/button');

const UdemyPage = function udemypage() {
    this.navigateToLogin = async () => {
    await browser.url(process.env.BASE_URL);
    await browser.maximizeWindow();
    await browser.pause(7000);
    await btnLogin.isDisplayed();
    await btnUdemy.isDisplayed()
    await btnUdemyBusiness.isDisplayed();
  };

  this.btnLoginn = async () => {
    await btnLogin.click();
    await browser.pause(20000);
  };

  this.showLoginPage = async () => {
    await loginFacebook.isDisplayed();
    await loginGoogle.isDisplayed();
    await loginApple.isDisplayed();
    this.setEmail.waitForExist({ timeout: 10000 });
    this.setPassword.waitForExist({ timeout: 10000 });
  };

  this.setEmail = async () => {
    await fieldEmail.waitForExist({ timeout: 30000 });
    await fieldEmail.setValue(email);
  };

  this.setPassword = async () => {
    await fieldPassword.waitForExist({ timeout: 30000 });
    await fieldPassword.setValue(password);
  };

  this.searchClass = async () => {
    await searchClassLearn.waitForExist({ timeout: 30000 });
    await searchClassLearn.setValue('Selenium Webdriver');
    await clickValue.waitForExist({ timeout: 30000 });
    await clickValue.click();
  };

  this.validateSearchClass = async () => {
    await txtExplore.isDisplayed();
    await btnFilter.isDisplayed();
    await thumbnailCard.isDisplayed();
  };

  this.tapOnThumbnail = async () => {
    await thumbnailCard.click();
    await thumbnailPage.waitForExist({ timeout: 30000 });
    await btnBuy.click();
  };

  this.checkoutPage = async () => {
    await txtCheckout.isDisplayed();
    await filterCountry.isDisplayed();
    await toggleCreditCard.click();
  };

  this.paymentClass = async () => {
    await btnPayment.waitForExist({ timeout: 30000 });
    await btnPayment.click();
  };

  this.validateErrorMessage = async () => {
    await togglePayPal.waitForExist({ timeout: 30000 });
    await toggleCreditCard.scrollIntoView();
    await errorMsg.waitForExist({ timeout: 30000 });
  };
};

module.exports = new UdemyPage();
