/**
 * Created by surya on 06/03/2017.
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


module.exports = {
    tags: ['regression'],
    'Navigating to registration page': function (browser) {
        registration(browser).regPageNavigation()
        registration(browser).regSelection()
        registration(browser).regEmailEntry()
        registration(browser).regFirstNameEntry()
        registration(browser).regNextButton()
        registration(browser).regPasswordEntry()
        registration(browser).regCompleteButton()
    },


    'trying to login with blank email and correct password':function (browser) {
        registration(browser).goToSite()
        registration(browser).emptyEmailField()
        registration(browser).correctPassword()
        registration(browser).submitActivity()
        registration(browser).weDontRecogUREmailAndPasswordErrorMessage()
    },

    'trying to login with correct email and no password': function (browser) {
        registration(browser).emptyEmailField()
        registration(browser).correctEmail()
        registration(browser).emptypassword()
        registration(browser).submitActivity()
        registration(browser).weDontRecogUREmailAndPasswordErrorMessage()
    },

    'trying to login with no email and no password': function (browser) {
        registration(browser).emptyEmailField()
        registration(browser).emptypassword()
        registration(browser).submitActivity()
        registration(browser).weDontRecogUREmailAndPasswordErrorMessage()
    },

    'trying to login with incorrect email and correct password': function (browser) {
        registration(browser).emptyEmailField()
        registration(browser).incorrectMailFormat()
        registration(browser).emptypassword()
        registration(browser).correctPassword()
        registration(browser).submitActivity()
        registration(browser).weDontRecogUREmailAndPasswordErrorMessage()
    },

    'login with correct email format and correct password': function (browser) {
        registration(browser).goToSite()
        registration(browser).emptyEmailField()
        registration(browser).correctEmail()
        registration(browser).emptypassword()
        registration(browser).correctPassword()
        registration(browser).submitActivity()
    },

    'starting qoute and buy': function (browser) {
        quoteAndBuyPage(browser).letsgetstarted()
    },

    'selecting Dog': function (browser) {
        selectingPet(browser).petSelectionPetDetailsPage()
        selectingPet(browser).selectingDog()
    },

    'selecting Cat': function (browser) {
        selectingPet(browser).petSelectionPetDetailsPage()
        selectingPet(browser).selectingCat()
    },
    'selecting Dog again': function (browser) {
        selectingPet(browser).petSelectionPetDetailsPage()
        selectingPet(browser).selectingDog()
    },

    'clicking on the cancel button': function (browser) {
        selectingPet(browser).petSelectionPetDetailsPage()
        selectingPet(browser).petSelectionCancelButton()
    },

    'cancelling the pet name entry': function (browser) {
        petName(browser).petname()
        petName(browser).petnamecancelbutton()

    },

    'verifying the error message for pet name': function (browser) {
        petName(browser).petname()
        petName(browser).petNameClear()
        petName(browser).petNameDoneButton()
    },

    'entring the pet name': function (browser) {
        petName(browser).petNameEntry()
        petName(browser).petNameDoneButton()
    },

    'clicking on the pet breed': function (browser) {
        petBreedSelection(browser).petBreedSelectionPetDetailsPage()

    },

    'clicking on the cancel button in breed page': function (browser) {
        petBreedSelection(browser).petBreedCancelButton()
    },

    'selecting pedigree pug': function (browser) {
        petBreedSelection(browser).petBreedSelectionPetDetailsPage()
        petBreedSelection(browser).petPedigreeBreedSelection()
        petBreedSelection(browser).petBreedEntry()
    },
    'selecting cross breed pug': function (browser) {
        petBreedSelection(browser).petCrossBreedSelection()
        petBreedSelection(browser).petBreedEntry()
        petBreedSelection(browser).petBreedCancelButton()
    },

    'selecting Mixed Large size breed': function (browser) {
        petBreedSelection(browser).petBreedSelectionPetDetailsPage()
        petBreedSelection(browser).petMixedBreedSelection()
        petBreedSelection(browser).largeMixedBreedSelection()
    },

    'selecting mixed breed medium size': function (browser) {
        petBreedSelection(browser).petBreedSelectionPetDetailsPage()
        petBreedSelection(browser).petMixedBreedSelection()
        petBreedSelection(browser).mediumMixedBreedSelection()
    },

    'selecting mixed breed small size': function (browser) {
        petBreedSelection(browser).petBreedSelectionPetDetailsPage()
        petBreedSelection(browser).petMixedBreedSelection()
        petBreedSelection(browser).smallMixedBreedSelection()
    },

    'Clicking and cancelling on the pet age field in the pet details page': function (browser) {
        petDateOfBirth(browser).petDateofBirthSelection()
        petDateOfBirth(browser).petDateOfBirth()
        petDateOfBirth(browser).petDateOfBirthCancelButton()

    },

    'entering the pet date of birth': function (browser) {
        petDateOfBirth(browser).petDateofBirthSelection()
        petDateOfBirth(browser).petDateOfBirth()
        petDateOfBirth(browser).petDateOfBirthDoneButton()
    },

    'clicking and canceling the pet gender': function (browser) {
        petGender(browser).petGenderSelection()
        petGender(browser).genderCancelButton()
    },
    'Clicking and selecting male': function (browser) {
        petGender(browser).petGenderSelection()
        petGender(browser).petMaleGenderSelection()
    },
    'clicking and selecting female': function (browser) {
        petGender(browser).petGenderSelection()
        petGender(browser).petFemaleGenderSelection()

    },
    'clicking and canceling the health status': function (browser) {
        petHealthIssues(browser).petHealthIssueSelection()
        petHealthIssues(browser).petHealthIssuePageCancelButton()
    },
    'clicking on has for health issues': function (browser) {
        petHealthIssues(browser).petHealthIssueSelection()
        petHealthIssues(browser).petHasHealthIssue()
    },

    'clicking on has not for health issues': function (browser) {
        petHealthIssues(browser).petHealthIssueSelection()
        petHealthIssues(browser).petHasNotHealthIssue()
    },

    'clicking and canceling for spayed status': function (browser) {
        petSpayedStatus(browser).petSpayedNeutered()
        petSpayedStatus(browser).petSpayedPageCancelButton()

    },

    'clicking and selecting has for the pet spayed status': function (browser) {
        petSpayedStatus(browser).petSpayedNeutered()
        petSpayedStatus(browser).petHasSpayed()
    },

    'clicking and selecting has not for the pet spayed status': function (browser) {
        petSpayedStatus(browser).petSpayedNeutered()
        petSpayedStatus(browser).petHasNotSpayed()
    },

    'clicking and canceling the pet cost': function (browser) {
        petValue(browser).petValueSelection()
        petValue(browser).petvalueCancelButton()
    },

    'pet Value entry': function (browser) {
        petValue(browser).petValueSelection()
        petValue(browser).petValueEntry()
        petValue(browser).petValueDoneButton()
    },

    'Re-entering the pet value': function (browser) {
        petValue(browser).petValueSelection()
        petValue(browser).petValueClear()
        petValue(browser).petValueEntry()
        petValue(browser).petValueDoneButton()
    },

    'Clicking and cancelling the address': function (browser) {
        petAddress(browser).petAddressSelection()
        petAddress(browser).petAddressEntry();
        petAddress(browser).petAddressCancelButton()
    },

    'entering pet address using PCA': function (browser) {
        petAddress(browser).petAddressSelection()
        petAddress(browser).petAddressEntry()
        petAddress(browser).petAddressDoneButton()
    },

    'entring the address manually': function (browser) {
        petAddress(browser).petAddressSelection()
        petAddress(browser).petAddressManualEntrySelection()
        petAddress(browser).petClearFirstLineAddress()
        petAddress(browser).petFirstLineAddressEntry()
        petAddress(browser).petClearSecondLineAddress()
        petAddress(browser).petSecondLineAddress()
        petAddress(browser).petCityClear()
        petAddress(browser).petCityEntry()
        petAddress(browser).postCodeClear()
        petAddress(browser).petPostCodeEntryCorrectFormat()
        petAddress(browser).preferToSearchYourAddress()
    },

    'entering pet address through PCA': function (browser) {
        petAddress(browser).petAddressEntry()
        petAddress(browser).petAddressDoneButton()

    },
    'continue button in the pet details page': function (browser) {
        petAddress(browser).petDetailsContinueButton()
    },

    'selecting regular policy and adding covers': function (browser) {
        petpolicies(browser).petregularpolicy()
        petcovers(browser).policyAddingPassAwayCover()
        petcovers(browser).policyAddingTheftCover()
        petcovers(browser).policyAddingTravelCover()
        petpolicies(browser).policyContinueButton()
        petpolicies(browser).policyPleaseBeAware()
    },

    /*'selecting fixed 4 life and adding covers ': function (browser) {
        petpolicies(browser).petfix4lifepolicy()
        petcovers(browser).policyAddingPassAwayCover()
        petcovers(browser).policyAddingTheftCover()
        petcovers(browser).policyAddingTravelCover()
        petpolicies(browser).changepolicy()
    },
    'clicking on show all': function (browser) {
        petpolicies(browser).showmeallpolicies()
    },


    'selecting value and covers': function (browser) {
        petpolicies(browser).petvaluepolicy()
        petcovers(browser).valuePolicyTheftCover()
        petpolicies(browser).changepolicy()
    },
    'selecting money back policy and covers': function (browser) {
        petpolicies(browser).petmoneybackpolicy()
        petcovers(browser).policyAddingPassAwayCover()
        petcovers(browser).policyAddingTheftCover()
        petcovers(browser).policyAddingTravelCover()
        petpolicies(browser).changepolicy()
    },
    'selecting complete policy': function (browser) {
        petpolicies(browser).petcompletepolicy()
    },*/

    'clicking and Selecting Mr salutation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).mrSalutation()
    },

    'clicking and selecting Mrs Saluation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).mrsSalutation()
    },
    'clicking and selecting Miss salutation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).missSalutation()
    },
    'clicking and selecting Ms salutation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).msSalutation()
    },
    'clicking and selecting Mx salutation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).mxSalutation()
    },
    'clicking and selecting prof Salutation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).profSalutation()
    },
    'clicking and selecting Dr salutation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).drSalutation()
    },
    'clicking and cancelling the salutation': function (browser) {
        personaldetailsPage(browser).salutationPersonalDetailsPage()
        personaldetailsPage(browser).cancelButtonSalutation()
    },

    'clicking and entering the first name': function (browser) {
        personaldetailsPage(browser).firstNamePersonalDetailsPage()
        personaldetailsPage(browser).enteringFirstName()
        personaldetailsPage(browser).doneButtonFirstName()
    },
    'clearing and entering the first name': function (browser) {
        personaldetailsPage(browser).firstNamePersonalDetailsPage()
        personaldetailsPage(browser).clearingFirstName()
        personaldetailsPage(browser).enteringFirstName()
        personaldetailsPage(browser).doneButtonFirstName()
    },
    'clicking on the first name cancel button': function (browser) {
        personaldetailsPage(browser).firstNamePersonalDetailsPage()
        personaldetailsPage(browser).cancelButtonFirstName()
    },
    'clicking and entering the second name': function (browser) {
        personaldetailsPage(browser).secondNamePersonalDetailsPage()
        personaldetailsPage(browser).enteringSecondName()
        personaldetailsPage(browser).doneButtonSecondName()
    },
    'clearing and entering the second name': function (browser) {
        personaldetailsPage(browser).secondNamePersonalDetailsPage()
        personaldetailsPage(browser).clearingSecondName()
        personaldetailsPage(browser).enteringSecondName()
        personaldetailsPage(browser).doneButtonSecondName()
    },
    'clicking and cancelling the second name entry': function (browser) {
        personaldetailsPage(browser).secondNamePersonalDetailsPage()
        personaldetailsPage(browser).cancelButtonSecondName()
    },

    'clicking selecting date of birth': function (browser) {
        personaldetailsPage(browser).dateOfBirthPersonalDetailsPage()
        personaldetailsPage(browser).dateOfBirthEntry()
        personaldetailsPage(browser).doneButtonDateOfBirth()
    },

    'clicking and cancelling the date of birth': function (browser) {
        personaldetailsPage(browser).dateOfBirthPersonalDetailsPage()
        personaldetailsPage(browser).cancelButtonDateOfBirth()
    },

    'entering the phone number': function (browser) {
        personaldetailsPage(browser).phoneNumberPersonalDetailsPage()
        personaldetailsPage(browser).phoneNumberEntry()
        personaldetailsPage(browser).doneButtonPhoneNumber()
    },
    'clicking on cancel button in the phone number page': function (browser) {
        personaldetailsPage(browser).phoneNumberPersonalDetailsPage()
        personaldetailsPage(browser).cancelButtonPhoneNumber()
    },
    'clearing and entering the phone number': function (browser) {
        personaldetailsPage(browser).phoneNumberPersonalDetailsPage()
        personaldetailsPage(browser).clearingPhoneNumber()
        personaldetailsPage(browser).phoneNumberEntry()
        personaldetailsPage(browser).doneButtonPhoneNumber()
    },

    'clicking on continue in the personal details page': function (browser) {
        personaldetailsPage(browser).personaldetailscontinuebutton()
    },

    'clicking on today for the policy to start': function (browser) {
        policysummaryPage(browser).policystartdate()
        policysummaryPage(browser).policystarttoday()
    },

    'clicking on tomorrow for the policy to start': function (browser) {
        policysummaryPage(browser).policystartdate()
        policysummaryPage(browser).policystarttomorrow()
    },
    'clicking on choose date to select a perticular date': function (browser) {
        policysummaryPage(browser).policystartdate()
        policysummaryPage(browser).policychoosedate()

    },
    'clicking on continue in the policy summary page': function (browser) {
        policysummaryPage(browser).policysummarypagecontinuebutton()
    },

    'accepting the terms': function (browser) {
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
