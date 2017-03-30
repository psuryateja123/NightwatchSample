/**
 * Created by surya on 06/03/2017.
 */


module.exports = function (browser) {


    this.petnamecancelbutton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_name .mutt-natural-modal-close')
            .click('#insured_entities_1_pet_name .mutt-natural-modal-close')
    };

    this.petNameEntry = function () {
        browser
        // entering the pet name
        .waitForElementVisible('#insured_entities_1_pet_name div.mutt-natural-modal-inner input')
            .setValue('#insured_entities_1_pet_name div.mutt-natural-modal-inner input','Test')

    };

    this.petNameClear = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_name div.mutt-natural-modal-inner input')
            .clearValue('#insured_entities_1_pet_name div.mutt-natural-modal-inner input')
    }

    // clicking on the pet name field in the pet details page
    this.petname = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_name .mutt-natural-trigger')
            .click('#insured_entities_1_pet_name .mutt-natural-trigger')
    };

    this.petNameDoneButton = function () {
        browser

            .waitForElementVisible('#insured_entities_1_pet_name .mutt-natural-modal-inner button')
            .click('#insured_entities_1_pet_name .mutt-natural-modal-inner button')

    };

    this.petNameErrorMessage = function () {
        browser
            //.waitForElementVisible('body > div:nth-child(2) > div.canvas > div:nth-child(3) > div:nth-child(4) > div > div > div > p')
           // .assert.visible('body > div:nth-child(2) > div.canvas > div:nth-child(3) > div:nth-child(4) > div > div > div > p')

            .waitForElementVisible('#insured_entities_1_pet_name.mutt-field-wrapper.mutt-natural-field-wrapper .mutt-error')
            .assert.visible('#insured_entities_1_pet_name.mutt-field-wrapper.mutt-natural-field-wrapper .mutt-error')
    };
    return this;

};

