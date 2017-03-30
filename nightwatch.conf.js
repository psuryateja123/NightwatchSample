/*
 * Nightwatch Config
 */

require('env2')('.env'); 

const TEST_BASE = 'test/results/'
const PKG = require('../package.json'); // so we can get the version of the project
const BINPATH = './node_modules/nightwatch/bin/'; // change if required.
const SCREENSHOT_PATH = TEST_BASE + 'screenshots/' + PKG.version + '/';

const config = {
  src_folders: [
    'test/e2e'
  ],

  output_folder: TEST_BASE + 'logs',

  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-server-standalone/index.jar',
    log_path: '',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver' : './node_modules/chromedriver/bin/chromedriver',
      //"webdriver.firefox.driver" : BINPATH + "firefoxdriver", // also downloaded by selenium-download
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      end_session_on_fail: false,
      silent: true,
      screenshots: {
        enabled: true, // save screenshots to this directory (excluded by .gitignore)
        path: SCREENSHOT_PATH
      },
      username: '${suryatejap}',     // if you want to use Saucelabs remember to
      access_key: '${Test1234!}', // export your environment variables (see readme)
      globals: {
        waitForConditionTimeout: 10000    // wait for content on the page before continuing
      },
      desiredCapabilities: {
          browserName: "chrome",
          chromeOptions: {
              args: [
                  `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
          (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
                  "--window-size=1024" // iphone 5
              ]
          },
          javascriptEnabled: true,
          acceptSslCerts: true
      }
    },

    uat: {
      globals: {
        BASE_URL: 'https://@uat..com'
      }
    },

    staging: {
      globals: {
        BASE_URL: 'https://:@staging..com'
      }
    },

    chrome: { // your local Chrome browser (chromedriver)
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },

    // browsers used on saucelabs:
    chromemac: {
      "desiredCapabilities": {
          "browserName": "chrome",
          "platform": "OS X 10.11",
          "version": "47"
      }
    },

    firefox:{
      "desiredCapabilities": {
          "browserName": "firefox",
          "platform": "OS X 10.11",
          "version": "51"
      }
    },

    ie11: {
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "platform": "Windows 10",
        "version": "11.0"
      }
    },

    internet_explorer_10: {
      "desiredCapabilities": {
        "platform": "Windows 7",
        "browserName": "internet explorer",
        "version": "10"
      }
    },

    android_s4_emulator: {
      "desiredCapabilities": {
        "browserName": "android",
        "deviceOrientation": "portrait",
        "deviceName": "Samsung Galaxy S4 Emulator",
        "version": "4.4"
      }
    },

    iphone_6_simulator: {
      "desiredCapabilities": {
        "browserName": "iPhone",
        "deviceOrientation": "portrait",
        "deviceName": "iPhone 6",
        "platform": "OSX 10.10",
        "version": "8.4"
      }
    }
  }
}

module.exports = config;

function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name); // this is the test filename so always exists.
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
