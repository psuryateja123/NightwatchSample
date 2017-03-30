/**
 * Created by surya on 06/03/2017.
 */
module.exports = function (browser) {
    this.petSpayedNeutered = function () {
        browser
            .waitForElementVisible('#insured_entities_1_spayed_neutered .mutt-natural-trigger')
            .click('#insured_entities_1_spayed_neutered .mutt-natural-trigger')
    };

    this.petHasSpayed = function () {
        browser
            .waitForElementVisible('#insured_entities_1_spayed_neutered div.mutt-natural-modal-inner div:nth-child(1) label')
            .click('#insured_entities_1_spayed_neutered div.mutt-natural-modal-inner div:nth-child(1) label')
    };

    this.petHasNotSpayed = function () {
        browser
            .waitForElementVisible('#insured_entities_1_spayed_neutered div.mutt-natural-modal-inner div:nth-child(2) > label')
            .click('#insured_entities_1_spayed_neutered div.mutt-natural-modal-inner div:nth-child(2) > label')
    };

    this.petSpayedPageCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_spayed_neutered .mutt-natural-modal-close')
            .click('#insured_entities_1_spayed_neutered .mutt-natural-modal-close')
    };
    return this;
    }