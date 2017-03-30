/**
 * Created by surya on 02/03/2017.
 */
module.exports = function (browser) {
    this.letsgetstarted = function () {
        browser
            .waitForElementVisible('#app div.splash.fullheight a')
            .click('#app div.splash.fullheight a')
    };
    return this
}
