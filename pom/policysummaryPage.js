/**
 * Created by surya on 02/03/2017.
 */
var today = new Date()
var day = today.getDate()
var month = today.getMonth()+1
var year = today.getFullYear()

module.exports = function (browser) {

    // wait for the page to load
    this.policystartdate = function () {
        browser
            .waitForElementVisible('h1.fullstop.flow-sm')
    };

    this.policystarttoday = function () {
        browser
            // wait for the policy info to appear- waiting for the included options to appear
            //.waitForElementVisible('#app > div > div > div.bkg--navy.vpad--40 > div > div:nth-child(2) > div > div:nth-child(3) > h2')
            .waitForElementVisible('#app div:nth-child(3) li:nth-child(1) button')
            .click('#app div:nth-child(3) li:nth-child(1) button')
    };

    this.policystarttomorrow = function () {
        browser
            .waitForElementVisible('#app div:nth-child(3) li:nth-child(2) button')
            .click('#app div:nth-child(3) li:nth-child(2) button')
    };

    this.policychoosedate = function () {
        browser
            .pause(1500)
            .waitForElementVisible('#app div:nth-child(3) li:nth-child(3) button')
            .click('#app div:nth-child(3) li:nth-child(3) button')


            .pause(1000)
            .waitForElementVisible('#policy_inception_date select[name="inception_date-day"]', 1000, false, function() {
                console.log('I\'m in the debugger');
                debugger
            })
            .click('#policy_inception_date select[name="inception_date-day"]')
            .setValue('#policy_inception_date select[name="inception_date-day"]', day)


            .pause(1000)
            .waitForElementVisible('#policy_inception_date select[name="inception_date-day"]', 1000, false, function() {
                debugger
            })

            // selecting the month
            .click('#policy_inception_date select[name="inception_date-month"]')
            .setValue('#policy_inception_date select[name="inception_date-month"]', month)

            // selecting the year
            .pause(1000)
            .click('#policy_inception_date select[name="inception_date-year"]')
            .setValue('#policy_inception_date select[name="inception_date-year"]', year)
    };

    this.editdetails = function () {
        browser
            .waitForElementVisible('button.btn.btn--secondary.centered.flow')
            .click('button.btn.btn--secondary.centered.flow')
    };

    this.policysummarypagecontinuebutton = function () {
        browser
            .waitForElementVisible('#summary button')
            .click('#summary button')
    };

    return this;
};
