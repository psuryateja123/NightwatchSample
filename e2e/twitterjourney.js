/**
 * Created by surya on 03/03/2017.
 */
var quoteAndBuyPage = require('../pom/quoteAndBuyPage.js')
var personaldetailsPage = require('../pom/personaldetailsPage.js')
var policysummaryPage = require('../pom/policysummaryPage.js')
var declarationPage = require('../pom/declarationPage.js')
var paymentPage = require('../pom/paymentPage.js')
var petcovers = require('../pom/petcovers.js')
var petpolicies = require('../pom/petpolicies.js')
var selectingPet = require('../pom/selectingPet.js')
var petName = require('../pom/petName.js')
var petBreedSelection = require('../pom/petBreedSelection.js')
var petDateOfBirth = require('../pom/petDateOfBirth.js')
var petGender = require('../pom/petGender.js')
var petHealthIssues = require('../pom/petHealthIssues.js')
var petSpayedStatus = require('../pom/petSpayedStatus.js')
var petValue = require('../pom/petValue.js')
var petAddress = require('../pom/petAddress.js')
var registration = require('../pom/registration.js')
var myAccount = require('../pom/myAccount.js')
var twitterCredentials = require('../pom/twitterCredentials.js')

module.exports = {

    tags: ['twitter'],
    'opening the twitter login page': function (browser) {
        twitterCredentials(browser).twitterpagenavigation()

        },

    'quote and buy from twitter login': function (browser) {
        twitterCredentials(browser).choosingTwitterLogin()
        },

    'entering the email': function (browser) {
        twitterCredentials(browser).twitteremailrequest()
        },

    'entering the password': function (browser) {
        twitterCredentials(browser).twitterPasswordRequest()
        },
    'twitter sign in button': function (browser) {
        twitterCredentials(browser).twitterSignInButton()
        },

    'filling the email after twitter login': function (browser) {
        twitterCredentials(browser).twitterEmailEntryAfterLogin()
        },
    'starting quote and buy process': function (browser) {
        quoteAndBuyPage(browser).letsgetstarted()
        },

    'selecting Dog': function (browser) {
        selectingPet(browser).selectingDog()
        },

    'selecting and entering pet name': function (browser) {
          petName(browser).petname()
          petName(browser).petNameEntry()
          petName(browser).petNameDoneButton()
        },

    'selecting pedgree pug': function (browser) {
          petBreedSelection(browser).petBreedSelectionPetDetailsPage()
          petBreedSelection(browser).petPedigreeBreedSelection()
          petBreedSelection(browser).petBreedEntry()
          petBreedSelection(browser).petBreedDoneButton()
        },

    'clicking and entering pet age': function (browser) {
          petDateOfBirth(browser).petDateofBirthSelection()
          petDateOfBirth(browser).petDateOfBirth()
          petDateOfBirth(browser).petDateOfBirthDoneButton()
        },

    'selecting pet gender': function (browser) {
          petGender(browser).petGenderSelection()
          petGender(browser).petMaleGenderSelection()
        },

    'selecting has not for the health issues': function (browser) {
          petHealthIssues(browser).petHealthIssueSelection()
          petHealthIssues(browser).petHasNotHealthIssue()
        },
    'selecting has not for the spayed status': function (browser) {
          petSpayedStatus(browser).petSpayedNeutered()
          petSpayedStatus(browser).petHasNotSpayed()
        },
    'pet value entry - £400': function (browser) {
          petValue(browser).petValueSelection()
          petValue(browser).petValueEntry()
          petValue(browser).petValueDoneButton()

        },
    'Filling the address using PCA': function (browser) {
          petAddress(browser).petAddressSelection()
          petAddress(browser).petAddressEntry()
          petAddress(browser).petAddressDoneButton()
        },

    'continue button in the pet details page': function (browser) {
          petAddress(browser).petDetailsContinueButton()
         },

    'selecting regular policy': function (browser) {
          petpolicies(browser).petregularpolicy()
        },

    'adding covers': function (browser) {
          petcovers(browser).policyAddingPassAwayCover()
          petcovers(browser).policyAddingTheftCover()
          petcovers(browser).policyAddingTravelCover()
          petpolicies(browser).policyContinueButton()
        },

    'selecting Mr salutation': function (browser) {
          //personaldetailsPage(browser).salutation()
          personaldetailsPage(browser).salutationPersonalDetailsPage()
          personaldetailsPage(browser).mrSalutation()
        },

    'filling the first name': function (browser) {
          personaldetailsPage(browser).firstNamePersonalDetailsPage()
          personaldetailsPage(browser).enteringFirstName()
          personaldetailsPage(browser).doneButtonFirstName()
        },

    'filling the second name': function (browser) {
          personaldetailsPage(browser).secondNamePersonalDetailsPage()
          personaldetailsPage(browser).enteringSecondName()
          personaldetailsPage(browser).doneButtonSecondName()
        },

    'filling the date of birth': function (browser) {
          personaldetailsPage(browser).dateOfBirthPersonalDetailsPage()
          personaldetailsPage(browser).dateOfBirthEntry()
          personaldetailsPage(browser).doneButtonDateOfBirth()
        },

    'filling the phone number': function (browser) {
          personaldetailsPage(browser).phoneNumberPersonalDetailsPage()
          personaldetailsPage(browser).phoneNumberEntry()
          personaldetailsPage(browser).doneButtonPhoneNumber()
        },

    'clicking on continue in the personal details page': function (browser) {
          personaldetailsPage(browser).personaldetailscontinuebutton()
        },

    'clicking on today for the policy start': function (browser) {
          policysummaryPage(browser).policystartdate()
          policysummaryPage(browser).policystarttoday()
          policysummaryPage(browser).policystarttomorrow()
          policysummaryPage(browser).policysummarypagecontinuebutton()

        },

    'accepting the declarations': function (browser) {
          declarationPage(browser).agreeTermsRadioButton()
          declarationPage(browser).agreeTerms()
        },

    'filling the payment details': function (browser) {
          paymentPage(browser).enteringtheaccountname()
          paymentPage(browser).enteringtheaccountnumber()
          paymentPage(browser).sortcode()
          paymentPage(browser).clickingcontinueandpay()
        },

    'Logging out from my account page': function (browser) {
          myAccount(browser).myAccountButton()
          myAccount(browser).myAccountLogout()
        },
    }