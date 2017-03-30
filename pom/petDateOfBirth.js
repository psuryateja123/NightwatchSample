/**
 * Created by surya on 06/03/2017.
 */


module.exports = function (browser) {
    this.petDateofBirthSelection = function () {
        browser
            .waitForElementVisible('#insured_entities_1_dob > span > a')
            .click('#insured_entities_1_dob > span > a')
    };

    this.petDateOfBirth = function () {
        browser
        // click on Date of Birth
            .waitForElementVisible('#insured_entities_1_dob > span > a')
            .click('#insured_entities_1_dob > span > a')

            // select a day
            .waitForElementVisible('#insured_entities_1_dob .mutt-natural-modal-inner select:nth-child(2)')
            .click('#insured_entities_1_dob .mutt-natural-modal-inner select:nth-child(2)')

            // select a month
            .waitForElementVisible('#insured_entities_1_dob .mutt-natural-modal-inner select:nth-child(3)')
            .click('#insured_entities_1_dob .mutt-natural-modal-inner select:nth-child(3)')

            // select an year
            .waitForElementVisible('#insured_entities_1_dob .mutt-natural-modal-inner select:nth-child(4)')
            .click('#insured_entities_1_dob .mutt-natural-modal-inner select:nth-child(4)')
    };

    this.petDateOfBirthDoneButton = function () {
        browser
             // done button
            .waitForElementVisible('#insured_entities_1_dob .mutt-natural-toggle')
            .click('#insured_entities_1_dob .mutt-natural-toggle')

    };

    this.petDateOfBirthCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_dob .mutt-natural-modal-close')
            .click('#insured_entities_1_dob .mutt-natural-modal-close')

    };
    return this;

}
