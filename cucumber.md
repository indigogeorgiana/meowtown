## Cucumber tests

This branch implements cucumber tests

## Introduction

In the meowtown root directory run `npm install`. This will install the test helper tool [chimp](https://chimp.readme.io/)

Take a look in the `/features` folder. You'll see two `.feature` files, a `step_definitions` folder with a `steps.js` file, and a `support folder with a `hooks.js` file.

Features are the human-readable files for specifying what the software should be able to do. `step_definitions/steps.js` translate our feature specs into browser actions. `support/hooks.js` contains the code for starting and stopping the server before and after the tests.   

Run `npm run test:watch`. The first time this runs it will trigger chimp to download and install the selenium browser driver. You should also see something like the following:

![list cats feature test](/images/list-cats-run.png)

`chimp` starts our meowtown server, finds the features tagged with `@dev` `@watch`, matches the gherkin steps with browser driver steps in `step_definitions/steps.js`, opens a browser and executes the active feature scenarios. If a particular step passes it colors the step description green in the terminal.
  
Now open the `features/new-cat.feature` file and add `@watch` on line 2 above `Scenario: Add a new cat`. Save the file and chimp will rerun the watched integration tests including your the `new-cat.feature`.

The above test will fail on the two final steps. Now open the `./app.js` file add a new line somewhere in the file and save it. Chimp re-runs the watched integration tests as we work on getting the test to pass. 

Chimp is the glue between a selenium browser, [WebDriver](http://webdriver.io/) and your 

## Release 1

Get the new-cat.feature to pass. 

## Release 2 

Create a new file `features/search-cast.feature`. Read through the gherkin documention [Feature Introduction](https://github.com/cucumber/cucumber/wiki/Feature-Introduction) and [Given-When-Then](https://github.com/cucumber/cucumber/wiki/Given-When-Then). 

Your goal is to write a feature that lets the user search for particular cats based on their life story description:  

In a User Story format we might capture the feature's intention as follows:

`As a user
I want to find cats whose lifestory contains a keyword I enter
So that I can find cats to adopt
`

1. Spec out the feature in Gherkin Syntax in `features/search-cat.feature`.2. Add addtional steps to `features/step_definitions/steps.js`. You will need to refer to the [Chimp cheatsheet](https://chimp.readme.io/docs/cheat-sheet), [Webdriver selectors](http://webdriver.io/guide/usage/selectors.html) and [Webdriver API](http://webdriver.io/api.html)
3. 
