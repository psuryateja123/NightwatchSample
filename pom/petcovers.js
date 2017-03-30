/**
 * Created by surya on 03/03/2017.
 */

module.exports = function (browser) {

    this.policyAddingPassAwayCover = function () {
        browser
            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb li:nth-child(1) a')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb li:nth-child(1) a')

    };
    this.policyAddingTheftCover = function () {
        browser

            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb li:nth-child(2) a')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb li:nth-child(2) a')
    };

    this.policyAddingTravelCover = function () {
        browser

            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb li:nth-child(3) a')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb li:nth-child(3) a')
    };

    this.valuePolicyTheftCover = function () {
        browser

            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) li div a',500)
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) li div a')
    };

return this;
}

