# NightwatchSample
<br />
Its an implementation for automating a web page using nightwatch + node.<br />
<br />
I have used the page object model (pom as the folder in the project). This helps to maintain the project structure more effectively. In the pom folder has modules, helps to drive the regression and the smoke tests effectively. To make this more effective we can add another layer as locators and put all the locators in the folder.
<br />
The main reason for using this we can able to configure the tests to run on multiple browsers easily and in parallel. Normally people configure grid or use saucelabs or browserstack to do it. 

Configuration:
<br />
* I have used Web storm, considered you have cloned the project.
* npm package - use npm install / if you want to update use npm update
<br />
#### If you have issues with some of the dependencies then 
* For nightwatch - use npm install nightwatch
* selenium standalone server - use npm install selenium
* I have used chrome drive. So you can use npm install chromedriver

Setup:
<br />
* Create a javascript file and name it as nightwatch.conf.js. This file is the nightwatch configuration file that consists of desired capabilities, env and other global declarations. If you are using waitForVisibleDisplayed then you can declare the global wait in here.
* Make sure you have package.json file in your project.
* There are few [basic settings](https://github.com/psuryateja123/NightwatchSample/wiki/Basic-Settings), that include test settings, selenium settings.
<br />
<br />
Now the test folder contains a main folder that you need to take care of is e2e. This is the main folder that the runner is designed to look to the tests. So we can give tests like smoke tests and regression tests in it as an individual javascript files and select them using tags.

<br />
Running Test:<br />
<br />
You can run the tests using <br />
<br />
* npn test as I have configure my scripts to run in the package.json
<br />
we can add more like this in the package.json
<br />
* For instance if you want run a test1 that exists in the e2e folder. Then you can mention npn run e2e -tag name.
<br />
<br />The above mentioned commands are used in terminal in the IDE or terminal that is pointing to the project.


