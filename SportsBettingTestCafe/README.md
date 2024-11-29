# Sportsbetting Automation with Testcafe

## Environments

List of environments in use:

| Env     | URL     								          |
| --------|-----------------------------------------|
| DEV     | https://sb.dev.pposervices.local/       |
| QA      | https://sb.qa.pposervices.local/        |
| PPD     | https://ppd.pposervices.local/			 |
| PROD    | https://www.sportsbetting.ag/			    |

## How to run test

### Running test locally 

- Change to the following directory:
 ```
 cd sportsbetting-qa
 ```

- Install node modules:
 ```
 npm install
 ```
  > **NOTE**: 
  > - The scripts are located in `package.json`
  > - For local executions you do not need the reporter `--reporter`
  > - All scripts run on both desktop and mobile using BrowserStrack for mobile execution

- Run the following command:
 ```
 export env=XXX
 ```
 > **NOTE**: XXX could be `dev`, `qa`, `ppd`, `prod`

- Run the following command:
 ```
 export BROWSERSTACK_USERNAME=XXX
 ```
 > **NOTE**: XXX is the user defined in BowserStack so that you can establish a connection. You can also have this information already defined in system variables.

- Run the following command:
 ```
 export BROWSERSTACK_ACCESS_KEY=XXX
 ```
 > **NOTE**: XXX is the key defined in BowserStack so that you can establish a connection. You can also have this information already defined in system variables for more information see **Integration with Browserstack**

- Run the following command:
 ```
 npm run XXX
 ```
 > **NOTE**: XXX is the name of the script found in `package.json`

### Running test in jenkins 

- Test results are sent to `#notice-jenkins-test-nsb`

|  Jenkins Pipeline   | URL     								          |
| --------------------|-----------------------------------------|
| SportBetting E2E    | https://jenkins.itspty.com/job/Platform/job/Websites/job/Web%20Applications/job/sportsbetting-e2e/job/Sportsbetting%20E2E/      |
| Critical Tests      | https://jenkins.itspty.com/job/Platform/job/Websites/job/Web%20Applications/job/sportsbetting-e2e/job/sportsbetting-critical/       |

#### Jenkins pipeline explanation

##### SportBetting E2E

| Script     | Description     								          |
| --------|-----------------------------------------|
| home     | This test validates that the components on this page are visible and also interact with them. See the homePage.feature      |
| sportsbook     | This test validates that the components on this page are visible and also interact with them. See the sportsbookPage.feature        |
| racebook     | This test validates that the components on this page are visible and also interact with them. See the racebookPage.feature 			 |
| poker    | This test validates that the components on this page are visible and also interact with them. See the pokerPage.feature 		    |
| promotion    | This test validates that the components on this page are visible and also interact with them. See the promotion.feature 		    |
| promo-Card    | This test validates that the components on this promo card are visible and also interact with them. See the promotionsCardContentsPage.feature 		    |
| promo-Carousel   | This test validates that the promotional carousel components of the different pages are visible and also interact with them. See the carouselComponent feature		    |
| banking    | This test validates that the components on this page are visible and also interact with them. See the bankingPag.feature 		    |
| refer-Friend    | This test validates that the components on this page are visible and also interact with them. See the referAFriendPage.feature 		    |
| footer    | This test validates that the components of the footer are visible and also interact with them. See the footerComponent.feature 		    |
| redirect    | This test validates that given a specific URL it redirects to the expected page normally used in email links. See the redirect.feature  		    |

##### Critical Tests

- These tests are executed automatically after deploying in the QA and PPD environment of the next pipeline: https://jenkins.itspty.com/job/Platform/job/Websites/job/Web%20Applications/job/sportsbetting-cd/

| Script     | Description     								          |
| --------|-----------------------------------------|
| critical     | Run all tests found with the @critical tags. These are: Login, Join, Deposit     |

- ### Script explanation

  - `~@$env` Currently we have tests that can only be run in the QA environment. To make this possible, we develop a reverse logic where the @ppd and @prod tags are defined in the scenarios, this would translate as: in ppd and prod I do not want this scenario to be executed

### Integration with Browserstack

To run the integration with Browserstack you have to do the following steps:

1. Set the local environment varaibles in the machine
   BROWSERSTACK_ACCESS_KEY this key should be copied from the Browserstack user
   BROWSERSTACK_USERNAME
2. Set the System nvironment varaibles in the machine
   BROWSERSTACK_ACCESS_KEY this key should be copied from the Browserstack user
   BROWSERSTACK_USERNAME
3. Run this command to verify the connection with Browserstack
   `npx testcafe -b browserstack`
   This command list all the devices that are avilable in Browserstack.

## Password encryptation
The passowrds of different users displayed in the *_user.json_* file was coded using the b64 encode option which is part of the node libraries thats why it is not necessary to install or import any library.

```
Encode
console.log(btoa("abc")); // YWJj

Decode
console.log(atob("YWJj")); // abc
```