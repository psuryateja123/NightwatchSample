/**
 * Created by surya on 06/03/2017.
 */

module.exports = function (browser) {
    this.petHealthIssueSelection = function () {
        browser
            .waitForElementVisible('#insured_entities_1_healthy .mutt-natural-trigger')
            .click('#insured_entities_1_healthy .mutt-natural-trigger')
    };
    this.petHasHealthIssue = function () {
      browser
          .waitForElementVisible('#insured_entities_1_healthy .mutt-natural-modal-inner div:nth-child(1) label')
          .click('#insured_entities_1_healthy .mutt-natural-modal-inner div:nth-child(1) label')
    };

    this.petHasNotHealthIssue = function () {
        browser
            .waitForElementVisible('#insured_entities_1_healthy .mutt-natural-modal-inner div:nth-child(2) label')
            .click('#insured_entities_1_healthy .mutt-natural-modal-inner div:nth-child(2) label')
    };

    this.petHealthIssuePageCancelButton = function () {
        browser
            .waitForElementVisible('#insured_entities_1_healthy .mutt-natural-modal-close')
            .click('#insured_entities_1_healthy .mutt-natural-modal-close')
    };
    return this;
    }