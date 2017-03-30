/**
 * Created by surya on 02/03/2017.
 */

module.exports = function (browser) {
    //entering the account name- paying via Direct Debit
    this.enteringtheaccountname = function () {
        browser
            .waitForElementVisible('h1.fullstop')
            .pause(500)
            .waitForElementVisible('#payment_direct_debit_account_name .mutt-field.mutt-field-text')
            .setValue('#payment_direct_debit_account_name .mutt-field.mutt-field-text','Automation Test')
    };

    //entering the account number- paying via Direct Debit
    this.enteringtheaccountnumber = function () {
        browser
            .pause(300)
            .waitForElementVisible('#payment_direct_debit_account_number .mutt-field.mutt-field-text')
            .setValue('#payment_direct_debit_account_number .mutt-field.mutt-field-text','')
    };

    //entering the account sort code- paying via Direct Debit
    this.sortcode = function () {
        browser
            .pause(300)
            .waitForElementVisible('#payment_direct_debit_sort_code .mutt-field.mutt-field-text')
            .setValue('#payment_direct_debit_sort_code .mutt-field.mutt-field-text','')
    };

    // selecting on yearly payment
    this.yearlyPayment = function () {
        browser
            .waitForElementVisible('#app > div.fullheight.footer-wrap.footer-wrap--qb > div.panel-payment > div.container.center > div > ul > li:nth-child(2) > a')
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div.panel-payment > div.container.center > div > ul > li:nth-child(2) > a')
    };

    // clicking on continue and pay button in the yearly payment section
    this.yearlyContinueAndPayButton = function () {
        browser
            .waitForElementVisible('#vue-stripe > button')
            .click('#vue-stripe > button')
    };

    // filling the card number in the yearly payment popup
    this.yearlyPaymentCardNumber = function () {
        browser
            .waitForElementVisible('#\35 2bc58f0-0d66-11e7-b9b7-5d46eb11ebf4')
            .setValue('#\35 2bc58f0-0d66-11e7-b9b7-5d46eb11ebf4','4012888888881881')
    };

    // filling the expiry year and the month in yealy payment page
    this.yearlyPaymentExpiryMonthYear = function () {
        browser
            .waitForElementVisible('#\35 2bcce20-0d66-11e7-b9b7-5d46eb11ebf4')
            .setValue('#\35 2bcce20-0d66-11e7-b9b7-5d46eb11ebf4','11/2020')
    };

    // filling the CVC in the yearly payment page
    this.yearlyPaymentCvc = function () {
        browser
            .waitForElementVisible('#\35 2bcf530-0d66-11e7-b9b7-5d46eb11ebf4')
            .setValue('#\35 2bcf530-0d66-11e7-b9b7-5d46eb11ebf4','123')
    };

    // clicking on pay button in yearly payment page
    this.yearlyPayButton = function () {
        browser
            .waitForElementVisible('#container > section > span:nth-child(3) > div > div > main > form > nav > div > div > div > button')
            .click('#container > section > span:nth-child(3) > div > div > main > form > nav > div > div > div > button')
    };

    // clicking on continue and pay button in the DD section
    this.clickingcontinueandpay = function () {
        browser
            .waitForElementVisible('#app > div.fullheight.footer-wrap.footer-wrap--qb > div.panel-payment > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.center.flow > button')
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div.panel-payment > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.center.flow > button')
            .pause(30000)
            .waitForElementVisible('#app > div.fullheight.footer-wrap > div:nth-child(2) > header > div > h1')
    }
    return this;
};
