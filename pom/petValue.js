/**
 * Created by surya on 06/03/2017.
 */
module.exports = function (browser) {
    this.petValueSelection = function () {
        browser
            .waitForElementVisible('#insured_entities_1_value .mutt-natural-trigger')
            .click('#insured_entities_1_value .mutt-natural-trigger')
    };

    this.petValueEntry = function () {
        browser
            .waitForElementVisible('#insured_entities_1_value .mutt-natural-modal-inner input')
            .setValue('#insured_entities_1_value .mutt-natural-modal-inner input','400')
    };

    this.petValueDoneButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_value .mutt-natural-modal-inner button')
            .click('#insured_entities_1_value .mutt-natural-modal-inner button')
    };

    this.petvalueCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_value .mutt-natural-modal-close')
            .click('#insured_entities_1_value .mutt-natural-modal-close')
    };

    this.petValueClear = function () {
        browser
            .waitForElementVisible('#insured_entities_1_value .mutt-natural-modal-inner input')
            .clearValue('#insured_entities_1_value .mutt-natural-modal-inner input')

    };
    return this;
}