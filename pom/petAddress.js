/**
 * Created by surya on 06/03/2017.
 */
module.exports = function (browser) {

    // clicking on address
    this.petAddressSelection = function () {
        browser

            .waitForElementVisible('#insured_entities_1_pet_address_postcode .mutt-natural-trigger')
            .click('#insured_entities_1_pet_address_postcode .mutt-natural-trigger')

    };

    // entering the address
    this.petAddressEntry = function () {

        browser
            .clearValue('#insured_entities_1_pet_address_postcode div.mutt-natural-modal-inner > input')
            .pause(500)
            .setValue('#insured_entities_1_pet_address_postcode div.mutt-natural-modal-inner > input','')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode div.mutt-natural-modal-inner > input','')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode div.mutt-natural-modal-inner > input',' ')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode div.mutt-natural-modal-inner > input','')
            .pause(200)
            .setValue('#insured_entities_1_pet_address_postcode div.mutt-natural-modal-inner > input','A')
            .pause(1000)
            .click('div.pca div:nth-child(7) div.pca.pcalist div.pcaitem.pcafirstitem')
    };

    // clicking on the done button
    this.petAddressDoneButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .mutt-natural-toggle')
            .click('#insured_entities_1_pet_address_postcode .mutt-natural-toggle')
    };

     this.petDetailsContinueButton =  function () {
         browser
             .waitForElementVisible('#insured_entities_field_1 button.mutt-button.btn.space-right.space-left')
             .click('#insured_entities_field_1 button.mutt-button.btn.space-right.space-left')
     };

    this.petAddressManualEntrySelection = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .mutt-natural-modal-inner .show-manual a')
            .click('#insured_entities_1_pet_address_postcode .mutt-natural-modal-inner .show-manual a')
    };

    this.petFirstLineAddressEntry = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_line1')
            .setValue('#insured_entities_1_pet_address_postcode .manual-address_line1','  Road')
    };

    this.petClearFirstLineAddress = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_line1')
            .clearValue('#insured_entities_1_pet_address_postcode .manual-address_line1')
    };

    this.petSecondLineAddress = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address.manual-address_line2')
            .click('#insured_entities_1_pet_address_postcode .manual-address.manual-address_line2')
    };

    this.petSecondLineAddressEntry = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address.manual-address_line2')
            .setValue('#insured_entities_1_pet_address_postcode .manual-address.manual-address_line2','London')
    };

    this.petClearSecondLineAddress = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_line2')
            .clearValue('#insured_entities_1_pet_address_postcode .manual-address_line2')
    };

    this.petCityEntry = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_city')
            .setValue('#insured_entities_1_pet_address_postcode .manual-address_city','London')

    };

    this.petCityClear = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_city')
            .clearValue('#insured_entities_1_pet_address_postcode .manual-address_city')
    };

    this.petPostCodeEntryCorrectFormat = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_postcode')
            .setValue('#insured_entities_1_pet_address_postcode .manual-address_postcode',' 2EA')

    };

    this.petPostCodeEntryIncorrectFormat = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_postcode')
            .setValue('#insured_entities_1_pet_address_postcode .manual-address_postcode','@')
    };

    this.petPostCodeEntryMoreCharacters = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_postcode')
            .setValue('#insured_entities_1_pet_address_postcode .manual-address_postcode','')
    };

    this.enterCompleteAdressError = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .mutt-error')
    };

    this.youMustEnterAValidPostcode = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode > div > div.mutt-natural-modal-inner.mutt-error-wrapper > ul > li')
    }
    this.postCodeClear = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .manual-address_postcode')
            .clearValue('#insured_entities_1_pet_address_postcode .manual-address_postcode')
    };

    this.preferToSearchYourAddress = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .show-manual__link')
            .click('#insured_entities_1_pet_address_postcode .show-manual__link')
    };

    this.petAddressCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .mutt-natural-modal-close')
            .click('#insured_entities_1_pet_address_postcode .mutt-natural-modal-close')
    };

    this.pcaAddressInput = function () {
        browser
            .waitForElementVisible('#insured_entities_1_pet_address_postcode .mutt-natural-modal-inner.mutt-error-wrapper > input')
            .setValue('#insured_entities_1_pet_address_postcode .mutt-natural-modal-inner.mutt-error-wrapper > input',' 2EA')
    }
    return this;
}

