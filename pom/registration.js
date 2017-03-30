/**
 * Created by surya on 13/03/2017.
 */

var today = new Date()
var day = today.getDate()
var month = today.getMonth()
var year = today.getFullYear()
var milliseconds = today.getMilliseconds()
var regEmail = "automationtester"+ day + month + year + milliseconds + "@mailinator.com";


module.exports = function(browser) {
    
    // Navigating to the UAT quote and buy
    this.goToSite = function () {
        browser
            .windowMaximize()
            .url(browser.globals.BASE_URL + '/quotes/cat-dog/#/pet-details')
            .waitForElementVisible('body', 1000);

        return browser;
    };

    this.regPageNavigation = function () {
        browser
            .windowMaximize()
            .url(browser.globals.BASE_URL + '/accounts/login/?next=/accounts/logout/')
            .waitForElementVisible('body', 1000);
        return browser;
    };

    // clicking on registration
    this.regSelection = function () {
        browser
            .waitForElementVisible('body div:nth-child(2) div:nth-child(3) div:nth-child(2) > div > p > a')
            .click('body div:nth-child(2) div:nth-child(3) div:nth-child(2) > div > p > a')
    };

    this.regWindowForm = function () {
        browser
            .waitForElementVisible('#flow-sm .login-modal-next')
            .click('#flow-sm .login-modal-next')
    };

    // filling the random email generated
    this.regEmailEntry = function () {
        browser
            .waitForElementVisible('#id_email')
            .setValue('#id_email',regEmail)
    };

    // filling the first name
    this.regFirstNameEntry = function () {
        browser
            .waitForElementVisible('#id_full_name')
            .setValue('#id_full_name','Automation Tester')

    };

    // cliking in the next button after filling the first name in the reg page
    this.regNextButton = function () {
        browser
            .waitForElementVisible('body div:nth-child(2) div:nth-child(3)  div:nth-child(4) button')
            .click('body div:nth-child(2) div:nth-child(3)  div:nth-child(4) button')
    };

    // filling the password
    this.regPasswordEntry = function () {
        browser
            .waitForElementVisible('#id_password1')
            .setValue('#id_password1','Test1234')

            // filling password second time
            .waitForElementVisible('#id_password2')
            .setValue('#id_password2','Test1234')
            .pause(1000)
    };

    // clicking on the reg complete button
    this.regCompleteButton = function () {
        browser
            .waitForElementVisible('body div:nth-child(2) div.canvas div:nth-child(3) div:nth-child(4) button')
            .click('body div:nth-child(2) div.canvas div:nth-child(3) div:nth-child(4) button')
    };

    // entering the registered user name
    this.correctEmail = function () {
        browser
            .setValue('#id_username',regEmail)
    };

    // entring the password
    this.correctPassword = function () {
        browser
            .setValue('#id_password', 'Test1234')
    };

    // Set login info
    this.submitActivity = function () {
        browser
            .click('body .form-wrap .button');
    };

    this.emptyEmailField = function () {
        browser
            .clearValue('#id_username')

    };

    this.emptypassword = function () {
        browser
            .clearValue('#id_password')
    }

    this.incorrectMailFormat = function () {
        browser
            .setValue('#id_username','tfrytytytuyu')

    };

    this.incorrectPasswordFormat = function () {
        browser
            .setValue('#id_password',' ')

    };

    this.weDontRecogUREmailAndPasswordErrorMessage = function () {
        browser
            .assert.containsText("body > div:nth-child(2) > div.canvas > div:nth-child(3) > div:nth-child(4) > div > div > div > p","We did not recognise your username and/or password, please try again.")
    };
    return this;
}