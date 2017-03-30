/**
 * Created by surya on 06/03/2017.
 */

module.exports = function (browser) {

    this.petBreedSelectionPetDetailsPage = function () {
        browser
            .waitForElementVisible('#insured_entities_1_breed .mutt-natural-trigger')
            .click('#insured_entities_1_breed .mutt-natural-trigger')

    }


    this.petPedigreeBreedSelection = function () {
        browser

            .click('#breed-modal-1 > div > div > div.mutt-field-radio-item.mutt-field-radio-item--first > label')

    };

    this.petBreedEntry = function () {
        browser

        // entering the breed

            .setValue('#insured_entities_1_breed .mutt-natural-modal-inner.breed-modal > input.mutt-natural-autocomplete', 'p')
            .pause(500)
            .setValue('#insured_entities_1_breed .mutt-natural-modal-inner.breed-modal > input.mutt-natural-autocomplete', 'u')
            .pause(500)
            .setValue('#insured_entities_1_breed .mutt-natural-modal-inner.breed-modal > input.mutt-natural-autocomplete', 'g')
            .pause(500)

            // clicking on the breed

            .waitForElementVisible('#insured_entities_1_breed > div > div.mutt-natural-modal-inner.breed-modal > div.mutt-autocomplete-dropdown.mutt-autocomplete-dropdown-show > ul > li:nth-child(1)')
            .click('#insured_entities_1_breed > div > div.mutt-natural-modal-inner.breed-modal > div.mutt-autocomplete-dropdown.mutt-autocomplete-dropdown-show > ul > li:nth-child(1)')

    };
    this.petBreedDoneButton = function () {
        browser

           .waitForElementVisible('#insured_entities_1_breed .mutt-natural-modal-inner.breed-modal.mutt-error-wrapper > button')
           .click('#insured_entities_1_breed .mutt-natural-modal-inner.breed-modal.mutt-error-wrapper > button')
    };

    this.petBreedCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_breed .mutt-natural-modal-close')
            .click('#insured_entities_1_breed .mutt-natural-modal-close')
    };

    this.petCrossBreedSelection = function () {
        browser
            .waitForElementVisible('#breed-modal-1 div:nth-child(2) > label')
            .click('#breed-modal-1 div:nth-child(2) > label')
    };

    this.petMixedBreedSelection = function () {
        browser
            .waitForElementVisible('#breed-modal-1 .mutt-field-radio-item.mutt-field-radio-item--last > label',500)
            .click('#breed-modal-1 .mutt-field-radio-item.mutt-field-radio-item--last > label')
    };
    this.smallMixedBreedSelection = function () {
        browser

            .waitForElementVisible('#breed-modal-1 div:nth-child(2) div:nth-child(2) label')
            .click('#breed-modal-1 div:nth-child(2) div:nth-child(2) label')
    };

    this.mediumMixedBreedSelection = function () {
        browser
            .waitForElementVisible('#breed-modal-1 div:nth-child(2) div:nth-child(3) label')
            .click('#breed-modal-1 div:nth-child(2) div:nth-child(3) label')
    };
    this.largeMixedBreedSelection = function () {
        browser
            .waitForElementVisible('#breed-modal-1 div:nth-child(2) div:nth-child(4) label')
            .click('#breed-modal-1 div:nth-child(2) div:nth-child(4) label')
    };

    this.petBreedSelectionErrorMessage = function () {
        browser
            .waitForElementVisible('#breed-modal-1 .mutt-error')
            .assert.visible('#breed-modal-1 .mutt-error')
    }


    return this;
};

