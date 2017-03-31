# NightwatchSample
<br />
Its my implementation for the nightwatch using JavaSript.<br />
<br />
I have used the page object model (pom as the folder in the project). This helps to maintain the project structure more effectively. In the pom folder, contains the pages of the web page, that each Javascript file that represents the page contains the object of individual pages and they are maintained as modules. By maintaining them as modules, helps to drive the regression and the smoke tests effectively. To make this more effective we can add another layer as locators and put all the locators in the folder.
<br />
The main reason for using this we can able to confirgure the test to run on multiple browsers easily and in parallel. Normally people configure grid or use saucelabs or browser stack to do it. 

Configuration:
<br />
* I have used Web storm and I have create a download the following from the terminal.
* npm package - use npm install / if you want to update use npm update
* For nightwatch - use npm install nightwatch
* selenium standalone server - use npm install selenium
* I have used chrome drive. So you can use npm install chromedriver

Setup:
<br />
* Create a javascript file and name it as nightwatch.conf.js in your project structure. This file is the nightwatch configuration file that consists of desired capabilities, env and other global declarations. If you are using waitForVisibleDisplayed then you can declare the global wait in here.
* Make sure you have package.json file in your project.
* There are few basic settings, that include test settings, selenium settings
