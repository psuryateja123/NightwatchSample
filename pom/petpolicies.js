/**
 * Created by surya on 03/03/2017.
 */
module.exports = function (browser) {

    this.petregularpolicy = function(){
        browser
            //.pause(2000)
            .waitForElementVisible('h1.fullstop')
            .pause(2000)
            //.click('body.btn--wide .button')
            .waitForElementVisible('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60.policy-card-wrapper > div > div.row.row-px > div:nth-child(3) > article > div.product-option__foot.center > button')
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60.policy-card-wrapper > div > div.row.row-px > div:nth-child(3) > article > div.product-option__foot.center > button')

    };

    this.petfix4lifepolicy = function(){
        browser
            .click('body.btn--wide .button')
            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(1) div:nth-child(1) article div.product-option__foot.center button')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(1) div:nth-child(1) article div.product-option__foot.center button')
    };

    this.petcompletepolicy = function () {
        browser
            .click('body.btn--wide .button')
            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2)  div:nth-child(1) div:nth-child(2) div.product-option__foot.center > button')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2)  div:nth-child(1) div:nth-child(2) article div.product-option__foot.center > button')
            .waitForElementVisible('h1.fullstop.flow')
    };

    this.petmoneybackpolicy = function () {
        browser
            .click('body.btn--wide .button')
            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(1) div:nth-child(5) article div.product-option__foot.center button')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(1) div:nth-child(5) article div.product-option__foot.center button')

    };

    this.petvaluepolicy = function () {
        browser
            .click('body.btn--wide .button')

            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(1) div:nth-child(4) article div.product-option__foot.center button')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(1) div:nth-child(4) article div.product-option__foot.center button')
    };

    this.petliabilitypolicy =function () {
        browser
            .click('body.btn--wide .button')
            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(1) div:nth-child(6) div.product-option__foot.center button')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(1) div:nth-child(6) div.product-option__foot.center button')
    };

    this.changepolicy = function () {
        browser
            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(2) div.product-option__foot.clearfix.hidden-xs button.btn.btn--secondary.space-right')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb div:nth-child(2) div:nth-child(2) div.product-option__foot.clearfix.hidden-xs button.btn.btn--secondary.space-right')
    };

    this.showmeallpolicies = function () {
        browser
            .waitForElementVisible('#app div.fullheight.footer-wrap.footer-wrap--qb  div.row.center button')
            .click('#app div.fullheight.footer-wrap.footer-wrap--qb  div.row.center button')
    };

    this.policyContinueButton = function () {
        browser
            .pause(2000)
            .assert.visible('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60 > div > div:nth-child(2) > div.col-sm-7.col-md-5 > div.hidden-xs > div > div > div.product-option__foot.clearfix.hidden-xs > button.btn.hidden-xs.hidden-sm')
            .waitForElementVisible('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60 > div > div:nth-child(2) > div.col-sm-7.col-md-5 > div.hidden-xs > div > div > div.product-option__foot.clearfix.hidden-xs > button.btn.hidden-xs.hidden-sm')
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.bkg--navy.vpad--60 > div > div:nth-child(2) > div.col-sm-7.col-md-5 > div.hidden-xs > div > div > div.product-option__foot.clearfix.hidden-xs > button.btn.hidden-xs.hidden-sm')
            // verfiying the land on the personal details page


    };

    this.policyPleaseBeAware = function () {
        browser
            .waitForElementVisible('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.alert > div > a:nth-child(3)')
            .click('#app > div.fullheight.footer-wrap.footer-wrap--qb > div:nth-child(2) > div.alert > div > a:nth-child(3)')
            .waitForElementVisible('h1.fullstop')
    }

return this;
}
