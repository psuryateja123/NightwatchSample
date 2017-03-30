/**
 * Created by surya on 06/03/2017.
 */
module.exports = function (browser) {

    this.petSelectionPetDetailsPage = function () {
        browser
            .pause(500)
            .waitForElementVisible('#insured_entities_1_species .mutt-natural-trigger',500)
            .click('#insured_entities_1_species .mutt-natural-trigger')
    };

    this.selectingDog = function () {
        browser
            .waitForElementVisible('#insured_entities_1_species div.mutt-natural-modal-inner div:nth-child(2) > label',500)
            .click('#insured_entities_1_species div.mutt-natural-modal-inner div:nth-child(2) > label')
    }
    this.selectingCat = function () {
        browser
            .waitForElementVisible('#insured_entities_1_species div.mutt-natural-modal-inner div:nth-child(1) > label',500)
            .click('#insured_entities_1_species div.mutt-natural-modal-inner div:nth-child(1) > label')
    };

    this.petSelectionCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_species div.mutt-natural-modal-close',500)
            .click('#insured_entities_1_species div.mutt-natural-modal-close')
    }

    return this;

};

