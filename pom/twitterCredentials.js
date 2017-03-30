/**
 * Created by surya on 03/03/2017.
 */
module.exports = function(browser){

    this.twitterpagenavigation = function(){
        browser
            .url(browser.globals.BASE_URL + '/quotes/cat-dog/#/pet-details')
            .maximizeWindow()
    };

    this.choosingTwitterLogin = function () {
        browser
            .waitForElementVisible('body > div:nth-child(2) > div.canvas > div:nth-child(3) > div.container.pad-v > div:nth-child(2) > div > form > fieldset > div > ul > li:nth-child(1) > a')
            .click('body > div:nth-child(2) > div.canvas > div:nth-child(3) > div.container.pad-v > div:nth-child(2) > div > form > fieldset > div > ul > li:nth-child(1) > a')
    };

    this.twitteremailrequest = function () {
        browser
            .waitForElementVisible('#username_or_email')
            .setValue('#username_or_email','')
    }

    this.twitterPasswordRequest = function () {
        browser
            .waitForElementVisible('#password')
            .setValue('#password','SonyHpDell3')

    };

    this.twitterSignInButton = function () {
        browser
            .waitForElementVisible('#allow')
            .click('#allow')
    };

    this.twitterEmailEntryAfterLogin = function () {
        browser
            .waitForElementVisible('#id_email')
            .setValue('#id_email','')
            .waitForElementVisible('body > div:nth-child(2) > div.canvas > div:nth-child(3) > div:nth-child(3) > div > div > form > button')
            .click('body > div:nth-child(2) > div.canvas > div:nth-child(3) > div:nth-child(3) > div > div > form > button')
    }
    return this;
};