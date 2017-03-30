/**
 * Created by surya on 02/03/2017.
 */
module.exports = function(browser){

    // navigating to the Facebook- cat and dog
    this.fabookpagenavigation = function(){
        browser
            .url(browser.globals.BASE_URL + '/offers/pet-insurance/landing-claim-your-discount/')
            .maximizeWindow()
            .waitForElementVisible('#button-join-via-facebook')
            .click('#button-join-via-facebook')
    };

    // filling the facebook credentials and clicking on login button
    this.facebooklogin = function(){
        browser
            .waitForElementVisible('#email')
            .setValue('#email','')
            .waitForElementVisible('#pass')
            .setValue('#pass','Tyhnw0+3h')
            .click('#loginbutton')
    };

    // navigating to quote and buy
    this.quoteandbuyfromfacebook = function(){
        browser
            .waitForElementVisible('#done-sharing')
            .click('#done-sharing')
    }
    return this;
};
