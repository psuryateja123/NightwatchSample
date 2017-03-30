/**
 * Created by surya on 06/03/2017.
 */

module.exports = function (browser) {
    this.petGenderSelection = function () {
        browser
            .waitForElementVisible('#insured_entities_1_gender .mutt-natural-trigger')
            .click('#insured_entities_1_gender .mutt-natural-trigger')
    };

    this.petMaleGenderSelection = function () {
        browser
            .waitForElementVisible('#insured_entities_1_gender .mutt-natural-modal-inner div:nth-child(1) > label')
            .click('#insured_entities_1_gender .mutt-natural-modal-inner div:nth-child(1) > label')
    };

    this.petFemaleGenderSelection = function () {
        browser
            .waitForElementVisible('#insured_entities_1_gender .mutt-natural-modal-inner div:nth-child(2) > label')
            .click('#insured_entities_1_gender .mutt-natural-modal-inner div:nth-child(2) > label')
    };

    this.genderCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_gender .mutt-natural-modal-close')
            .click('#insured_entities_1_gender .mutt-natural-modal-close')
    }
    return this;

    }
