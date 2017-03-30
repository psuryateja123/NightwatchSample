/**
 * Created by surya on 02/03/2017.
 */

module.exports = function (browser) {

    // clicking in the terms button
    this.agreeTermsRadioButton = function () {
        browser
            .waitForElementVisible('h1.fullstop.center')
            .waitForElementVisible('#policy_holders_1_agree_terms .mutt-label')
            .click('#policy_holders_1_agree_terms .mutt-label')
    };

    // clicking on I agree button
    this.agreeTerms = function (){
        browser
            .waitForElementVisible('#confirm button.mutt-button')
            .click('#confirm button.mutt-button')
    };
    return this;
}
