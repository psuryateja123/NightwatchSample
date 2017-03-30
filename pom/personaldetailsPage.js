/**
 * Created by surya on 02/03/2017.
 */

module.exports = function (browser) {


    // salutation section

    this.salutationPersonalDetailsPage= function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-trigger')
            .click('#policy_holders_1_title .mutt-natural-trigger')
    };

    this.mrSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(1) > label')
            .click('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(1) > label')
    };

    this.mrsSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(2) > label')
            .click('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(2) > label')
    };

    this.missSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(3) > label')
            .click('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(3) > label')
    };

    this.msSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(4) > label')
            .click('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(4) > label')
    };

    this.mxSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(5) > label')
            .click('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(5) > label')
    };

    this.profSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(6) > label')
            .click('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(6) > label')
    };

    this.drSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(7) > label')
            .click('#policy_holders_1_title .mutt-natural-modal-inner div:nth-child(7) > label')
    };

    this.cancelButtonSalutation = function () {
        browser
            .waitForElementVisible('#policy_holders_1_title .mutt-natural-modal-close')
            .click('#policy_holders_1_title .mutt-natural-modal-close')
    };

    this.firstNamePersonalDetailsPage = function () {
        browser
            .waitForElementVisible('#policy_holders_1_first_name .mutt-natural-trigger')
            .click('#policy_holders_1_first_name .mutt-natural-trigger')
    };
    
    this.enteringFirstName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_first_name .mutt-natural-modal-inner > input')
            .setValue('#policy_holders_1_first_name .mutt-natural-modal-inner > input','Automation')
    };
    this.clearingFirstName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_first_name .mutt-natural-modal-inner > input')
            .clearValue('#policy_holders_1_first_name .mutt-natural-modal-inner > input')
    };
    this.cancelButtonFirstName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_first_name .mutt-natural-modal-close')
            .click('#policy_holders_1_first_name .mutt-natural-modal-close')
    };

    this.doneButtonFirstName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_first_name .mutt-natural-modal-inner > button')
            .click('#policy_holders_1_first_name .mutt-natural-modal-inner > button')

    };
    this.secondNamePersonalDetailsPage = function () {
        browser
            .waitForElementVisible('#policy_holders_1_last_name .mutt-natural-trigger')
            .click('#policy_holders_1_last_name .mutt-natural-trigger')
    };

    this.enteringSecondName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_last_name .mutt-natural-modal-inner > input')
            .setValue('#policy_holders_1_last_name .mutt-natural-modal-inner > input','test')
    };

    this.clearingSecondName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_last_name .mutt-natural-modal-inner > input')
            .clearValue('#policy_holders_1_last_name .mutt-natural-modal-inner > input')
    };

    this.cancelButtonSecondName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_last_name .mutt-natural-modal-close')
            .click('#policy_holders_1_last_name .mutt-natural-modal-close')
    };

    this.doneButtonSecondName = function () {
        browser
            .waitForElementVisible('#policy_holders_1_last_name .mutt-natural-toggle')
            .click('#policy_holders_1_last_name .mutt-natural-toggle')
    };

    this.dateOfBirthPersonalDetailsPage = function () {
        browser
            .waitForElementVisible('#policy_holders_1_dob .mutt-natural-trigger')
            .click('#policy_holders_1_dob .mutt-natural-trigger')
    };

    this.dateOfBirthEntry = function () {
        browser

            .waitForElementVisible('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(2)')
            .click('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(2)')

            // selecting day
            .setValue('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(2)','18')

            //clicking on month
            .waitForElementVisible('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(3)')
            .click('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(3)')

            // selecting the month
            .setValue('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(3)','May')

            // clicking on year
            .waitForElementVisible('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(4)')
            .click('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(4)')

            //selecting the year
            .setValue('#policy_holders_1_dob .mutt-natural-modal-inner select:nth-child(4)','1989')

    };

    this.doneButtonDateOfBirth = function () {
        browser
            .waitForElementVisible('#policy_holders_1_dob .mutt-natural-toggle')
            .click('#policy_holders_1_dob .mutt-natural-toggle')
    };

    this.cancelButtonDateOfBirth = function () {
        browser
            .waitForElementVisible('#policy_holders_1_dob .mutt-natural-modal-close')
            .click('#policy_holders_1_dob .mutt-natural-modal-close')
    };
    this.phoneNumberPersonalDetailsPage = function () {
        browser
            .waitForElementVisible('#policy_holders_1_telephone .mutt-natural-trigger')
            .click('#policy_holders_1_telephone .mutt-natural-trigger')
    };
    this.phoneNumberEntry =function () {
        browser
            .waitForElementVisible('#policy_holders_1_telephone .mutt-natural-modal-inner > input')
            .setValue('#policy_holders_1_telephone .mutt-natural-modal-inner > input','07000000000')

    };

    this.doneButtonPhoneNumber = function () {
        browser
            .waitForElementVisible('#policy_holders_1_telephone .mutt-natural-toggle')
            .click('#policy_holders_1_telephone .mutt-natural-toggle')
    };
    this.clearingPhoneNumber = function () {
        browser
            .waitForElementVisible('#policy_holders_1_telephone .mutt-natural-modal-inner > input')
            .clearValue('#policy_holders_1_telephone .mutt-natural-modal-inner > input')
    };

    this.cancelButtonPhoneNumber = function () {
        browser
            .waitForElementVisible('#policy_holders_1_telephone .mutt-natural-modal-close')
            .click('#policy_holders_1_telephone .mutt-natural-modal-close')
    };

    this.personaldetailscontinuebutton = function () {
        browser

            .pause(500)
            .click('#user-details .mutt-button')
            .waitForElementVisible('h1.fullstop')
    };
    return this;
}
